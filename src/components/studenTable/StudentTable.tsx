import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { students } from "@/lib/data/studentData"; // Ensure this path is correct
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

   {/* Student List */}
   <ScrollArea.Root className="h-[30rem] overflow-hidden rounded-lg">
    <ScrollArea.Viewport className="w-full h-full">
     <div className="space-y-4">
      {students.map((student, index) => (
       <Card
        key={index}
        className="bg-[#111111] p-4 flex [border:none] [outline:none]  items-center justify-between text-white rounded-lg"
       >
        <div className="flex items-center space-x-4">
         {/* Avatar */}
         <Avatar className="w-10 h-10">
          <AvatarImage
           src="https://via.placeholder.com/40"
           alt={student.name}
           className="object-cover rounded-full bg-transparent"
          />
          <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
         </Avatar>
         <div className="flex flex-col">
          <h4 className="font-medium">{student.name}</h4>
          {/* <span className="text-gray-400 text-sm">{student.email}</span> */}
         </div>
        </div>
        <Button variant="outline" className="p-2">
         <Eye className="w-4 h-4" />
        </Button>
       </Card>
      ))}
     </div>
    </ScrollArea.Viewport>
   </ScrollArea.Root>

   <StudentListDialog
    students={students}
    isOpen={dialogOpen}
    onClose={() => setDialogOpen(false)}
   />
  </div>
 );
};

export default StudentTable;
