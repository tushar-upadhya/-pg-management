import AddButton from "@/components/button/AddButton";
import RemoveButton from "@/components/button/RemoveButton";
import DefaultStudent from "@/components/defaultStudent/DefaultStudent";
import Modal from "@/components/Modal/addStudent/Modal";
import StudentTable from "@/components/studenTable/StudentTable";
import StudentState from "@/components/studentState/StudentState";
import React, { useState } from "react";

const StudentPage: React.FC = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);

 const openModal = () => setIsModalOpen(true);
 const closeModal = () => setIsModalOpen(false);

 return (
  <div>
   <div className="flex flex-col md:flex-row justify-start items-start">
    <div className="bg-[#2E2E2E] w-full md:w-3/5 lg:w-11/12 -mt-64">
     <StudentState />
    </div>

    <div className="p-4 md:p-8 w-full md:w-1/3 lg:w-1/5 -mt-12 flex flex-col">
     <div className="sm:mt-8">
      <AddButton onClick={openModal} />
     </div>
     <div className="mt-2 md:mt-8">
      <RemoveButton />
     </div>
    </div>
   </div>

   <div className="flex flex-col w-[70.5rem] md:flex-row gap-4 justify-start mt-4 items-start">
    <div className="bg-[#2E2E2E] w-full p-2 md:w-3/5 lg:w-2/3">
     <StudentTable />
    </div>
    <div className="bg-[#2E2E2E] w-full p-2 md:w-3/5 lg:w-2/3">
     <DefaultStudent />
    </div>
   </div>

   <Modal isOpen={isModalOpen} onClose={closeModal} />
  </div>
 );
};

export default StudentPage;
