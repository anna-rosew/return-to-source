// Sidebar/index.tsx
import React from "react";
import { motion } from "framer-motion";

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar = ({ isOpen, toggle }: SidebarProps) => {
  return (
    <motion.div
      initial={{ x: "100%" }} // Start fully off-screen to the right
      animate={{ x: isOpen ? "0%" : "100%" }} // Slide in or out based on `isOpen`
      transition={{ duration: 0.5, ease: "easeInOut" }} // Adjust timing and easing
      className="fixed top-0 right-0 w-full md:w-1/3 h-full bg-white z-[99] shadow-lg"
    >
      <div className="p-4 flex flex-col gap-6">
        <ul className="flex flex-col gap-4">
          {["Home", "Work with Me", "About", "Contact", "Blog"].map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-black text-lg hover:underline"
                onClick={toggle}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Sidebar;
