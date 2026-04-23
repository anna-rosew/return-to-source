'use client';

import React, { useState, useEffect } from 'react';
import RightNav from './RightNav';

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
        className="absolute right-5 top-5 z-50 flex h-8 w-8 cursor-pointer flex-col items-center justify-between space-y-[4px] md:hidden" // Adjust space between lines
        onClick={handleClick}
      >
        {/* Line 1 */}
        <div
          className={`h-[3px] w-full transform rounded-sm bg-black transition duration-300 ease-in-out ${
            open ? 'translate-y-[14px] rotate-45' : '' // Adjust translate-y for perfect cross positioning
          }`}
        />
        {/* Line 2 */}
        <div
          className={`h-[3px] w-full rounded-sm bg-black transition duration-300 ease-in-out ${
            open ? 'opacity-0' : '' // Line 2 disappears on open
          }`}
        />
        {/* Line 3 */}
        <div
          className={`h-[3px] w-full transform rounded-sm bg-black transition duration-300 ease-in-out ${
            open ? '-translate-y-[14px] -rotate-45' : '' // Adjust translate-y for perfect cross positioning
          }`}
        />
      </div>

      {/* RightNav */}
      <RightNav open={open} closeMenu={() => setOpen(false)} />
    </>
  );
};

export default Burger;
