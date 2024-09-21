import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { students } from "@/lib/data/studentData";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { ExternalLink, Eye } from "lucide-react";
import React, { useState } from "react";
import StudentListDialog from "../Modal/StudentListDialog/StudentListDialog";

const StudentTable: React.FC = () => {
 const [dialogOpen, setDialogOpen] = useState(false);

 return (
  <div className="min-h-[10rem] bg-[#202020] p-6">
   {/* Title */}
   <div
    className="flex items-center justify-start gap-2 mb-6 cursor-pointer"
    onClick={() => setDialogOpen(true)}
   >
    <h2 className="text-white text-xl font-semibold">Student</h2>
    <Button
     variant="ghost"
     className="text-white -mt-1 hover:bg-transparent hover:text-gray-400 p-0"
    >
     <ExternalLink className="w-5 h-5" />
    </Button>
   </div>

   {/* Search and Filter Bar */}

   {/* <div className="flex items-center space-x-4 mb-4">
    <Input
     placeholder="Search..."
     className="bg-[#3C3C3C] text-white w-full [border:none] [outline:none]"
    />
    <Button className="bg-[#4C4C4C] text-white flex items-center space-x-2 focus:outline-none">
     <Filter />
     <span>Filter</span>
    </Button>
   </div> */}

   {/* Student List */}
   <ScrollArea.Root className="h-[30rem] overflow-hidden rounded-lg">
    <ScrollArea.Viewport className="w-full h-full">
     <div className="space-y-2">
      {students.map((student, index) => (
       <Card
        key={index}
        className="bg-[#111111] p-4 flex [border:none] [outline:none] items-center justify-between text-white rounded-lg"
       >
        <div className="flex items-center space-x-4">
         {/* Avatar */}
         <Avatar className="w-10 h-10">
          <AvatarImage
           src="https://via.placeholder.com/40"
           alt={student.name}
           className="rounded-full"
          />
          <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
         </Avatar>

         {/* Student Info */}
         <div>
          <p className="text-sm font-semibold">{student.name}</p>
         </div>
        </div>
        {/* View Button */}
        <Button variant="outline" className="border-none bg-transparent hover:bg-inherit hover:text-white text-gray-400 focus:outline-none">
         <Eye />
        </Button>
       </Card>
      ))}
     </div>
    </ScrollArea.Viewport>

    {/* Scrollbar */}
    <ScrollArea.Scrollbar orientation="vertical" className="bg-gray-700 rounded-full w-2">
     <ScrollArea.Thumb className="bg-gray-400 rounded-full" />
    </ScrollArea.Scrollbar>

    <ScrollArea.Corner className="bg-gray-700" />
   </ScrollArea.Root>

   <StudentListDialog students={students} isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />
  </div>
 );
};

export default StudentTable;
