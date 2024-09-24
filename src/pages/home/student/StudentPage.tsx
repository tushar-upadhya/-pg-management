import AddButton from "@/components/button/AddButton";
import RemoveButton from "@/components/button/RemoveButton";
import DefaultersList from "@/components/defaultersList/DefaultersList";
import Modal from "@/components/Modal/addStudent/Modal";
import StudentTable from "@/components/studenTable/StudentTable";
import StudentState from "@/components/studentState/StudentState";
import React, { useState } from "react";

const StudentPage: React.FC = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);

 const openModal = () => setIsModalOpen(true);
 const closeModal = () => setIsModalOpen(false);

 return (
  <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 p-4 md:p-6">
   <div className="flex flex-col md:flex-row justify-start items-start">
    <div className="bg-[#2E2E2E] w-full md:w-3/5 lg:w-9/12 -mt-64">
     <StudentState />
    </div>
    <div className="p-4 md:p-8 w-full md:w-1/3 lg:w-1/5 flex flex-col">
     <AddButton onClick={openModal} />
     <div className="mt-2 md:mt-8">
      <RemoveButton />
     </div>
    </div>
   </div>
   <div className="flex flex-col text-wrap text-sm md:flex-row gap-4 justify-start items-start">
    <div className="w-full p-2 md:w-3/5 lg:w-[37%]">
     <StudentTable />
    </div>
    <div className="flex flex-col md:flex-row gap-4 w-full md:w-[37%] lg:w-[37%]">
     <div className="bg-[#2E2E2E] w-full mt-2">
      <DefaultersList />
     </div>
    </div>
   </div>
   <div className="justify-end -mt-[38.5rem] -mr-4 hidden md:flex">
    <div className="w-full max-w-xs ">
     {/* <StudentUpdateComponent /> */}
    </div>
   </div>
   <Modal isOpen={isModalOpen} onClose={closeModal} />
  </div>
 );
};

export default StudentPage;
