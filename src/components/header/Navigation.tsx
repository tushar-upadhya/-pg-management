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
  <nav className="flex flex-wrap justify-center gap-4 text-lg font-medium text-zinc-400 max-md:text-base max-md:gap-3">
   {navItems.map((item, index) => (
    <Link
     key={index}
     to={item.path}
     className={`flex gap-2.5 items-center ${item.active ? 'text-white' : ''}`}
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
