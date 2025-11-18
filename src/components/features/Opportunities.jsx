import React, { useState } from "react";
import { RiFilter3Fill } from "react-icons/ri";
import { data } from "../data/data";
import { GoCheckCircleFill } from "react-icons/go";
import { HiLightningBolt } from "react-icons/hi";

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
                ? "bg-c-color text-white border border-c-color"
                : "text-black/60 border border-black/10"
            } px-4 py-2 rounded-lg cursor-pointer text-sm !hover:bg-c-color !hover:text-black transition-all duration-300`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full bg-white flex flex-col md:flex-row justify-between gap-4 items-center rounded-md p-4 border border-black/10 hover:bg-white cursor-pointer feature-card transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <img
                src="/103780637.png"
                alt={""}
                className="w-20 h-20 bg-c-color/10 object-cover"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <div className="flex gap-2">
                  <h3 className="text-sm font-normal text-black/60">
                    {item.company}
                  </h3>
                  <GoCheckCircleFill size={16} className="text-c-color" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5 items-center">
                    <HiLightningBolt size={15} className="text-black/60" />
                    <p className="text-xs font-medium text-black/60">Bounty</p>
                  </div>
                  <div className="w-[1.5px] h-full bg-black/30" />
                  <div className="flex gap-1.5 items-center">
                    {/* <HiLightningBolt size={15} className="text-black/60" /> */}
                    <p className="text-xs font-medium text-black/60">Due in 3d</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              {item.tags.map((tag) => (
                <div key={tag} className="text-sm text-black/60">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
