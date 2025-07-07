import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/pages/landing/components/HeroSection";
import DeveloperCard from "@/pages/landing/components/DeveloperCard";
import Features from "@/pages/landing/components/Features";
import Platforms from "./components/Platforms";
import Reviews from "./components/Reviews";
import CTACard from "./components/CTACard";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <main className="bg-[#111827]">
        <HeroSection />
        <DeveloperCard />
        <Features />
        <Platforms />
        <Reviews />
        <CTACard />
      </main>
    </div>
  );
};

export default Landing;
