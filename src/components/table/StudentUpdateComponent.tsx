import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { ScrollArea } from '@radix-ui/themes';
import React, { useState } from 'react';
import { Card } from '../ui/card';

interface StudentUpdate {
 name: string;
 avatar: string;
 time: string;
 icon: string; // This can be dynamic if needed
}

const initialUpdates: StudentUpdate[] = [
 { name: 'Ramakant Sharma', avatar: 'https://via.placeholder.com/40', time: '12:30', icon: '📝' },
 { name: 'Sita Kumari', avatar: 'https://via.placeholder.com/40', time: '14:15', icon: '📊' },
 { name: 'Ajay Singh', avatar: 'https://via.placeholder.com/40', time: '09:00', icon: '📅' },
 { name: 'Priya Rani', avatar: 'https://via.placeholder.com/40', time: '16:45', icon: '💡' },
 { name: 'Rahul Verma', avatar: 'https://via.placeholder.com/40', time: '11:00', icon: '📖' },
 { name: 'Anita Mehta', avatar: 'https://via.placeholder.com/40', time: '13:30', icon: '✅' },
];

const StudentUpdateComponent: React.FC = () => {
 const [updates] = useState<StudentUpdate[]>(initialUpdates);

 return (
  <div className="p-4 bg-[#212121] rounded-lg w-full max-w-md mx-auto">
   {/* Header */}
   <div className="flex justify-between items-center mb-4">
    <h2 className="text-white text-lg font-semibold">Student Update</h2>
   </div>

   {/* Scrollable area */}
   <ScrollArea type="always" scrollbars="vertical" style={{ height: '50vh' }}>
    <div className="w-full">
     <div className="space-y-4">
      {updates.map((update, index) => (
       <Card
        key={index}
        className="bg-[#1C1C1C] border-none outline-none p-4 rounded-md shadow-md text-white flex items-center"
       >
        <div className="flex items-center space-x-2">
         <Avatar className="w-10 h-10">
          <AvatarImage src={update.avatar} alt={update.name} className="rounded-full" />
          <AvatarFallback>{update.name.charAt(0)}</AvatarFallback>
         </Avatar>
         <div className="leading-none">
          <h4 className="font-semibold">{update.name}</h4>
          <div className="flex justify-between">
           <p className="text-green-400 text-sm">{update.time}</p>
           <p className="text-red-400 text-sm">{update.icon}</p> {/* Display icon dynamically */}
          </div>
         </div>
        </div>
       </Card>
      ))}
     </div>
    </div>
   </ScrollArea>
  </div>
 );
};

export default StudentUpdateComponent;
