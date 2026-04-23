'use client';

import { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import Burger from './Burger';
import Link from 'next/link';
import { Button } from '../ui/button';

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
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        closeDropdowns();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <nav ref={navbarRef} className="relative border-b-2 border-black lg:mx-[76px] lg:mt-3">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <div className="flex w-full items-center justify-between md:w-auto">
          <Logo />
        </div>
        <div className="hidden items-center justify-center space-x-2 md:order-2 lg:flex">
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Contact Rose
            </Button>
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-4 rtl:space-x-reverse">
            <li className="px-3 py-2">
              <Link href="/" aria-current="page">
                <p className="relative inline-block cursor-pointer font-jost text-[16px] uppercase text-black transition-all ease-in-out before:absolute before:bottom-0 before:h-[1px] before:w-0 before:origin-center before:bg-black before:transition-all before:duration-700 before:ease-in-out hover:text-black hover:before:left-0 hover:before:w-full">
                  Home
                </p>
              </Link>
            </li>

            <li>
              <button
                onClick={() => toggleDropdown('workWithRose')}
                className="flex w-full cursor-pointer items-center justify-between px-3 py-2"
              >
                <p className="relative inline-block cursor-pointer font-jost text-[16px] uppercase text-black transition-all ease-in-out before:absolute before:bottom-0 before:h-[1px] before:w-0 before:origin-center before:bg-black before:transition-all before:duration-700 before:ease-in-out hover:text-black hover:before:left-0 hover:before:w-full">
                  Work with Rose
                </p>
                <svg
                  className="ms-3 h-2.5 w-2.5 cursor-pointer"
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
                  dropdowns.workWithRose ? 'block' : 'hidden'
                } absolute z-10 w-auto rounded-lg bg-black text-sm shadow-md dark:bg-gray-700`}
              >
                <ul className="space-y-4 p-6 pb-0 text-white dark:text-white md:pb-4">
                  <li>
                    <Link
                      href="/work"
                      className="text-customGreen hover:text-white"
                      onClick={closeDropdowns}
                    >
                      <strong>Work with Rose</strong>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/groups"
                      className="hover:text-customGreen"
                      onClick={closeDropdowns}
                    >
                      Online Groups
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/groups"
                      className="hover:text-customGreen"
                      onClick={closeDropdowns}
                    >
                      In-Person Groups
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/retreats"
                      className="hover:text-customGreen"
                      onClick={closeDropdowns}
                    >
                      Retreats
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/onetoone"
                      className="hover:text-customGreen"
                      onClick={closeDropdowns}
                    >
                      One-to-Ones
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <button
                onClick={() => toggleDropdown('about')}
                className="flex w-full items-center justify-between px-3 py-2"
              >
                <p className="relative inline-block cursor-pointer font-jost text-[16px] uppercase text-black transition-all ease-in-out before:absolute before:bottom-0 before:h-[1px] before:w-0 before:origin-center before:bg-black before:transition-all before:duration-700 before:ease-in-out hover:text-black hover:before:left-0 hover:before:w-full">
                  About
                </p>
                <svg
                  className="ms-3 h-2.5 w-2.5"
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
                  dropdowns.about ? 'block' : 'hidden'
                } absolute z-10 w-auto rounded-lg bg-black text-sm shadow-md dark:bg-gray-700`}
              >
                <ul className="space-y-4 p-6 pb-0 text-white dark:text-white md:pb-4">
                  <li>
                    <Link href="/about" className="hover:text-customGreen" onClick={closeDropdowns}>
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
                onClick={() => toggleDropdown('resources')}
                className="flex w-full items-center justify-between px-3 py-2"
              >
                <p className="relative inline-block cursor-pointer font-jost text-[16px] uppercase text-black transition-all ease-in-out before:absolute before:bottom-0 before:h-[1px] before:w-0 before:origin-center before:bg-black before:transition-all before:duration-700 before:ease-in-out hover:text-black hover:before:left-0 hover:before:w-full">
                  Resources
                </p>
                <svg
                  className="ms-3 h-2.5 w-2.5"
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
                  dropdowns.resources ? 'block' : 'hidden'
                } absolute z-10 w-auto rounded-lg bg-black text-sm shadow-md dark:bg-gray-700`}
              >
                <ul className="space-y-4 p-6 pb-0 text-white dark:text-white md:pb-4">
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
                    <Link href="/blog" className="hover:text-customGreen" onClick={closeDropdowns}>
                      Blog
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
