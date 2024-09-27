import { Button } from "@/components/ui/button";
import {
 Card,
 CardContent,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { ChartNoAxesCombined } from "lucide-react";
import React from "react";
import { Label, Pie, PieChart } from "recharts";
import FurnitureList from "./furnitureList/FurnitureList";

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
 floors
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

   <CardContent className="flex flex-col items-center md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">

    {/* Info Section */}
    <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 max-w-[25rem] gap-4 text-center">
     {/* Cards for Room Info */}
     {[
      { label: "Total Rooms", value: totalRooms },
      { label: "Occupied", value: occupiedRooms, isHighlight: true },
      { label: "Floors", value: floors },
      { label: "Floors", value: floors },
     ].map((item, index) => (
      <div key={index} className="bg-[#141414] p-4 rounded-lg">
       <p className={`font-bold text-xl ${item.isHighlight ? 'text-yellow-400' : ''}`}>
        {item.value}
       </p>
       <p className="text-sm text-gray-400">{item.label}</p>
      </div>
     ))}
    </div>

    {/* Chart Section */}
    <div className="flex flex-col items-center justify-between p-8 md:w-[33rem] bg-[#141414]">
     {/* Buttons Section */}
     <div className="items-start -ml-[10rem] -mb-[2rem] hidden lg:flex">
      <div className="flex items-start justify-start space-x-4 -ml-[2.5em] -mt-[5.5rem]">
       <Button className="p-3 bg-[#111111] gap-2">
        <ChartNoAxesCombined size={20} />
        H1
       </Button>
       <Button className="p-3 bg-[#111111] gap-2">
        <ChartNoAxesCombined size={20} />
        H1
       </Button>
       <Button className="p-3 bg-[#111111] gap-2">
        <ChartNoAxesCombined size={20} />
        H1
       </Button>
       <Button className="p-3 bg-[#111111] gap-2">
        <ChartNoAxesCombined size={20} />
        H1
       </Button>
      </div>
     </div>

     <div className="flex flex-col sm:flex-row items-center justify-center">
      <PieChart width={200} height={200} className="mb-4 sm:mb-0">
       <Pie
        data={chartData}
        dataKey="value"
        innerRadius={70}
        outerRadius={90}
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
      {/* Right Label for the PieChart */}
      <div className="ml-0 sm:ml-8 items-center grid grid-cols-2 h-52 text-s text-gray-400">
       <p className="space-y-8">
        Expected <span className="font-bold text-lg p-4"> {occupancyRate}%</span>
       </p>
       <p className="">
        Collected <span className="font-bold text-lg p-4">{occupancyRate}%</span>
       </p>
       <p className="">
        Occupancy  <span className="font-bold p-4 text-lg text-[#FFE605]">{occupancyRate}%</span>
       </p>
       <p className="">
        Overdue <span className="font-bold p-4 text-lg text-[#FF05C8]">{occupancyRate}%</span>
       </p>
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

export default FurnitureState;
