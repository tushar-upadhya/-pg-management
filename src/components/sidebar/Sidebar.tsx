import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  menuItems: { icon: React.ReactNode; label: string; path: string }[];
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems, className }) => {
  const [isOpen, setIsOpen] = useState(() => window.innerWidth >= 1024);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(() => window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
        setIsTabletOrMobile(false);
      } else {
        setIsOpen(false);
        setIsTabletOrMobile(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMenuClick = () => {
    if (isTabletOrMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {isTabletOrMobile && !isOpen && (
        <button
          className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md lg:hidden"
          aria-label="Open Sidebar"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      )}

      {/* Sidebar component */}
      <aside
        className={`
          fixed top-0 left-0 text-2xl h-full bg-black text-zinc-400 p-4 z-40
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:w-64
          w-64
          ${className ? className : ''}
        `}
      >
        {!isTabletOrMobile && (
          <button
            className="absolute top-4 right-4 text-white text-2xl lg:hidden"
            aria-label="Close Sidebar"
            onClick={toggleSidebar}
          >
            ×
          </button>
        )}

        <nav className="mt-10 flex flex-col space-y-4">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={handleMenuClick}
              className={({ isActive }) =>
                `flex items-center gap-4 p-2 rounded-md transition-colors duration-200 ${isActive ? 'text-white bg-[#2E2E2E]' : 'hover:text-white'
                }`
              }
            >
              <div className="shrink-0">{item.icon}</div>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {!isTabletOrMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;
