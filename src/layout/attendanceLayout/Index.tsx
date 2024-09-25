import { BookOpenCheck, BookPlus, BrickWall, LogOut } from 'lucide-react';
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

const AttendanceLayout: React.FC = () => {
 const mainMenuItems = [
  { icon: <BrickWall />, label: 'Attendance', path: '/attendance' },
  { icon: <BookOpenCheck />, label: 'In', path: 'in' },
  { icon: <LogOut />, label: 'Out', path: 'out' },
  { icon: <BookPlus />, label: 'Leave', path: 'leave' },
 ];

 return (
  <div className="flex flex-col bg-black">
   <Header />
   <div className="flex flex-1 p-4 md:flex-row md:mt-0">
    <Sidebar className="-mt-4" menuItems={mainMenuItems} />
    <main className="flex-1 overflow-hidden">
     <Outlet />
    </main>
   </div>
  </div>
 );
};

export default AttendanceLayout;
