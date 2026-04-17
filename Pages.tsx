/**
 * CONSOLIDATED PAGES FILE
 * All 10 pages merged into one file with route-based exports
 * Export specific page components as needed
 */

import React, { useState, useMemo } from 'react';
import { useRoute } from 'wouter';
import {
  Navigation, Footer, HeroSection, FeaturedGamesSection, CategoriesSection, StatsSection,
  GameCard, AdvancedSearch, FilterSidebar, Pagination, GameHeader, GameGuideSection,
  GameStats, RelatedGames, GameReviews, ShareButtons, Breadcrumb, CategoryHeader,
  CategoryGames, CategoryFAQ, BlogGrid, RelatedArticles, ContactForm, ContactInfo,
  FAQAccordion, AboutTeam, RatingStars, AdSenseAds
} from '@/components/UI';
import { gamesDatabase } from '@/data/Games';

// ============================================================================
// HOME PAGE
// ============================================================================

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      <FeaturedGamesSection games={gamesDatabase} />
      <CategoriesSection />
      <StatsSection />
      <AdSenseAds />
      <Footer />
    </div>
  );
};

// ============================================================================
// GAMES LISTING PAGE
// ============================================================================

export const GamesListingPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ category: '', difficulty: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 12;

  const filteredGames = useMemo(() => {
    let result = gamesDatabase;

    if (searchQuery) {
      result = result.filter(g =>
        g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        g.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filters.category) {
      result = result.filter(g => g.category === filters.category);
    }

    if (filters.difficulty) {
      result = result.filter(g => g.difficulty === filters.difficulty);
    }

    return result;
  }, [searchQuery, filters]);

  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
  const paginatedGames = filteredGames.slice(
    (currentPage - 1) * gamesPerPage,
    currentPage * gamesPerPage
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Play SZ Games</h1>
          <p className="text-lg">Browse and play from our collection of 500+ free games</p>
        </div>
      </div>

      <div className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div>
              <FilterSidebar onFilter={setFilters} />
            </div>
            <div className="lg:col-span-3">
              <AdvancedSearch onSearch={setSearchQuery} />
              <div className="mb-6">
                <p className="text-gray-600">Found {filteredGames.length} games</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedGames.map(game => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>

      <AdSenseAds />
      <Footer />
    </div>
  );
};

// ============================================================================
// GAME DETAIL PAGE
// ============================================================================

export const GameDetailPage: React.FC = () => {
  const [match, params] = useRoute('/game/:id');
  const game = gamesDatabase.find(g => g.id === params?.id);

  if (!game) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Game Not Found</h1>
            <a href="/games" className="text-blue-700 hover:underline">Back to Games</a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedGames = gamesDatabase.filter(g => g.category === game.category && g.id !== game.id);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Games', href: '/games' },
        { label: game.category, href: `/category/${game.category.toLowerCase()}` },
        { label: game.title, href: `/game/${game.id}` }
      ]} />
      <GameHeader game={game} />
      
      <div className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <GameGuideSection game={game} />
              <GameReviews />
              <ShareButtons game={game} />
            </div>
            <div className="space-y-6">
              <GameStats game={game} />
              <AdSenseAds />
            </div>
          </div>
        </div>
      </div>

      <RelatedGames games={relatedGames} />
      <Footer />
    </div>
  );
};

// ============================================================================
// CATEGORY PAGE
// ============================================================================

export const CategoryPage: React.FC = () => {
  const [match, params] = useRoute('/category/:category');
  const categoryName = params?.category ? params.category.charAt(0).toUpperCase() + params.category.slice(1) : 'Games';
  const categoryGames = gamesDatabase.filter(g => g.category === categoryName);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <CategoryHeader category={categoryName || 'Games'} />
      <div className="flex-1">
        <CategoryGames games={categoryGames} />
        <CategoryFAQ category={categoryName || 'Games'} />
      </div>
      <AdSenseAds />
      <Footer />
    </div>
  );
};

// ============================================================================
// BLOG PAGE
// ============================================================================

export const BlogPage: React.FC = () => {
  const articles = [
    {
      id: '1',
      title: 'Top 10 Strategy Games on SZ Games',
      excerpt: 'Discover the best strategy games available on SZ Games platform.',
      author: 'Gaming Expert',
      date: 'Apr 15, 2026'
    },
    {
      id: '2',
      title: 'How to Master Puzzle Games',
      excerpt: 'Learn tips and tricks to improve your puzzle game skills.',
      author: 'Game Coach',
      date: 'Apr 10, 2026'
    },
    {
      id: '3',
      title: 'Best Action Games of 2026',
      excerpt: 'Check out the most exciting action games released this year.',
      author: 'Gaming Journalist',
      date: 'Apr 5, 2026'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">SZ Games Blog</h1>
          <p className="text-lg">Gaming tips, guides, and news</p>
        </div>
      </div>

      <div className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <BlogGrid articles={articles} />
        </div>
      </div>

      <AdSenseAds />
      <Footer />
    </div>
  );
};

// ============================================================================
// BLOG ARTICLE PAGE
// ============================================================================

export const BlogArticlePage: React.FC = () => {
  const [match, params] = useRoute('/blog/:id');

  const article = {
    id: params?.id,
    title: 'Top 10 Strategy Games on SZ Games',
    author: 'Gaming Expert',
    date: 'Apr 15, 2026',
    content: `Strategy games are one of the most popular genres on SZ Games. They require planning, critical thinking, and tactical decision-making. In this article, we'll explore the top 10 strategy games available on our platform.

Strategy games have been a staple of gaming for decades. From chess to complex real-time strategy games, they offer a unique challenge that appeals to players of all skill levels.

On SZ Games, you'll find a wide variety of strategy games ranging from turn-based tactics to real-time strategy. Whether you prefer managing resources, commanding armies, or solving complex puzzles, there's something for everyone.

The beauty of strategy games is that they reward planning and foresight. Unlike action games that rely on reflexes, strategy games allow you to take your time and think through your moves carefully.

Many of our most popular games on SZ Games are strategy games. Players love the depth and replayability these games offer. Each playthrough can be completely different depending on the choices you make.

If you're new to strategy games, we recommend starting with simpler games and gradually working your way up to more complex ones. Our platform makes it easy to find games at your skill level.

Join millions of players on SZ Games and discover your next favorite strategy game today!`
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          <div className="flex gap-6 text-gray-200">
            <span>By {article.author}</span>
            <span>{article.date}</span>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{article.content}</p>
              </div>
            </div>
            <div>
              <AdSenseAds />
            </div>
          </div>
        </div>
      </div>

      <RelatedArticles articles={[]} />
      <Footer />
    </div>
  );
};

// ============================================================================
// ABOUT PAGE
// ============================================================================

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About SZ Games</h1>
          <p className="text-lg">Your ultimate destination for free online gaming</p>
        </div>
      </div>

      <div className="flex-1">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              At SZ Games, our mission is to provide the world's best collection of free online games. We believe gaming should be accessible to everyone, regardless of their device or location. With 500+ games across 8 categories, we're committed to delivering entertainment, fun, and community to millions of players worldwide.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">Why Choose SZ Games?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">500+ Free Games</h3>
                <p className="text-gray-700">Play unlimited games without any downloads or installations.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Always Updated</h3>
                <p className="text-gray-700">New games added regularly to keep the experience fresh.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Mobile Friendly</h3>
                <p className="text-gray-700">Play on any device - desktop, tablet, or smartphone.</p>
              </div>
            </div>
          </div>
        </section>

        <AboutTeam />
      </div>

      <AdSenseAds />
      <Footer />
    </div>
  );
};

// ============================================================================
// CONTACT PAGE
// ============================================================================

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact SZ Games</h1>
          <p className="text-lg">We'd love to hear from you</p>
        </div>
      </div>

      <div className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>

      <AdSenseAds />
      <Footer />
    </div>
  );
};

// ============================================================================
// FAQ PAGE
// ============================================================================

export const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: 'Are all games on SZ Games free?',
      answer: 'Yes! All 500+ games on SZ Games are completely free to play. No hidden charges or premium memberships required.'
    },
    {
      question: 'Do I need to download anything to play?',
      answer: 'No downloads needed! All games run directly in your browser. Just click and play.'
    },
    {
      question: 'Can I play SZ Games on mobile?',
      answer: 'Absolutely! SZ Games is fully optimized for mobile devices. Play on your smartphone or tablet anytime, anywhere.'
    },
    {
      question: 'What categories of games are available?',
      answer: 'We have 8 main categories: Action, Puzzle, Battle, Racing, Sports, Casual, Strategy, and Adventure.'
    },
    {
      question: 'How often are new games added?',
      answer: 'We add new games regularly to keep the experience fresh and exciting. Check back often for the latest additions.'
    },
    {
      question: 'Is SZ Games safe for children?',
      answer: 'Yes! SZ Games is family-friendly with games suitable for all ages. We carefully curate our collection.'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg">Find answers to common questions about SZ Games</p>
        </div>
      </div>

      <div className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </div>

      <AdSenseAds />
      <Footer />
    </div>
  );
};

// ============================================================================
// PRIVACY PAGE
// ============================================================================

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
      </div>

      <div className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Privacy Policy for SZ Games</h2>
            <p className="mb-6">Last updated: April 17, 2026</p>

            <h3 className="text-xl font-bold mb-4">1. Introduction</h3>
            <p className="mb-6">SZ Games ("we", "our", or "us") operates the SZ Games website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service.</p>

            <h3 className="text-xl font-bold mb-4">2. Information Collection</h3>
            <p className="mb-6">We collect information that you provide directly to us, such as when you contact us or fill out a form. We also automatically collect certain information about your device and how you interact with our service.</p>

            <h3 className="text-xl font-bold mb-4">3. Use of Data</h3>
            <p className="mb-6">We use the collected data for various purposes, including to provide and maintain our service, notify you about changes, allow you to participate in interactive features, and provide customer support.</p>

            <h3 className="text-xl font-bold mb-4">4. Security</h3>
            <p className="mb-6">The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.</p>

            <h3 className="text-xl font-bold mb-4">5. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at support@szgames.com</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

// ============================================================================
// TERMS PAGE
// ============================================================================

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
        </div>
      </div>

      <div className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Terms of Service for SZ Games</h2>
            <p className="mb-6">Last updated: April 17, 2026</p>

            <h3 className="text-xl font-bold mb-4">1. Agreement to Terms</h3>
            <p className="mb-6">By accessing and using SZ Games, you accept and agree to be bound by the terms and provision of this agreement.</p>

            <h3 className="text-xl font-bold mb-4">2. Use License</h3>
            <p className="mb-6">Permission is granted to temporarily download one copy of the materials (information or software) on SZ Games for personal, non-commercial transitory viewing only.</p>

            <h3 className="text-xl font-bold mb-4">3. Disclaimer</h3>
            <p className="mb-6">The materials on SZ Games are provided on an 'as is' basis. SZ Games makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

            <h3 className="text-xl font-bold mb-4">4. Limitations</h3>
            <p className="mb-6">In no event shall SZ Games or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SZ Games.</p>

            <h3 className="text-xl font-bold mb-4">5. Accuracy of Materials</h3>
            <p className="mb-6">The materials appearing on SZ Games could include technical, typographical, or photographic errors. SZ Games does not warrant that any of the materials on its website are accurate, complete, or current.</p>

            <h3 className="text-xl font-bold mb-4">6. Contact Us</h3>
            <p>If you have any questions about these Terms of Service, please contact us at support@szgames.com</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

// ============================================================================
// 404 NOT FOUND PAGE
// ============================================================================

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">The page you're looking for doesn't exist on SZ Games.</p>
          <a href="/" className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition font-bold">
            Back to Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};
