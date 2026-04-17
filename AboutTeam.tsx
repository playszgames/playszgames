import { Card } from "@/components/ui/card";
import { Twitter, Linkedin, Mail } from "lucide-react";

/**
 * PHASE 6: About Team Component
 * 
 * Team members showcase
 * Features:
 * - Team member cards
 * - Roles
 * - Social links
 * - Professional design
 */

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  twitter?: string;
  linkedin?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ahmad Gullsher",
    role: "Founder & CEO",
    bio: "Gaming enthusiast with 10+ years of experience building gaming platforms.",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    email: "ahmad@szgames.com",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Product",
    bio: "Product strategist focused on delivering exceptional gaming experiences on SZ Games.",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    email: "sarah@szgames.com",
  },
  {
    name: "Mike Chen",
    role: "Lead Developer",
    bio: "Full-stack developer passionate about creating smooth, fast gaming platforms.",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    email: "mike@szgames.com",
  },
  {
    name: "Emma Davis",
    role: "Community Manager",
    bio: "Community leader building the vibrant SZ Games player community worldwide.",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    email: "emma@szgames.com",
  },
];

export function AboutTeam() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Meet the SZ Games Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-6 border-gray-200 hover:shadow-lg transition-shadow text-center">
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {member.name.charAt(0)}
              </div>

              {/* Name and Role */}
              <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-sm font-semibold text-blue-600 mb-3">{member.role}</p>

              {/* Bio */}
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{member.bio}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <Twitter size={16} className="text-blue-600" />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <Linkedin size={16} className="text-blue-600" />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <Mail size={16} className="text-blue-600" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
