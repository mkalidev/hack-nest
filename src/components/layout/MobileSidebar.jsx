import React from "react";
import { RiFileChart2Fill, RiHome2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function MobileSidebar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <RiFileChart2Fill className="text-2xl" />
          <span className="text-xl font-bold">Hack Nest</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Link to="/">
          <RiHome2Fill className="text-2xl" />
          <span className="text-xl font-bold">Home</span>
        </Link>
        <Link to="/about">
          <RiAbout2Fill className="text-2xl" />
          <span className="text-xl font-bold">About</span>
        </Link>
      </div>
    </div>
  );
}
