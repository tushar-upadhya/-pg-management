import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  menuItems: { icon: React.ReactNode; label: string; path: string }[];
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems, className }) => {
  const [isOpen, setIsOpen] = useState(true); // State to manage sidebar visibility

  const handleMenuClick = () => {
    if (window.innerWidth < 768) { // Check if screen width is small
      setIsOpen(false); // Close sidebar on small screens
    }
  };

  return (
    <>
      {/* Overlay for small screen */}
      {isOpen && (
        <aside className={`flex flex-col w-[13%] rounded-t-lg ml-2 text-lg text-zinc-400 p-4 max-md:w-full ${className}`}>
          <nav className="flex flex-col place-items-start">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={handleMenuClick} // Close sidebar on navigation
                className={({ isActive }) =>
                  `flex items-center gap-4 my-6 ${isActive ? 'text-white bg-[#2E2E2E] p-4 px- rounded-full' : 'hover:text-white'
                  }`
                }
              >
                <div className="shrink-0">{item.icon}</div>
                <div>{item.label}</div>
              </NavLink>
            ))}
          </nav>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
