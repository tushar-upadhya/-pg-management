import React from "react";

const BlinkingDot: React.FC = () => {
 return (
  <div className="flex items-center">
   <div className="h-3 w-3 bg-green-500 rounded-full animate-blink"></div>
   <span className="ml-2 text-white">Live</span>
  </div>
 );
};

export default BlinkingDot;
