"use client";

import React, { useState, useEffect } from "react";
import RightNav from "./RightNav";

interface BurgerProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Burger = ({ menuOpen, toggleMenu }: BurgerProps) => {
  const [open, setOpen] = useState(menuOpen);

  useEffect(() => {
    setOpen(menuOpen);
  }, [menuOpen]);

  const handleClick = () => {
    setOpen(!open);
    toggleMenu();
  };

  return (
    <>
      <div
        className="absolute top-5 right-5 z-50 md:hidden flex flex-col justify-between items-center w-8 h-8 cursor-pointer space-y-[4px]" // Adjust space between lines
        onClick={handleClick}
      >
        {/* Line 1 */}
        <div
          className={`w-full h-[3px] bg-black rounded-sm transform transition duration-300 ease-in-out ${
            open ? "rotate-45 translate-y-[14px]" : "" // Adjust translate-y for perfect cross positioning
          }`}
        />
        {/* Line 2 */}
        <div
          className={`w-full h-[3px] bg-black rounded-sm transition duration-300 ease-in-out ${
            open ? "opacity-0" : "" // Line 2 disappears on open
          }`}
        />
        {/* Line 3 */}
        <div
          className={`w-full h-[3px] bg-black rounded-sm transform transition duration-300 ease-in-out ${
            open ? "-rotate-45 -translate-y-[14px]" : "" // Adjust translate-y for perfect cross positioning
          }`}
        />
      </div>

      {/* RightNav */}
      <RightNav open={open} closeMenu={() => setOpen(false)} />
    </>
  );
};

export default Burger;
