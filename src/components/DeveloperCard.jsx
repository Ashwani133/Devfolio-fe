import React from "react";
import { Github, Linkedin, X } from "lucide-react";
import { Button } from "./ui/button";
import GradientButton from "./GradientButton";
const DeveloperCard = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-y-6 p-8 backdrop-blur-xl bg-gray-800/40 border-gray-700 rounded-2xl">
      <div className="flex gap-4 items-center">
        <div className="h-16 w-16 flex justify-center items-center rounded-full border border-white">
          pic
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Developer</h2>
          <p className="text-gray-400">Full stack developer</p>
          <div className="flex gap-2">
            <Github className="h-4 w-4 text-gray-400" />
            <Linkedin className="h-4 w-4 text-blue-400" />
            <X className="h-4 w-4 text-black-400" />
          </div>
        </div>
      </div>
      <p className="text-gray-300">
        Building innovative solutions with modern technologies. Passionate about
        clean code and user experience.
      </p>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-gray-700/50">
          <div className="text-2xl font-bold text-cyan-400">24</div>
          <div className="text-sm text-gray-400">Projects</div>
        </div>
        <div className="p-4 rounded-xl bg-gray-700/50">
          <div className="text-2xl font-bold text-purple-400">220</div>
          <div className="text-sm text-gray-400">Contributions</div>
        </div>
        <div className="p-4 rounded-xl bg-gray-700/50">
          <div className="text-2xl font-bold text-pink-400">123</div>
          <div className="text-sm text-gray-400">Following</div>
        </div>
      </div>
      <div className="flex gap-x-2">
        <Button>Github</Button>
        <GradientButton className="px-4 py-1">LinkedIn</GradientButton>
        <Button>X</Button>
      </div>
    </div>
  );
};

export default DeveloperCard;
