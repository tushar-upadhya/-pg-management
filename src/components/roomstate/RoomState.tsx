import React from "react";

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

const RoomState: React.FC<FurnitureStateProps> = ({
 totalRooms,
 occupiedRooms,
 floors,
}) => {
 return (
  <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 max-w-[45rem] gap-8 text-center">
   {/* Cards for Room Info */}
   {[
    { label: "Total Rooms", value: totalRooms, isHighlight: true },
    { label: "Occupied", value: occupiedRooms, isHighlight: true },
    { label: "Floors", value: floors, isHighlight: true },
    { label: "Total Rooms", value: totalRooms, isHighlight: true },
   ].map((item, index) => (
    <div key={index} className="bg-[#141414] p-4 rounded-lg">
     <p className={`font-bold text-xl ${item.isHighlight ? 'text-yellow-400' : ''}`}>
      {item.value}
     </p>
     <p className="text-sm text-gray-400">{item.label}</p>
    </div>
   ))}
  </div>
 );
};

export default RoomState;
