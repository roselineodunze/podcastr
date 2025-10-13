import React from "react";
import AppLogo from "./AppLogo";
import { Menu, Bell, Moon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

const NavBar = ({ showSidebar, setShowSidebar }) => {
  return (
    <nav className="w-full h-20 z-10 flex justify-center items-center">
      <div className="w-full h-full flex items-center justify-between">
        <button onClick={() => setShowSidebar(true)}>
          {!showSidebar && <Menu size={26} className="text-gray-300 transform transition-transform duration-300 ease-in-out" />}
        </button>
        {/* {!showSidebar && <AppLogo />} */}

        <div className="flex items-center gap-3">
          <Moon size={26} className="text-gray-300" />
          <Bell size={26} className="text-gray-300" />
          <Avatar>
            <AvatarImage src="/images/player1.png" />
            <AvatarFallback>RO</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
