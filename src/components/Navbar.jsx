import React from "react";
import GradientText from "./GradientText";
import GradientButton from "./GradientButton";
import { Sun } from "lucide-react";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <div className="bg-gray-900 py-[1rem] border-b border-gray-800 backdrop-blur">
      <div className="flex justify-between px-[2rem]">
        <div className="flex gap-x-[1.5rem]">
          <div className="text-white">Logo</div>
          <div>
            <GradientText className={"font-bold text-[20px]"}>
              DevFolio
            </GradientText>
          </div>
        </div>
        <div className="flex items-center gap-x-[2rem]">
          <div className="text-gray-500 text-[14px] font-medium hover:cursor-pointer hover:text-cyan-400">
            Feature
          </div>
          <div className="text-gray-500 text-[14px] font-medium hover:cursor-pointer hover:text-cyan-400">
            Showcase
          </div>
          <div className="text-gray-500 text-[14px] font-medium hover:cursor-pointer hover:text-cyan-400">
            Pricing
          </div>
          <button className="px-2 py-2 bg-gray-800 rounded-lg hover:cursor-pointer">
            <Sun className="w-4 h-4 text-[#facc15]" />
          </button>
          <motion.div
            className="rounded-lg"
            whileHover={{
              scale: 1.08,
              transition: { duration: 0.3, ease: "easeInOut" },
              boxShadow: "0px 5px 10px rgba(6,182,212,0.25)",
            }}
          >
            <GradientButton className="text-white font-medium hover:cursor-pointer">
              Get Started
            </GradientButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
