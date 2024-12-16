import React from "react";
import Link from "next/link";

// Define the types for the props passed to RightNav
interface RightNavProps {
  open: boolean;
  closeMenu: () => void;
}

const RightNav: React.FC<RightNavProps> = ({ open, closeMenu }) => {
  return (
    <ul
      className={`list-none flex flex-col md:flex-row md:space-x-6 fixed top-0 right-0 z-40 bg-gray-700 md:bg-transparent md:static md:flex ${
        open ? "transform-none" : "transform translate-x-full"
      } transition-transform duration-300 ease-in-out md:flex md:space-x-4`}
    >
      <li>
        <Link href="/" onClick={closeMenu} className="text-white p-4">
          Home
        </Link>
      </li>
      <li>
        <Link href="/work" onClick={closeMenu} className="text-white p-4">
          Work With Rose
        </Link>
      </li>
      <li>
        <Link href="/about" onClick={closeMenu} className="text-white p-4">
          About
        </Link>
      </li>
      <li>
        <Link href="/contact" onClick={closeMenu} className="text-white p-4">
          Contact
        </Link>
      </li>
      <li>
        <Link href="/membership" onClick={closeMenu} className="text-white p-4">
          Membership
        </Link>
      </li>
      <li>
        <Link href="/blog" onClick={closeMenu} className="text-white p-4">
          Blog
        </Link>
      </li>
      {open && (
        <li>
          <Link href="/contact" onClick={closeMenu}>
            <a className="bg-red-600 text-white py-3 px-8 mt-4 rounded-full block text-center">
              Book Now
            </a>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default RightNav;
