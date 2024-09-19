import { ChartNoAxesColumn, Frown, Package, UserRound, UsersRound, Utensils } from 'lucide-react';
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

const MainLayout: React.FC = () => {
 const mainMenuItems = [
  { icon: <ChartNoAxesColumn />, label: 'Analytics' },
  { icon: <UserRound />, label: 'Students' },
  { icon: <Frown />, label: 'Complaints' },
  { icon: <Package />, label: 'Stock' },
  { icon: <Utensils />, label: 'Meal' },
  { icon: <UsersRound />, label: 'Users' },
 ];

 return (
  <div className="flex h-screen flex-col bg-black md:flex-col">
   <Header />
   <div className="flex flex-1 mt-2">
    <Sidebar menuItems={mainMenuItems} />
    <main className="flex-1 p-4">
     <Outlet />
    </main>
   </div>
  </div>
 );
};

export default MainLayout;
