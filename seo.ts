/**
 * PHASE 8: SEO Utilities & Schema Markup
 * 
 * SEO optimization helpers for SZ Games
 * Features:
 * - Meta tags generation
 * - Schema markup
 * - Structured data
 * - SEO best practices
 */

export interface SEOMetaTags {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  canonical?: string;
}

export interface SchemaMarkup {
  "@context": string;
  "@type": string;
  [key: string]: any;
}

/**
 * Generate meta tags for a page
 */
export function generateMetaTags(seo: SEOMetaTags): Record<string, string> {
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords.join(", "),
    "og:title": seo.ogTitle || seo.title,
    "og:description": seo.ogDescription || seo.description,
    "og:image": seo.ogImage || "",
    "og:url": seo.ogUrl || "",
    "twitter:card": seo.twitterCard || "summary_large_image",
    canonical: seo.canonical || "",
  };
}

/**
 * Generate schema markup for a game
 */
export function generateGameSchema(game: {
  id: string;
  title: string;
  description: string;
  rating: number;
  plays: number;
  category: string;
}): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: game.title,
    description: game.description,
    url: `https://szgames.com/game/${game.id}`,
    applicationCategory: "Game",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: game.rating.toString(),
      ratingCount: game.plays.toString(),
    },
    genre: game.category,
  };
}

/**
 * Generate schema markup for a blog article
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  author: string;
  date: string;
  image?: string;
}): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: article.author,
    },
    datePublished: article.date,
    image: article.image || "",
  };
}

/**
 * Generate schema markup for organization
 */
export function generateOrganizationSchema(): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SZ Games",
    url: "https://szgames.com",
    logo: "https://szgames.com/logo.png",
    description: "SZ Games - Gullsher Gaming Empire. Play 500+ free games online.",
    sameAs: [
      "https://facebook.com/szgames",
      "https://twitter.com/szgames",
      "https://instagram.com/szgames",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "support@szgames.com",
      telephone: "+1-555-123-4567",
    },
  };
}

/**
 * Generate schema markup for website
 */
export function generateWebsiteSchema(): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SZ Games",
    url: "https://szgames.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://szgames.com/games?q={search_term_string}",
      },
      query_input: "required name=search_term_string",
    },
  };
}

/**
 * SEO meta tags for home page
 */
export const homePageSEO: SEOMetaTags = {
  title: "SZ Games - Play 500+ Free Online Games | Gullsher Gaming Empire",
  description:
    "SZ Games is your ultimate destination for free online gaming. Play 500+ games instantly without downloads. Join 10M+ players on SZ Games platform.",
  keywords: [
    "SZ Games",
    "free online games",
    "play games",
    "gaming platform",
    "Gullsher Games",
    "online gaming",
  ],
  ogTitle: "SZ Games - Play Free Online Games",
  ogDescription:
    "Discover 500+ free games on SZ Games. Play instantly, no downloads needed.",
  ogUrl: "https://szgames.com",
};

/**
 * SEO meta tags for games page
 */
export const gamesPageSEO: SEOMetaTags = {
  title: "Browse All Games on SZ Games | 500+ Free Games",
  description:
    "Browse and play 500+ free games on SZ Games. Filter by category, difficulty, and rating. Find your favorite games on SZ Games platform.",
  keywords: [
    "SZ Games",
    "free games",
    "online games",
    "game collection",
    "play games online",
  ],
  ogTitle: "All Games on SZ Games",
  ogDescription: "Explore 500+ free games on SZ Games platform.",
  ogUrl: "https://szgames.com/games",
};

/**
 * SEO meta tags for category pages
 */
export function getCategorySEO(category: string): SEOMetaTags {
  return {
    title: `${category} Games on SZ Games | Play Free ${category} Games`,
    description: `Play free ${category.toLowerCase()} games on SZ Games. Discover the best ${category.toLowerCase()} games with ratings and guides.`,
    keywords: [
      "SZ Games",
      `${category} games`,
      "free games",
      "online gaming",
      `play ${category.toLowerCase()} games`,
    ],
    ogTitle: `${category} Games on SZ Games`,
    ogDescription: `Explore ${category.toLowerCase()} games on SZ Games platform.`,
    ogUrl: `https://szgames.com/category/${category.toLowerCase()}`,
  };
}

/**
 * SEO meta tags for game detail page
 */
export function getGameSEO(game: {
  title: string;
  description: string;
  category: string;
  rating: number;
  id: string;
}): SEOMetaTags {
  return {
    title: `${game.title} - Play on SZ Games | Free Online Game`,
    description: `${game.description} Play ${game.title} on SZ Games. Rated ${game.rating}⭐. Join millions of players on SZ Games platform.`,
    keywords: [
      "SZ Games",
      game.title,
      "free game",
      "online game",
      game.category.toLowerCase(),
      "play online",
    ],
    ogTitle: `${game.title} on SZ Games`,
    ogDescription: `${game.description} Play on SZ Games now!`,
    ogUrl: `https://szgames.com/game/${game.id}`,
  };
}

/**
 * SEO meta tags for blog page
 */
export const blogPageSEO: SEOMetaTags = {
  title: "SZ Games Blog - Gaming Tips, Guides & Strategies",
  description:
    "Read gaming tips, strategies, and guides on SZ Games blog. Learn how to master your favorite games on SZ Games platform.",
  keywords: [
    "SZ Games",
    "gaming blog",
    "gaming tips",
    "game guides",
    "gaming strategies",
  ],
  ogTitle: "SZ Games Blog",
  ogDescription: "Gaming tips and guides on SZ Games platform.",
  ogUrl: "https://szgames.com/blog",
};

/**
 * SEO meta tags for about page
 */
export const aboutPageSEO: SEOMetaTags = {
  title: "About SZ Games - Gullsher Gaming Empire",
  description:
    "Learn about SZ Games - Gullsher Gaming Empire. Discover our mission, vision, and team behind the leading gaming platform.",
  keywords: [
    "SZ Games",
    "about us",
    "gaming company",
    "Gullsher Games",
    "gaming platform",
  ],
  ogTitle: "About SZ Games",
  ogDescription: "Learn about SZ Games and our gaming mission.",
  ogUrl: "https://szgames.com/about",
};

/**
 * SEO meta tags for contact page
 */
export const contactPageSEO: SEOMetaTags = {
  title: "Contact SZ Games - Get in Touch",
  description:
    "Contact SZ Games for support, feedback, or partnership inquiries. Reach our team at support@szgames.com.",
  keywords: [
    "SZ Games",
    "contact us",
    "support",
    "customer service",
    "gaming support",
  ],
  ogTitle: "Contact SZ Games",
  ogDescription: "Get in touch with SZ Games support team.",
  ogUrl: "https://szgames.com/contact",
};
