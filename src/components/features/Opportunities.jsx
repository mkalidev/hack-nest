import React from "react";
import { RiFilter3Fill } from "react-icons/ri";

export default function Opportunities() {
  return (
    <div className="w-full space-y-4">
      <div className="w-full flex gap-5 items-center justify-between">
        <h2 className="text-xl font-semibold">Latest Opportunities</h2>
        <div className="flex gap-3 items-center">
          <RiFilter3Fill />
          <p className="text-sm font-medium text-black/60">Filter</p>
        </div>
      </div>
      <p className="text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
    </div>
  );
}
