import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Star, Users, Zap } from "lucide-react";
import { useState } from "react";

/**
 * SZ Games - Home Page
 * 
 * Design Philosophy: Modern Gaming Authority
 * - Hero section with featured games
 * - Category showcase
 * - Game cards with ratings and play buttons
 * - SEO-optimized content with "SZ Games" keyword naturally integrated
 * - Mobile-responsive design
 */

interface GameCard {
  id: string;
  title: string;
  category: string;
  rating: number;
  plays: number;
  image: string;
  description: string;
}

const games: GameCard[] = [
  {
    id: "1v1-lol",
    title: "1v1 LOL",
    category: "Battle",
    rating: 4.8,
    plays: 2500000,
    image: "https://d36hbw14aib5lz.cloudfront.net/310519663567591604/fSXnyvZnJoz6XY6HByWQHz/featured-games-section-B596QRrDydu7daXafRj2WE.webp?Expires=1807947612&Signature=VSJGbi-Ee3d-HHwVXgvgfXz80NxBtncx6UntqdJBtZUFZUkrheDBh2GUmZjF55aHlmmq8ORYAMplY5cV14Qz4xZMQeccdVsECKKg6VKCV~uvslyyp~ybRiLFfLxeTZjClElhngz5ypkA-6M3FgoHPEBEFN~YJnFvn00WXJQ~zawYQ6~mpN2mAd6jNRhFkpNP0pYYnfQiEdhpo1RbzJfMn-rsvANSVggxvVF4zr-Ayfljmx5o6M6vNEYRqD8W9g9p3HtSPKxc3KjihhA~PUtWekZTuokb3DBsvwZPMTyZ0HJ3n~IHfkV9YfXs06w95idzh4NeiSCSWiCG6b0vUnVpbQ__&Key-Pair-Id=K1MP89RTKNH4J",
    description: "Epic 1v1 battles in this competitive gaming experience",
  },
  {
    id: "10x10",
    title: "10x10",
    category: "Puzzle",
    rating: 4.6,
    plays: 1800000,
    image: "https://d36hbw14aib5lz.cloudfront.net/310519663567591604/fSXnyvZnJoz6XY6HByWQHz/featured-games-section-B596QRrDydu7daXafRj2WE.webp?Expires=1807947612&Signature=VSJGbi-Ee3d-HHwVXgvgfXz80NxBtncx6UntqdJBtZUFZUkrheDBh2GUmZjF55aHlmmq8ORYAMplY5cV14Qz4xZMQeccdVsECKKg6VKCV~uvslyyp~ybRiLFfLxeTZjClElhngz5ypkA-6M3FgoHPEBEFN~YJnFvn00WXJQ~zawYQ6~mpN2mAd6jNRhFkpNP0pYYnfQiEdhpo1RbzJfMn-rsvANSVggxvVF4zr-Ayfljmx5o6M6vNEYRqD8W9g9p3HtSPKxc3KjihhA~PUtWekZTuokb3DBsvwZPMTyZ0HJ3n~IHfkV9YfXs06w95idzh4NeiSCSWiCG6b0vUnVpbQ__&Key-Pair-Id=K1MP89RTKNH4J",
    description: "Challenge your mind with this addictive puzzle game",
  },
  {
    id: "2048",
    title: "2048",
    category: "Puzzle",
    rating: 4.7,
    plays: 3200000,
    image: "https://d36hbw14aib5lz.cloudfront.net/310519663567591604/fSXnyvZnJoz6XY6HByWQHz/featured-games-section-B596QRrDydu7daXafRj2WE.webp?Expires=1807947612&Signature=VSJGbi-Ee3d-HHwVXgvgfXz80NxBtncx6UntqdJBtZUFZUkrheDBh2GUmZjF55aHlmmq8ORYAMplY5cV14Qz4xZMQeccdVsECKKg6VKCV~uvslyyp~ybRiLFfLxeTZjClElhngz5ypkA-6M3FgoHPEBEFN~YJnFvn00WXJQ~zawYQ6~mpN2mAd6jNRhFkpNP0pYYnfQiEdhpo1RbzJfMn-rsvANSVggxvVF4zr-Ayfljmx5o6M6vNEYRqD8W9g9p3HtSPKxc3KjihhA~PUtWekZTuokb3DBsvwZPMTyZ0HJ3n~IHfkV9YfXs06w95idzh4NeiSCSWiCG6b0vUnVpbQ__&Key-Pair-Id=K1MP89RTKNH4J",
    description: "The classic number puzzle that took the world by storm",
  },
];

const categories = [
  { name: "Action", count: 45, icon: "⚡" },
  { name: "Puzzle", count: 38, icon: "🧩" },
  { name: "Battle", count: 52, icon: "⚔️" },
  { name: "Racing", count: 28, icon: "🏎️" },
  { name: "Sports", count: 35, icon: "⚽" },
  { name: "Casual", count: 42, icon: "🎮" },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
          <div className="hidden md:flex items-center gap-6">
            <a href="#games" className="text-gray-700 hover:text-blue-600 transition">
              Games
            </a>
            <a href="#categories" className="text-gray-700 hover:text-blue-600 transition">
              Categories
            </a>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Play Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://d36hbw14aib5lz.cloudfront.net/310519663567591604/fSXnyvZnJoz6XY6HByWQHz/hero-banner-sz-games-2PJw5pSQuC8YDbgGytDNQz.webp?Expires=1807947610&Signature=w6NuD7hnLPqCVxYquH4vAIxBoyHWls5Loqe20B1RiOZi0z0rUfpBCH5BKzzozeTaKJ7SyTj-YLkfsSJMWjhtgjmQcCMIU6VdraOt9YLVtaT5hvl6WXEto0m0FwxXaAyQpW7doF9H2v7zY6b2s2h7g7DctoJfJAFyRDthAoGrtwosUUBwR6X7gqkTrYn69mp6ds9p42TyN0LtF06o34QW-Dyb7Blr3zJ28C0TI53uKxiHS70GIBgFTaQTzINGJCGtOPbfk1qc9qGJtITgGeTYquBCJizDOUU8blguaLmEOV1nY4bIN4BaEHg2qfL2rRAZaF9I6QE0IKBE-iLVgm-5Yg__&Key-Pair-Id=K1MP89RTKNH4J"
            alt="SZ Games Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Welcome to <span className="text-orange-400">SZ Games</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Discover the ultimate collection of free online games. Play thousands of games instantly - no downloads required. SZ Games is your destination for gaming entertainment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 h-auto">
                <Play className="mr-2" /> Start Playing SZ Games
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 h-auto"
              >
                Browse All Games
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section id="games" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured SZ Games
            </h2>
            <p className="text-gray-600 text-lg">
              Experience the most popular games on SZ Games platform. These titles are loved by millions of players worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <Card
                key={game.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-gray-200"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={game.image}
                    alt={`${game.title} - Play on SZ Games`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white gap-2">
                      <Play size={20} /> Play Now
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{game.title}</h3>
                      <p className="text-sm text-gray-500">{game.category}</p>
                    </div>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {game.rating}⭐
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{game.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{(game.plays / 1000000).toFixed(1)}M plays</span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Play
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Game Categories on SZ Games
            </h2>
            <p className="text-gray-600 text-lg">
              Browse SZ Games by category and find your favorite type of game. From action-packed adventures to relaxing puzzles.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category.name ? null : category.name
                  )
                }
                className={`p-4 rounded-lg text-center transition-all duration-300 ${
                  selectedCategory === category.name
                    ? "bg-orange-500 text-white shadow-lg scale-105"
                    : "bg-white text-gray-900 hover:shadow-md border border-gray-200"
                }`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-bold text-sm mb-1">{category.name}</h3>
                <p className="text-xs opacity-75">{category.count} games</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "Total Games", value: "500+" },
              { label: "Monthly Players", value: "10M+" },
              { label: "Average Rating", value: "4.7⭐" },
              { label: "Years Online", value: "5+" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Play? Start with SZ Games Today
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join millions of players enjoying free online games on SZ Games. No registration required. Play instantly.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 h-auto">
            <Zap className="mr-2" /> Play Free Games Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">SZ Games</h3>
              <p className="text-sm">
                The ultimate destination for free online gaming. Play thousands of games instantly.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Categories</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Action Games
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Puzzle Games
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Battle Games
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About SZ Games
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Popular Games</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    1v1 LOL
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    2048
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    10x10
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              &copy; 2026 SZ Games - Gullsher Gaming Empire. All rights reserved. | SZ Games is your premier destination for free online gaming.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
