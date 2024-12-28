import React from "react";

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

const Hamburger = ({ isOpen, toggle }: HamburgerProps) => {
  return (
    <button
      onClick={toggle}
      className="relative flex flex-col items-center justify-center w-10 h-10 md:hidden z-[9999]"
    >
      {/* Container for Hamburger Bars */}
      <div className="flex flex-col justify-between w-[20px] h-[20px] overflow-hidden">
        {/* Top Bar */}
        <div
          className={`h-[2px] w-7 bg-white transform transition-all duration-300 ${
            isOpen ? "rotate-45 absolute" : ""
          }`}
          style={{
            transformOrigin: "center",
            marginBottom: isOpen ? 0 : "3px", // Tightens gap between bars when closed
          }}
        />
        {/* Middle Bar */}
        <div
          className={`h-[2px] w-7 bg-white rounded transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        {/* Bottom Bar */}
        <div
          className={`h-[2px] w-7 bg-white transform transition-all duration-300 ${
            isOpen ? "-rotate-45 absolute" : ""
          }`}
          style={{
            transformOrigin: "center",
            marginTop: isOpen ? 0 : "3px", // Tightens gap between bars when closed
          }}
        />
      </div>
    </button>
  );
};

export default Hamburger;
