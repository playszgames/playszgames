import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react";

/**
 * PHASE 6: Contact Info Component
 * 
 * Contact information sidebar
 * Features:
 * - Contact details
 * - Business hours
 * - Social links
 * - FAQ
 */

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Details */}
      <Card className="p-6 border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Contact Details</h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Mail className="text-blue-600 mt-1" size={20} />
            <div>
              <p className="font-semibold text-gray-900">Email</p>
              <a
                href="mailto:support@szgames.com"
                className="text-blue-600 hover:text-blue-700"
              >
                support@szgames.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="text-blue-600 mt-1" size={20} />
            <div>
              <p className="font-semibold text-gray-900">Phone</p>
              <a href="tel:+15551234567" className="text-blue-600 hover:text-blue-700">
                +1 (555) 123-4567
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="text-blue-600 mt-1" size={20} />
            <div>
              <p className="font-semibold text-gray-900">Address</p>
              <p className="text-gray-600">Gaming Hub, Global City</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Business Hours */}
      <Card className="p-6 border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="text-orange-600" size={20} />
          <h3 className="text-lg font-bold text-gray-900">Business Hours</h3>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Monday - Friday</span>
            <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Saturday</span>
            <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Sunday</span>
            <span className="font-semibold text-gray-900">Closed</span>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Response time: Within 24 hours on SZ Games support
        </p>
      </Card>

      {/* Social Media */}
      <Card className="p-6 border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Follow SZ Games</h3>

        <div className="flex gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors"
          >
            <Facebook className="text-blue-600" size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors"
          >
            <Twitter className="text-blue-600" size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors"
          >
            <Instagram className="text-blue-600" size={20} />
          </a>
        </div>
      </Card>

      {/* FAQ Link */}
      <Card className="p-6 border-gray-200 bg-blue-50 border-blue-200">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Help</h3>
        <p className="text-sm text-gray-700 mb-4">
          Check our FAQ section for quick answers to common questions about SZ Games.
        </p>
        <a href="/faq" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
          View FAQ →
        </a>
      </Card>
    </div>
  );
}
