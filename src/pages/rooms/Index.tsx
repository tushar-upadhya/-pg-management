import React from 'react';
import { Link } from 'react-router-dom';

const RoomsPage: React.FC = () => {
 return (
  <div className='text-red-400'>
   <h1>Rooms Overview</h1>
   <nav className="flex gap-4">
    <Link to="hotels">Hotels</Link>
    <Link to="assigned">Assigned</Link>
    <Link to="furniture">Furniture</Link>
   </nav>
  </div>
 );
};

export default RoomsPage;
