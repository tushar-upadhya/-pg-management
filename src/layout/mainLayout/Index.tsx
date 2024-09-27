import { ChartNoAxesColumn, Frown, Package, UserRound, UsersRound, Utensils } from 'lucide-react';
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

const MainLayout: React.FC = () => {
 const mainMenuItems = [
  { icon: <ChartNoAxesColumn />, label: 'Analytics', path: '/' },
  { icon: <UserRound />, label: 'Students', path: '/students' },
  { icon: <Frown />, label: 'Complaints', path: '/complaints' },
  { icon: <Package />, label: 'Stock', path: '/stock' },
  { icon: <Utensils />, label: 'Meal', path: '/meal' },
  { icon: <UsersRound />, label: 'Users', path: '/users' },
 ];

 return (
  <div className="flex flex-col min-h-screen bg-black">
   <Header />
   <div className="flex flex-1 flex-col md:flex-row p-4">
    <Sidebar className="md:-mt-4" menuItems={mainMenuItems} />
    <main className="flex-1 overflow-hidden">
     <Outlet />
    </main>
   </div>
  </div>
 );
};

export default MainLayout;
