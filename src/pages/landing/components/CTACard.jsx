import React from "react";
import GradientButton from "@/components/GradientButton";
import GradientText from "@/components/GradientText";

const CTACard = () => {
  return (
    <div className="pb-32">
      <div className="max-w-4xl p-12 flex flex-col justify-center items-center gap-y-18 rounded-xl mx-auto border border-gray-700 backdrop-blur-xl">
        <div className="text-center space-y-6">
          <h3 className="text-5xl font-bold text-white">
            Ready to showcase your
          </h3>
          <GradientText className="text-5xl font-bold">
            developer journey
          </GradientText>
          <p className="text-gray-400 text-xl">Join thousand of developers who trust DevFolio to showcase their skills</p>
        </div>
        <GradientButton className="font-bold px-16 py-4">Start Building Your Profile</GradientButton>
      </div>
    </div>
  );
};

export default CTACard;
