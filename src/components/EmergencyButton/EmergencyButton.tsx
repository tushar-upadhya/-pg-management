import { Zap } from 'lucide-react';
import React from "react";

const EmergencyButton: React.FC = () => {
 const handleEmergencyClick = () => {
  alert("Emergency button clicked!");
 };

 return (
  <div className="flex w-[20rem] h-[20rem] flex-col items-center bg-[#111111] rounded-lg">
   <div className="relative w-20 h-20 mt-16 mb-3 bg-red-900 flex items-center justify-center rounded-full">
    <div className="w-14 h-14 border-2 border-dashed border-gray-400 flex items-center justify-center rounded-full">
     <Zap className="text-red-500 text-4xl" />
    </div>
   </div>

   <p className="text-white text-sm mb-4 text-center">
    Press only in Case of Emergency
   </p>

   <button
    className="bg-red-600 text-white text-lg font-bold py-2 px-6 rounded-md hover:bg-red-700 transition duration-200"
    onClick={handleEmergencyClick}
   >
    EMERGENCY
   </button>
  </div>
 );
};

export default EmergencyButton;
