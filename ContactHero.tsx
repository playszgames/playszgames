import { Mail, Phone, MapPin } from "lucide-react";

/**
 * PHASE 6: Contact Hero Component
 * 
 * Hero section for contact page
 * Features:
 * - Title and description
 * - Contact methods
 * - Professional design
 */

export function ContactHero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact SZ Games</h1>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl">
          Have questions about SZ Games? We'd love to hear from you! 
          Reach out to our team and we'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="flex items-center gap-3">
            <Mail className="text-orange-400" size={24} />
            <div>
              <p className="text-sm text-blue-200">Email</p>
              <p className="font-semibold">support@szgames.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-orange-400" size={24} />
            <div>
              <p className="text-sm text-blue-200">Phone</p>
              <p className="font-semibold">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-orange-400" size={24} />
            <div>
              <p className="text-sm text-blue-200">Location</p>
              <p className="font-semibold">Global Gaming Hub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
