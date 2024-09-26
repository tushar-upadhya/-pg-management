import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface AddButtonProps {
 onClick: () => void;
 label?: string;
 variant?: "outline" | "link" | "default" | "destructive" | "secondary" | "ghost";
 bgColor?: string;
 textColor?: string;
 borderColor?: string;
 hoverBgColor?: string;
 hoverTextColor?: string;
 hoverBorderColor?: string;
 showDialog?: boolean;
 dialogContent?: JSX.Element;
}

const AddButton: React.FC<AddButtonProps> = ({
 onClick,
 label = "+ Add",
 variant = "default",
 bgColor = "",
 textColor = "",
 borderColor = "",
 hoverBgColor = "",
 hoverTextColor = "",
 hoverBorderColor = "",
 showDialog = false,
 dialogContent,
}) => {
 const [isDialogOpen, setDialogOpen] = useState(false);

 const handleClick = () => {
  if (showDialog) {
   setDialogOpen(true);
  }
  onClick();
 };

 const closeDialog = () => {
  setDialogOpen(false);
 };

 return (
  <div className="w-full max-w-md mx-auto p-2">
   <Button
    variant={variant}
    style={{
     backgroundColor: bgColor || "transparent",
     color: textColor || "black",
     borderColor: borderColor || "transparent",
    }}
    className={`border text-lg w-full h-12 rounded-lg`}
    onMouseEnter={(e) => {
     e.currentTarget.style.backgroundColor = hoverBgColor || "";
     e.currentTarget.style.color = hoverTextColor || "";
     e.currentTarget.style.borderColor = hoverBorderColor || "";
    }}
    onMouseLeave={(e) => {
     e.currentTarget.style.backgroundColor = bgColor || "transparent";
     e.currentTarget.style.color = textColor || "black";
     e.currentTarget.style.borderColor = borderColor || "transparent";
    }}
    onClick={handleClick}
   >
    {label}
   </Button>

   {/* Dialog */}
   {showDialog && isDialogOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
     <div className="p-6 rounded-lg shadow-lg max-w-md w-full">
      <div>{dialogContent}</div>
      <button
       onClick={closeDialog}
       className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
      >
       Close
      </button>
     </div>
    </div>
   )}
  </div>
 );
};

export default AddButton;
