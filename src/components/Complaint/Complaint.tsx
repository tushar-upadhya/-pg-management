import React, { useEffect, useState } from "react";

const chartData = [
 { browser: "Resolved", visitors: 96, fill: "#00FFF5" },
 { browser: "Open", visitors: 62, fill: "#FFE605" },
];

const initialComplaintsData = {
 total: 158,
 resolved: 96,
 open: 62,
 colors: {
  resolved: "#00FFF5",
  open: "#FFE605",
 },
};

const Complaint: React.FC = () => {
 const [data, setData] = useState(chartData);
 const [complaintsData] = useState(initialComplaintsData);

 const fetchData = async () => {
  return chartData;
 };

 useEffect(() => {
  const loadData = async () => {
   const fetchedData = await fetchData();
   setData(fetchedData);
  };
  loadData();
 }, []);

 return (
  <div className="flex bg-[#202020] p-4 justify-between rounded-lg w-full flex-col md:flex-row">
   {/* Left: Color Block */}
   <div className="w-full md:w-1/4 flex items-center justify-center mb-4 md:mb-0">
    <div className="relative">
     <div className="h-20 w-full md:w-32 rounded-lg overflow-hidden flex">
      <div className="w-1/2 h-full bg-[#00FFF5]"></div>
      <div className="w-1/2 h-full bg-[#FFE605]"></div>
     </div>
    </div>
   </div>

   {/* Right: Complaint Stats */}
   <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Total Complaints */}
    <div className="bg-gray-800 p-4 rounded-md flex flex-col items-start justify-center">
     <h4 className="text-white text-sm mb-2">
      Total Complaints
     </h4>
     <p className="text-xl font-semibold text-white">
      {complaintsData.total}
     </p>
    </div>

    {/* Resolved Complaints */}
    <div className="bg-gray-800 p-4 rounded-md flex flex-col items-start justify-center">
     <h4 className="text-white text-sm mb-2">
      Resolved
     </h4>
     <p
      className="text-xl font-semibold"
      style={{ color: complaintsData.colors.resolved }}
     >
      {complaintsData.resolved}
     </p>
    </div>

    {/* Open Complaints */}
    <div className="bg-gray-800 p-4 rounded-md flex flex-col items-start justify-center">
     <h4 className="text-white text-sm mb-2">
      Open
     </h4>
     <p
      className="text-xl font-semibold"
      style={{ color: complaintsData.colors.open }}
     >
      {complaintsData.open}
     </p>
    </div>
   </div>
  </div>
 );
};

export default Complaint;
