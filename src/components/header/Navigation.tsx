import { NavItemType } from '@/lib/datatable/NavItemType';
import { BadgeIndianRupee, BedSingle, LayoutDashboard, Timer, UserCheck } from 'lucide-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
 const location = useLocation();

 const navItems: NavItemType[] = [
  { name: 'Dashboard', icon: <LayoutDashboard />, path: '/' },
  { name: 'Rooms', icon: <BedSingle />, path: '/rooms' },
  { name: 'Attendance', icon: <UserCheck />, path: '/attendance' },
  { name: 'Accounts', icon: <BadgeIndianRupee />, path: '/account' },
  { name: 'Maintenance', icon: <Timer />, path: '/maintenance' },
 ].map(item => ({
  ...item,
  active: location.pathname === item.path,
 }));

 return (
  <nav className="flex flex-wrap justify-center md:justify-center ml-0 md:ml-52 gap-4 md:gap-14 text-lg font-medium text-zinc-400 max-md:text-base p-4  rounded-lg">
   {navItems.map((item, index) => (
    <Link
     key={index}
     to={item.path}
     className={`flex items-center transition-colors duration-300 ${item.active ? 'text-white' : 'hover:text-white'}`}
    >
     <div className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0">
      {item.icon}
     </div>
     <span className="hidden lg:block">{item.name}</span>
    </Link>
   ))}
  </nav>
 );
};

export default Navigation;
