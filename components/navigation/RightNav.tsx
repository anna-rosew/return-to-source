'use client';
import Link from 'next/link';
import { Button } from '../ui/button';

interface RightNavProps {
  open: boolean;
  closeMenu: () => void;
}

const RightNav = ({ open, closeMenu }: RightNavProps) => {
  return (
    <div
      className={`${
        open ? 'translate-x-0' : 'translate-x-full'
      } fixed right-0 top-0 z-40 h-full w-full bg-customTeal transition-all duration-500 ease-in-out`}
    >
      <div className="flex h-full flex-col items-center justify-center space-y-6 text-lg text-white">
        <Link href="#" aria-current="page" onClick={closeMenu}>
          <p className="relative inline-block cursor-pointer font-jost text-[16px] uppercase text-white transition-all ease-in-out before:absolute before:bottom-0 before:h-[1px] before:w-0 before:origin-center before:bg-white before:transition-all before:duration-700 before:ease-in-out hover:text-white hover:before:left-0 hover:before:w-full">
            Home
          </p>
        </Link>
        <Link href="/work" onClick={closeMenu}>
          <p className="relative inline-block cursor-pointer font-jost text-[16px] uppercase text-white transition-all ease-in-out before:absolute before:bottom-0 before:h-[1px] before:w-0 before:origin-center before:bg-white before:transition-all before:duration-700 before:ease-in-out hover:text-white hover:before:left-0 hover:before:w-full">
            Work with Rose
          </p>
        </Link>
        <Link href="/about" onClick={closeMenu}>
          <p className="relative inline-block cursor-pointer font-jost text-[16px] uppercase text-white transition-all ease-in-out before:absolute before:bottom-0 before:h-[1px] before:w-0 before:origin-center before:bg-white before:transition-all before:duration-700 before:ease-in-out hover:text-white hover:before:left-0 hover:before:w-full">
            About
          </p>
        </Link>
        <Link href="/blog" onClick={closeMenu}>
          <p className="relative inline-block cursor-pointer font-jost text-[16px] uppercase text-white transition-all ease-in-out before:absolute before:bottom-0 before:h-[1px] before:w-0 before:origin-center before:bg-white before:transition-all before:duration-700 before:ease-in-out hover:text-white hover:before:left-0 hover:before:w-full">
            Blog
          </p>
        </Link>
        <Link href="/approach" onClick={closeMenu}>
          <p className="relative inline-block cursor-pointer font-jost text-[16px] uppercase text-white transition-all ease-in-out before:absolute before:bottom-0 before:h-[1px] before:w-0 before:origin-center before:bg-white before:transition-all before:duration-700 before:ease-in-out hover:text-white hover:before:left-0 hover:before:w-full">
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
        <div className="absolute bottom-6 w-full space-y-6 px-4">
          <Link href="/contact" className="my-2">
            <Button variant="secondary" size="lg" className="w-full justify-center">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
