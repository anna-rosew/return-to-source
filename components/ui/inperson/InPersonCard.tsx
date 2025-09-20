import { ClockIcon } from "lucide-react";
import React from "react";
import { Button } from "../button";
import Link from "next/link";
import LocationIcon from "@/public/Assets/Icons/LocationIcon";
import CalendarIcon from "@/public/Assets/Icons/CalendarIcon";

import { InPersonProps } from "@/types/index";

const InPersonCard: React.FC<InPersonProps> = ({ sessionInfo }) => {
  const formatDescription = (description: string) => {
    return description.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };
  return (
    <div className="relative p-4 flex flex-col justify-between items-start text-left md:items-start text-white h-full rounded-[20px] sm:h-[300px] md:h-[500px] lg:h-[600px] lg:w-[500px] overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center rounded-[20px] filter brightness-50"
        style={{
          backgroundImage: `url(${sessionInfo.backgroundImage})`,
          backgroundColor: "lightgray",
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <p className="flex items-center bg-gray-100 bg-opacity-30 p-2 rounded-lg text-white">
        <ClockIcon className="w-5 h-5 mr-2 text-white " />
        {sessionInfo.time}
      </p>

      <div className="flex flex-col justify-start space-y-4 flex-grow mt-auto mb-4">
        <h3 className="relative z-10 text-white text-left pt-4">
          Upcoming {sessionInfo.type}
        </h3>
        <h2 className="relative z-10 text-white text-left">
          {sessionInfo.title}
        </h2>
        <p
          dangerouslySetInnerHTML={{
            __html: formatDescription(sessionInfo.description),
          }}
          className="relative z-10 text-white text-left mb-4"
        />
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
                {sessionInfo.location}
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
                {sessionInfo.date}
              </Link>
            </span>
          </div>
        </div>
        <Link href="/contact">
          <Button variant="secondary" size="lg" className="w-full">
            BOOK NOW
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default InPersonCard;
