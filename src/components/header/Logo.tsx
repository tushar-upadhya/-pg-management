import React from 'react';

const Logo: React.FC = () => {
 return (
  <div className="flex gap-1.5 text-lg font-semibold text-white whitespace-nowrap">
   <div className="flex shrink-0 w-6 h-6 bg-cyan-400 rounded-full" />
   <div>HMS</div>
  </div>
 );
};

export default Logo;
