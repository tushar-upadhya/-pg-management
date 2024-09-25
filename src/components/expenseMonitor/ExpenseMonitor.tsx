import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import React, { useState } from 'react';

type ExpenseMonitorData = {
 title: string;
 value: string | number;
 color: string;
};

type ExpenseMonitorProps = {
 data: {
  totalExpense: ExpenseMonitorData;
  unpaidPayments: ExpenseMonitorData;
  highestExpense: ExpenseMonitorData;
  lowestExpense: ExpenseMonitorData;
 };
};

const ExpenseMonitor: React.FC<ExpenseMonitorProps> = ({ data }) => {
 const [open, setOpen] = useState(false);
 const [selectedCard, setSelectedCard] = useState<ExpenseMonitorData | null>(null);

 const openDialog = (card: ExpenseMonitorData) => {
  setSelectedCard(card);
  setOpen(true);
 };

 return (
  <div className="bg-black h-auto text-white rounded-lg p-4">
   <div className="space-y-4">
    {/* Header Section */}
    <div className="p-4 bg-black rounded-lg">
     <div className="text-lg">Expense Monitor</div>

     <div className="mt-2">
      <div className="text-gray-400">Total Expense</div>
      <div
       className="text-2xl font-bold text-lime-400 cursor-pointer"
       onClick={() => openDialog(data.totalExpense)}
      >
       {data.totalExpense.value}
      </div>
     </div>

     <div className="mt-2">
      <div className="text-gray-400">Unpaid Payments</div>
      <div
       className="text-2xl font-bold text-red-500 cursor-pointer"
       onClick={() => openDialog(data.unpaidPayments)}
      >
       {data.unpaidPayments.value}
      </div>
     </div>
    </div>

    {/* Cards Section - Responsive Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
     <div className="p-4 bg-black border border-gray-500 rounded-lg">
      <div className="text-gray-400">Highest Expense</div>
      <div className="text-pink-400 text-sm">{data.highestExpense.title}</div>
      <div
       className="text-xl font-bold text-pink-400 cursor-pointer"
       onClick={() => openDialog(data.highestExpense)}
      >
       {data.highestExpense.value}
      </div>
     </div>
     <div className="p-4 bg-black border border-gray-500 rounded-lg">
      <div className="text-gray-400">Lowest Expense</div>
      <div className="text-cyan-400 text-sm">{data.lowestExpense.title}</div>
      <div
       className="text-xl font-bold text-cyan-400 cursor-pointer"
       onClick={() => openDialog(data.lowestExpense)}
      >
       {data.lowestExpense.value}
      </div>
     </div>
    </div>
   </div>

   {/* Dialog for detailed view */}
   <Dialog open={open} onOpenChange={setOpen}>
    <DialogContent>
     <DialogHeader>
      <DialogTitle>{selectedCard?.title}</DialogTitle>
     </DialogHeader>
     <div className="text-lg">
      Value: <span className="font-bold" style={{ color: selectedCard?.color }}>{selectedCard?.value}</span>
     </div>
    </DialogContent>
   </Dialog>
  </div>
 );
};

export default ExpenseMonitor;
