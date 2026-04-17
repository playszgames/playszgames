import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GameCard } from "@/components/GameCard";
import { gamesData, categoriesData, searchGames, getGamesByCategory } from "@/lib/games";
import { Search, Filter } from "lucide-react";

/**
 * SZ Games - All Games Page
 * 
 * Features:
 * - Browse all games on SZ Games platform
 * - Filter by category
 * - Search functionality
 * - Sort by rating, plays, or name
 * - SEO-optimized with "SZ Games" keyword
 */

type SortOption = "rating" | "plays" | "name" | "newest";

export default function Games() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("rating");

  const filteredGames = useMemo(() => {
    let results = gamesData;

    // Apply search filter
    if (searchQuery.trim()) {
      results = searchGames(searchQuery);
    }

    // Apply category filter
    if (selectedCategory) {
      results = results.filter(
        game => game.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Apply sorting
    const sorted = [...results];
    switch (sortBy) {
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "plays":
        sorted.sort((a, b) => b.plays - a.plays);
        break;
      case "name":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "newest":
        // In real app, would sort by date added
        break;
    }

    return sorted;
  }, [searchQuery, selectedCategory, sortBy]);

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
          <a href="/" className="text-gray-700 hover:text-blue-600 transition">
            ← Back to Home
          </a>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">All SZ Games</h1>
          <p className="text-blue-100 text-lg">
            Browse our complete collection of {gamesData.length}+ free online games on SZ Games platform.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-gray-50 border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search SZ Games by name, category, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-lg border-gray-300"
              />
            </div>
          </div>

          {/* Category and Sort Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category Filter */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Filter size={18} /> Filter by Category
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => setSelectedCategory(null)}
                  variant={selectedCategory === null ? "default" : "outline"}
                  className={selectedCategory === null ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  All Games
                </Button>
                {categoriesData.map((category) => (
                  <Button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className={selectedCategory === category.id ? "bg-blue-600 hover:bg-blue-700" : ""}
                  >
                    {category.icon} {category.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Sort Filter */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Sort By</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: "rating" as SortOption, label: "Top Rated" },
                  { value: "plays" as SortOption, label: "Most Played" },
                  { value: "name" as SortOption, label: "A - Z" },
                  { value: "newest" as SortOption, label: "Newest" },
                ].map((option) => (
                  <Button
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    variant={sortBy === option.value ? "default" : "outline"}
                    className={sortBy === option.value ? "bg-orange-500 hover:bg-orange-600" : ""}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <p className="text-gray-600">
            Showing <span className="font-bold text-gray-900">{filteredGames.length}</span> games
            {searchQuery && ` matching "${searchQuery}"`}
            {selectedCategory && ` in ${selectedCategory}`}
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">
                No games found on SZ Games matching your search.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">SZ Games</h3>
              <p className="text-sm">
                The ultimate destination for free online gaming on SZ Games platform. Play thousands of games instantly.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Categories</h4>
              <ul className="text-sm space-y-2">
                {categoriesData.slice(0, 4).map((cat) => (
                  <li key={cat.id}>
                    <a href={`/category/${cat.id}`} className="hover:text-white transition">
                      {cat.name} Games
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="/" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    About SZ Games
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
              <h4 className="text-white font-bold mb-4">Popular</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="/game/1v1-lol" className="hover:text-white transition">
                    1v1 LOL
                  </a>
                </li>
                <li>
                  <a href="/game/2048" className="hover:text-white transition">
                    2048
                  </a>
                </li>
                <li>
                  <a href="/game/tetris" className="hover:text-white transition">
                    Tetris
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              &copy; 2026 SZ Games - Gullsher Gaming Empire. All rights reserved. | Browse all free online games on SZ Games.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
