import FurnitureState from '@/components/furniture/FurnitureState';
import React from 'react';

const hostelData = {
 title: "Hotel 1",
 hostelName: "6 Bedded Bunker",
 occupancyRate: 50,
 totalRooms: 458,
 occupiedRooms: 58,
 floors: 3,
 totalStudents: 6582,
 inHostel: 1569,
 outsideHostel: 2500,
 furnitureList: [
  { item: "Ceiling Fan", count: 50 },
  { item: "Center Table", count: 12 },
  { item: "Chairs", count: 123 },
  { item: "Refrigerator", count: 6 },
  { item: "Kettle", count: 12 },
 ],
};
const FurniturePage: React.FC = () => {
 return (
  <div>
   <FurnitureState  {...hostelData} />
  </div>
 );
};

export default FurniturePage;
