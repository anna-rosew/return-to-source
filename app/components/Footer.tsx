import React from "react";
import LogoWhite from "../../public/assets/logo_white.svg";
import InstaIcon from "../../public/assets/insta-footer.svg";
import VimeoIcon from "../../public/assets/footer-vimeo.svg";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Footer = () => {
  const serviceLinks = [
    { name: "Groups Overview", link: "/groups" },
    { name: "One-to-Ones", link: "/onetoone" },
    { name: "Online Groups", link: "/groups" },
    { name: "In-Person Sessions", link: "/groups" },
    { name: "Retreats", link: "/groups" },
  ];

  const aboutLinks = [
    { name: "Approach", link: "/approach" },
    { name: "About", link: "/about" },
    { name: "Qualifications", link: "/about" },
  ];

  const resourceLinks = [
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
    { name: "Members Portal", link: "/dashboard" },
    { name: "Newsletter", link: "/" },
  ];

  return (
    <div className="w-full m-0 bg-customSienna text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        <div className="order-last md:order-first items-center">
          <div className="items-center text-center md:text-left">
            <Link href="/">
              <Image
                src={LogoWhite}
                alt="Rose Long Logo"
                height={64}
                className="mx-auto md:mx-1"
              />
            </Link>
            <div>
              <Link
                href="https://www.instagram.com/lifechangesrose/?hl=en"
                className=" inline-block m-3"
              >
                <Image src={InstaIcon} alt="Instagram" height={48} width={48} />
              </Link>
              <Link
                href="https://vimeo.com/roselong"
                className="inline-block m-2.5"
              >
                <Image src={VimeoIcon} alt="Vimeo" height={48} width={48} />
              </Link>
            </div>
            <Link href="/contact">
              <Button variant="secondary" className="my-2">
                Get in Touch
              </Button>
            </Link>
            <div className="my-6">
              <p className="text-xs text-white leading-6">
                Website built by{" "}
                <Link href="https://annarosewain.com/" className="font-bold">
                  {" "}
                  Anna-Rose Wain{" "}
                </Link>{" "}
                | Artwork by{" "}
                <Link
                  href="https://www.sacredintuitiveart.com/about"
                  className="font-bold"
                >
                  Lynn Hanford Day - Sacred Intuitive Art
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 items-start justify-between text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-white text-base my-4">services</h3>
            <ul className="list-none p-0">
              {serviceLinks.map((item, index) => (
                <li key={index} className="block mb-3">
                  <Link
                    className="white-links text-xs leading-6 md:text-base"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-white text-base my-4">about</h3>
            <ul className="list-none p-0">
              {aboutLinks.map((item, index) => (
                <li key={index} className="block mb-3">
                  <Link
                    className="white-links text-xs leading-6 md:text-base"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-white text-base my-4">resources</h3>
            <ul className="list-none p-0">
              {resourceLinks.map((item, index) => (
                <li key={index} className="block mb-3">
                  <Link
                    className="white-links text-xs leading-6 md:text-base"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;