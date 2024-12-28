import React from "react";
import Logo from "./Logo";
import { NavLinks } from "./NavLinks";
import Link from "next/link";
import { Button } from "../ui/Button";
import Image from "next/image";
import User from "../../../public/Assets/user.svg";
import Hamburger from "../ui/Hamburger"; // Import the Hamburger component

const NavBar = ({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) => {
  return (
    <nav
      className={`flex w-full items-center justify-between px-6 py-1 border-b-[1px] border-black lg:container lg:mx-auto lg:px-5 sticky top-0 z-20 ${
        isOpen ? "hidden" : "" // Hide nav when sidebar is open
      }`}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <ul className="hidden md:flex md:items-center px-10 gap-x-[48px]">
          {NavLinks.map((route) => {
            const { name, link } = route;
            return (
              <li key={name}>
                <Link
                  href={link}
                  className="font-jost text-[16px] text-black uppercase relative hover:text-black cursor-pointer transition-all ease-in-out inline-block before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-full hover:before:left-0 before:bottom-0"
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-x-5 items-center">
        <Button href="/login" variant="secondary">
          <Image src={User} alt="User Profile" width={38} />
          Sign in
        </Button>
        {/* Use the Hamburger component here */}
        <Hamburger toggle={toggle} isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default NavBar;
