import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

export function Navbar() {
  const navLinks = [
    { name: "Home" },
    { name: "Work with Me" },
    { name: "About" },
    { name: "Contact" },
    { name: "Blog" },
  ];

  return (
    <nav className="flex w-full items-center justify-between px-5 py-4 border-b-2 border-black lg:container lg:mx-auto lg:px-5">
      <div className="flex items-center">
        <Image src={Logo} alt="Return to Source Logo" width={222} />
        <div className="hidden lg:flex p-5 gap-x-[40px]">
          {navLinks.map((item, index) => (
            <p
              className="font-jost text-black text-lg uppercase relative hover:text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
              key={index}
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex gap-x-5 items-center">
        <p className="hidden lg:block  opacity-75 text-[18px] pr-[20px]">
          Open an Account
        </p>

        <div className=" hidden items-center gap-x-2 lg:flex">
          <Image src={User} alt="User Profile" height={221} width={61} />
          <span className=" text-[18px]">Sign in</span>
        </div>
        <Image src={Menu} alt="Menu Button" className="lg:hidden" />
      </div>
    </nav>
  );
}
