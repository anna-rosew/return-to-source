"use client";
import Link from "next/link";
import { Button } from "../ui/button";

interface RightNavProps {
  open: boolean;
  closeMenu: () => void;
}

const RightNav = ({ open, closeMenu }: RightNavProps) => {
  return (
    <div
      className={`${
        open ? "translate-x-0" : "translate-x-full"
      } fixed top-0 right-0 w-full h-full bg-customTeal z-40 transition-all duration-500 ease-in-out`}
    >
      <div className="flex flex-col justify-center items-center h-full text-white text-lg space-y-6">
        <Link href="#" aria-current="page" onClick={closeMenu}>
          <p className="font-jost text-[16px] text-white uppercase relative hover:text-white cursor-pointer transition-all ease-in-out inline-block before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-full hover:before:left-0 before:bottom-0">
            Home
          </p>
        </Link>
        <Link href="/work" onClick={closeMenu}>
          <p className="font-jost text-[16px] text-white uppercase relative hover:text-white cursor-pointer transition-all ease-in-out inline-block before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-full hover:before:left-0 before:bottom-0">
            Work with Rose
          </p>
        </Link>
        <Link href="/about" onClick={closeMenu}>
          <p className="font-jost text-[16px] text-white uppercase relative hover:text-white cursor-pointer transition-all ease-in-out inline-block before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-full hover:before:left-0 before:bottom-0">
            About
          </p>
        </Link>
        <Link href="/dashboard" onClick={closeMenu}>
          <p className="font-jost text-[16px] text-white uppercase relative hover:text-white cursor-pointer transition-all ease-in-out inline-block before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-full hover:before:left-0 before:bottom-0">
            Blog
          </p>
        </Link>
        <Link href="/dashboard" onClick={closeMenu}>
          <p className="font-jost text-[16px] text-white uppercase relative hover:text-white cursor-pointer transition-all ease-in-out inline-block before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-full hover:before:left-0 before:bottom-0">
            Approach
          </p>
        </Link>

        {/* Login button: 
        import UserIcon from "@/public/Assets/Icons/UserIcon";
        <Link href="/login">
            <Button
              variant="outline"
              size="lg"
              className="w-full justify-center flex items-center space-x-2 mb-5 group"
            >
              <UserIcon className="hover:fill-white" />
              <span>Login</span>
            </Button>
          </Link> */}
        <div className="absolute bottom-6 w-full px-4 space-y-6">
          <Link href="/contact" className="my-2">
            <Button
              variant="secondary"
              size="lg"
              className="w-full justify-center"
            >
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
