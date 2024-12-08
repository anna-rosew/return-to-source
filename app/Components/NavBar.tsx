"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
import NavBarLinks from "./NavBarLinks";

export function Navbar() {
  return (
    <div className="flex w-full items-center justify-between px-5 py-2 border-b-[1px] border-black lg:container lg:mx-auto lg:px-5">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={Logo}
            alt="Return to Source Logo"
            width={160}
            className="cursor-pointer"
          />
        </Link>
        <NavBarLinks />
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
    </div>
  );
}
