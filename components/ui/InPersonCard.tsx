import { ClockIcon } from "lucide-react";
import React from "react";
import { Button } from "./button";
import Link from "next/link";
import LocationIcon from "@/public/Assets/Icons/LocationIcon";
import CalendarIcon from "@/public/Assets/Icons/CalendarIcon";

const InPersonCard = () => {
  return (
    <div className="relative p-4 flex flex-col justify-between items-start text-left md:items-start text-white h-full rounded-[20px] sm:h-[300px] md:h-[500px] lg:h-[600px] lg:w-[500px] overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center rounded-[20px] filter brightness-50"
        style={{
          backgroundImage: "url('/Assets/Images/workshop1.webp')",
          backgroundColor: "lightgray",
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <p className="flex items-center bg-gray-100 bg-opacity-30 p-2 rounded-lg text-white">
        <ClockIcon className="w-5 h-5 mr-2 text-white " />1 hour
      </p>

      <div className="flex flex-col justify-start space-y-4 flex-grow mt-auto">
        <h3 className="relative z-10 text-white text-left pt-4">
          Upcoming workshop
        </h3>
        <h2 className="relative z-10 text-white text-left">
          Breathwork Course
        </h2>
        <p className="relative z-10 text-white text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </p>
      </div>

      <div className="p-4 bg-white w-full rounded-lg text-black mt-auto">
        <div className="flex flex-row items-center pb-4">
          <div className="flex flex-1 items-center justify-center pr-4 border-r border-gray-300">
            <span className="text-left mt-4 inline-flex items-center">
              <Link
                href="/dashboard"
                className="flex items-center gap-4 text-sm"
              >
                <LocationIcon />
                Well Studio, L15
              </Link>
            </span>
          </div>

          <div className="flex flex-1 items-center justify-center pl-4">
            <span className="text-left mt-4 inline-flex items-center">
              <Link
                href="/dashboard"
                className="flex items-center gap-4 text-sm"
              >
                <CalendarIcon />
                Wed 16 Oct, 24
              </Link>
            </span>
          </div>
        </div>
        <Button variant="secondary" size="lg" className="w-full">
          BOOK NOW
        </Button>
      </div>
    </div>
  );
};

export default InPersonCard;
