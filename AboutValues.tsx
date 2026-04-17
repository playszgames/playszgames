import { Card } from "@/components/ui/card";
import { Heart, Shield, Zap, Users } from "lucide-react";

/**
 * PHASE 6: About Values Component
 * 
 * Company core values
 * Features:
 * - Value statements
 * - Icons
 * - Descriptions
 * - Professional design
 */

export function AboutValues() {
  const values = [
    {
      icon: Heart,
      title: "Player First",
      description:
        "Everything we do on SZ Games is centered around providing the best experience for our players.",
    },
    {
      icon: Shield,
      title: "Quality & Safety",
      description:
        "We ensure all games on SZ Games are safe, secure, and of the highest quality standards.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We continuously innovate to bring new features and experiences to SZ Games platform.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We foster a vibrant community where players on SZ Games can connect and share their passion.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
