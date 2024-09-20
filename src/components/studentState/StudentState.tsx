import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

interface FeeData {
 totalStudents: { amount: number; color: string };
 inHostel: { amount: number; color: string };
 outsideHostel: { amount: number; color: string };
 studentsAssigned: { amount: number; color: string };
 studentsRemoved: { amount: number; color: string };
 feeDefaulters: { amount: number; color: string };
}

const initialFeeData: FeeData = {
 totalStudents: { amount: 3569, color: "#FFFFFF" },
 inHostel: { amount: 1569, color: "#00FFF5" },
 outsideHostel: { amount: 2500, color: "#004CFF" },
 studentsAssigned: { amount: 2569, color: "#FF05C8" },
 studentsRemoved: { amount: 1000, color: "#FF0000" },
 feeDefaulters: { amount: 150, color: "#FFE605" },
};

const StudentState: React.FC = () => {
 const [feeData] = useState<FeeData>(initialFeeData);

 return (
  <div className="w-full h-auto mt-64 sm:mt-64 rounded-lg bg-[#2E2E2E] flex items-center justify-center p-4 md:p-8">
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl">
    {/* Total Students */}
    <div className="bg-[#111111] p-4 rounded-md flex justify-between items-start">
     <div>
      <h4 className="text-white text-sm">Total Students</h4>
      <p className="text-lg font-semibold" style={{ color: feeData.totalStudents.color }}>
       {feeData.totalStudents.amount.toLocaleString()}
      </p>
     </div>
     <span className="text-white cursor-pointer">
      <ExternalLink />
     </span>
    </div>

    {/* In Hostel */}
    <div className="bg-[#111111] p-4 rounded-md flex justify-between items-start">
     <div>
      <h4 className="text-white text-sm">In Hostel</h4>
      <p className="text-lg font-semibold" style={{ color: feeData.inHostel.color }}>
       {feeData.inHostel.amount.toLocaleString()}
      </p>
     </div>
     <span className="text-white cursor-pointer">
      <ExternalLink />
     </span>
    </div>

    {/* Outside Hostel */}
    <div className="bg-[#111111] p-4 rounded-md flex justify-between items-start">
     <div>
      <h4 className="text-white text-sm">Outside Hostel</h4>
      <p className="text-lg font-semibold" style={{ color: feeData.outsideHostel.color }}>
       {feeData.outsideHostel.amount.toLocaleString()}
      </p>
     </div>
     <span className="text-white cursor-pointer">
      <ExternalLink />
     </span>
    </div>

    {/* Fee Defaulters */}
    <div className="bg-[#111111] p-4 rounded-md flex flex-col justify-between items-start">
     <div className="w-full">
      <h4 className="text-white text-sm">Fee Defaulters</h4>
      <p className="text-lg font-semibold" style={{ color: feeData.feeDefaulters.color }}>
       {feeData.feeDefaulters.amount.toLocaleString()}
      </p>
      <Button className="mt-1 w-full p-0">
       View List
      </Button>
     </div>
    </div>

    {/* Students Assigned */}
    <div className="bg-[#111111] p-4 rounded-md flex justify-between items-start col-span-1 md:col-span-2">
     <div>
      <h4 className="text-white text-sm">Students Assigned</h4>
      <p className="text-lg font-semibold" style={{ color: feeData.studentsAssigned.color }}>
       {feeData.studentsAssigned.amount.toLocaleString()}
      </p>
     </div>
     <span className="text-white cursor-pointer">
      <ExternalLink />
     </span>
    </div>

    {/* Students Removed */}
    <div className="bg-[#111111] p-4 rounded-md flex justify-between items-start col-span-1 md:col-span-2">
     <div>
      <h4 className="text-white text-sm">Students Removed</h4>
      <p className="text-lg font-semibold" style={{ color: feeData.studentsRemoved.color }}>
       {feeData.studentsRemoved.amount.toLocaleString()}
      </p>
     </div>
     <span className="text-white cursor-pointer">
      <ExternalLink />
     </span>
    </div>
   </div>
  </div>
 );
};

export default StudentState;
