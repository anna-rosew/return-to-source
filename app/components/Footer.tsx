import React from "react";
import Logo from "../styles/imgs/icons/logo_white.svg";
import InstaIcon from "../styles/imgs/icons/insta-footer.svg";
import VimeoIcon from "../styles/imgs/icons/footer-vimeo.svg";

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
    { name: "About", link: "/" },
    { name: "Qualifications", link: "/groups" },
  ];

  const resourceLinks = [
    { name: "Blog", link: "/group" },
    { name: "Contact", link: "/onetoone" },
    { name: "Members Portal", link: "/groups" },
    { name: "Newsletter", link: "/groups" },
  ];
  return (
    <div>
      <div className="w-100 mt-6 bg-customSienna text-white">
        <div className="grid-cols-2 gap-12 p-6">
          <div className="flex flex-col items-center gap-2">
            <div className="items-center">
              <Link href="/">
                <Image src={Logo} alt="Rose Long Logo" className="h-16" />
              </Link>
              <div>
                <Link
                  href="https://www.instagram.com/lifechangesrose/?hl=en"
                  className="h-12 inline-block m-2.5"
                >
                  <Image src={InstaIcon} alt="Instagram" />
                </Link>
                <Link
                  href="https://vimeo.com/roselong"
                  className="h-12 inline-block m-2.5"
                >
                  <Image src={VimeoIcon} alt="Vimeo" />
                </Link>
              </div>
              <Link href="/contact">
                <Button variant="secondary">Get in Touch</Button>
              </Link>
              <div className="mb-2">
                <p>
                  Website built by{" "}
                  <Link href="https://annarosewain.com/"> Anna-Rose Wain </Link>{" "}
                  | Artwork by{" "}
                  <Link href="https://www.sacredintuitiveart.com/about">
                    Lynn Hanford Day - Sacred Intuitive Art
                  </Link>
                </p>
              </div>{" "}
            </div>
          </div>

          <div className="flex flex-wrap justify-between">
            <div>
              <h3>services</h3>
              <ul>
                {serviceLinks.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className="font-jost text-[16px] text-black uppercase relative hover:text-black cursor-pointer transition-all ease-in-out inline-block before:transition-all before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-full hover:before:left-0 before:bottom-0"
                  >
                    <li>{item.name}</li>
                  </Link>
                ))}
                <li>
                  <Link href="/groups">Groups Overview</Link>
                </li>
                <li>
                  <Link to="/onetoone">One-To-Ones</Link>
                </li>
                <li>
                  <Link to="/groups">Online Groups</Link>
                </li>
                <li>
                  <Link to="/inperson">In-Person Sessions</Link>
                </li>
                <li>
                  <Link to="/retreats">Retreats</Link>
                </li>
              </ul>
            </div>
            <div className="list">
              <h3>about</h3>
              <ul>
                <li>
                  <Link to="/approach">Approach</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/qualifications">Qualifications</Link>
                </li>
              </ul>
            </div>
            <div className="list">
              <h3>resources</h3>
              <ul>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/contact">Newsletter</Link>
                </li>
                <li>
                  <Link to="/membership">Membership</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
