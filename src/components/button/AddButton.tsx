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
 dialog?: JSX.Element;
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
 dialog,
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
  <div className="w-full p-2 flex justify-center">
   <Button
    variant={variant}
    style={{
     backgroundColor: bgColor || "transparent",
     color: textColor || "black",
     borderColor: borderColor || "transparent",
    }}
    className={`border text-lg w-full h-12 rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg`}
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

   {showDialog && isDialogOpen && dialog && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
     <div className="p-6 rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md w-full">
      {React.cloneElement(dialog, { onClose: closeDialog })}
     </div>
    </div>
   )}
  </div>
 );
};

export default AddButton;
