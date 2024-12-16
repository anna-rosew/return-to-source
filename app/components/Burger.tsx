import React, { useState, useEffect } from "react";
import RightNav from "./RightNav";

// Define the types for props passed to Burger
interface BurgerProps {
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

const Burger: React.FC<BurgerProps> = ({ menuOpen, toggleMenu, closeMenu }) => {
  const [open, setOpen] = useState<boolean>(menuOpen);

  useEffect(() => {
    setOpen(menuOpen);
  }, [menuOpen]);

  const handleClick = () => {
    setOpen(!open);
    toggleMenu();
  };

  return (
    <>
      {/* Burger Menu Icon for Small Screens */}
      <div
        className={`w-8 h-8 absolute top-4 right-5 flex flex-col justify-between items-center z-50 md:hidden cursor-pointer`}
        onClick={handleClick}
      >
        <div
          className={`w-8 h-0.5 bg-${
            open ? "gray-400" : "gray-800"
          } transition-all transform ${open ? "rotate-45 translate-y-2" : ""}`}
        />
        <div
          className={`w-8 h-0.5 bg-${
            open ? "transparent" : "gray-800"
          } transition-all transform ${open ? "opacity-0" : ""}`}
        />
        <div
          className={`w-8 h-0.5 bg-${
            open ? "gray-400" : "gray-800"
          } transition-all transform ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </div>

      {/* Right Navigation Menu */}
      <RightNav open={open} closeMenu={closeMenu} />
    </>
  );
};

export default Burger;
