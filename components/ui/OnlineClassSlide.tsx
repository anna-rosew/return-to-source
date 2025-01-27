import Link from "next/link";
import React from "react";
import { Button } from "./button";
import { ClassSlidesProps } from "@/types/index";
import StarIcon from "@/public/Assets/Icons/StarIcon";
import { ClockIcon } from "lucide-react";

const OnlineClassSlide: React.FC<ClassSlidesProps> = ({ classInfo }) => {
  const Icon = classInfo.icon;
  const formatDescription = (description: string) => {
    return description.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };

  return (
    <div className=" relative md:p-5">
      {/* Header with Icon */}
      <div
        className="class-header flex flex-col justify-center items-center relative text-white bg-cover bg-center"
        style={{
          backgroundImage: `url(${classInfo.backgroundImage})`,
          height: "400px",
        }}
      >
        {/* Icon with grey transparent oval background */}
        <div className="flex items-center justify-center bg-gray-500 bg-opacity-50 rounded-full p-3">
          <Icon
            className="w-10 h-10"
            strokeWidth={1}
            stroke="currentColor"
            fill="currentColor"
          />
        </div>
        {/* Header Title */}
        <h1 className="text-lg uppercase mt-2">{classInfo.classType}</h1>

        {/* Duration with clock icon and semi-transparent background */}
        <p className="flex items-center mt-4 bg-gray-700 bg-opacity-70 p-2 rounded-lg">
          <ClockIcon className="w-5 h-5 mr-2 text-white" />
          {classInfo.duration}{" "}
          {/* Assuming duration is a string like '10:00 AM' */}
        </p>
      </div>

      {/* Description */}
      <div className="text-left mt-4">
        <p
          dangerouslySetInnerHTML={{
            __html: formatDescription(classInfo.description),
          }}
        />
      </div>

      {/* Class Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {/* Dates and Times */}
        <div className="grid grid-cols-2 gap-3 ">
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
        </div>

        {/* Prices */}
        <div className="border border-black p-4 text-left mt-7 md:mt-0">
          <h3 className="text-md mb-2 ">Prices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md-p-4">
            <div className="border-r border-black">
              <ul className="list-none space-y-2">
                <li className="relative pl-6">
                  <StarIcon className="absolute left-0 top-0.5 text-black w-4 h-4" />
                  Drop-In Price: {classInfo.dropInPrice}
                </li>
                <li className="relative pl-6">
                  {" "}
                  <StarIcon className="absolute left-0 top-0.5 text-black w-4 h-4" />
                  Monthly Session Bundle: {classInfo.monthlyPrice}
                </li>
              </ul>
            </div>
            <div>
              {" "}
              <h4>MONTHLY MEMBERSHIP</h4>
              <p>
                Join all classes and access replays to <strong>save £30</strong>{" "}
                (from £80 to £50)! Please
                <Link href="/contact" className="underline">
                  {" "}
                  get-in-touch
                </Link>{" "}
                for more details.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Book Now Button */}
      <Link href="/contact">
        <Button variant="primary" size="lg" className="mt-4 block mx-auto">
          Book Now
        </Button>
      </Link>
    </div>
  );
};

export default OnlineClassSlide;
