import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import { ChartNoAxesColumn, Package, UserRound, Utensils } from 'lucide-react';
import React from 'react';
import { Outlet } from 'react-router-dom';

const RoomLayout: React.FC = () => {
 const roomMenuItems = [
  { icon: <ChartNoAxesColumn />, label: 'Hotels', path: 'hotels' },
  { icon: <UserRound />, label: 'Assigned', path: 'assigned' },
  { icon: <Package />, label: 'Furniture', path: 'furniture' },
  { icon: <Utensils />, label: 'Meal', path: 'meal' },
 ];

 return (
  <div className="flex h-screen flex-col bg-black md:flex-col">
   <Header />
   <div className="flex flex-1 mt-2">
    <Sidebar menuItems={roomMenuItems} />
    <main className="flex-1 p-4">
     <Outlet />
    </main>
   </div>
  </div>
 );
};

export default RoomLayout;
