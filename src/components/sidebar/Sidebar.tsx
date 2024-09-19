import React from 'react';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  return (
    <aside className="flex flex-col w-[18%] bg-neutral-800 rounded-t-lg ml-2 text-lg text-zinc-400 p-4 max-md:w-full">
      <nav className="flex flex-col place-items-start">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 my-6">
            <div className="shrink-0">{item.icon}</div>
            <div>{item.label}</div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
