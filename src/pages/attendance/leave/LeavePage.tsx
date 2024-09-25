import AddButton from "@/components/button/AddButton";
import FeesCollection from "@/components/fees-Collection/FeesCollection";
import Modal from "@/components/Modal/addStudent/Modal";
import StudentsOnLeave from "@/components/studentsOnLeave/StudentsOnLeave";
import { useState } from "react";

const LeavePage: React.FC = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const openModal = () => setIsModalOpen(true);
 const closeModal = () => setIsModalOpen(false);

 return (
  <div className="flex flex-col p-4 md:p-8 gap-4">
   <div className="flex flex-col md:flex-row items-start justify-between w-full gap-4">
    {/* FeesCollection */}
    <div className="w-full md:w-3/4 lg:w-4/5 mt-0 sm:-mt-[1rem] md:-mt-[3rem]">
     <FeesCollection />
    </div>

    {/* Button */}
    <div className="w-full md:w-[23rem] space-y-8 md:ml-auto sm:mt-4 md:mt-0">
     <AddButton onClick={openModal} />
     <AddButton onClick={openModal} />

    </div>
   </div>

   <div className="w-full md:w-3/4 lg:w-full  mt-4">
    <StudentsOnLeave />
   </div>

   {/* Modal */}
   <Modal isOpen={isModalOpen} onClose={closeModal} />
  </div>
 );
};

export default LeavePage;
