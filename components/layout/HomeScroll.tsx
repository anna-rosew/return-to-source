import Link from "next/link";

//images

import Image from "next/image";
import AnahataChakra from "@/public/Assets/Icons/courage-white.svg";
import AjnaChakra from "@/public/Assets/Icons/clarity-white.svg";
import MuladharaChakra from "@/public/Assets/Icons/presence-white.svg";
import { ChevronRight } from "lucide-react";

export default function HomeScroll() {
  {
    /* 
            const homeFeatures = [
    {
      imageSrc: "",
      title: "Build Courage",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      buttonText: "Explore Classes",
    },
    {
      title: "Build Courage",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      buttonText: "Explore Classes",
    },
    {
      title: "Be Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      buttonText: "Explore Classes",
    },
  ];
            */
  }

  return (
    <div className=" w-full bg-black flex flex-col gap-y-[56px] lg:gap-y-[80px] lg:py-[120px] py-[56px] px-4">
      <div className="flex flex-col gap-x-12 items-center sm:flex-row-reverse w-full max-w-screen-lg mx-auto justify-center">
        <Image
          src={AnahataChakra}
          alt="Anatata Chakra - heart and courage"
          className="hidden w-2/5 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] sm:px-10">
          <h3 className="text-[1rem] text-customBeige text-center md:text-left">
            Anahata
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-white lg:text-[42px] lg:leading-[58px] text-center md:text-left">
            Build Courage
          </h1>
          <div className="block sm:hidden lg:w-[600px] lg:h-[600px] mx-auto">
            <Image
              src={AnahataChakra}
              alt="Anahata Chakra - heart and courage"
              className="pt-7"
            />
          </div>
          <p className="py-[24px] text-white lg:text-[18px] text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link href="/work">
            <div className="flex items-center justify-center md:justify-start">
              <p className="flex items-center gap-x-2 pt-1 sm:pt-6 font-medium text-customGreen lg:text-[18px] text-center md:text-left">
                Learn More{" "}
                <span>
                  <ChevronRight />
                </span>
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-x-12 sm:flex-row items-center w-full max-w-screen-lg mx-auto justify-center">
        <Image
          src={AjnaChakra}
          alt="Ajna Chakra - intuition, imagination, self-realisation"
          className="hidden w-2/5 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] sm:px-10">
          <h3 className="text-[1rem] text-customBeige text-center md:text-left">
            Ajna
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-white lg:text-[42px] lg:leading-[58px] text-center md:text-left">
            Find Clarity
          </h1>
          <div className="block sm:hidden lg:w-[600px] lg:h-[600px] mx-auto">
            <Image
              src={AjnaChakra}
              alt="Ajna Chakra - intuition, imagination, self-realisation"
              className="pt-7"
            />
          </div>
          <p className="py-[24px] text-white lg:text-[18px] text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link href="/work">
            <div className="flex items-center justify-center md:justify-start">
              <p className="flex items-center gap-x-2 pt-1 sm:pt-6 font-medium text-customGreen lg:text-[18px] text-center md:text-left">
                Learn More{" "}
                <span>
                  <ChevronRight />
                </span>
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-x-12 items-center sm:flex-row-reverse w-full max-w-screen-lg mx-auto justify-center">
        <Image
          src={MuladharaChakra}
          alt="Muladhara Chakra - Rooting and Grounding"
          className="hidden w-2/5 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] sm:px-10">
          <h3 className="text-[1rem] text-customBeige text-center md:text-left">
            Muladhara
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-white lg:text-[42px] lg:leading-[58px] text-center md:text-left">
            Be Present
          </h1>
          <div className="block sm:hidden lg:w-[600px] lg:h-[600px] mx-auto">
            <Image
              src={MuladharaChakra}
              alt="Muladhara Chakra - Rooting and Grounding"
              className="pt-7"
            />
          </div>
          <p className="py-[24px] text-white lg:text-[18px] text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link href="/work">
            <div className="flex items-center justify-center md:justify-start">
              <p className="flex items-center gap-x-2 pt-1 sm:pt-6 font-medium text-customGreen lg:text-[18px] text-center md:text-left">
                Learn More{" "}
                <span>
                  <ChevronRight />
                </span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* 
             <div className="text-white flex-col justify-center">
      {homeFeatures.map((item, index) => (
        <h1>{item.title}</h1>
      ))}
    </div>
            */
