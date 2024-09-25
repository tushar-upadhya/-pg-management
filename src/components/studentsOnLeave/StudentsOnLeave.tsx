import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bed, Building2, Download, User, Watch } from "lucide-react";
import { FC } from "react";

interface Student {
 name: string;
 leaveTaken: string;
 duration: string;
 expectedArrival: string;
 time: string;
 room: string;
 hostel: string;
}

const students: Student[] = [
 {
  name: "Ramakant Sharma",
  leaveTaken: "26 Feb 2023",
  duration: "7 Days",
  expectedArrival: "5 Mar 2023",
  time: "12:30",
  room: "101",
  hostel: "H1",
 },
];

const StudentsOnLeave: FC = () => {
 return (
  <Card className="bg-[#202020] text-white p-4 [border:none] [outline:none] rounded-lg w-full">
   {/* Header Section */}
   <CardHeader className="flex flex-col md:flex-row  justify-between items-start pb-4">
    <CardTitle className="text-xl font-semibold">Students on Leave</CardTitle>
    <div className="mt-4 md:mt-0">
     <Button className="bg-[#1f8e44] hover:bg-[#1c7c3d] px-4 py-2 w-full md:w-auto">
      <Download className="mr-2 h-4 w-4" />
      Export Data
     </Button>
    </div>
   </CardHeader>

   {/* Student Leave List */}
   <CardContent>
    {students.map((student, index) => (
     <div
      key={index}
      className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-[#141414] rounded-lg mb-4 space-y-4 md:space-y-0"
     >
      {/* Left Section */}
      <div className="flex flex-col items-center md:flex-row space-x-0 md:space-x-3 w-full md:w-auto">
       {/* Student Avatar */}
       <div className="h-10 w-10 bg-gray-600 rounded-full flex items-center justify-center mb-2 md:mb-0">
        <User className="h-6 w-6 text-white" />
       </div>
       {/* Student Info */}
       <div className="flex flex-col text-center md:text-left">
        <div className="text-lg font-medium">{student.name}</div>
        <div className="text-sm text-gray-400">
         Leave Taken on: {student.leaveTaken}
        </div>
        <div className="text-sm text-gray-400">
         Duration: {student.duration} | Expected Arrival: {student.expectedArrival}
        </div>
       </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-auto space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
       {/* Time */}
       <div className="flex items-center space-x-1">
        <Watch className="h-4 w-4" />
        <span>{student.time}</span>
       </div>
       {/* Room */}
       <div className="flex items-center space-x-1">
        <Bed className="h-4 w-4" />
        <span>Room: {student.room}</span>
       </div>
       {/* Hostel */}
       <div className="flex items-center space-x-1">
        <Building2 className="h-4 w-4" />
        <span>Hostel: {student.hostel}</span>
       </div>
      </div>

      {/* Right Section - View Details Button */}
      <div className="w-full md:w-auto">
       <Button className="bg-[#00b4b6] hover:bg-[#009a9e] text-white px-4 py-2 w-full md:w-auto">
        View Details
       </Button>
      </div>
     </div>
    ))}
   </CardContent>
  </Card>
 );
};

export default StudentsOnLeave;
