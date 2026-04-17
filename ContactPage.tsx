import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactHero } from "@/components/ContactHero";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { Breadcrumb } from "@/components/Breadcrumb";

/**
 * PHASE 6: Contact Page
 * 
 * Contact and support page
 * Features:
 * - Contact form
 * - Contact information
 * - Support channels
 * - FAQ
 * - SEO optimized
 */

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Contact Us", href: "/contact" }]} />
      </div>

      {/* Hero Section */}
      <ContactHero />

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm onSubmit={() => setSubmitted(true)} submitted={submitted} />
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
