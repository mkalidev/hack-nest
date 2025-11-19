import React from "react";
import Opportunities from "../components/features/Opportunities";

export default function Home() {
  return (
    <>
    <div className="w-full flex flex-col md:flex-row items-top gap-4 relative h-auto">
      <Opportunities />
      
    </div>
    </>
  );
}
