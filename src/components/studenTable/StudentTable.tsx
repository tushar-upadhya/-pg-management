import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { students } from "@/lib/data/studentData";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ScrollArea } from '@radix-ui/themes';
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
   <ScrollArea type="always" scrollbars="vertical" style={{ height: 468 }}>
    <div className="w-full h-full">
     <div className="space-y-4">
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
           className="object-cover rounded-full bg-transparent"
          />
          <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
         </Avatar>
         <div className="flex flex-col">
          <h4 className="font-medium">{student.name}</h4>
          {/* <span className="text-gray-400 text-sm">{student.email}</span> */}
         </div>
        </div>
        <Button className="p-6 bg-inherit">
         <Eye className="w-4 h-4 bg-inherit" />
        </Button>
       </Card>
      ))}
     </div>
    </div>
   </ScrollArea>

   <StudentListDialog
    students={students}
    isOpen={dialogOpen}
    onClose={() => setDialogOpen(false)}
   />
  </div>
 );
};

export default StudentTable;
