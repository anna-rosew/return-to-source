import Link from "next/link";
import React from "react";
import { Button } from "./button";
import { ClassSlidesProps } from "@/types/index";
import { ChevronRight, ClockIcon } from "lucide-react";
import DetailsDisplay from "./DetailsDisplay";
import VideoCallIcon from "@/public/Assets/Icons/VideoCallIcon";
import StarIcon from "@/public/Assets/Icons/StarIcon";

//center items correctly
//pagination
//add array info

const OnlineClassSlide: React.FC<ClassSlidesProps> = ({ classInfo }) => {
  const Icon = classInfo.icon;
  const formatDescription = (description: string) => {
    return description.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };

  const displayInfo = {
    icon: VideoCallIcon,
    heading: "Live Zoom Class",
    subheading: "Playback anytime.",
    icon2: StarIcon,
    heading2: "Membership - £50",
    subheading2: "Bundle - £24 | Drop-In - £8",
  };

  return (
    <div className=" pt-5 relative md:p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="flex flex-col justify-between">
        {/* Header with Icon */}
        <div
          className="class-header p-4 flex flex-col items-start justify-start text-left md:items-center relative text-white bg-cover bg-center h-full rounded-lg sm:h-[300px] md:h-[500px] lg:h-[600px]"
          style={{
            backgroundImage: `url(${classInfo.backgroundImage})`,
          }}
        >
          <div className="flex flex-row items-center justify-start space-x-4">
            <div
              className="flex items-center justify-center bg-gray-100 bg-opacity-20 rounded-full p-3 text-white 
        md:absolute md:top-4 md:left-4 md:flex-row md:items-start md:space-x-4"
            >
              <Icon
                className="class-icon"
                strokeWidth={1}
                stroke="currentColor"
                fill="currentColor"
              />
            </div>
            <div className="small-screen-component">
              <p className="flex items-center bg-gray-100 bg-opacity-20 p-2 rounded-lg text-white">
                <ClockIcon className="w-5 h-5 mr-2 text-white " />
                {classInfo.duration}
              </p>
            </div>
          </div>
          <h2 className="mt-2 md:mt-0 text-white small-screen-component">
            {classInfo.classType}
          </h2>
        </div>
      </div>
      <div className="md:col-span-2 flex flex-col justify-between h-full">
        {/* Description */}
        <div className="text-left mt-4">
          <h2 className="mt-2 text-black medium-screen-component">
            {classInfo.classType}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: formatDescription(classInfo.description),
            }}
          />
        </div>

        {/* Class Details */}
        <div className="mt-5">
          {/* Dates and Times */}
          <div>
            <div className="grid grid-cols-2 ">
              <div className="mb-4">
                <h3 className="text-md text-center">Class Dates</h3>
                <ul className="list-none py-2 text-sm">
                  {classInfo.dates.length > 0 ? (
                    classInfo.dates.map((date, index) => (
                      <li key={index} className="py-2 border-b border-black">
                        {date}
                      </li>
                    ))
                  ) : (
                    <li>No dates available</li>
                  )}
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-md">Time</h3>
                <ul className="list-none py-2 text-sm">
                  {classInfo.times.length > 0 ? (
                    classInfo.times.map((time, index) => (
                      <li key={index} className="py-2 border-b border-black">
                        {time}
                      </li>
                    ))
                  ) : (
                    <li>No times available</li>
                  )}
                </ul>
              </div>
            </div>{" "}
            <div className="medium-screen-component">
              <DetailsDisplay displayInfo={displayInfo} />
            </div>
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="mt-4 block mx-auto w-full"
              >
                Book Now
              </Button>
            </Link>
            <div className="small-screen-component">
              <span className="text-left mt-4 inline-flex items-center gap-x-4">
                <Link
                  href="/dashboard"
                  className=" underline flex items-center"
                >
                  Online class library
                  <ChevronRight />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineClassSlide;
