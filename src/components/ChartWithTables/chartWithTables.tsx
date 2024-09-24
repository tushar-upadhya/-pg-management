import {
 Card,
 CardContent,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Label, Pie, PieChart } from "recharts";
import FurnitureList from "../furnitureList/FurnitureList";

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

const ChartWithTables: React.FC<HostelDashboardProps> = ({
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
  <Card className="bg-[#202020] h-auto sm:h-[25rem] border-none text-white p-5 rounded-lg max-w-full">
   <CardHeader className="flex justify-start items-start pb-4">
    <CardTitle className="text-xl font-semibold self-start">{hostelName}</CardTitle>
   </CardHeader>

   <CardContent className="flex flex-col md:flex-row justify-start items-start space-y-6 md:space-y-0 md:space-x-1">
    {/* Chart Section */}
    <div className="flex flex-col items-center justify-center mt-4 md:mt-12 md:w-1/6">
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
    </div>

    {/* Middle section - Room and Occupancy Info */}
    <div className="flex-1 grid grid-cols-2 sm:w-full md:grid-cols-3 mt-4 md:mt-0 gap-4">
     {/* First row */}
     <div className="bg-[#141414] p-4 rounded-lg text-center h-full flex flex-col justify-center">
      <p className="font-bold text-xl">{totalRooms}</p>
      <p className="text-sm text-gray-400">Total Rooms</p>
     </div>
     <div className="bg-[#141414] p-4 rounded-lg text-center h-full flex flex-col justify-center">
      <p className="font-bold text-xl text-yellow-400">{occupiedRooms}</p>
      <p className="text-sm text-gray-400">Occupied</p>
     </div>
     <div className="bg-[#141414] p-4 rounded-lg text-center h-full flex flex-col justify-center">
      <p className="font-bold text-xl">{floors}</p>
      <p className="text-sm text-gray-400">Floors</p>
     </div>

     {/* Total Students and their distribution */}
     <div className="col-span-2 w-full md:w-auto md:col-span-3 bg-[#141414] p-4 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
       <div>
        <p className="font-bold text-xl">{totalStudents}</p>
        <p className="text-sm text-gray-400">Total Students</p>
       </div>
       <div>
        <p className="font-bold text-xl text-blue-400">{inHostel}</p>
        <p className="text-sm text-gray-400">In Hostel</p>
       </div>
       <div>
        <p className="font-bold text-xl">{outsideHostel}</p>
        <p className="text-sm text-gray-400">Outside Hostel</p>
       </div>
      </div>
     </div>
    </div>

    {/* Second PieChart */}
    <div className="flex justify-center md:justify-start bg-[#141414] mt-4 md:mt-0">
     <PieChart width={160} height={200}>
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
    </div>

    {/* Right section - Furniture List */}
    <div className="flex justify-center md:justify-end items-start mt-4 md:w-1/3">
     <FurnitureList />
    </div>
   </CardContent>
  </Card>
 );
};

export default ChartWithTables;
