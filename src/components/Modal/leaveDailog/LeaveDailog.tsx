import { Button } from "@/components/ui/button";
import {
 Dialog,
 DialogContent,
 DialogFooter,
 DialogTitle,
 DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const LeaveDailog: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
 isOpen,
 onClose,
}) => {
 const [hostelName, setHostelName] = useState("");
 const [numberOfFloors, setNumberOfFloors] = useState(0);
 const [numberOfKitchens, setNumberOfKitchens] = useState(0);
 const [numberOfWashrooms, setNumberOfWashrooms] = useState(0);
 const [addressLine1, setAddressLine1] = useState("");
 const [district, setDistrict] = useState("");
 const [pinCode, setPinCode] = useState("");
 const [state, setState] = useState("");

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const hostelData = {
   hostelName,
   numberOfFloors,
   numberOfKitchens,
   numberOfWashrooms,
   addressLine1,
   district,
   pinCode,
   state,
  };

  console.log("Submitted Hostel Data:", hostelData);

  resetForm();
  onClose();
 };

 const resetForm = () => {
  setHostelName("");
  setNumberOfFloors(0);
  setNumberOfKitchens(0);
  setNumberOfWashrooms(0);
  setAddressLine1("");
  setDistrict("");
  setPinCode("");
  setState("");
 };

 return (
  <Dialog open={isOpen} onOpenChange={onClose}>
   <DialogTrigger asChild>
    <Button variant="outline">Add Room</Button>
   </DialogTrigger>
   <DialogContent className="max-w-md mx-auto p-4 flex flex-col items-center">
    <DialogTitle className="text-white text-2xl text-center">Add New Hostel</DialogTitle>
    <form onSubmit={handleSubmit} className="space-y-4 bg-[#2E2E2E] w-full">
     <Input
      type="text"
      placeholder="Name of Room"
      value={hostelName}
      onChange={(e) => setHostelName(e.target.value)}
      required
     />
     <Input
      type="text"
      placeholder="Occupancy"
      value={hostelName}
      onChange={(e) => setHostelName(e.target.value)}
      required
     />
     <div className="flex justify-between space-x-4">
      <Input
       type="text"
       placeholder="rent amount"
       value={hostelName}
       onChange={(e) => setHostelName(e.target.value)}
       required
      />
      <Input
       type="text"
       placeholder="per month"
       value={hostelName}
       onChange={(e) => setHostelName(e.target.value)}
       required
      />
     </div>
     <DialogFooter className="flex justify-center mt-4">
      <Button
       type="submit"
       className="bg-[#00ADB5] text-white w-full h-10 sm:w-40"
      >
       Proceed
      </Button>
     </DialogFooter>
    </form>
   </DialogContent>
  </Dialog>
 );
};

export default LeaveDailog;
