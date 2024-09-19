import { Bell, Calendar, User } from 'lucide-react';
import React from 'react';

const UserIcons: React.FC = () => {
 const icons = [
  <Calendar size={20} key="calendar" className='text-white' />,
  <Bell size={20} key="bell" className='text-[#FFE605]' />,
  <User size={20} key="user" className='text-[#00FFF5]' />
 ];

 return (
  <div className="flex gap-4">
   {icons.map((icon, index) => (
    <div
     key={index}
     className="flex items-center justify-center bg-[#2F2F2F] rounded-full w-[42px] h-[42px] hover:bg-[#3D3D3D] transition-colors duration-200"
    >
     {icon}
    </div>
   ))}
  </div>
 );
};

export default UserIcons;
