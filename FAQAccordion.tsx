import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, Search } from "lucide-react";

/**
 * PHASE 6: FAQ Accordion Component
 * 
 * Expandable FAQ items
 * Features:
 * - Search functionality
 * - Category filtering
 * - Expandable items
 * - SEO optimized
 */

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface FAQAccordionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const faqItems: FAQItem[] = [
  {
    category: "General",
    question: "What is SZ Games?",
    answer:
      "SZ Games is a free online gaming platform featuring 500+ games across multiple categories. Play instantly without downloads or registration on SZ Games.",
  },
  {
    category: "General",
    question: "Is SZ Games free to play?",
    answer:
      "Yes! All games on SZ Games are completely free to play. There are no hidden costs or premium requirements.",
  },
  {
    category: "Account",
    question: "Do I need to create an account to play on SZ Games?",
    answer:
      "No, you can play most games on SZ Games without creating an account. However, creating an account allows you to save progress and compete on leaderboards.",
  },
  {
    category: "Account",
    question: "How do I reset my SZ Games password?",
    answer:
      "Visit the login page on SZ Games, click 'Forgot Password', enter your email, and follow the instructions sent to your inbox.",
  },
  {
    category: "Games",
    question: "Can I play SZ Games on mobile?",
    answer:
      "Yes! All games on SZ Games are optimized for mobile devices. Play on your smartphone or tablet anytime, anywhere.",
  },
  {
    category: "Games",
    question: "How often are new games added to SZ Games?",
    answer:
      "We add new games to SZ Games regularly. Check back often to discover fresh gaming experiences on our platform.",
  },
  {
    category: "Support",
    question: "How do I report a bug on SZ Games?",
    answer:
      "Visit our Contact page and select 'Bug Report' from the category dropdown. Provide details about the issue and our SZ Games team will investigate.",
  },
  {
    category: "Support",
    question: "What should I do if a game isn't working on SZ Games?",
    answer:
      "Try refreshing the page, clearing your browser cache, or using a different browser. If the issue persists, contact our SZ Games support team.",
  },
];

const categories = ["all", "General", "Account", "Games", "Support"];

export function FAQAccordion({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}: FAQAccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filteredItems = faqItems.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-3xl mx-auto">
      {/* Search */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-4 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search SZ Games FAQ..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-4 py-2 rounded-full transition-all font-semibold ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat === "all" ? "All Questions" : cat}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      {filteredItems.length > 0 ? (
        <div className="space-y-3">
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              className="border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="text-left">
                  <p className="text-xs font-bold text-blue-600 mb-1">
                    {item.category}
                  </p>
                  <h3 className="font-semibold text-gray-900">{item.question}</h3>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-gray-600 transition-transform flex-shrink-0 ml-4 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">
            No FAQ items found. Try a different search on SZ Games.
          </p>
        </div>
      )}
    </div>
  );
}
