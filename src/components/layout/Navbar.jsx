import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Hack Nest</h1>
        </div>
      </div>
    </nav>
  );
}
