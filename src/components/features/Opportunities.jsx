import React, { useState } from "react";
import { RiFilter3Fill } from "react-icons/ri";

export default function Opportunities() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    {
      name: "All",
      value: "all",
    },
    {
      name: "Design",
      value: "design",
    },
    {
      name: "Development",
      value: "development",
    },
    {
      name: "AI",
      value: "ai",
    },
  ];
  return (
    <div className="w-full space-y-4">
      <div className="w-full flex gap-5 items-center justify-between">
        <h2 className="text-xl font-semibold">Latest Opportunities</h2>
        <div className="flex gap-3 items-center">
          <RiFilter3Fill size={20} />
          <p className="text-sm font-medium text-black/60">Filter</p>
        </div>
      </div>
      <div className="w-full flex gap-3 items-center">
        <div className="">All</div>
      </div>
    </div>
  );
}
