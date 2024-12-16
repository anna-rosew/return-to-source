import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { Routes } from "./Routes"; // Import the Routes array

// Define a type for the route object
interface Route {
  name: string;
  link: string; // Updated to 'link' as per your Routes component
}

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false)); // Close the menu when clicking outside

  return (
    <div ref={ref} className="lg:hidden">
      <Hamburger
        toggled={isOpen}
        size={20}
        toggle={setOpen}
        label="Toggle Navigation Menu"
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20 z-20"
          >
            <ul className="grid gap-2">
              {Routes.map((route: Route, index: number) => {
                // Use Route type and index
                return (
                  <motion.li
                    key={route.name}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + index / 10,
                    }}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                  >
                    <a
                      onClick={() => setOpen(false)} // Close menu when a link is clicked
                      className="flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950 hover:bg-neutral-800 transition-all ease-in-out"
                      href={route.link} // Use 'link' instead of 'href' here
                    >
                      <span className="text-lg text-white">{route.name}</span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
