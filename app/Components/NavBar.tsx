"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

export function Navbar() {
  const { data, status, loading } = useSession();
  console.table({ data, status, loading });
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Work with Me", link: "/work-with-me" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <nav className="flex w-full items-center justify-between px-5 py-2 border-b-[1px] border-black lg:container lg:mx-auto lg:px-5">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={Logo}
            alt="Return to Source Logo"
            width={160}
            className="cursor-pointer"
          />
        </Link>
        <div className="hidden lg:flex px-10 gap-x-[48px]">
          {navLinks.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="font-jost text-[16px] text-black text-lg uppercase relative hover:text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-x-5 items-center">
        <Link
          href="/register"
          className="hidden lg:block  opacity-75 text-[16px] pr-[20px]"
        >
          Open an Account
        </Link>
        <Link href="/login" className="hidden items-center gap-x-2 lg:flex">
          <Image src={User} alt="User Profile" width={38} />
          <span className=" text-[16px]">Sign in</span>
        </Link>
        <Image src={Menu} alt="Menu Button" className="lg:hidden" />
      </div>
    </nav>
  );
}
