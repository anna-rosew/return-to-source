"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    workWithRose: false,
    about: false,
    resources: false,
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (key: keyof typeof dropdowns) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <nav className="relative ">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Logo />
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Login and Sign-up Buttons */}
        <div className="flex items-center justify-center space-x-2 md:order-2">
          <Link
            href="#"
            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none"
          >
            Login
          </Link>
          <Link
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
          >
            Sign up
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div
          id="mega-menu"
          className={`${
            menuOpen ? "block bg-customTeal" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            {/* Home Link */}
            <li className="py-2 px-3">
              <Link href="#" aria-current="page">
                <p className="font-jost text-[16px] text-black uppercase relative hover:text-black cursor-pointer transition-all ease-in-out inline-block before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-full hover:before:left-0 before:bottom-0">
                  Home
                </p>
              </Link>
            </li>

            {/* Work with Rose Dropdown */}
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
                } absolute z-10 w-auto text-sm bg-black border border-gray-100 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700`}
              >
                <ul className="space-y-4 p-6 pb-0 text-gray-900 md:pb-4 dark:text-white">
                  <li>
                    <Link href="#">Online Groups</Link>
                  </li>
                  <li>
                    <Link href="#">In-Person Groups</Link>
                  </li>
                  <li>
                    <Link href="#">Retreats</Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* About Dropdown */}
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
                } absolute z-10 w-auto text-sm bg-black border border-gray-100 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700`}
              >
                <ul className="space-y-4 p-6 pb-0 text-gray-900 md:pb-4 dark:text-white">
                  <li>
                    <Link href="#">Our Story</Link>
                  </li>
                  <li>
                    <Link href="#">Mission</Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Resources Dropdown */}
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
                } absolute z-10 w-auto text-sm bg-black border border-gray-100 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700`}
              >
                <ul className="space-y-4 p-6 pb-0 text-gray-900 md:pb-4 dark:text-white">
                  <li>
                    <Link href="#">Blog</Link>
                  </li>
                  <li>
                    <Link href="#">Tutorials</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
