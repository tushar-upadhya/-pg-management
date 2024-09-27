import { Button } from "@/components/ui/button";
import {
 Dialog,
 DialogContent,
 DialogFooter,
 DialogTitle,
 DialogTrigger,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React, { useState } from "react";

const ReportDamageDialog: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
 isOpen,
 onClose,
}) => {
 const [hostelName, setHostelName] = useState("");
 const [selectedOccupancy, setSelectedOccupancy] = useState(""); // State for occupancy dropdown
 const [selectedRentAmount, setSelectedRentAmount] = useState(""); // State for rent amount dropdown
 const [selectedDuration, setSelectedDuration] = useState(""); // State for rent duration dropdown
 const [selectedDueDate, setSelectedDueDate] = useState(""); // State for due date radio buttons

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const hostelData = {
   hostelName,
   occupancy: selectedOccupancy,
   rentAmount: selectedRentAmount,
   rentDuration: selectedDuration,
   dueDate: selectedDueDate, // Include due date in submitted data
  };

  console.log("Submitted Hostel Data:", hostelData);

  resetForm();
  onClose();
 };

 const resetForm = () => {
  setHostelName("");
  setSelectedOccupancy("");
  setSelectedRentAmount("");
  setSelectedDuration("");
  setSelectedDueDate(""); // Reset due date
 };

 return (
  <Dialog open={isOpen} onOpenChange={onClose}>
   <DialogTrigger asChild>
    {/* <Button variant="outline">Add Room</Button> */}
   </DialogTrigger>
   <DialogContent className="max-w-md mx-auto p-4 flex bg-[#2E2E2E] flex-col items-center">
    <DialogTitle className="text-white text-2xl text-center">Report Damage</DialogTitle>
    <form onSubmit={handleSubmit} className="space-y-4 w-full p-6 rounded-lg">
     <div>
      <label className="block text-sm font-medium text-white mb-2">Select Category</label>
      <Select value={selectedOccupancy} onValueChange={setSelectedOccupancy}>
       <SelectTrigger className="w-full bg-[#2E2E2E] text-white rounded-md [border:none] [outline:none]">
        <SelectValue placeholder="Select Category" />
       </SelectTrigger>
       <SelectContent className="bg-[#2E2E2E] [border:none] [outline:none]">
        <SelectItem value="single">Bed</SelectItem>
        <SelectItem value="double">Chair</SelectItem>
        <SelectItem value="triple">AC</SelectItem>
       </SelectContent>
      </Select>
     </div>

     {/* Radio Buttons for Due Date */}
     <div className="mt-4">
      <span className="block text-sm font-medium text-white mb-2">Select Due Date</span>
      <label className="inline-flex items-center">
       <input
        type="radio"
        value="immediate"
        checked={selectedDueDate === "immediate"}
        onChange={() => setSelectedDueDate("immediate")}
        className="text-[#00ADB5] focus:ring-[#00ADB5] border-gray-300 rounded"
       />
       <span className="ml-2 text-white">Immediate</span>
      </label>
      <label className="inline-flex items-center ml-4">
       <input
        type="radio"
        value="scheduled"
        checked={selectedDueDate === "scheduled"}
        onChange={() => setSelectedDueDate("scheduled")}
        className="text-[#00ADB5] focus:ring-[#00ADB5] border-gray-300 rounded"
       />
       <span className="ml-2 text-white">Scheduled</span>
      </label>
     </div>

     <DialogFooter className="flex justify-center font-semibold mt-4 w-full">
      <Button type="submit" className="bg-[#00ADB5] text-white w-full h-10">
       Proceed
      </Button>
     </DialogFooter>

    </form>
   </DialogContent>
  </Dialog>
 );
};

export default ReportDamageDialog;
