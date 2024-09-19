import Complaint from "@/components/Complaint/Complaint";
import NewDatatable, { DatatableThead } from "@/components/dataTable/DataTable";
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
 const [data, setData] = useState(chartData);
 const [inventory, setInventory] = useState<homeTableType[]>([]);

 // DataTable
 useEffect(() => {
  const dummyData: homeTableType[] = [
   {
    names: 'nobody',
    entryTime: '08:00 AM',
    entryOut: '04:00 PM',
    imgURL: '../../assets/react.svg',
   },
   {
    names: 'nobody',
    entryTime: '08:30 AM',
    entryOut: '04:30 PM',
    imgURL: '../../assets/react.svg',
   },
   {
    names: 'nobody',
    entryTime: '09:00 AM',
    entryOut: '05:00 PM',
    imgURL: '../../assets/react.svg',
   },
   {
    names: 'nobody',
    entryTime: '08:00 AM',
    entryOut: '04:00 PM',
    imgURL: '../../assets/react.svg',
   },
   {
    names: 'nobody',
    entryTime: '08:30 AM',
    entryOut: '04:30 PM',
    imgURL: '../../assets/react.svg',
   },
   {
    names: 'nobody',
    entryTime: '09:00 AM',
    entryOut: '05:00 PM',
    imgURL: '../../assets/react.svg',
   },
   {
    names: 'nobody',
    entryTime: '08:00 AM',
    entryOut: '04:00 PM',
    imgURL: '../../assets/react.svg',
   },
   {
    names: 'nobody',
    entryTime: '08:30 AM',
    entryOut: '04:30 PM',
    imgURL: '../../assets/react.svg',
   },
   {
    names: 'nobody',
    entryTime: '09:00 AM',
    entryOut: '05:00 PM',
    imgURL: '../../assets/react.svg',
   },
   {
    names: 'nobody',
    entryTime: '08:00 AM',
    entryOut: '04:00 PM',
    imgURL: '../../assets/react.svg',
   },
   {
    names: 'nobody',
    entryTime: '08:30 AM',
    entryOut: '04:30 PM',
    imgURL: '../../assets/react.svg',
   },
   {
    names: 'nobody',
    entryTime: '09:00 AM',
    entryOut: '05:00 PM',
    imgURL: '../../assets/react.svg',
   }
  ];
  setInventory(dummyData);
 }, []);

 const THead: DatatableThead[] = [
  // Define your table headers here
 ];

 const TBodyRender = (item: homeTableType) => {
  return {
   names: `${item.names}`,
   entryTime: `${item.entryTime}`,
   entryOut: `${item.entryOut}`,
   imgURL: `${item.imgURL}`,
  };
 };

 useEffect(() => {
  const loadData = async () => {
   const fetchedData = await fetchData();
   setData(fetchedData);
  };
  loadData();
 }, []);

 // Pie chart data
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
  <div className="flex flex-col md:flex-row justify-between gap-4 p-4">
   {/* Chart Section */}
   <div className="flex flex-wrap justify-evenly h-[22rem] bg-[#202020] p-4 rounded-lg w-full md:w-3/4 lg:w-3/5 xl:w-2/3">
    {pieChartsData.map((chart, index) => (
     <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
      <PieChart
       icon={chart.icon}
       data={data}
       className="bg-[#111111] text-white"
       title={chart.title}
      />
     </div>
    ))}
   </div>

   {/* Fee Section moved below the charts */}
   <div className="absolute w-[55%] top-[32rem]  gap-4">
    <FeesCollection />
   </div>

   {/* Table Section*/}
   <div className="w-full md:w-1/4 text-red-300  rounded-lg">
    <ScrollArea type="always" scrollbars="vertical" className="h-[23rem]">
     <NewDatatable
      data={inventory}
      tBodyRender={TBodyRender}
      tHead={THead}
     />
    </ScrollArea>
   </div>

   <div className="absolute top-[50rem]">
    <Complaint />
   </div>

   <div className="absolute left-[80rem] -ml-16 top-[42.5rem]">
    <EmergencyButton />
   </div>
  </div>
 );
};

export default HomePage;
