import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import Logo from './Logo';
import Navigation from './Navigation';
import UserIcons from './UserIcons';

const Header: React.FC = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const handleToggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
 };

 return (
  <header className="flex justify-between items-center px-4 md:px-14 w-full bg-neutral-800 py-4 relative">
   {/* Logo section */}
   <div className="flex-shrink-0">
    <Logo />
   </div>

   {/* Hamburger Menu for small screens */}
   <div className="block md:hidden">
    <Button
     className="text-white"
     onClick={handleToggleMenu}
     aria-label="Toggle navigation"
    >
     {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
    </Button>
   </div>

   {/* Regular Navigation for larger screens */}
   <div className="hidden md:flex flex-grow justify-center">
    <Navigation />
   </div>

   {/* User Icons */}
   <div className="flex-shrink-0 hidden md:flex">
    <UserIcons />
   </div>

   {/* Mobile Navigation */}
   {isMenuOpen && (
    <div className="md:hidden flex flex-col items-center bg-neutral-800 w-full p-5 absolute top-full left-0 z-50">
     <Navigation />
     <UserIcons />
    </div>
   )}
  </header>
 );
};

export default Header;
