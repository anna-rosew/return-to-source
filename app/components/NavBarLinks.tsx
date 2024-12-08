import React from "react";
import Link from "next/link";

const NavBarLinks = () => {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Work with Me", link: "/work-with-me" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
  ];
  return (
    <div className="hidden lg:flex px-10 gap-x-[48px]">
      {navLinks.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          className="font-jost text-[16px] text-black uppercase relative hover:text-black cursor-pointer transition-all ease-in-out inline-block before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-full hover:before:left-0 before:bottom-0"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavBarLinks;
