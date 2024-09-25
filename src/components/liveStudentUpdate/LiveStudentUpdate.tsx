import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bed, Building2, Download, User, Watch } from "lucide-react";
import { FC } from "react";
import BlinkingDot from "../blinkingDot/BlinkingDot";

interface Student {
 name: string;
 status: string;
 time: string;
 room: string;
 hostel: string;
}

interface LiveStudentUpdateProps {
 title: string;
 students: Student[];
}

const LiveStudentUpdate: FC<LiveStudentUpdateProps> = ({ students }) => {
 return (
  <Card className="bg-[#202020] [border:none] [outline:none] text-white p-4 rounded-lg w-full">
   {/* Header Section */}
   <CardHeader className="flex justify-between items-start pb-4">
    <div className="flex items-center space-x-2">
     <CardTitle className="text-xl font-semibold items-start">Live Student Update</CardTitle>
     <span className="">
      <BlinkingDot />
     </span>
    </div>

    <div className="ml-auto">
     <Button className="bg-[#1f8e44] hover:bg-[#1c7c3d] px-4 py-2">
      <Download className="mr-2 h-4 w-4" />
      Export Data
     </Button>
    </div>
   </CardHeader>

   {/* Student Update List */}
   <CardContent>
    {students.map((student, index) => (
     <div
      key={index}
      className="flex flex-col md:flex-row items-center justify-between p-3 bg-[#141414] rounded-lg mb-2 last:mb-0"
     >
      {/* Left Section */}
      <div className="flex items-center space-x-3 w-full md:w-[20%] mb-2 md:mb-0">
       {/* Student Avatar */}
       <div className="h-8 w-8 bg-gray-600 rounded-full flex items-center justify-center">
        <User className="h-5 w-5 text-white" />
       </div>
       {/* Student Name */}
       <div className="text-sm font-medium">{student.name}</div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-wrap justify-between flex-1 items-center text-gray-400 text-sm space-y-2 md:space-y-0 md:flex-nowrap">
       {/* Status */}
       <div className={`w-full md:w-[10%] font-bold ${student.status === 'OUT' ? 'text-yellow-400' : 'text-blue-400'}`}>
        {student.status}
       </div>
       {/* Time */}
       <div className="flex items-center space-x-1 w-full md:w-[15%]">
        <Watch className="h-4 w-4" />
        <span>{student.time}</span>
       </div>
       {/* Room */}
       <div className="flex items-center space-x-1 w-full md:w-[25%]">
        <Bed className="h-4 w-4" />
        <span>Room: {student.room}</span>
       </div>
       {/* Hostel */}
       <div className="flex items-center space-x-1 w-full md:w-[25%]">
        <Building2 className="h-4 w-4" />
        <span>Hostel: {student.hostel}</span>
       </div>
      </div>
     </div>
    ))}
   </CardContent>
  </Card>
 );
};

export default LiveStudentUpdate;

