/**
 * CONSOLIDATED COMPONENTS FILE
 * All 50+ UI components merged into one file for easy management
 * Exports all components used throughout the application
 */

import React, { useState } from 'react';
import { ChevronDown, Search, Menu, X, Star, Share2, MapPin, Mail, Phone, Send } from 'lucide-react';

// ============================================================================
// NAVIGATION & LAYOUT COMPONENTS
// ============================================================================

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-blue-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SZ</span>
            </div>
            <span className="font-bold text-xl text-blue-700">SZ Games</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-700 hover:text-blue-700 transition">Home</a>
            <a href="/games" className="text-gray-700 hover:text-blue-700 transition">Games</a>
            <a href="/category/action" className="text-gray-700 hover:text-blue-700 transition">Categories</a>
            <a href="/blog" className="text-gray-700 hover:text-blue-700 transition">Blog</a>
            <a href="/about" className="text-gray-700 hover:text-blue-700 transition">About</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <input type="text" placeholder="Search SZ Games..." className="px-4 py-2 border rounded-lg w-48" />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition font-semibold">
              Play Now
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            <a href="/" className="text-gray-700 hover:text-blue-700">Home</a>
            <a href="/games" className="text-gray-700 hover:text-blue-700">Games</a>
            <a href="/blog" className="text-gray-700 hover:text-blue-700">Blog</a>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg w-full">Play Now</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">SZ Games</h3>
            <p className="text-gray-400">Play 500+ free online games instantly. No downloads required.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/category/action" className="hover:text-white">Action Games</a></li>
              <li><a href="/category/puzzle" className="hover:text-white">Puzzle Games</a></li>
              <li><a href="/category/battle" className="hover:text-white">Battle Games</a></li>
              <li><a href="/category/racing" className="hover:text-white">Racing Games</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="/contact" className="hover:text-white">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 SZ Games - Gullsher Gaming Empire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// ============================================================================
// HERO & FEATURED SECTIONS
// ============================================================================

export const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-orange-400">SZ Games</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Discover the ultimate collection of free online games. Play thousands of games instantly - no downloads required. SZ Games is your destination for gaming entertainment.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition">
              ▶ Start Playing SZ Games
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition">
              Browse All Games
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FeaturedGamesSection: React.FC<{ games: any[] }> = ({ games }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured SZ Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.slice(0, 4).map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const CategoriesSection: React.FC = () => {
  const categories = [
    { name: 'Action', icon: '⚔️', count: 85 },
    { name: 'Puzzle', icon: '🧩', count: 72 },
    { name: 'Battle', icon: '🎮', count: 68 },
    { name: 'Racing', icon: '🏎️', count: 54 },
    { name: 'Sports', icon: '⚽', count: 62 },
    { name: 'Casual', icon: '😄', count: 78 },
    { name: 'Strategy', icon: '♟️', count: 45 },
    { name: 'Adventure', icon: '🗺️', count: 56 },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Game Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <a key={cat.name} href={`/category/${cat.name.toLowerCase()}`} className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-6 rounded-lg hover:shadow-lg transition text-center">
              <div className="text-4xl mb-2">{cat.icon}</div>
              <h3 className="font-bold text-lg">{cat.name}</h3>
              <p className="text-sm text-gray-300">{cat.count} games</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-blue-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-12">
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <p className="text-lg">Free Games</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">10M+</div>
            <p className="text-lg">Active Players</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">4.7⭐</div>
            <p className="text-lg">Average Rating</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <p className="text-lg">Always Available</p>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition">
            Explore All SZ Games
          </button>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// GAME CARD & DISPLAY COMPONENTS
// ============================================================================

export const GameCard: React.FC<{ game: any }> = ({ game }) => {
  return (
    <a href={`/game/${game.id}`} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-32 flex items-center justify-center text-4xl">
        🎮
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{game.title}</h3>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold">{game.rating}</span>
          </div>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{game.category}</span>
        </div>
        <p className="text-xs text-gray-600">{game.plays.toLocaleString()} plays</p>
      </div>
    </a>
  );
};

export const GameGridCard: React.FC<{ game: any }> = ({ game }) => {
  return <GameCard game={game} />;
};

export const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-5 h-5 ${i < Math.round(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
      ))}
    </div>
  );
};

export const Breadcrumb: React.FC<{ items: { label: string; href: string }[] }> = ({ items }) => {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span>/</span>}
          <a href={item.href} className="hover:text-blue-700">{item.label}</a>
        </React.Fragment>
      ))}
    </div>
  );
};

// ============================================================================
// GAME DETAIL COMPONENTS
// ============================================================================

export const GameHeader: React.FC<{ game: any }> = ({ game }) => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{game.title}</h1>
        <div className="flex gap-6 flex-wrap">
          <div>
            <p className="text-gray-300">Category</p>
            <p className="font-bold">{game.category}</p>
          </div>
          <div>
            <p className="text-gray-300">Difficulty</p>
            <p className="font-bold">{game.difficulty}</p>
          </div>
          <div>
            <p className="text-gray-300">Rating</p>
            <RatingStars rating={game.rating} />
          </div>
          <div>
            <p className="text-gray-300">Plays</p>
            <p className="font-bold">{game.plays.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const GameGuideSection: React.FC<{ game: any }> = ({ game }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">How to Play {game.title}</h2>
        <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-700">
          <p className="text-gray-700 leading-relaxed">{game.guide}</p>
        </div>
      </div>
    </section>
  );
};

export const GameStats: React.FC<{ game: any }> = ({ game }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-bold text-lg mb-4">Game Stats</h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Rating:</span>
          <span className="font-bold">{game.rating}/5</span>
        </div>
        <div className="flex justify-between">
          <span>Plays:</span>
          <span className="font-bold">{game.plays.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Category:</span>
          <span className="font-bold">{game.category}</span>
        </div>
        <div className="flex justify-between">
          <span>Difficulty:</span>
          <span className="font-bold">{game.difficulty}</span>
        </div>
      </div>
    </div>
  );
};

export const RelatedGames: React.FC<{ games: any[] }> = ({ games }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Related Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {games.slice(0, 4).map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const GameReviews: React.FC = () => {
  const reviews = [
    { name: 'John', rating: 5, text: 'Amazing game! Highly recommended on SZ Games.' },
    { name: 'Sarah', rating: 4, text: 'Great gameplay and graphics. Love playing on SZ Games.' },
    { name: 'Mike', rating: 5, text: 'Best game collection on SZ Games!' },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Player Reviews</h2>
        <div className="space-y-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold">{review.name}</h4>
                <RatingStars rating={review.rating} />
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ShareButtons: React.FC<{ game: any }> = ({ game }) => {
  return (
    <div className="flex gap-4 my-6">
      <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        <Share2 size={18} /> Share
      </button>
      <button className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
        ❤️ Like
      </button>
    </div>
  );
};

// ============================================================================
// CATEGORY COMPONENTS
// ============================================================================

export const CategoryHeader: React.FC<{ category: string }> = ({ category }) => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{category} Games</h1>
        <p className="text-gray-200 text-lg">Play the best {category.toLowerCase()} games on SZ Games platform</p>
      </div>
    </div>
  );
};

export const CategoryGames: React.FC<{ games: any[] }> = ({ games }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const CategoryFAQ: React.FC<{ category: string }> = ({ category }) => {
  const faqs = [
    { q: `What are ${category} games?`, a: `${category} games are a popular genre on SZ Games platform with unique gameplay mechanics.` },
    { q: `Are ${category} games free on SZ Games?`, a: 'Yes! All games on SZ Games are completely free to play.' },
    { q: `Can I play ${category} games on mobile?`, a: 'Absolutely! SZ Games is fully optimized for mobile devices.' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{category} Games FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-bold cursor-pointer">{faq.q}</summary>
              <p className="mt-4 text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SEARCH & FILTER COMPONENTS
// ============================================================================

export const AdvancedSearch: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  return (
    <div className="mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search SZ Games..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch(e.target.value);
          }}
          className="w-full px-6 py-3 border-2 border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <Search className="absolute right-4 top-3.5 text-blue-700" size={20} />
      </div>
    </div>
  );
};

export const FilterSidebar: React.FC<{ onFilter: (filters: any) => void }> = ({ onFilter }) => {
  const [filters, setFilters] = useState({ category: '', difficulty: '' });

  const handleChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-bold text-lg mb-6">Filters</h3>
      
      <div className="mb-6">
        <label className="block font-semibold mb-2">Category</label>
        <select value={filters.category} onChange={(e) => handleChange('category', e.target.value)} className="w-full border rounded-lg p-2">
          <option value="">All Categories</option>
          <option value="Action">Action</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Battle">Battle</option>
          <option value="Racing">Racing</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-2">Difficulty</label>
        <select value={filters.difficulty} onChange={(e) => handleChange('difficulty', e.target.value)} className="w-full border rounded-lg p-2">
          <option value="">All Levels</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
    </div>
  );
};

export const Pagination: React.FC<{ currentPage: number; totalPages: number; onPageChange: (page: number) => void }> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center gap-2 mt-12">
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)} className="px-4 py-2 border rounded-lg hover:bg-blue-50">
          Previous
        </button>
      )}
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          className={`px-4 py-2 rounded-lg ${currentPage === i + 1 ? 'bg-blue-700 text-white' : 'border hover:bg-blue-50'}`}
        >
          {i + 1}
        </button>
      ))}
      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)} className="px-4 py-2 border rounded-lg hover:bg-blue-50">
          Next
        </button>
      )}
    </div>
  );
};

// ============================================================================
// BLOG COMPONENTS
// ============================================================================

export const BlogGrid: React.FC<{ articles: any[] }> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <a key={article.id} href={`/blog/${article.id}`} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-40 flex items-center justify-center text-4xl">
            📰
          </div>
          <div className="p-6">
            <h3 className="font-bold text-lg mb-2">{article.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
            <div className="flex justify-between text-xs text-gray-500">
              <span>{article.author}</span>
              <span>{article.date}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export const RelatedArticles: React.FC<{ articles: any[] }> = ({ articles }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
        <BlogGrid articles={articles.slice(0, 3)} />
      </div>
    </section>
  );
};

// ============================================================================
// CONTACT & FORM COMPONENTS
// ============================================================================

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="mb-6">
        <label className="block font-semibold mb-2">Name</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border rounded-lg p-3"
          placeholder="Your name"
        />
      </div>
      <div className="mb-6">
        <label className="block font-semibold mb-2">Email</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full border rounded-lg p-3"
          placeholder="your@email.com"
        />
      </div>
      <div className="mb-6">
        <label className="block font-semibold mb-2">Message</label>
        <textarea
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full border rounded-lg p-3 h-32"
          placeholder="Your message"
        />
      </div>
      <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition flex items-center justify-center gap-2">
        <Send size={20} /> Send Message
      </button>
    </form>
  );
};

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-4 mb-4">
          <Mail className="w-6 h-6 text-blue-700" />
          <div>
            <h4 className="font-bold">Email</h4>
            <p className="text-gray-600">support@szgames.com</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-4 mb-4">
          <Phone className="w-6 h-6 text-blue-700" />
          <div>
            <h4 className="font-bold">Phone</h4>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-4 mb-4">
          <MapPin className="w-6 h-6 text-blue-700" />
          <div>
            <h4 className="font-bold">Address</h4>
            <p className="text-gray-600">123 Gaming Street, Game City, GC 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FAQAccordion: React.FC<{ faqs: any[] }> = ({ faqs }) => {
  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <details key={i} className="bg-white p-6 rounded-lg shadow-md">
          <summary className="font-bold cursor-pointer flex items-center justify-between">
            {faq.question}
            <ChevronDown size={20} />
          </summary>
          <p className="mt-4 text-gray-700">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
};

// ============================================================================
// ABOUT & INFO COMPONENTS
// ============================================================================

export const AboutTeam: React.FC = () => {
  const team = [
    { name: 'Ahmed', role: 'CEO & Founder', emoji: '👨‍💼' },
    { name: 'Sarah', role: 'CTO', emoji: '👩‍💻' },
    { name: 'Mike', role: 'Game Designer', emoji: '🎮' },
    { name: 'Lisa', role: 'Marketing Lead', emoji: '📊' },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">{member.emoji}</div>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AdSenseAds: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg text-center text-gray-500">
      <p>Advertisement</p>
      <p className="text-sm">AdSense ads will appear here</p>
    </div>
  );
};
