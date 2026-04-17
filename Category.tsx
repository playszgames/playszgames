import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { GameCard } from "@/components/GameCard";
import { getCategoryById, getGamesByCategory, categoriesData } from "@/lib/games";
import { ArrowRight } from "lucide-react";

/**
 * SZ Games - Category Page
 * 
 * Features:
 * - Display all games in a specific category
 * - Internal linking to related categories
 * - SEO-optimized with category keyword
 * - Breadcrumb navigation
 * - Related categories section
 */

export default function Category() {
  const params = useParams();
  const categoryId = params.id as string;
  const category = getCategoryById(categoryId);
  const games = category ? getGamesByCategory(category.name) : [];

  if (!category) {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-8">
            The category you're looking for doesn't exist on SZ Games.
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

  const relatedCategories = categoriesData.filter(cat => cat.id !== categoryId).slice(0, 5);

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
            <span className="text-gray-900 font-semibold">{category.name} Games</span>
          </div>
        </div>
      </div>

      {/* Category Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{category.icon}</span>
            <h1 className="text-4xl font-bold">{category.name} Games on SZ Games</h1>
          </div>
          <p className="text-blue-100 text-lg max-w-3xl">
            {category.description} Explore {category.count}+ {category.name.toLowerCase()} games on SZ Games platform.
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Popular {category.name} Games
            </h2>
            <p className="text-gray-600">
              Browse {games.length} {category.name.toLowerCase()} games available on SZ Games. All games are free to play!
            </p>
          </div>

          {games.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {games.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 mb-4">
                No games found in this category on SZ Games.
              </p>
              <Link href="/games">
                <a>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Browse All SZ Games
                  </Button>
                </a>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related Categories */}
      <section className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Explore Other Game Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {relatedCategories.map((cat) => (
              <Link key={cat.id} href={`/category/${cat.id}`}>
                <a className="block group">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="text-4xl mb-3">{cat.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{cat.count} games</p>
                    <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all">
                      Browse <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Info Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About {category.name} Games
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {category.name} games on SZ Games offer {category.description.toLowerCase()}. Whether you're looking for a quick gaming session or a long-term challenge, SZ Games has the perfect {category.name.toLowerCase()} game for you.
            </p>
            <p className="text-gray-700 leading-relaxed">
              All games on SZ Games are free to play, no registration required, and optimized for all devices. Start playing {category.name.toLowerCase()} games on SZ Games today!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Play {category.name} Games?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose from {category.count}+ {category.name.toLowerCase()} games on SZ Games. Start playing now!
          </p>
          <Link href="/games">
            <a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 h-auto">
                Play {category.name} Games Now
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
                The ultimate destination for free online gaming. Play {category.name.toLowerCase()} games and hundreds more on SZ Games.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Categories</h4>
              <ul className="text-sm space-y-2">
                {categoriesData.slice(0, 4).map((cat) => (
                  <li key={cat.id}>
                    <Link href={`/category/${cat.id}`}>
                      <a className="hover:text-white transition">
                        {cat.name} Games
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
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
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Popular</h4>
              <ul className="text-sm space-y-2">
                {games.slice(0, 3).map((game) => (
                  <li key={game.id}>
                    <Link href={`/game/${game.id}`}>
                      <a className="hover:text-white transition">{game.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              &copy; 2026 SZ Games - Gullsher Gaming Empire. Play {category.name.toLowerCase()} games and more on SZ Games.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
