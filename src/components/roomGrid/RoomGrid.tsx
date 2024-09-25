import { Bed, Home, X } from "lucide-react";
import React, { useState } from "react";

interface Room {
 number: number;
 status: 'occupied' | 'vacant' | 'highlight';
}

interface RoomGridProps {
 bedType: string;
 floorNo: number;
 building: string;
 rooms: Room[];
}

const RoomGrid: React.FC<RoomGridProps> = ({ bedType, floorNo, building, rooms }) => {

 const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
 const handleRoomClick = (room: Room) => {
  if (room.status === 'occupied') {
   setSelectedRoom(room);
  }
 };

 const closeModal = () => {
  setSelectedRoom(null);
 };

 return (
  <div className="p-4 bg-[#202020] text-white max-w-xl mx-auto rounded-md shadow-lg">
   {/* Header */}
   <div className="flex justify-between items-center mb-4">
    <div className="flex items-center space-x-2">
     <Bed className="text-xl" />
     <span className="text-lg font-semibold">{bedType}</span>
    </div>
    <div className="flex items-center space-x-4">
     <span className="text-sm">Floor No. {floorNo}</span>
     <Home className="text-lg" />
     <span className="text-sm">{building}</span>
    </div>
   </div>

   {/* Grid */}
   <div className="grid grid-cols-7 gap-2">
    {rooms.map((room) => (
     <div
      key={room.number}
      onClick={() => handleRoomClick(room)}
      className={`p-2 text-center rounded-md font-semibold text-xs cursor-pointer ${room.status === 'occupied'
       ? 'bg-red-600'
       : room.status === 'highlight'
        ? 'bg-orange-500'
        : 'bg-[#111111]'
       }`}
     >
      {room.number}
     </div>
    ))}
   </div>

   {/* Modal */}
   {selectedRoom && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
     <div className="bg-black text-slate-400 p-6 rounded-md shadow-lg max-w-md w-full">
      <div className="flex justify-between items-center mb-4">
       <h2 className="text-lg font-bold">Room {selectedRoom.number} Details</h2>
       <button onClick={closeModal} className="text-black">
        <X className="h-6 w-6" />
       </button>
      </div>
      <p className="text-sm">This room is currently occupied.</p>
      <p className="text-sm mt-2">Status: {selectedRoom.status}</p>
      <button
       onClick={closeModal}
       className="mt-4 bg-red-600 text-white py-1 px-3 rounded-md"
      >
       Close
      </button>
     </div>
    </div>
   )}
  </div>
 );
};

export default RoomGrid;
