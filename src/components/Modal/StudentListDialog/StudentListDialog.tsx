import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Student } from "@/lib/datatable/studetTable";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import * as Dialog from '@radix-ui/react-dialog';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { Bed, Building2, Eye } from "lucide-react";
import React, { useState } from "react";

interface StudentListDialogProps {
 students: Student[];
 isOpen: boolean;
 onClose: () => void;
}

const StudentListDialog: React.FC<StudentListDialogProps> = ({ students, isOpen, onClose }) => {
 const [searchTerm, setSearchTerm] = useState("");

 const filteredStudents = students.filter(student =>
  student.name.toLowerCase().includes(searchTerm.toLowerCase())
 );

 return (
  <Dialog.Root open={isOpen} onOpenChange={onClose}>
   <Dialog.Portal>
    <Dialog.Overlay className="bg-black bg-opacity-50 fixed inset-0" />
    <Dialog.Content className="fixed bg-[#2E2E2E] p-6 rounded-lg shadow-lg top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-xl">
     <Dialog.Title className="text-white text-xl font-semibold mb-4">
      Student List
     </Dialog.Title>

     {/* Search Input */}
     <input
      type="text"
      placeholder="Search..."
      className="bg-[#3C3C3C] text-white mb-4 p-2 rounded [border:none] [outline:none]"
      onChange={(e) => setSearchTerm(e.target.value)}
     />

     {/* Student List */}
     <ScrollArea.Root className="h-[30rem] overflow-hidden rounded-lg">
      <ScrollArea.Viewport className="w-full h-full">
       <div className="space-y-2">
        {filteredStudents.map((student, index) => (
         <Card key={index} className="bg-[#111111] p-4 flex items-center [border:none] [outline:none]l justify-between text-white rounded-lg">
          <div className="flex items-center space-x-4">
           {/* Avatar */}
           <Avatar className="w-10 h-10">
            <AvatarImage src="https://via.placeholder.com/40" alt={student.name} className="rounded-full" />
            <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
           </Avatar>

           {/* Student Info */}
           <div>
            <p className="text-sm font-semibold">{student.name}</p>
            <div className="flex items-center space-x-4 text-gray-400">
             {/* Hostel Icon */}
             <span className="flex items-center space-x-1">
              <Building2 className="w-4 h-4 text-yellow-400" />
              <span>{student.hostel}</span>
             </span>
             {/* Room Icon */}
             <span className="flex items-center space-x-1">
              <Bed className="w-4 h-4 text-green-400" />
              <span>{student.room}</span>
             </span>
            </div>
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

     {/* Close Button */}
     <Dialog.Close asChild>
      <Button className="absolute top-2 right-2 text-white hover:bg-transparent hover:text-gray-400" onClick={onClose}>
       Close
      </Button>
     </Dialog.Close>
    </Dialog.Content>
   </Dialog.Portal>
  </Dialog.Root>
 );
};

export default StudentListDialog;
