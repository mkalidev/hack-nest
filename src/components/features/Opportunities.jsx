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
    {
      name: "Blockchain",
      value: "blockchain",
    },
    {
      name: "Other",
      value: "other",
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
      <div className="w-full flex gap-2 items-center">
        {tabs.map((tab) => (
          <div
            className={`${
              activeTab === tab.value
                ? "bg-c-color text-white"
                : "bg-white text-black/60 border border-black/10"
            } px-4 py-2 rounded-xl cursor-pointer text-sm`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.name}
          </div>
        ))}
      </div>
    </div>
  );
}
