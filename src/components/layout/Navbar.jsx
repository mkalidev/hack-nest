import React, { useEffect, useRef, useState } from "react";
import { CgChevronDown } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";

export default function Navbar() {
  const [showOption, setShowOption] = useState(false);
  const [open, setOpen] = useState(false);
  const optionsRef = useRef(null);
  const location = useLocation();

  const { open: openAuth } = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  // Check if a route is active
  const isActive = (path) => {
    if (path === "/") {
      // For home route, check if we're on home or detail page (starts with / and is a number)
      return location.pathname === "/" || /^\/\d+$/.test(location.pathname);
    }
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOption(false);
      }
    };

    if (showOption) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOption]);

  const handleKebabClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowOption(!showOption);
  };

  return (
    <>
      <div className="w-full mx-auto py-4 bg-white sticky top-0 z-10 border-b border-black/10 h-fit">
        <div className="mx-auto px-4 md:px-6 flex items-center h-full justify-between max-w-[1320px]">
          <Link to="/">
            <p className="font-semibold text-[16px] md:text-[20px]">
              Hack <span className="text-c-color capitalize">Nest</span>
            </p>
          </Link>
          <div className="block md:hidden" onClick={() => setOpen(!open)}>
            <GiHamburgerMenu size={24} />
          </div>
          <div className="flex gap-6 items-center">
            <Link to="/">
              <p
                className={`text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "text-c-color font-semibold"
                    : "text-black/60 hover:text-black"
                }`}
              >
                Bounties
              </p>
            </Link>
            <Link to="/hackathons">
              <p
                className={`text-sm font-medium transition-colors ${
                  isActive("/hackathons")
                    ? "text-c-color font-semibold"
                    : "text-black/60 hover:text-black"
                }`}
              >
                Hackathon
              </p>
            </Link>
            <Link to="/grants">
              <p
                className={`text-sm font-medium transition-colors ${
                  isActive("/grants")
                    ? "text-c-color font-semibold"
                    : "text-black/60 hover:text-black"
                }`}
              >
                Grants
              </p>
            </Link>
          </div>

          <div className="px-4 py-2.5 rounded-lg bg-c-color text-white text-xs font-semibold" onClick={openAuth}>
            Sign up
          </div>

          {/* <div
            className="hidden md:flex items-center gap-3 relative cursor-pointer"
            onClick={handleKebabClick}
          >
            <div className="w-12 h-12 rounded-full bg-c-color overflow-hidden">
              <img src={''} alt="" />
            </div>
            <div className="space-y-0">
              <p className="text-sm font-semibold capitalize">
                Guest
              </p>
              <p className="text-xs text-gray-500 capitalize">User</p>
            </div>
            <CgChevronDown />
            {showOption && (
              <div
                ref={optionsRef}
                className="absolute top-17 right-0 z-100 w-[200px] min-h-20 bg-white shadow-md overflow-hidden"
              >
                <Link to="settings">
                  <div
                    className="p-3 w-full hover:bg-black/10 cursor-pointer"
                    onClick={() => setShowOption(false)}
                  >
                    Settings
                  </div>
                </Link>
                <div
                  className="p-3 text-red-500 w-full hover:bg-black/10 cursor-pointer"
                >
                  Logout
                </div>
              </div>
            )}
          </div> */}
        </div>
      </div>
      {open && <MobileSidebar setOpen={setOpen} />}
    </>
  );
}
