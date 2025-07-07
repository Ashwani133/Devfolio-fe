import React from "react";

const FeatureCards = ({ title, icon, description }) => {
  return (
    <div className="group p-6 rounded-2xl backdrop-blur-xl bg-gray-800/40 border border-gray-700 space-y-3 hover:border-cyan-500/50 hover:scale-105 duration-300 transition-all shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCards;
