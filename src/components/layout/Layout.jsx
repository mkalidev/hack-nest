import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-full flex gap-0 relative h-full">
      {/* <Sidebar /> */}
      <div className="space-y-0 w-full relative">
        <Navbar />
        <div className="w-full h-[280px] bg-linear-to-br from-purple-700 to-black"></div>
        <div className="max-w-[1320px] py-5 px-4 md:px-6 mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
