import { ExternalLink } from "lucide-react";
import React, { useEffect, useState } from "react";

// Dummy initial data (you can replace with actual API or state data)
const chartData = [
 { browser: "Resolved", visitors: 96, fill: "#00FFF5" },  // Resolved complaints
 { browser: "Open", visitors: 62, fill: "#FFE605" },     // Open complaints
];

// FeeData for dynamic content
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
  <div className="flex bg-[#202020] p-4 justify-between rounded-lg w-[120%]">
   <div className="w-1/4 flex items-center justify-center">
    <div className="relative">
     <div className="bg-[#00FFF5] h-20 w-56 rounded-lg" />
    </div>
   </div>

   {/* Right: Complaint Stats */}
   <div className="w-full max-w-4xl mx-auto grid grid-cols-3 gap-4 px-8 py-12">
    <div className="bg-gray-800 p-3 rounded-md flex flex-col items-start justify-center relative">
     <h4 className="text-white text-sm text-nowrap">
      Total Complaints
      <span className="absolute top-2 right-8">
       <ExternalLink />
      </span>
     </h4>
     <p className="text-lg font-semibold text-white">{complaintsData.total}</p>
    </div>

    <div className="bg-gray-800 p-3 rounded-md flex flex-col relative items-start justify-center">
     <h4 className="text-white text-sm">Resolved
      <span className="absolute top-2 right-20">
       <ExternalLink />
      </span>
     </h4>
     <p className="text-lg font-semibold" style={{ color: complaintsData.colors.resolved }}>
      {complaintsData.resolved}
     </p>
    </div>

    <div className="bg-gray-800 p-3 rounded-md flex flex-col items-start relative justify-center">
     <h4 className="text-white text-sm">Open
      <span className="absolute top-2 right-24">
       <ExternalLink />
      </span>
     </h4>
     <p className="text-lg font-semibold" style={{ color: complaintsData.colors.open }}>
      {complaintsData.open}
     </p>
    </div>
   </div>

  </div>
 );
};

export default Complaint;
