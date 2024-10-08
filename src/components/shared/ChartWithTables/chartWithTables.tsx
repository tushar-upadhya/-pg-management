import {
 Card,
 CardContent,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Label, Pie, PieChart } from "recharts";
import { Button } from "../../ui/button";
import FurnitureList from "../furniture/furnitureList/FurnitureList";

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
 address: string;
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
 address
}) => {

 const chartData = [
  { name: "Occupied", value: occupancyRate },
  { name: "Vacant", value: 100 - occupancyRate },
 ];

 return (
  <Card className="bg-[#202020] h-full border-none text-white rounded-lg max-w-full">
   <CardHeader className="flex justify-start items-start pb-4">
    <CardTitle className="text-xl font-semibold self-start">{hostelName}</CardTitle>
   </CardHeader>

   <CardContent className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">

    {/* Chart Section */}
    <div className="flex flex-col items-center md:w-1/4">
     <span>{address}</span>
     {/* first chart */}
     <PieChart width={250} height={250}>
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
     {/* button */}
     <div className="w-full mt-2 flex justify-center">
      <Button variant={'default'} className="bg-[#00868D] w-48">
       + Add Hostel
      </Button>
     </div>
    </div>

    {/* Info Section */}
    <div className="grid  grid-cols-2 md:grid-cols-3 gap-4 text-center">
     {/* Cards for Room Info */}
     {[
      { label: "Total Rooms", value: totalRooms },
      { label: "Occupied", value: occupiedRooms, isHighlight: true },
      { label: "Floors", value: floors },
      { label: "Total Rooms", value: totalRooms },
      { label: "Occupied", value: occupiedRooms, isHighlight: true },
      { label: "Floors", value: floors },
     ].map((item, index) => (
      <div key={index} className="bg-[#141414] p-4 rounded-lg">
       <p className={`font-bold text-xl ${item.isHighlight ? 'text-yellow-400' : ''}`}>
        {item.value}
       </p>
       <p className="text-sm text-gray-400">{item.label}</p>
      </div>
     ))}

     {/*  */}
     <div className="col-span-2 sm:w-[31.2rem] md:col-span-3 bg-[#141414] p-4 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       {[
        { label: "Total Students", value: totalStudents },
        { label: "In Hostel", value: inHostel, isHighlight: true },
        { label: "Outside Hostel", value: outsideHostel },
       ].map((item, index) => (
        <div key={index} className="text-center">
         <p className={`font-bold text-xl ${item.isHighlight ? 'text-blue-400' : ''}`}>
          {item.value}
         </p>
         <p className="text-sm text-gray-400">{item.label}</p>
        </div>
       ))}
      </div>
     </div>

     {/* Second row - Total Students and distribution */}
     <div className="col-span-2 sm:w-[61rem] md:col-span-3 bg-[#141414] p-4 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       {[
        { label: "Total Students", value: totalStudents },
        { label: "In Hostel", value: inHostel, isHighlight: true },
        { label: "Outside Hostel", value: outsideHostel },
       ].map((item, index) => (
        <div key={index} className="text-center">
         <p className={`font-bold text-xl ${item.isHighlight ? 'text-blue-400' : ''}`}>
          {item.value}
         </p>
         <p className="text-sm text-gray-400">{item.label}</p>
        </div>
       ))}
      </div>
     </div>

    </div>

    {/* second chart */}
    <div className="flex flex-col items-center md:w-1/4">
     <span className="text-lg font-semibold">Collection</span>
     <div className="-mt-4">
      <PieChart width={250} height={250}>
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
     </div>
    </div>

    {/* Right section - Furniture List */}
    <div className="flex justify-center items-start sm:justify-center md:w-1/4 md:mt-0">
     <div className="w-full">
      <FurnitureList />
     </div>
    </div>
   </CardContent>
  </Card>
 );
};

export default ChartWithTables;
