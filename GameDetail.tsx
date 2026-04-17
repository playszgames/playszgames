import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GameCard } from "@/components/GameCard";
import { getGameById, getRelatedGames } from "@/lib/games";
import { Play, Star, Users, Zap, Award, Clock } from "lucide-react";

/**
 * SZ Games - Game Detail Page
 * 
 * Features:
 * - Full game information
 * - Game guide and tips
 * - Related games
 * - Schema markup for SEO
 * - AdSense-friendly layout
 */

export default function GameDetail() {
  const params = useParams();
  const gameId = params.id as string;
  const game = getGameById(gameId);
  const relatedGames = game ? getRelatedGames(gameId, 4) : [];

  if (!game) {
    return (
      <div className="min-h-screen bg-white">
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SZ</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">SZ Games</h1>
            </div>
            <Link href="/games">
              <a className="text-gray-700 hover:text-blue-600 transition">
                ← Back to Games
              </a>
            </Link>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Game Not Found</h1>
          <p className="text-gray-600 mb-8">
            The game you're looking for doesn't exist on SZ Games.
          </p>
          <Link href="/games">
            <a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Browse All SZ Games
              </Button>
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const formatPlays = (plays: number) => {
    if (plays >= 1000000) return `${(plays / 1000000).toFixed(1)}M`;
    if (plays >= 1000) return `${(plays / 1000).toFixed(1)}K`;
    return plays.toString();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SZ</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">SZ Games</h1>
          </div>
          <Link href="/games">
            <a className="text-gray-700 hover:text-blue-600 transition">
              ← Back to Games
            </a>
          </Link>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/">
              <a className="hover:text-blue-600">SZ Games</a>
            </Link>
            <span>/</span>
            <Link href="/games">
              <a className="hover:text-blue-600">All Games</a>
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">{game.title}</span>
          </div>
        </div>
      </div>

      {/* Game Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Game Icon */}
            <div className="flex justify-center md:justify-start">
              <div className="w-32 h-32 bg-white/20 rounded-2xl flex items-center justify-center text-6xl font-bold">
                {game.title.charAt(0)}
              </div>
            </div>

            {/* Game Info */}
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold mb-2">{game.title}</h1>
              <p className="text-blue-100 text-lg mb-6">{game.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <p className="text-blue-100 text-sm">Rating</p>
                  <p className="text-2xl font-bold">{game.rating}⭐</p>
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Plays</p>
                  <p className="text-2xl font-bold">{formatPlays(game.plays)}</p>
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Category</p>
                  <p className="text-2xl font-bold">{game.category}</p>
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Difficulty</p>
                  <p className="text-2xl font-bold">{game.difficulty}</p>
                </div>
              </div>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 h-auto gap-2">
                <Play size={24} /> Play {game.title} Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Game Guide */}
              <Card className="p-8 mb-8 border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="text-orange-500" size={24} />
                  How to Play {game.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {game.guide}
                </p>
              </Card>

              {/* Game Details */}
              <Card className="p-8 mb-8 border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Game Details</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <Award className="text-blue-600 mt-1" size={20} />
                    <div>
                      <p className="text-gray-600 text-sm">Category</p>
                      <p className="font-semibold text-gray-900">{game.category}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="text-blue-600 mt-1" size={20} />
                    <div>
                      <p className="text-gray-600 text-sm">Subcategory</p>
                      <p className="font-semibold text-gray-900">{game.subcategory}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="text-blue-600 mt-1" size={20} />
                    <div>
                      <p className="text-gray-600 text-sm">Difficulty</p>
                      <p className="font-semibold text-gray-900">{game.difficulty}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Tags */}
              <Card className="p-8 border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {game.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <div>
              {/* Play Button */}
              <Card className="p-6 mb-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
                <h3 className="text-xl font-bold mb-4">Ready to Play?</h3>
                <p className="text-orange-100 mb-6">
                  Start playing {game.title} on SZ Games now. No download required!
                </p>
                <Button className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 h-auto gap-2">
                  <Play size={20} /> Play Now
                </Button>
              </Card>

              {/* Stats */}
              <Card className="p-6 mb-6 border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Rating</span>
                    <span className="font-bold text-orange-600">{game.rating}/5.0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 flex items-center gap-1">
                      <Users size={16} /> Total Plays
                    </span>
                    <span className="font-bold text-gray-900">{formatPlays(game.plays)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Difficulty</span>
                    <span className="font-bold text-blue-600">{game.difficulty}</span>
                  </div>
                </div>
              </Card>

              {/* Share */}
              <Card className="p-6 border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Share</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    Share on Facebook
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Share on Twitter
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Copy Link
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Games */}
      {relatedGames.length > 0 && (
        <section className="bg-gray-50 py-12 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Similar Games on SZ Games
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedGames.map((relatedGame) => (
                <GameCard key={relatedGame.id} game={relatedGame} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Discover More Games on SZ Games
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Play hundreds of free online games on SZ Games platform. Action, puzzle, strategy, and more!
          </p>
          <Link href="/games">
            <a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 h-auto">
                Browse All SZ Games
              </Button>
            </a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">SZ Games</h3>
              <p className="text-sm">
                The ultimate destination for free online gaming. Play {game.title} and hundreds more games on SZ Games.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <Link href="/">
                    <a className="hover:text-white transition">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/games">
                    <a className="hover:text-white transition">All Games</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              &copy; 2026 SZ Games - Gullsher Gaming Empire. Play {game.title} and more free online games on SZ Games.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
