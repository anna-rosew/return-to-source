"use client";
import React, { useState } from "react";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";
import Hamburger from "../ui/Hamburger"; // Import Hamburger here

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Sidebar Component */}
      <Sidebar isOpen={isOpen} toggle={toggle} />

      {/* Render Hamburger outside of NavBar, to always show when sidebar is open */}
      <div className="fixed top-4 right-4 z-[9999] md:hidden">
        <Hamburger toggle={toggle} isOpen={isOpen} />
      </div>

      {/* NavBar that hides when sidebar is open */}
      <NavBar toggle={toggle} isOpen={isOpen} />
    </>
  );
};

export default Navigation;
