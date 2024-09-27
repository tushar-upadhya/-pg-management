import DefaultersList from "@/components/defaultersList/DefaultersList";
import Modal from "@/components/Modal/addStudent/Modal";
import AddButton from "@/components/shared/button/AddButton";
import StudentTable from "@/components/shared/studenTable/StudentTable";
import StudentState from "@/components/shared/studentState/StudentState";
import React, { useState } from "react";

const StudentPage: React.FC = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);

 const openModal = () => setIsModalOpen(true);
 const closeModal = () => setIsModalOpen(false);

 return (
  <div className="grid grid-cols-1 gap-6 p-4 md:p-6">
   <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
    <div className="w-full md:w-2/3 lg:w-9/12">
     <StudentState />
    </div>

    {/* Add and Remove Buttons */}
    <div className="w-full md:w-1/3 lg:w-1/5 space-y-4">
     <AddButton
      onClick={openModal}
      label="+ Add Students"
      bgColor=""
      textColor="#00FFF5"
      borderColor="#00FFF5"
      hoverBgColor=""
      hoverTextColor="#00FFF6"
      hoverBorderColor="#00FFF6"
      showDialog={false}
     />
     <AddButton
      onClick={() => console.log("Button clicked!")}
      label="- Remove Student"
      bgColor=""
      textColor="#FF2A2A"
      borderColor="#FF2A2A"
      hoverBgColor=""
      hoverTextColor="#FF2A2A"
      hoverBorderColor="#FF2A2A"
      showDialog={false}
     />
    </div>
   </div>

   {/* StudentTable and DefaultersList Section */}
   <div className="flex flex-col md:flex-row gap-4 justify-between items-start">
    {/* StudentTable */}
    <div className="w-full md:w-2/3 lg:w-1/2 p-2">
     <StudentTable />
    </div>

    {/* DefaultersList */}
    <div className="w-full md:w-1/3 lg:w-1/2 p-2">
     <DefaultersList />
    </div>
   </div>

   {/* Hidden Student Update Section */}
   <div className="hidden md:flex justify-end">
    <div className="w-full max-w-xs">
    </div>
   </div>

   <Modal isOpen={isModalOpen} onClose={closeModal} />
  </div>
 );
};

export default StudentPage;
