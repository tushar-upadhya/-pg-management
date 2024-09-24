import ChartWithTables from "@/components/ChartWithTables/chartWithTables";

const hostelData = {
 title: "Hotel 1",
 hostelName: "Hostel 1",
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

const HostelsPage: React.FC = () => {
 return (
  <div className='p-4'>
   <div className='grid w-full h-full grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4'>
    <ChartWithTables {...hostelData} />
    <ChartWithTables {...hostelData} />
   </div>
  </div>
 );
};

export default HostelsPage;
