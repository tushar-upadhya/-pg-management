import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import React, { useState } from "react";
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface StudentUpdate {
 name: string;
 avatar: string;
 time: string;
 icon: string;
}

const initialUpdates: StudentUpdate[] = [
 { name: "Ramakant Sharma", avatar: "https://via.placeholder.com/40", time: "12:30", icon: "📝" },
 { name: "Ramakant Sharma", avatar: "https://via.placeholder.com/40", time: "12:30", icon: "📝" },
];

const StudentUpdateComponent: React.FC = () => {
 const [updates, setUpdates] = useState<StudentUpdate[]>(initialUpdates);
 const [loading, setLoading] = useState(false);

 // Simulate loading more data
 const loadMoreUpdates = () => {
  setLoading(true);
  setTimeout(() => {
   const moreUpdates: StudentUpdate[] = [
    { name: "Ramakant Sharma", avatar: "https://via.placeholder.com/40", time: "12:30", icon: "📝" },
    { name: "Ramakant Sharma", avatar: "https://via.placeholder.com/40", time: "12:30", icon: "📝" },
   ];
   setUpdates(prev => [...prev, ...moreUpdates]);
   setLoading(false);
  }, 1000);
 };

 const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
  const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
  if (scrollTop + clientHeight >= scrollHeight - 50 && !loading) {
   loadMoreUpdates();
  }
 };

 return (
  <div className="p-4 bg-[#2C2C2C] rounded-lg w-full max-w-sm">
   {/* Header */}
   <div className="flex justify-between items-center mb-4">
    <h2 className="text-white text-lg font-semibold">Student Update</h2>
    <Button variant="ghost" className="text-white">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m0 0l3 3m-3-3l3-3"></path>
     </svg>
    </Button>
   </div>

   {/* Scrollable area */}
   <ScrollArea.Root className="h-[400px] overflow-auto" onScroll={handleScroll}>
    <ScrollArea.Viewport>
     <div className="space-y-4">
      {updates.map((update, index) => (
       <Card key={index} className="bg-[#1C1C1C] p-2 rounded-md shadow-md text-white flex justify-between items-center">
        <div className="flex items-center space-x-2">
         <Avatar className="w-8 h-8">
          <AvatarImage src={update.avatar} alt={update.name} className="rounded-full" />
          <AvatarFallback>{update.name.charAt(0)}</AvatarFallback>
         </Avatar>
         <div>
          <h4 className="font-semibold text-sm">{update.name}</h4>
          <p className="text-gray-400 text-xs">{update.time}</p>
         </div>
        </div>
        <div className="text-lg">{update.icon}</div>
       </Card>
      ))}
     </div>

     {/* Loading spinner */}
     {loading && (
      <div className="flex justify-center mt-4">
       <div className="loader" />
      </div>
     )}
    </ScrollArea.Viewport>
   </ScrollArea.Root>
  </div>
 );
};

export default StudentUpdateComponent;
