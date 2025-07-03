import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DeveloperCard from "@/components/DeveloperCard";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <main className="bg-[#111827]">
        <HeroSection />
        <DeveloperCard />
      </main>
    </div>
  );
};

export default Landing;
