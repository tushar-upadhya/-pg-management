import { Button } from "@/components/ui/button";
import React from "react";

const RemoveButton: React.FC = () => {
 return (
  <div className="h-16 w-full max-w-md">
   <Button
    variant="outline"
    className="border text-lg hover:bg-black hover:border-red-300 hover:text-red-400 w-full h-full rounded-lg bg-black text-red-400 border-red-400"
   >
    - Remove Student
   </Button>
  </div>
 );
};

export default RemoveButton;
