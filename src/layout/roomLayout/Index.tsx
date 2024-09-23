import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import { ChartNoAxesColumn, Package, UserRound, Utensils } from 'lucide-react';
import React from 'react';
import { Outlet } from 'react-router-dom';

const RoomLayout: React.FC = () => {
 const roomMenuItems = [
  { icon: <ChartNoAxesColumn />, label: 'Occupancy', path: '/rooms' },
  { icon: <UserRound />, label: 'Hotels', path: 'hotels' },
  { icon: <Package />, label: 'Furniture', path: 'furniture' },
  { icon: <Utensils />, label: 'Meal', path: 'meal' },
 ];

 return (
  <div className="flex flex-col bg-black">
   <Header />
   <div className="flex flex-1 p-4 md:flex-row md:mt-0">
    <Sidebar className="-mt-4" menuItems={roomMenuItems} />
    <main className="flex-1 overflow-hidden">
     <Outlet />
    </main>
   </div>
  </div>
 );
};

export default RoomLayout;
