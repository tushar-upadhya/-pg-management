"use client"

import * as React from "react"
import { Label, Pie, PieChart as RechartsPieChart } from "recharts"

import {
 Card,
 CardContent,
 CardHeader,
 CardTitle
} from "../../components/ui/card"
import {
 ChartConfig,
 ChartContainer,
 ChartTooltip,
 ChartTooltipContent,
} from "../../components/ui/chart"

export const description = "A donut chart with text"

interface PieChartProps {
 data: { browser: string; visitors: number; fill: string }[];
 title?: string;
 icon?: React.ReactNode;
 className?: string;
}

const chartConfig = {
 visitors: {
  label: "Visitors",
 },
 chrome: {
  label: "Chrome",
  color: "hsl(var(--chart-1))",
 },
 safari: {
  label: "Safari",
  color: "hsl(var(--chart-2))",
 },
 firefox: {
  label: "Firefox",
  color: "hsl(var(--chart-3))",
 },
 edge: {
  label: "Edge",
  color: "hsl(var(--chart-4))",
 },
 other: {
  label: "Other",
  color: "hsl(var(--chart-5))",
 },
} satisfies ChartConfig

export function PieChart({ data, title, icon, className }: PieChartProps) {
 const totalVisitors = React.useMemo(() => {
  return data.reduce((acc, curr) => acc + curr.visitors, 0)
 }, [data])

 return (
  <Card className={`flex flex-col bg-transparent text-white border-none ${className}`}>
   <CardHeader className="items-center pb-0">
    <CardTitle className="text-lg md:text-xl lg:text-2xl">{title}
     <span className="inline-block ml-3.5 cursor-pointer">
      {icon && <span className="text-muted-foreground">{icon}</span>}
     </span>
    </CardTitle>
   </CardHeader>
   <CardContent className="flex-1 pb-0">
    <ChartContainer
     config={chartConfig}
     className="mx-auto aspect-square max-h-[200px] md:max-h-[250px] lg:max-h-[300px] w-full"
    >
     <RechartsPieChart>
      <ChartTooltip
       cursor={false}
       content={<ChartTooltipContent hideLabel />}
      />
      <Pie
       data={data}
       dataKey="visitors"
       nameKey="browser"
       innerRadius={60}
       outerRadius={80}  // Adjust outerRadius for better visibility
       strokeWidth={5}
      >
       <Label
        content={({ viewBox }) => {
         if (viewBox && "cx" in viewBox && "cy" in viewBox) {
          return (
           <text
            x={viewBox.cx}
            y={viewBox.cy}
            textAnchor="middle"
            dominantBaseline="middle"
           >
            <tspan
             x={viewBox.cx}
             y={viewBox.cy}
             className="fill-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
            >
             {totalVisitors.toLocaleString()}
            </tspan>
            <tspan
             x={viewBox.cx}
             y={(viewBox.cy || 0) + 24}
             className="fill-muted-foreground text-xs md:text-sm lg:text-base"
            >
             {/* Visitors */}
            </tspan>
           </text>
          )
         }
        }}
       />
      </Pie>
     </RechartsPieChart>
    </ChartContainer>
   </CardContent>
  </Card>
 )
}
