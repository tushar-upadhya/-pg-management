import AddButton from "@/components/button/AddButton";
import FurnitureState from "@/components/furniture/FurnitureState";
import RoomState from "@/components/roomstate/RoomState";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const hostelData = {
 title: "Hotel 1",
 hostelName: "Hostel 1",
 occupancyRate: 50,
 totalRooms: 458,
 occupiedRooms: 58,
 floors: 3,
 totalStudents: 6582,
 inHostel: 1569,
 outsideHostel: 2500,
 furnitureList: [
  { item: "Ceiling Fan", count: 50 },
  { item: "Center Table", count: 12 },
  { item: "Chairs", count: 123 },
  { item: "Refrigerator", count: 6 },
  { item: "Kettle", count: 12 },
 ],
 address: "Plot number 206, Tihri Nagar, Main Hawai Sadak, Jaipur - Rajasthan - 302021 India",
};

const RoomPage: React.FC = () => {
 return (
  <div className='p-4'>
   {/* Search Bar */}
   <div className="relative mb-4">
    <Input
     placeholder="Search Hostels..."
     className="text-white py-2 pl-10 w-[30rem] border-none p-8 outline-none bg-[#141414]"
    />
    <div className="absolute left-1 top-1/2 transform -translate-y-1/2 text-white">
     <Search />
    </div>
   </div>

   {/* Buttons */}
   <div className="flex justify-center mb-4 sm:justify-start">
    <div className="sm:flex gap-8">
     <AddButton
      onClick={() => console.log("Button clicked!")}
      label="Total Hostel"
      bgColor="#141414"
      textColor="white"
      borderColor="#141414"
      hoverBgColor="#141414"
      hoverTextColor="white"
      hoverBorderColor="blue-700"
      showDialog={false}
     />

     <AddButton
      onClick={() => console.log("Button clicked!")}
      label="+ Add Rooms"
      bgColor="#00868D"
      textColor="white"
      borderColor="#00868D"
      hoverBgColor="#00868D"
      hoverTextColor="white"
      hoverBorderColor="blue-700"
      showDialog={false}
     />
    </div>
   </div>

   {/* Room State */}
   <div className="mb-8">
    <RoomState {...hostelData} />
   </div>

   {/* Furniture State */}
   <div className="space-y-4">
    <FurnitureState {...hostelData} />
    <FurnitureState {...hostelData} />
   </div>

  </div>
 );
};

export default RoomPage;
