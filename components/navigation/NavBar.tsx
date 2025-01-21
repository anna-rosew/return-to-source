"use client";

import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import Burger from "./Burger";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    workWithRose: false,
    about: false,
    resources: false,
  });

  const navbarRef = useRef<HTMLElement | null>(null);

  const toggleDropdown = (key: keyof typeof dropdowns) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeDropdowns = () => {
    setDropdowns({
      workWithRose: false,
      about: false,
      resources: false,
    });
  };

  /**Login Button: 
   * import UserIcon from "@/public/Assets/Icons/UserIcon";
   * <Link href="/login">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center space-x-2 group"
            >
              <UserIcon className=" hover:fill-white hover:text-white" />
              <span>Login</span>
            </Button>
          </Link> */

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        closeDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav
      ref={navbarRef}
      className="relative lg:mt-3 lg:mx-[76px] border-b-2 border-black"
    >
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Logo />
        </div>
        <div className="lg:flex hidden items-center justify-center space-x-2 md:order-2">
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Contact Rose
            </Button>
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:space-x-4 rtl:space-x-reverse">
            <li className="py-2 px-3">
              <Link href="/" aria-current="page">
                <p className="font-jost text-[16px] text-black uppercase relative hover:text-black cursor-pointer transition-all ease-in-out inline-block before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-full hover:before:left-0 before:bottom-0">
                  Home
                </p>
              </Link>
            </li>

            <li>
              <button
                onClick={() => toggleDropdown("workWithRose")}
                className="flex items-center justify-between w-full py-2 px-3 cursor-pointer"
              >
                <p className="font-jost text-[16px] text-black uppercase relative hover:text-black cursor-pointer transition-all ease-in-out inline-block before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-full hover:before:left-0 before:bottom-0">
                  Work with Rose
                </p>
                <svg
                  className="w-2.5 h-2.5 ms-3 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                className={`${
                  dropdowns.workWithRose ? "block" : "hidden"
                } absolute z-10 w-auto text-sm bg-black rounded-lg shadow-md  dark:bg-gray-700`}
              >
                <ul className="space-y-4 p-6 pb-0 text-white md:pb-4 dark:text-white">
                  <li>
                    <Link
                      href="/work"
                      className="hover:text-customGreen"
                      onClick={closeDropdowns}
                    >
                      Online Groups
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/work"
                      className="hover:text-customGreen"
                      onClick={closeDropdowns}
                    >
                      In-Person Groups
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/work"
                      className="hover:text-customGreen"
                      onClick={closeDropdowns}
                    >
                      Retreats
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <button
                onClick={() => toggleDropdown("about")}
                className="flex items-center justify-between w-full py-2 px-3"
              >
                <p className="font-jost text-[16px] text-black uppercase relative hover:text-black cursor-pointer transition-all ease-in-out inline-block before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-full hover:before:left-0 before:bottom-0">
                  About
                </p>
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                className={`${
                  dropdowns.about ? "block" : "hidden"
                } absolute z-10 w-auto text-sm bg-black rounded-lg shadow-md  dark:bg-gray-700`}
              >
                <ul className="space-y-4 p-6 pb-0 text-white md:pb-4 dark:text-white">
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-customGreen"
                      onClick={closeDropdowns}
                    >
                      Meet Rose
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/approach"
                      className="hover:text-customGreen"
                      onClick={closeDropdowns}
                    >
                      Approach
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <button
                onClick={() => toggleDropdown("resources")}
                className="flex items-center justify-between w-full py-2 px-3"
              >
                <p className="font-jost text-[16px] text-black uppercase relative hover:text-black cursor-pointer transition-all ease-in-out inline-block before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-full hover:before:left-0 before:bottom-0">
                  Resources
                </p>
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                className={`${
                  dropdowns.resources ? "block" : "hidden"
                } absolute z-10 w-auto text-sm bg-black rounded-lg shadow-md dark:bg-gray-700`}
              >
                <ul className="space-y-4 p-6 pb-0 text-white md:pb-4 dark:text-white">
                  <li>
                    <Link
                      href="/dashboard"
                      className="hover:text-customGreen"
                      onClick={closeDropdowns}
                    >
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="hover:text-customGreen"
                      onClick={closeDropdowns}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="hover:text-customGreen"
                      onClick={closeDropdowns}
                    >
                      Class
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <Burger menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
