import React from "react";
import { cn } from "@/lib/utils";

const GradientButton = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        "bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-2 rounded-lg text-white hover:cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
};

export default GradientButton;
