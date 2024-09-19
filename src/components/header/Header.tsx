import { Menu, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import UserIcons from './UserIcons';

const Header: React.FC = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const menuRef = useRef<HTMLDivElement>(null);

 const handleToggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
 };

 const handleClickOutside = (event: MouseEvent) => {
  if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
   setIsMenuOpen(false);
  }
 };

 useEffect(() => {
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
   document.removeEventListener('mousedown', handleClickOutside);
  };
 }, []);

 return (
  <header className="flex justify-between items-center px-4 md:px-14 w-full bg-neutral-800 py-4 relative">
   <div className="flex-shrink-0">
    <Logo />
   </div>

   <div className="block md:hidden">
    <button
     className="text-white"
     onClick={handleToggleMenu}
     aria-label="Toggle navigation"
    >
     {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
    </button>
   </div>

   {/* Adjust the navigation for screens between 768px and 1024px */}
   <nav className="hidden md:flex flex-grow justify-between sm:flex sm:justify-between">
    <Navigation />
   </nav>

   <div className="flex-shrink-0 hidden md:flex">
    <UserIcons />
   </div>

   {isMenuOpen && (
    <div ref={menuRef} className="md:hidden flex flex-col items-center gap-8 bg-neutral-800 w-full p-5 absolute top-full left-0 z-50">
     <Navigation />
     <UserIcons />
    </div>
   )}
  </header>
 );
};

export default Header;
