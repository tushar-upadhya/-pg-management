import AddButton from '@/components/button/AddButton';
import Categories from '@/components/categories/Categories';
import ExpenseMonitor from '@/components/expenseMonitor/ExpenseMonitor';
import Orders from '@/components/orders/Orders';
import { Input } from '@/components/ui/input';
import OverviewCards from '@/components/vverviewCards/OverviewCards';
import { Search } from 'lucide-react';
import React from 'react';

const FurniturePage: React.FC = () => {
 const overviewData = [
  { title: "Total", value: 45689, color: "red" },
  { title: "Utilized", value: 24569, color: "cyan" },
  { title: "Unutilized", value: 21120, color: "yellow" },
  { title: "Damaged", value: 569, color: "fuchsia" },
 ];

 const categoriesData = [
  { title: "Bed", value: 65 },
  { title: "Iron", value: 65 },
  { title: "Drapes", value: 65 },
 ];

 const expenseMonitorData = {
  totalExpense: { title: 'Total Expense', value: '₹ 5,24,45,685', color: 'lime' },
  unpaidPayments: { title: 'Unpaid Payments', value: '₹ 5,24,45,685', color: 'red' },
  highestExpense: { title: 'Beds', value: '₹ 24,45,685', color: 'pink' },
  lowestExpense: { title: 'Irons', value: '₹ 4,45,685', color: 'cyan' },
 };

 const ordersData = [
  { name: "Neelkamal double", quantity: 245, price: 4526 },
  { name: "Neelkamal double", quantity: 245, price: 4526 },
  { name: "Neelkamal double", quantity: 245, price: 4526 },
 ];

 return (
  <div className="p-4">
   {/* Search Bar */}
   <div className="relative mb-4 flex items-center flex-col sm:flex-row">
    <div className="relative w-full sm:w-[30rem]">
     <Input
      placeholder="Search Hostels..."
      className="text-white py-2 pl-10 w-full border-none p-8 outline-none bg-[#141414]"
     />
     <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
      <Search />
     </div>
    </div>
    <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
     <AddButton
      onClick={() => console.log("Button clicked!")}
      label="+ Add Furniture"
      bgColor="#00868D"
      textColor="white"
      borderColor="#00868D"
      hoverBgColor="#00866D"
      hoverTextColor="white"
      hoverBorderColor="blue-700"
      showDialog={false}
     />

     <AddButton
      onClick={() => console.log("Button clicked!")}
      label="Report Damage"
      bgColor="#FF0000"
      textColor="white"
      borderColor="#FF0000"
      hoverBgColor="blue-700"
      hoverTextColor="white"
      hoverBorderColor="blue-700"
      showDialog={false} />
    </div>
   </div>

   {/* Other Content */}
   <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 gap-4 bg-[#202020]">
    <OverviewCards data={overviewData} />
    <ExpenseMonitor data={expenseMonitorData} />
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <Categories data={categoriesData} />
    <Orders data={ordersData} />
   </div>
  </div>
 );
};

export default FurniturePage;
