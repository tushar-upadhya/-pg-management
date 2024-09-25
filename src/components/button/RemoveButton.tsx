import { Button } from "@/components/ui/button";
import React from "react";

const RemoveButton: React.FC = () => {
 return (
  <div className="w-full max-w-md mx-auto p-4">
   <Button
    variant="outline"
    className="border text-lg hover:bg-black hover:border-red-300 hover:text-red-400 w-full h-12 rounded-lg bg-black text-red-400 border-red-400"
   >
    - Remove Student
   </Button>
  </div>
 );
};

export default RemoveButton;
