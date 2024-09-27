import React from "react";

const complaintsData = {
 total: 300,
 resolved: 150,
 open: 150,
 colors: {
  total: "#FFE605",
  resolved: "#00FFF5",
  open: "#FF05C8",
 },
};

const Complaint: React.FC = () => {
 return (
  <div className="bg-[#202020] p-6 rounded-lg">
   <h2 className="text-white text-xl mb-4">Complaints</h2>

   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Total Complaints */}
    <div className="bg-gray-800 p-4 rounded-md flex flex-col items-start justify-center h-full">
     <h4 className="text-white text-sm mb-2">Total Complaints</h4>
     <p className="text-xl font-semibold" style={{ color: complaintsData.colors.total }}>
      {complaintsData.total}
     </p>
    </div>

    {/* Resolved Complaints */}
    <div className="bg-gray-800 p-4 rounded-md flex flex-col items-start justify-center h-full">
     <h4 className="text-white text-sm mb-2">Resolved Complaints</h4>
     <p className="text-xl font-semibold" style={{ color: complaintsData.colors.resolved }}>
      {complaintsData.resolved}
     </p>
    </div>

    {/* Open Complaints */}
    <div className="bg-gray-800 p-4 rounded-md flex flex-col items-start justify-center h-full">
     <h4 className="text-white text-sm mb-2">Open Complaints</h4>
     <p className="text-xl font-semibold" style={{ color: complaintsData.colors.open }}>
      {complaintsData.open}
     </p>
    </div>
   </div>
  </div>
 );
};

export default Complaint;
