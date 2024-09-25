import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import React, { useState } from 'react';

type OverviewCardData = {
 title: string;
 value: string | number;
 color: string;
};

type OverviewProps = {
 data: OverviewCardData[];
};

const OverviewCards: React.FC<OverviewProps> = ({ data }) => {
 const [open, setOpen] = useState(false);
 const [selectedCard, setSelectedCard] = useState<OverviewCardData | null>(null);

 const openDialog = (card: OverviewCardData) => {
  setSelectedCard(card);
  setOpen(true);
 };

 return (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#202020] text-white rounded-lg">
   {data.map((card, index) => (
    <div
     key={index}
     className="p-4 bg-[#111111] rounded-lg cursor-pointer flex justify-between items-center"
     onClick={() => openDialog(card)}
    >
     <div>
      <div className="text-gray-400 flex items-center space-x-1">
       {/* <card.icon className="w-5 h-5" /> */}
       <span>{card.title}</span>
      </div>
      <div className={`text-3xl font-bold`} style={{ color: card.color }}>
       {card.value}
      </div>
     </div>
    </div>
   ))}
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

export default OverviewCards;
