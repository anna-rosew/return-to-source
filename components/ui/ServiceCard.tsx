import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { IServiceCard } from "@/types";

export const ServiceCard = ({
  serviceName,
  title,
  description,
  image,
  imageAlt,
  reversed = false,
}: IServiceCard) => {
  return (
    <div
      className={`flex flex-col gap-x-12 items-center ${
        reversed ? "sm:flex-row-reverse" : "sm:flex-row"
      } w-full max-w-screen-lg mx-auto justify-center`}
    >
      <Image src={image} alt={imageAlt} className="hidden w-2/5 sm:block" />
      <div className="sm:w-1/2 lg:py-[56px] sm:px-10">
        <h3 className="text-[1rem] text-customBeige text-center md:text-left">
          {serviceName}
        </h3>
        <h1 className="pt-[12px] text-2xl font-medium text-white lg:text-[42px] lg:leading-[58px] text-center md:text-left">
          {title}
        </h1>
        <div className="block sm:hidden lg:w-[600px] lg:h-[600px] mx-auto">
          <Image src={image} alt={imageAlt} className="pt-7" />
        </div>
        <p className="py-[24px] text-white lg:text-[18px] text-center md:text-left">
          {description}
        </p>
        <Link href="/work">
          <div className="flex items-center justify-center md:justify-start group">
            <p className="flex items-center gap-x-2 pt-1 sm:pt-6 font-medium text-customGreen lg:text-[18px] text-center md:text-left">
              Learn More{" "}
              <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                <ChevronRight />
              </span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
