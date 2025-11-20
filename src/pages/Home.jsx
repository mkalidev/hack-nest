import React from "react";
import Opportunities from "../components/features/Opportunities";
import StatsSidebar from "../components/features/StatsSidebar";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-start gap-6 relative h-auto">
        <div className="flex-1">
          <Opportunities />
        </div>
        <StatsSidebar />
      </div>
    </>
  );
}
