import React from "react";
import GradientText from "./GradientText";
import GradientButton from "./GradientButton";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Play } from "lucide-react";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className="py-[5rem] flex flex-col justify-center items-center">
      <div className="text-white text-7xl font-bold mb-6 leading-tight text-center">
        Showcase Your <GradientText>Developer Identity</GradientText>
        In One Place
      </div>
      <div className="text-[#D1D5DB] text-[1.5rem] max-w-3xl text-center mb-[3rem]">
        Create a stunning portfolio that aggregates all your professional
        profiles, contributions, and achievements, from Github, Linkedin,
        Leetcode, and more.
      </div>
      <div className="flex gap-x-4">
        <motion.div
          whileHover={{
            scale: 1.05,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          className="hover:cursor-pointer"
        >
          <GradientButton className="py-[1rem] px-[2rem] text-[1rem] font-semibold flex gap-x-2 items-center hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300">
            <span>Get Started Free</span> <ArrowRight />
          </GradientButton>
        </motion.div>
        <button className="py-[14px] px-[30px] text-[1rem] text-[#D1D5DB] flex font-semibold bg-transparent border-[2px] border-gray-700 transition-all duration-300 hover:cursor-pointer hover:bg-gray-800 hover:scale-105 rounded-lg items-center gap-x-2">
          <Play className="h-5 w-5" />
          <span>Watch Demo</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
