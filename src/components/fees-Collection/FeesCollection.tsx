import { ExternalLink } from "lucide-react";
import React, { useEffect, useState } from "react";
import { PieChart } from "../shared/PieChart";

const chartData = [
 { browser: "Collected", visitors: 275, fill: "#00FFF5" },
 { browser: "Remaining", visitors: 200, fill: "#FFE605" },
 { browser: "Overdue", visitors: 287, fill: "#FF05C8" },
];

const fetchData = async () => {
 return chartData;
};

const initialFeeData = {
 expected: { amount: 5200000, color: "#FFE605" },
 remaining: { amount: 1560000, color: "#FFE605" },
 collected: { amount: 2600000, color: "#00FFF5" },
 overdue: { amount: 1040000, color: "#FF05C8" },
};

const FeesCollection: React.FC = () => {
 const [data, setData] = useState(chartData);
 const [feeData] = useState(initialFeeData);

 useEffect(() => {
  const loadData = async () => {
   const fetchedData = await fetchData();
   setData(fetchedData);
  };
  loadData();
 }, []);

 const pieChartsData = [
  {
   title: "Fees Collection",
   footerData: {
    percentage: 50,
    description: "Fees collected",
   },
  },
 ];

 return (
  <div className="flex flex-col md:flex-row bg-[#202020] p-4 mt-12 rounded-lg w-full max-w-[900px] space-y-6 md:space-y-0 md:space-x-6">
   {/* Pie Chart Section */}
   <div className="w-full md:w-1/3 flex items-center justify-center">
    {pieChartsData.map((chart, index) => (
     <div key={index} className="relative w-full">
      <PieChart data={data} title={chart.title} />
     </div>
    ))}
   </div>

   {/* Data Section */}
   <div className="w-full md:w-2/3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
    {/* Expected */}
    <div className="bg-[#111111] h-[5rem] p-3 rounded-md flex justify-between items-center transition-all duration-300 ease-in-out hover:bg-[#1a1a1a]">
     <div>
      <h4 className="text-white text-sm">Expected</h4>
      <p className="text-lg font-semibold" style={{ color: feeData.expected.color }}>
       ₹ {feeData.expected.amount.toLocaleString()}
      </p>
     </div>
     <span className="text-white cursor-pointer">
      <ExternalLink />
     </span>
    </div>

    {/* Collected */}
    <div className="bg-[#111111] h-[5rem] p-3 rounded-md flex justify-between items-center transition-all duration-300 ease-in-out hover:bg-[#1a1a1a]">
     <div>
      <h4 className="text-white text-sm">Collected</h4>
      <p className="text-lg font-semibold" style={{ color: feeData.collected.color }}>
       ₹ {feeData.collected.amount.toLocaleString()}
      </p>
     </div>
     <span className="text-white cursor-pointer">
      <ExternalLink />
     </span>
    </div>

    {/* Remaining */}
    <div className="bg-[#111111] h-[5rem] p-3 rounded-md flex justify-between items-center transition-all duration-300 ease-in-out hover:bg-[#1a1a1a]">
     <div>
      <h4 className="text-white text-sm">Remaining</h4>
      <p className="text-lg font-semibold" style={{ color: feeData.remaining.color }}>
       ₹ {feeData.remaining.amount.toLocaleString()}
      </p>
     </div>
     <span className="text-white cursor-pointer">
      <ExternalLink />
     </span>
    </div>

    {/* Overdue */}
    <div className="bg-[#111111] h-[5rem] p-3 rounded-md flex justify-between items-center transition-all duration-300 ease-in-out hover:bg-[#1a1a1a]">
     <div>
      <h4 className="text-white text-sm">Overdue</h4>
      <p className="text-lg font-semibold" style={{ color: feeData.overdue.color }}>
       ₹ {feeData.overdue.amount.toLocaleString()}
      </p>
     </div>
     <span className="text-white cursor-pointer">
      <ExternalLink />
     </span>
    </div>
   </div>
  </div>
 );
};

export default FeesCollection;
