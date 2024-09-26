import AddButton from "@/components/button/AddButton";
import ChartWithTables from "@/components/ChartWithTables/chartWithTables";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

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
 address: "Plot number 206, Tihri Nagar, Main Hawai Sadak, Jaipur - Rajasthan - 302021 India", // New address
};

const HostelsPage: React.FC = () => {
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
    <div className="sm:flex gap-8 ">
     <AddButton
      onClick={() => console.log("Button clicked!")}
      label="Total Hostel"
      bgColor="#141414"
      textColor="white"
      borderColor=""
      hoverBgColor="blue-700"
      hoverTextColor="white"
      hoverBorderColor="blue-700"
      showDialog={false}
     />
     <AddButton
      onClick={() => console.log("Button clicked!")}
      label="+ Add Furniture"
      bgColor="#00868D"
      textColor="white"
      borderColor="#00868D"
      hoverBgColor="#00866D"
      hoverTextColor="white"
      hoverBorderColor="blue-700"
      showDialog={false}
     />
    </div>
   </div>

   {/* Chart with Tables */}
   <div className='grid w-full h-full grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4'>
    <ChartWithTables {...hostelData} />
    <ChartWithTables {...hostelData} />
   </div>
  </div>
 );
};

export default HostelsPage;
