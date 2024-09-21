import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { ScrollArea } from '@radix-ui/themes';
import React, { useState } from "react";
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';

interface Defaulter {
 name: string;
 avatar: string;
 issue: string;
 fine: string;
 date: string;
}

const defaultersList: Defaulter[] = [
 {
  name: "Abhinav Srivastva",
  avatar: "https://via.placeholder.com/40",
  issue: "Broke 4 Test Tubes in Hostel Mess",
  fine: "₹1,500",
  date: "12 Nov 2022",
 },
 {
  name: "Rohit Sharma",
  avatar: "https://via.placeholder.com/40",
  issue: "Lost a library book",
  fine: "₹500",
  date: "20 Sep 2022",
 },
 // Additional dummy data...
];

const DefaultersList: React.FC = () => {
 const [searchTerm, setSearchTerm] = useState<string>("");

 const filteredDefaulters = defaultersList.filter(defaulter =>
  defaulter.name.toLowerCase().includes(searchTerm.toLowerCase())
 );

 return (
  <div className="p-4 md:p-6 rounded-md text-white">
   {/* Header */}
   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-4 sm:space-y-0">
    <h2 className="text-lg font-semibold">Defaulters Students</h2>
    <Button className="bg-[#1FCFF1] hover:bg-[#17bcd7] text-white w-full sm:w-auto">+Add</Button>
   </div>

   {/* Search Bar */}
   <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-4 sm:space-y-0 mb-4">
    <Input
     placeholder="Search ..."
     className="bg-[#3C3C3C] text-white p-2 rounded-md border-none w-full"
     onChange={(e) => setSearchTerm(e.target.value)}
    />
   </div>

   {/* Defaulters List */}
   <ScrollArea type="always" scrollbars="vertical" style={{ height: 418 }}>
    <div className="space-y-4">
     {filteredDefaulters.map((defaulter, index) => (
      <Card key={index} className="bg-[#1C1C1C] p-4 [border:none] [outline:none] rounded-md shadow-md text-white">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        {/* Name and Avatar aligned */}
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
         <Avatar className="w-10 h-10">
          <AvatarImage src={defaulter.avatar} alt={defaulter.name} className="rounded-full" />
          <AvatarFallback>{defaulter.name.charAt(0)}</AvatarFallback>
         </Avatar>
         <h4 className="font-semibold text-sm">{defaulter.name}</h4>
        </div>
       </div>

       {/* Issue */}
       <p className="text-gray-400 mt-2 text-wrap text-sm sm:text-base lg:text-lg leading-snug">
        {defaulter.issue}
       </p>

       {/* Fine and Date */}
       <div className="flex flex-col sm:flex-row sm:space-x-4 text-sm text-gray-400 mt-2">
        <Button
         variant={'outline'}
         className="bg-transparent hover:bg-inherit hover:text-white border-gray-500 mb-2 sm:mb-0"
        >
         Fine: {defaulter.fine}
        </Button>
        <Button
         variant={'outline'}
         className="bg-transparent hover:bg-inherit hover:text-white border-gray-500"
        >
         {defaulter.date}
        </Button>
       </div>

       {/* Buttons */}
       <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-2 mt-4">
        <Button
         variant="outline"
         className="w-full sm:w-[50%] text-red-400 font-semibold bg-inherit border-red-400 hover:bg-red-300 hover:text-white mb-2 sm:mb-0"
        >
         Remove Defaulter
        </Button>
        <Button
         variant="outline"
         className="w-full sm:w-[50%] border-cyan-400 font-semibold bg-inherit text-cyan-400 hover:bg-cyan-500 hover:text-white"
        >
         Send Payment Link
        </Button>
       </div>
      </Card>
     ))}
    </div>
   </ScrollArea>
  </div>
 );
};

export default DefaultersList;
