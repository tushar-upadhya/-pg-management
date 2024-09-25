import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import React, { useState } from 'react';
import { Button } from '../ui/button';

type OrderData = {
 name: string;
 quantity: number;
 price: number;
};

const Orders: React.FC<{ data: OrderData[] }> = ({ data }) => {
 const [open, setOpen] = useState(false);
 const [selectedOrder, setSelectedOrder] = useState<OrderData | null>(null);

 const openDialog = (order: OrderData) => {
  setSelectedOrder(order);
  setOpen(true);
 };

 return (
  <div className="bg-[#202020] text-white p-4 rounded-lg">
   {/* Title */}
   <h2 className="text-xl font-semibold">Orders</h2>

   {/* Orders Grid */}
   <div className="grid grid-cols-1 gap-4 mt-4">
    {data.map((order, index) => (
     <div
      key={index}
      className="p-4 bg-black rounded-lg cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      onClick={() => openDialog(order)}
     >
      <div className="text-gray-400">{order.name}</div>
      <div className="text-white">Quantity: {order.quantity}</div>
      <div className="text-white">Price: ₹ {order.price}</div>

      <Button
       variant={'outline'}
       className="md:w-[10rem] w-full bg-transparent text-[#00FFF5] border-[#00FFF5] border px-4 py-2 rounded-md"
      >
       Details
      </Button>
     </div>
    ))}
   </div>

   {/* Dialog for Order Details */}
   <Dialog open={open} onOpenChange={setOpen}>
    <DialogContent>
     <DialogHeader>
      <DialogTitle>{selectedOrder?.name}</DialogTitle>
     </DialogHeader>
     <div className="text-lg">
      Quantity: <span className="font-bold">{selectedOrder?.quantity}</span>
     </div>
     <div className="text-lg">
      Price: ₹<span className="font-bold">{selectedOrder?.price}</span>
     </div>
    </DialogContent>
   </Dialog>
  </div>
 );
};

export default Orders;
