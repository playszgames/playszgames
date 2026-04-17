import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";

/**
 * SZ Games - Blog & Guides Page
 * 
 * Features:
 * - SEO-optimized blog content
 * - Gaming tips and strategies
 * - Game guides
 * - Internal linking to games
 * - AdSense-friendly layout
 */

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Master 1v1 LOL: Complete Strategy Guide for SZ Games",
    excerpt: "Learn the essential strategies to dominate 1v1 LOL on SZ Games. From building techniques to combat mechanics, we cover everything.",
    category: "Strategy",
    author: "SZ Games Team",
    date: "2026-04-15",
    readTime: 8,
    image: "1v1-lol-guide.jpg",
    slug: "master-1v1-lol-strategy-guide"
  },
  {
    id: "2",
    title: "2048 Game Tips: How to Reach the Ultimate Score on SZ Games",
    excerpt: "Discover advanced techniques to achieve high scores in 2048 on SZ Games. Learn corner strategies and tile management.",
    category: "Tips",
    author: "SZ Games Team",
    date: "2026-04-14",
    readTime: 6,
    image: "2048-tips.jpg",
    slug: "2048-game-tips-high-score"
  },
  {
    id: "3",
    title: "Best Puzzle Games on SZ Games: Top 10 Brain Teasers",
    excerpt: "Explore the best puzzle games available on SZ Games platform. Challenge your mind with these addictive brain teasers.",
    category: "Reviews",
    author: "SZ Games Team",
    date: "2026-04-13",
    readTime: 7,
    image: "puzzle-games.jpg",
    slug: "best-puzzle-games-sz-games"
  },
  {
    id: "4",
    title: "Action Games on SZ Games: Adrenaline-Pumping Entertainment",
    excerpt: "Get your adrenaline rush with the best action games on SZ Games. Fast-paced gameplay and thrilling challenges await.",
    category: "Reviews",
    author: "SZ Games Team",
    date: "2026-04-12",
    readTime: 5,
    image: "action-games.jpg",
    slug: "action-games-sz-games"
  },
  {
    id: "5",
    title: "Casual Games on SZ Games: Relax and Have Fun",
    excerpt: "Take a break with the best casual games on SZ Games. Perfect for relaxation and entertainment.",
    category: "Reviews",
    author: "SZ Games Team",
    date: "2026-04-11",
    readTime: 4,
    image: "casual-games.jpg",
    slug: "casual-games-sz-games"
  },
  {
    id: "6",
    title: "Competitive Gaming: Battle Games on SZ Games Explained",
    excerpt: "Master competitive gaming with our guide to battle games on SZ Games. Learn tactics, strategies, and game mechanics.",
    category: "Strategy",
    author: "SZ Games Team",
    date: "2026-04-10",
    readTime: 9,
    image: "battle-games.jpg",
    slug: "competitive-battle-games-guide"
  }
];

export default function Blog() {
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
          <Link href="/">
            <a className="text-gray-700 hover:text-blue-600 transition">
              ← Back to Home
            </a>
          </Link>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">SZ Games Blog & Guides</h1>
          <p className="text-blue-100 text-lg">
            Tips, strategies, and guides for all your favorite games on SZ Games platform.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured on SZ Games</h2>
            <Link href={`/blog/${blogPosts[0].slug}`}>
              <a className="block group">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="h-64 md:h-auto bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl font-bold mb-2">📖</div>
                        <p className="text-lg">Featured Guide</p>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {blogPosts[0].category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                        {blogPosts[0].title}
                      </h3>
                      <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <User size={16} /> {blogPosts[0].author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} /> {new Date(blogPosts[0].date).toLocaleDateString()}
                        </div>
                        <span>{blogPosts[0].readTime} min read</span>
                      </div>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                        Read More <ArrowRight size={18} className="ml-1" />
                      </div>
                    </div>
                  </div>
                </Card>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles on SZ Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <a className="block group">
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-gray-200 h-full flex flex-col">
                    <div className="h-40 bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center">
                      <div className="text-4xl">📝</div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} /> {new Date(post.date).toLocaleDateString()}
                        </div>
                        <span>{post.readTime} min</span>
                      </div>
                    </div>
                  </Card>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Strategy", "Tips", "Reviews", "Guides"].map((category) => (
              <button
                key={category}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:bg-blue-50 hover:border-blue-300 transition"
              >
                <p className="font-semibold text-gray-900">{category}</p>
                <p className="text-sm text-gray-500 mt-1">Read articles</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with SZ Games</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest gaming tips, strategies, and guides delivered to your inbox. Subscribe to SZ Games newsletter.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 h-auto">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Play?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn the strategies, master the games, and start playing on SZ Games today!
          </p>
          <Link href="/games">
            <a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 h-auto">
                Play Games on SZ Games
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
                The ultimate destination for free online gaming. Read guides and play games on SZ Games platform.
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
                <li>
                  <Link href="/blog">
                    <a className="hover:text-white transition">Blog</a>
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
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Popular</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <Link href="/game/1v1-lol">
                    <a className="hover:text-white transition">1v1 LOL</a>
                  </Link>
                </li>
                <li>
                  <Link href="/game/2048">
                    <a className="hover:text-white transition">2048</a>
                  </Link>
                </li>
                <li>
                  <Link href="/game/tetris">
                    <a className="hover:text-white transition">Tetris</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              &copy; 2026 SZ Games - Gullsher Gaming Empire. All rights reserved. | Read gaming guides and play free online games on SZ Games.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
