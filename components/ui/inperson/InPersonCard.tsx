import { ClockIcon, PoundSterling } from "lucide-react"; // Added CircleDollarSign
import React from "react";
import { Button } from "../button";
import Link from "next/link";
import LocationIcon from "@/public/Assets/Icons/LocationIcon";
import CalendarIcon from "@/public/Assets/Icons/CalendarIcon";
import { InPersonProps } from "@/types/index";

const InPersonCard: React.FC<InPersonProps> = ({ sessionInfo }) => {
  const formatDescription = (description: string) => {
    return description.replace(/\*\*(.*?)\*\*/g, "<strong>£1</strong>");
  };

  return (
    <div className="relative p-4 flex flex-col justify-between items-start text-left md:items-start text-white h-full rounded-[20px] sm:h-[300px] md:h-[400px] lg:h-[600px] lg:w-[450px] overflow-hidden">
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

      {/* Top Bar: Time & Price */}
      <div className="flex gap-2">
        <p className="flex items-center bg-gray-100 bg-opacity-30 p-2 rounded-lg text-white">
          <ClockIcon className="w-5 h-5 mr-2 text-white " />
          {sessionInfo.time}
        </p>
        {/* Optional: You can also show price here if you prefer it at the top */}
      </div>

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

      {/* Bottom Info Box */}
      <div className="p-4 bg-white w-full rounded-lg text-black mt-auto">
        <div className="flex flex-row items-center pb-4">
          {/* Location */}
          <div className="flex flex-1 items-center justify-center pr-2 border-r border-gray-300">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-[10px] md:text-xs"
            >
              <LocationIcon />
              {sessionInfo.location}
            </Link>
          </div>

          {/* Date */}
          <div className="flex flex-1 items-center justify-center px-2 border-r border-gray-300">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-[10px] md:text-xs"
            >
              <CalendarIcon />
              {sessionInfo.date}
            </Link>
          </div>

          {/* Price - New Section */}
          <div className="flex flex-1 items-center justify-center pl-2">
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-semibold">
              <PoundSterling className="w-4 h-4 text-gray-600" />
              {sessionInfo.price || "Contact for Price"}
            </div>
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
