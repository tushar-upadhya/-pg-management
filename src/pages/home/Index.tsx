import EmergencyButton from "@/components/EmergencyButton/EmergencyButton";
import FeesCollection from "@/components/fees-Collection/FeesCollection";
import Complaint from "@/components/home/Complaint/Complaint";
import StudentUpdateComponent from "@/components/table/StudentUpdateComponent";
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
   <div className="lg:col-span-2 grid bg-[#202020] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6 rounded-lg">
    {pieChartsData.map((chart, index) => (
     <div key={index} className="p-2 bg-[#111111] shadow-none rounded-lg flex flex-col">
      <PieChart
       icon={chart.icon}
       data={data}
       title={chart.title}
      />
     </div>
    ))}
   </div>

   {/* Student Updates and Emergency Section */}
   <div className="lg:col-span-1 space-y-5">
    <div className="p-4 rounded-lg h-[28rem] -mt-4 sm:-mt-4">
     <ScrollArea type="always" scrollbars="vertical" className="h-[27rem]">
      <StudentUpdateComponent />
     </ScrollArea>
    </div>

    <div className="p-4 bg-[#111111] rounded-lg flex items-center justify-center">
     <EmergencyButton />
    </div>
   </div>

   <div className="lg:col-span-2 mt-16 md:-mt-[34rem] rounded-lg">
    <FeesCollection />
   </div>

   <div className="lg:col-span-2 p-4 w-[auto] sm:w-[54.5rem] -ml-4 mt-20 md:-mt-[15.5rem] rounded-lg">
    <Complaint />
   </div>
  </div>
 );
};

export default HomePage;
