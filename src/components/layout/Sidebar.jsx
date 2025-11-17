import React from "react";
import { RiFileChart2Fill } from "react-icons/ri";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <RiFileChart2Fill className="text-2xl" />
          <span className="text-xl font-bold">Hack Nest</span>
        </div>
      </div>
    </div>
  );
}
