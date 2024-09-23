import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FC } from "react";

interface FurnitureItem {
 name: string;
 count: number;
}

const furnitureData: FurnitureItem[] = [
 { name: "Ceiling Fan", count: 50 },
 { name: "Center Table", count: 12 },
 { name: "Chairs", count: 123 },
];

const FurnitureList: FC = () => {
 return (
  <Card className="bg-[#141414] text-nowrap border-none outline-none text-white rounded-lg  sm:p-6 w-full max-w-sm shadow-lg">
   <CardHeader>
    <CardTitle className="flex items-center text-lg font-semibold">
     <span>Furniture</span>
     <span className="cursor-pointer text-gray-400 hover:text-gray-300 transition-colors">
      <ExternalLink />
     </span>
    </CardTitle>
   </CardHeader>
   <CardContent className="space-y-4 mt-4">
    {furnitureData.map((item, index) => (
     <div
      key={index}
      className="flex items-center w-full justify-between px-2 py-2 sm:py-4 md:py-4 bg-[#202020] rounded-lg hover:bg-[#303030] transition-colors"
     >
      <div className="text-base flex-1 min-w-[60%]">{item.name}</div>
      <div className="flex items-center space-x-2 justify-between">
       <span className="font-medium">{String(item.count).padStart(2, "0")}</span>
       <ArrowRight className="h-4 w-4 text-gray-400" />
      </div>
     </div>
    ))}
   </CardContent>
  </Card>
 );
};

export default FurnitureList;
