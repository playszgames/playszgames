import { HelpCircle } from "lucide-react";

/**
 * PHASE 6: FAQ Header Component
 * 
 * Header for FAQ page
 * Features:
 * - Title
 * - Description
 * - Professional design
 */

export function FAQHeader() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-4">
          <HelpCircle size={40} />
          <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
        </div>

        <p className="text-blue-100 text-lg max-w-2xl">
          Find answers to common questions about SZ Games platform, games, accounts, and more.
        </p>
      </div>
    </section>
  );
}
