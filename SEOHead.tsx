import { useEffect } from "react";
import { SEOMetaTags } from "@/lib/seo";

/**
 * PHASE 8: SEO Head Component
 * 
 * Update document head with SEO meta tags
 * Features:
 * - Meta tags
 * - Open Graph
 * - Twitter Card
 * - Canonical URL
 */

interface SEOHeadProps {
  seo: SEOMetaTags;
}

export function SEOHead({ seo }: SEOHeadProps) {
  useEffect(() => {
    // Update title
    document.title = seo.title;

    // Update or create meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.name = name;
        document.head.appendChild(element);
      }
      element.content = content;
    };

    const updateOGMeta = (property: string, content: string) => {
      let element = document.querySelector(
        `meta[property="${property}"]`
      ) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Standard meta tags
    updateMeta("description", seo.description);
    updateMeta("keywords", seo.keywords.join(", "));

    // Open Graph tags
    updateOGMeta("og:title", seo.ogTitle || seo.title);
    updateOGMeta("og:description", seo.ogDescription || seo.description);
    if (seo.ogImage) {
      updateOGMeta("og:image", seo.ogImage);
    }
    if (seo.ogUrl) {
      updateOGMeta("og:url", seo.ogUrl);
    }

    // Twitter Card
    updateMeta("twitter:card", seo.twitterCard || "summary_large_image");
    updateMeta("twitter:title", seo.title);
    updateMeta("twitter:description", seo.description);

    // Canonical URL
    if (seo.canonical) {
      let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = seo.canonical;
    }
  }, [seo]);

  return null;
}
