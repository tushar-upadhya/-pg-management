import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

type CategoryCardData = {
 title: string;
 value: string | number;
};

const Categories: React.FC<{ data: CategoryCardData[] }> = ({ data }) => {
 const [open, setOpen] = useState(false);
 const [selectedCategory, setSelectedCategory] = useState<CategoryCardData | null>(null);

 const openDialog = (category: CategoryCardData) => {
  setSelectedCategory(category);
  setOpen(true);
 };

 return (
  <div className="bg-[#202020] text-white p-4 rounded-lg">
   {/* Header Section */}
   <div className="flex flex-col sm:flex-row justify-between items-center">
    <h2 className="text-xl font-semibold mb-4 sm:mb-0">Categories</h2>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto">
     + Add Category
    </button>
   </div>

   {/* Category Grid */}
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
    {data.map((category, index) => (
     <div
      key={index}
      className="p-4 bg-black rounded-lg cursor-pointer flex justify-between items-center"
      onClick={() => openDialog(category)}
     >
      <div className="text-gray-400">{category.title}</div>
      <div className="text-white">{category.value}</div>
      <ArrowRight className="w-5 h-5 text-white" />
     </div>
    ))}
   </div>

   {/* Dialog for selected category */}
   <Dialog open={open} onOpenChange={setOpen}>
    <DialogContent>
     <DialogHeader>
      <DialogTitle>{selectedCategory?.title}</DialogTitle>
     </DialogHeader>
     <div className="text-lg">
      Value: <span className="font-bold">{selectedCategory?.value}</span>
     </div>
    </DialogContent>
   </Dialog>
  </div>
 );
};

export default Categories;
