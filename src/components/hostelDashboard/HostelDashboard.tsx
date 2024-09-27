import {
 Card,
 CardContent,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Bed, Home, Info, Layers, Users } from "lucide-react";
import React from "react";
import { PieChart } from "../shared/PieChart";
import FurnitureList from "../shared/furniture/furnitureList/FurnitureList";

interface HostelDashboardProps {
 title: string;
 hostelName: string;
 occupancyRate: number;
 totalRooms: number;
 occupiedRooms: number;
 floors: number;
 totalStudents: number;
 inHostel: number;
 outsideHostel: number;
 furnitureList: { item: string; count: number }[];
}

const HostelDashboard: React.FC<HostelDashboardProps> = ({
 hostelName,
 totalRooms,
 occupiedRooms,
 floors,
 totalStudents,
 inHostel,
 outsideHostel,
}) => {
 const chartData = [
  { browser: "Occupied", visitors: occupiedRooms, fill: "#00FFF5" },
 ];

 return (
  <Card className="bg-[#202020] border-none text-white rounded-lg max-w-full">
   <CardHeader className="flex justify-start items-start pb-4">
    <CardTitle className="text-xl font-semibold self-start">{hostelName}</CardTitle>
   </CardHeader>

   <CardContent className="flex flex-col items-center md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
    {/* Chart Section using the new PieChart */}
    <div className="flex flex-col items-center md:w-1/4">
     <PieChart data={chartData} title="" className="w-full h-auto" />
    </div>

    {/* Info Section */}
    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
     {/* Cards for Room Info */}
     {[
      { label: "Total Rooms", value: totalRooms, icon: <Home size={20} className="text-[#FF05C8]" /> },
      { label: "Occupied", value: occupiedRooms, icon: <Users size={20} className="text-[#00FFA3]" />, isHighlight: true },
      { label: "Floors", value: floors, icon: <Layers size={20} className="text-[#FF1010]" /> },
      { label: "Total Rooms", value: totalRooms, icon: <Home size={20} className="text-[#FF05C8]" /> },
      { label: "Occupied", value: occupiedRooms, icon: <Users size={20} className="text-[#00FFA3]" />, isHighlight: true },
      { label: "Floors", value: floors, icon: <Layers size={20} className="text-[#FF1010]" /> },
     ].map((item, index) => (
      <div key={index} className="bg-[#141414] flex justify-between p-4 rounded-lg space-x-2 items-center">
       <div className="flex">{item.icon}</div>
       <p className={`font-bold text-xl ${item.isHighlight ? 'text-yellow-400' : ''}`}>
        {item.value}
       </p>
       <p className="text-sm text-gray-400">{item.label}</p>
      </div>
     ))}

     {/* Second row - Total Students and distribution */}
     <div className="col-span-2 md:col-span-3 mt-4 bg-[#141414] p-4 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       {[
        { label: "Total Students", value: totalStudents, icon: <Users size={20} /> },
        { label: "In Hostel", value: inHostel, icon: <Bed size={20} />, isHighlight: true },
        { label: "Outside Hostel", value: outsideHostel, icon: <Info size={20} /> },
       ].map((item, index) => (
        <div key={index} className="text-center">
         {/* <div className="">{item.icon}</div> */}
         <p className={`font-bold text-xl ${item.isHighlight ? 'text-blue-400' : ''}`}>
          {item.value}
         </p>
         <p className="text-sm text-gray-400">{item.label}</p>
        </div>
       ))}
      </div>
     </div>
    </div>

    {/* Right section - Furniture List */}
    <div className="flex justify-center items-start sm:justify-center md:w-1/4 mt-4 md:mt-0">
     <FurnitureList />
    </div>
   </CardContent>
  </Card>
 );
};

export default HostelDashboard;
