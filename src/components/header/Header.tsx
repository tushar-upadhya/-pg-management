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
  <header className="flex justify-between items-center px-4 md:px-8 lg:px-20 w-full bg-[#202020] py-4 relative">
   {/* Logo */}
   <div className="flex-shrink-0">
    <Logo />
   </div>

   <div className="block lg:hidden">
    <button
     className="text-white"
     onClick={handleToggleMenu}
     aria-label="Toggle navigation"
    >
     {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
    </button>
   </div>

   <nav className="hidden lg:flex flex-grow justify-center items-center space-x-4">
    <Navigation />
   </nav>

   {/*  tablets and larger screens */}
   <div className="hidden lg:flex flex-shrink-0">
    <UserIcons />
   </div>

   {/* Mobile and Tablet menu */}
   {isMenuOpen && (
    <div
     ref={menuRef}
     className="lg:hidden flex flex-col items-center bg-[#202020] gap-4 w-full p-2 absolute top-full left-0 z-50 transition-transform duration-300 ease-in-out"
    >
     <Navigation />
     <UserIcons />
    </div>
   )}
  </header>
 );
};

export default Header;
