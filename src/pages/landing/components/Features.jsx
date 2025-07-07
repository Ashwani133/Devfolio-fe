import React from "react";
import FeatureCards from "@/components/FeatureCards";
import { Activity, Star, TrendingUp, ExternalLink } from "lucide-react";

const features = [
  {
    icon: <Activity />,
    title: "Real-time Sync",
    description:
      "Automatically sync your latest contributions, projects, and achievements across all platforms.",
  },
  {
    icon: <Star />,
    title: "Beautiful Profiles",
    description:
      "Create stunning public profiles with customizable themes and layouts that showcase your skills.",
  },
  {
    icon: <TrendingUp />,
    title: "Analytics Dashboard",
    description:
      "Track your growth with detailed analytics and insights across all your developer platforms.",
  },
  {
    icon: <ExternalLink />,
    title: "One Link",
    description:
      "Share a single beautiful URL that contains all your professional profiles and achievements.",
  },
];

const Features = () => {
  return (
    <div className="pb-32 max-w-7xl mx-auto">
      <div className="flex flex-col justify-center space-y-12">
        <div className="space-y-8">
          <div className="text-5xl font-bold text-white text-center">
            <h2>Everything you need to</h2>{" "}
            <h2 className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              showcase your skills
            </h2>
          </div>
          <p className="max-w-3xl mx-auto text-center text-xl text-gray-300">
            Poweful features designed to help developers create impressive
            portfolios that stand out
          </p>
        </div>
        <div className="max-w-7xl p-6 grid grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCards
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
