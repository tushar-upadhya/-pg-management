import {
 Card,
 CardContent,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { ChartNoAxesCombined } from "lucide-react";
import React from "react";
import { Label, Pie, PieChart } from "recharts";
import FurnitureList from "../furnitureList/FurnitureList";
import { Button } from "../ui/button";

interface FurnitureStateProps {
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

const FurnitureState: React.FC<FurnitureStateProps> = ({
 hostelName,
 occupancyRate,
 totalRooms,
 occupiedRooms,
 floors,
 totalStudents,
 inHostel,
 outsideHostel,
}) => {
 const chartData = [
  { name: "Occupied", value: occupancyRate },
  { name: "Vacant", value: 100 - occupancyRate },
 ];

 return (
  <Card className="bg-[#202020] border-none text-white rounded-lg max-w-full">
   <CardHeader className="flex justify-start items-start pb-4">
    <CardTitle className="text-xl font-semibold self-start">{hostelName}</CardTitle>
   </CardHeader>

   <CardContent className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between items-start">

    {/* Info Section */}
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center max-w-full">
     {[
      { label: "Total Rooms", value: totalRooms },
      { label: "Occupied", value: occupiedRooms, isHighlight: true },
      { label: "Floors", value: floors },
     ].map((item, index) => (
      <div key={index} className="bg-[#141414] p-4 rounded-lg">
       <p className={`font-bold text-xl ${item.isHighlight ? "text-yellow-400" : ""}`}>
        {item.value}
       </p>
       <p className="text-sm text-gray-400">{item.label}</p>
      </div>
     ))}

     <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-[#141414] p-4 rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
       {[
        { label: "Total Students", value: totalStudents },
        { label: "In Hostel", value: inHostel, isHighlight: true },
        { label: "Outside Hostel", value: outsideHostel },
       ].map((item, index) => (
        <div key={index} className="text-center">
         <p className={`font-bold text-xl ${item.isHighlight ? "text-blue-400" : ""}`}>
          {item.value}
         </p>
         <p className="text-sm text-gray-400">{item.label}</p>
        </div>
       ))}
      </div>
     </div>
    </div>

    {/* Chart Section */}
    <div className="flex flex-col md:flex-row items-center justify-between md:space-x-4 p-4 bg-[#141414] w-full sm:w-auto md:w-[28rem]">
     {/* Button Section */}
     <div className="flex justify-start space-x-4 mb-4 md:mb-0">
      <Button className="p-3 bg-[#111111]">
       <ChartNoAxesCombined size={20} />
      </Button>
      <Button className="p-3 bg-[#111111]">
       <ChartNoAxesCombined size={20} />
      </Button>
      <Button className="p-3 bg-[#111111]">
       <ChartNoAxesCombined size={20} />
      </Button>
      <Button className="p-3 bg-[#111111]">
       <ChartNoAxesCombined size={20} />
      </Button>
     </div>

     <div className="flex justify-center items-center">
      <PieChart width={160} height={160}>
       <Pie
        data={chartData}
        dataKey="value"
        innerRadius={50}
        outerRadius={70}
        fill="#00E0FF"
        stroke="none"
       >
        <Label
         value={`${occupancyRate}%`}
         position="center"
         className="text-white font-bold text-lg"
        />
       </Pie>
      </PieChart>

      {/* Labels next to PieChart */}
      <div className="ml-4 grid grid-cols-1 gap-4 text-left">
       {[
        { label: "Occupancy Rate", value: `${occupancyRate}%`, color: "text-[#FFE605]" },
        { label: "Occupancy Rate", value: `${occupancyRate}%`, color: "text-[#FF05C8]" },
       ].map((item, index) => (
        <p key={index} className={`${item.color} font-bold text-lg`}>
         {item.label} <span>{item.value}</span>
        </p>
       ))}
      </div>
     </div>
    </div>

    {/* Furniture List */}
    <div className="flex justify-center items-start sm:justify-center md:w-1/4 mt-4 md:mt-0">
     <FurnitureList />
    </div>
   </CardContent>
  </Card>
 );
};

export default FurnitureState;
