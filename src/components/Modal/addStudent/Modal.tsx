import React, { useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

interface ModalProps {
 isOpen: boolean;
 onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
 const [formData, setFormData] = useState({
  name: "",
  contactNumber: "",
  emergencyContact: "",
  email: "",
  addressLine1: "",
  addressLine2: "",
  pincode: "",
  district: "",
  state: "",
  country: "",
 });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = () => {
  console.log(formData);
  onClose();
 };

 if (!isOpen) return null;

 return (
  <div className="fixed inset-0 flex items-center justify-center z-50">
   <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose} />
   <div className="bg-black text-slate-700 font-semibold p-6 rounded-lg w-full max-w-md relative">
    <h2 className="text-lg font-bold mb-4">Add Student</h2>
    <form>
     {[
      { name: "name", placeholder: "Name of Student" },
      { name: "contactNumber", placeholder: "Contact Number" },
      { name: "emergencyContact", placeholder: "Emergency Contact Number" },
      { name: "email", placeholder: "Email" },
      { name: "addressLine1", placeholder: "Address Line 1" },
      { name: "addressLine2", placeholder: "Address Line 2" },
      { name: "pincode", placeholder: "Pincode" },
      { name: "district", placeholder: "District" },
      { name: "state", placeholder: "State" },
      { name: "country", placeholder: "Country" },
     ].map((input) => (
      <Input
       key={input.name}
       name={input.name}
       placeholder={input.placeholder}
       value={formData[input.name as keyof typeof formData]}
       onChange={handleChange}
       className="mb-2 h-12  [border:none] [outline:none] w-full"
      />
     ))}
    </form>
    <div className="flex justify-around mt-4">
     <Button variant="outline" onClick={onClose} className="w-[40%]">
      Back
     </Button>
     <Button onClick={handleSubmit} className="bg-[#00868D] w-[40%]">
      Proceed
     </Button>
    </div>
   </div>
  </div>
 );
};

export default Modal;
