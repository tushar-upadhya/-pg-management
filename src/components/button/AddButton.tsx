import { Button } from "@/components/ui/button";
import React from "react";

interface AddButtonProps {
 onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
 return (

  <div className="w-full max-w-md mx-auto p-4">
   <Button
    variant="outline"
    className="border text-lg hover:bg-black hover:border-green-300 hover:text-green-400 w-full h-12 rounded-lg bg-black text-green-400 border-green-400" onClick={onClick}
   >
    + Add Student
   </Button>
  </div>
 );
};

export default AddButton;
