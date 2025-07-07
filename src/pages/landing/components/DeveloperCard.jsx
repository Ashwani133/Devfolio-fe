import React from "react";
import { Github, Linkedin, X } from "lucide-react";
import { Button } from "../../../components/ui/button";
import GradientButton from "../../../components/GradientButton";
const DeveloperCard = () => {
  return (
    <div className="pb-32">
      <div className="flex gap-x-8 max-w-4xl mx-auto p-8 backdrop-blur-xl bg-gray-800/40 border border-gray-700 rounded-2xl">
        <div className="flex-1 flex flex-col gap-x-6 gap-y-4">
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
                <X className="h-5 w-5 text-white font-bold" />
              </div>
            </div>
          </div>
          <p className="text-gray-300">
            Building innovative solutions with modern technologies. Passionate
            about clean code and user experience.
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
        </div>
        <div className="flex-1 flex flex-col gap-y-4">
          <div className="flex gap-x-2">
            <Button className="bg-gray-700/50 hover:cursor-pointer hover:bg-gray-600 transition-all">
              Github
            </Button>
            <GradientButton className="px-4 py-1">LinkedIn</GradientButton>
            <Button className="bg-gray-700/50 hover:cursor-pointer hover:bg-gray-600 transition-all">
              X
            </Button>
          </div>
          <div className="bg-gray-700/50 p-4 rounded-xl space-y-3">
            <div className="flex justify-between">
              <p className="text-sm text-gray-400">commits this week</p>
              <p className="text-green-400 font-semibold">23</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-400">Pull requests</p>
              <p className="text-blue-400 font-semibold">8</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-400">Stars earned</p>
              <p className="text-yellow-400 font-semibold">156</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
