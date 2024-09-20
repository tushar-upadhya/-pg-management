import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  menuItems: { icon: React.ReactNode; label: string; path: string }[];
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems, className }) => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 1024); // Set initial state based on window width

  const handleMenuClick = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  const handleResize = () => {
    setIsOpen(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Button to open sidebar on small screens */}
      {!isOpen && (
        <button
          className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md md:hidden"
          aria-label="Open Sidebar"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full transition-transform transform bg-black text-zinc-400 p-4 z-40 md:relative md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-[13%] max-md:w-full md:static rounded-t-lg ml-2 text-lg ${className}`}
      >
        <nav className="flex flex-col place-items-start">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={handleMenuClick}
              className={({ isActive }) =>
                `flex items-center gap-4 my-6 ${isActive ? 'text-white bg-[#2E2E2E] p-4 rounded-full' : 'hover:text-white'}`
              }
            >
              <div className="shrink-0">{item.icon}</div>
              <div>{item.label}</div>
            </NavLink>
          ))}
        </nav>
      </aside>

      {isOpen && window.innerWidth < 1024 && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;
