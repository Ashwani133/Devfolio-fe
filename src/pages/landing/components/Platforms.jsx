import React from "react";
import { Github, Linkedin, X, Code } from "lucide-react";

const platforms = [
  {
    name: "GitHub",
    icon: Github,
    color: "text-gray-300",
    bgColor: "bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    color: "text-blue-400",
    bgColor: "bg-blue-900/20",
  },
  {
    name: "Twitter",
    icon: X,
    color: "text-cyan-400",
    bgColor: "bg-cyan-900/20",
  },
  {
    name: "LeetCode",
    icon: Code,
    color: "text-orange-400",
    bgColor: "bg-orange-900/20",
  },
];

const Platforms = () => {
  return (
    <div className="pb-32">
      <div className="flex flex-col justify-center max-w-7xl mx-auto">
        <div className="text-center space-y-3">
          <h3 className="text-5xl font-bold text-white">
            Connect all your platforms
          </h3>
          <p className="text-gray-400">
            Seamlessly integrate with the platforms you already use
          </p>
        </div>
        <div className="p-6 grid grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <div className="p-4 flex flex-col gap-y-4 justify-center items-center rounded-2xl backdrop-blur-xl bg-gray-800/40 border border-gray-700 hover:scale-105 duration-300 transition-all">
              <div className={`${platform.bgColor} p-2 rounded-xl`}>
                <platform.icon className={`${platform.color}`} />
              </div>
              <div className="text-white">{platform.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platforms;
