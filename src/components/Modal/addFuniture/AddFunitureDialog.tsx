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

const AddFunitureDialog: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
 isOpen,
 onClose,
}) => {
 const [hostelName, setHostelName] = useState("");
 const [selectedOccupancy, setSelectedOccupancy] = useState(""); // State for occupancy dropdown
 const [selectedRentAmount, setSelectedRentAmount] = useState(""); // State for rent amount dropdown
 const [selectedDuration, setSelectedDuration] = useState(""); // State for rent duration dropdown

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const hostelData = {
   hostelName,
   occupancy: selectedOccupancy,
   rentAmount: selectedRentAmount,
   rentDuration: selectedDuration,
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
 };

 return (
  <Dialog open={isOpen} onOpenChange={onClose}>
   <DialogTrigger asChild>
    {/* <Button variant="outline">Add Room</Button> */}
   </DialogTrigger>
   <DialogContent className="max-w-md mx-auto p-4 flex bg-[#2E2E2E] flex-col items-center">
    <DialogTitle className="text-white text-2xl text-center">Add New Hostel</DialogTitle>
    <form onSubmit={handleSubmit} className="space-y-4 w-full bg-black p-6 rounded-lg">
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

export default AddFunitureDialog;
