import Complaint from "@/components/Complaint/Complaint";
import EmergencyButton from "@/components/EmergencyButton/EmergencyButton";
import FeesCollection from "@/components/fees-Collection/FeesCollection";
import { homeTableType } from "@/lib/datatable/HomeTable";
import { ScrollArea } from "@radix-ui/themes";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { PieChart } from "../../components/shared/PieChart";

const chartData = [
 { browser: "chrome", visitors: 275, fill: "#00FFF5" },
 { browser: "safari", visitors: 200, fill: "#FFE605" },
 { browser: "firefox", visitors: 287, fill: "#FF05C8" },
];

const fetchData = async () => {
 return chartData;
};

const HomePage = () => {
 const [data, setData] = useState<{ browser: string; visitors: number; fill: string }[]>([]);
 const [inventory, setInventory] = useState<homeTableType[]>([]);

 // Load initial data for the data table
 useEffect(() => {
  const dummyData: homeTableType[] = [
   // Sample data goes here
  ];
  setInventory(dummyData);
 }, []);

 // Load pie chart data
 useEffect(() => {
  const loadData = async () => {
   const fetchedData = await fetchData();
   setData(fetchedData);
  };
  loadData();
 }, []);

 const pieChartsData = [
  {
   title: "Hostel 1",
   icon: <ExternalLink />,
   footerData: {
    percentage: 0,
    description: "",
   },
  },
  {
   title: "Hostel 2",
   icon: <ExternalLink />,
   footerData: {
    percentage: 0,
    description: "",
   },
  },
  {
   title: "Hostel 3",
   icon: <ExternalLink />,
   footerData: {
    percentage: 0,
    description: "",
   },
  },
 ];

 return (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 md:p-6 text-white">

   {/* Chart Section */}
   <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 p-2 lg:grid-cols-3 gap-4 rounded-lg">
    {pieChartsData.map((chart, index) => (
     <div key={index} className="p-2 bg-[#111111] rounded-lg h-[20rem] ">
      <PieChart
       icon={chart.icon}
       data={data}
       title={chart.title}
      />
     </div>
    ))}
   </div>

   {/* Student Updates and Emergency Section */}
   <div className="lg:col-span-1 mt-4 space-y-6">
    <div className="p-4 bg-[#111111] rounded-lg h-[28rem]">
     <h2 className="text-xl font-semibold mb-4">Student Update</h2>
     <ScrollArea type="always" scrollbars="vertical" className="h-64">
      {inventory.map((item, index) => (
       <div key={index} className="flex items-center justify-between py-2">
        <span>{item.names}</span>
        <span>{item.entryTime}</span>
       </div>
      ))}
     </ScrollArea>
    </div>

    <div className="p-4 bg-[#111111] rounded-lg flex items-center justify-center">
     <EmergencyButton />
    </div>
   </div>

   <div className="lg:col-span-2 mt-8 md:mt-16 lg:-mt-[32rem] rounded-lg">
    <FeesCollection />
   </div>

   <div className="lg:col-span-2 p-4 mt-8 md:mt-16 lg:-mt-[12rem] rounded-lg">
    <Complaint />
   </div>
  </div>
 );
};

export default HomePage;
