import { ExternalLink } from "lucide-react"; // For the external link icon
import React from "react";

const StudentState: React.FC = () => {
 const data = [
  { title: "Total Students", value: 3569, color: "text-white" },
  { title: "In Hostel", value: 1569, color: "text-[#00FFF5]" },
  { title: "Outside Hostel", value: 2500, color: "text-white" },
  { title: "Fees Defaulters", value: 150, color: "text-[#FFE605]", isButton: true },
  { title: "Students Assigned", value: 2569, color: "text-[#FF05C8]" },
  { title: "Students Removed", value: 1000, color: "text-[#FF0000]" },
 ];

 return (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-[#202020] rounded-lg">
   {data.map((item, index) => (
    <div key={index} className="p-4 bg-[#111111] rounded-lg shadow-md flex flex-col justify-between space-y-4">
     {/* Title and Icon */}
     <div className="flex items-center justify-between">
      <span className="text-sm text-gray-400">{item.title}</span>
      <ExternalLink size={16} className="text-gray-400" />
     </div>

     {/* Value */}
     <div className={`text-3xl font-bold ${item.color}`}>
      {item.value}
     </div>

     {item.isButton && (
      <button className="mt-2 bg-gray-700 text-white py-2 px-4 rounded-md w-full">
       View List
      </button>
     )}
    </div>
   ))}
  </div>
 );
};

export default StudentState;
