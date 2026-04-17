/**
 * CONSOLIDATED UTILITIES FILE
 * All utility functions, SEO, performance, and responsive helpers
 */

// ============================================================================
// SEO UTILITIES
// ============================================================================

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
}

export const generateMetaTags = (seo: SEOData) => {
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords.join(', '),
    ogTitle: seo.title,
    ogDescription: seo.description,
    ogImage: seo.image || 'https://szgames.com/og-image.png',
    ogUrl: seo.url || 'https://szgames.com',
    twitterTitle: seo.title,
    twitterDescription: seo.description,
    twitterImage: seo.image,
  };
};

export const generateGameSchema = (game: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: game.title,
    description: game.description,
    applicationCategory: 'Game',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: game.rating,
      ratingCount: Math.floor(game.plays / 100),
    },
  };
};

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SZ Games',
    url: 'https://szgames.com',
    logo: 'https://szgames.com/logo.png',
    description: 'Play 500+ free online games on SZ Games - the ultimate gaming platform',
    sameAs: [
      'https://facebook.com/szgames',
      'https://twitter.com/szgames',
      'https://youtube.com/szgames',
    ],
  };
};

export const generateWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SZ Games',
    url: 'https://szgames.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://szgames.com/games?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
};

// ============================================================================
// PERFORMANCE UTILITIES
// ============================================================================

export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return (...args: any[]) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const lazyLoad = (element: HTMLImageElement) => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          observer.unobserve(img);
        }
      });
    });
    observer.observe(element);
  } else {
    element.src = element.dataset.src || '';
  }
};

export const preloadImage = (src: string) => {
  const img = new Image();
  img.src = src;
};

export const trackWebVitals = () => {
  if ('web-vital' in window) {
    console.log('Web Vitals tracking enabled');
  }
};

export const optimizeBundle = () => {
  // Code splitting hints
  return {
    homeChunk: () => import('@/pages/index'),
    gamesChunk: () => import('@/pages/index'),
  };
};

// ============================================================================
// RESPONSIVE UTILITIES
// ============================================================================

export const breakpoints = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const useMediaQuery = (query: string): boolean => {
  if (typeof window === 'undefined') return false;
  const mediaQuery = window.matchMedia(query);
  return mediaQuery.matches;
};

export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < breakpoints.md;
};

export const isTablet = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= breakpoints.md && window.innerWidth < breakpoints.lg;
};

export const isDesktop = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= breakpoints.lg;
};

export const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
  if (isMobile()) return 'mobile';
  if (isTablet()) return 'tablet';
  return 'desktop';
};

export const hasNotch = (): boolean => {
  if (typeof window === 'undefined') return false;
  return (
    (window.navigator as any).standalone === true ||
    window.matchMedia('(display-cutout: viewport-fit)').matches
  );
};

export const getOrientation = (): 'portrait' | 'landscape' => {
  if (typeof window === 'undefined') return 'portrait';
  return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
};

export const getSafeAreaInsets = () => {
  if (typeof window === 'undefined') {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  const root = document.documentElement;
  return {
    top: parseInt(getComputedStyle(root).getPropertyValue('--safe-area-inset-top') || '0'),
    right: parseInt(getComputedStyle(root).getPropertyValue('--safe-area-inset-right') || '0'),
    bottom: parseInt(getComputedStyle(root).getPropertyValue('--safe-area-inset-bottom') || '0'),
    left: parseInt(getComputedStyle(root).getPropertyValue('--safe-area-inset-left') || '0'),
  };
};

export const isTouchDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return (
    (typeof window !== 'undefined' && 'ontouchstart' in window) ||
    (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0)
  );
};

// ============================================================================
// CACHING UTILITIES
// ============================================================================

const cache = new Map<string, { data: any; timestamp: number }>();

export const setCache = (key: string, data: any, ttl: number = 3600000) => {
  cache.set(key, { data, timestamp: Date.now() + ttl });
};

export const getCache = (key: string) => {
  const item = cache.get(key);
  if (!item) return null;
  if (Date.now() > item.timestamp) {
    cache.delete(key);
    return null;
  }
  return item.data;
};

export const clearCache = () => {
  cache.clear();
};

// ============================================================================
// VALIDATION UTILITIES
// ============================================================================

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phone.length >= 10 && phoneRegex.test(phone);
};

export const sanitizeInput = (input: string): string => {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// ============================================================================
// FORMATTING UTILITIES
// ============================================================================

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

export const formatDate = (date: Date | string): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  if (minutes > 0) {
    return `${minutes}m ${secs}s`;
  }
  return `${secs}s`;
};

// ============================================================================
// STORAGE UTILITIES
// ============================================================================

export const setLocalStorage = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('LocalStorage error:', e);
  }
};

export const getLocalStorage = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (e) {
    console.error('LocalStorage error:', e);
    return null;
  }
};

export const removeLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error('LocalStorage error:', e);
  }
};

// ============================================================================
// ANALYTICS UTILITIES
// ============================================================================

export const trackEvent = (eventName: string, eventData?: any) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventData);
  }
};

export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: path,
    });
  }
};

// ============================================================================
// URL UTILITIES
// ============================================================================

export const getQueryParam = (param: string): string | null => {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
};

export const buildQueryString = (params: Record<string, any>): string => {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      searchParams.append(key, String(value));
    }
  });
  return searchParams.toString();
};

// ============================================================================
// ARRAY UTILITIES
// ============================================================================

export const chunk = <T,>(array: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

export const unique = <T,>(array: T[]): T[] => {
  const uniqueSet = new Set(array);
  return Array.from(uniqueSet);
};

export const shuffle = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// ============================================================================
// OBJECT UTILITIES
// ============================================================================

export const deepClone = <T,>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

export const mergeObjects = <T,>(obj1: T, obj2: Partial<T>): T => {
  return { ...obj1, ...obj2 };
};
