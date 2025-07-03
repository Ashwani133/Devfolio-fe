import React from "react";

const GradientText = ({ children, className, ...props }) => {
  return (
    <div
      className={`bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent 
        ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default GradientText;
