import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@radix-ui/themes";
import { ExternalLink } from "lucide-react";
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
  <Card className="bg-[#141414] text-nowrap border-none outline-none text-white rounded-lg w-full max-w-sm shadow-lg">
   <CardHeader>
    <CardTitle className="flex items-center text-lg font-semibold">
     <span>Furniture</span>
     <span className="cursor-pointer text-gray-400 hover:text-gray-300 transition-colors">
      <ExternalLink />
     </span>
    </CardTitle>
   </CardHeader>
   <CardContent className="">
    <ScrollArea type="always" scrollbars="vertical" style={{ height: 180 }}>

     {furnitureData.map((item, index) => (
      <div
       key={index}
       className="flex items-center w-full mb-4 gap-8 justify-between px-2 py-2 sm:py-4 md:py-4 bg-[#202020] rounded-lg hover:bg-[#303030] transition-colors"
      >
       <div className="text-base md:text-sm flex-1 min-w-[60%]">{item.name}</div>
       <div className="flex items-center space-x-2 justify-between">
        <span className="font-medium md:text-sm">{String(item.count).padStart(2, "0")}</span>
       </div>
      </div>
     ))}
    </ScrollArea>
   </CardContent>
  </Card>
 );
};

export default FurnitureList;
