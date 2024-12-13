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
        <div className="order-last md:order-first grid grid-rows-3 gap-2 items-center">
          <div className="items-center">
            <Link href="/">
              <Image src={LogoWhite} alt="Rose Long Logo" height={64} />
            </Link>
            <div>
              <Link
                href="https://www.instagram.com/lifechangesrose/?hl=en"
                className=" inline-block m-2.5"
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
              <Button variant="secondary">Get in Touch</Button>
            </Link>
            <div className="mb-2">
              <p>
                Website built by{" "}
                <Link href="https://annarosewain.com/"> Anna-Rose Wain </Link> |
                Artwork by{" "}
                <Link href="https://www.sacredintuitiveart.com/about">
                  Lynn Hanford Day - Sacred Intuitive Art
                </Link>
              </p>
            </div>{" "}
          </div>
        </div>

        <div className="grid grid-cols-3 items-center justify-between">
          <div>
            <h3>services</h3>
            <ul>
              <li className="white-links">
                {serviceLinks.map((item, index) => (
                  <Link href={item.link} key={index} className="footer-links">
                    {item.name}
                  </Link>
                ))}
              </li>
            </ul>
          </div>
          <div className="list">
            <h3>about</h3>
            <ul>
              <li>
                {aboutLinks.map((item, index) => (
                  <Link href={item.link} key={index} className="footer-links">
                    <li className="white-links">{item.name}</li>
                  </Link>
                ))}
              </li>
            </ul>
          </div>
          <div className="list">
            <h3>resources</h3>
            <ul className="list-none p-0">
              {resourceLinks.map((item, index) => (
                <li key={index} className="white-links mb-2">
                  <Link href={item.link}>{item.name}</Link>
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
