import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { ScrollArea } from '@radix-ui/themes';
import React, { useState } from 'react';
import { Card } from '../ui/card';

interface StudentUpdate {
 name: string;
 avatar: string;
 time: string;
 icon: string;
}

const initialUpdates: StudentUpdate[] = [
 { name: 'Ramakant Sharma', avatar: 'https://via.placeholder.com/40', time: '12:30', icon: '📝' },
 { name: 'Ramakant Sharma', avatar: 'https://via.placeholder.com/40', time: '12:30', icon: '📝' },
 { name: 'Ramakant Sharma', avatar: 'https://via.placeholder.com/40', time: '12:30', icon: '📝' },
 { name: 'Ramakant Sharma', avatar: 'https://via.placeholder.com/40', time: '12:30', icon: '📝' },
 { name: 'Ramakant Sharma', avatar: 'https://via.placeholder.com/40', time: '12:30', icon: '📝' },
 { name: 'Ramakant Sharma', avatar: 'https://via.placeholder.com/40', time: '12:30', icon: '📝' },
 { name: 'Ramakant Sharma', avatar: 'https://via.placeholder.com/40', time: '12:30', icon: '📝' },
];

const StudentUpdateComponent: React.FC = () => {
 const [updates] = useState<StudentUpdate[]>(initialUpdates);

 return (
  <div className="p-4 bg-[#212121] rounded-lg w-full max-w-sm">
   {/* Header */}
   <div className="flex justify-between items-center mb-4">
    <h2 className="text-white text-lg font-semibold">Student Update</h2>
   </div>

   {/* Scrollable area */}
   <ScrollArea type="always" scrollbars="vertical" style={{ height: 500 }}>
    <div className="w-full">
     <div className="space-y-4">
      {updates.map((update, index) => (
       <Card
        key={index}
        className="bg-[#1C1C1C] [border:none] [outline:none] p-4 rounded-md shadow-md text-white flex justify-between items-center"
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
           <p className="text-red-400 text-sm">{update.time}</p>
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
