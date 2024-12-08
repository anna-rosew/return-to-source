"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
import { Button } from "./ui/button";

export function Navbar() {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Work with Me", link: "/work-with-me" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
  ];
  return (
    <div className="flex w-full items-center justify-between px-5 py-2 border-b-[1px] border-black lg:container lg:mx-auto lg:px-5">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="Return to Source Logo"
            width={160}
            className="cursor-pointer"
          />
        </Link>
        <ul className="md:flex md:items-center px-10 gap-x-[48px]">
          {navLinks.map((item, index) => (
            <li key={index} className="md:ml-8 text-xl">
              <a
                href={item.link}
                className="font-jost text-[16px] text-black uppercase relative hover:text-black cursor-pointer transition-all ease-in-out inline-block before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-full hover:before:left-0 before:bottom-0"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-x-5 items-center">
        <Button href="/login" variant="secondary">
          <Image src={User} alt="User Profile" width={38} />
          Sign in
        </Button>

        <Image src={Menu} alt="Menu Button" className="lg:hidden" />
      </div>
    </div>
  );
}
