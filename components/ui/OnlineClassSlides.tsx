import Link from "next/link";
import React from "react";
import { Button } from "./button";
import { ClassSlidesProps } from "@/types/index";

const OnlineClassSlides: React.FC<ClassSlidesProps> = ({ classInfo }) => {
  const Icon = classInfo.icon;

  return (
    <div className="p-5 mx-24">
      {/* Header with Icon */}
      <div className="class-header flex items-center relative group text-black">
        <Icon
          className={`text-black transition-colors duration-700 z-20 ${classInfo.className}`}
          strokeWidth={1}
          stroke="currentColor"
          fill="currentColor"
          width={100}
          height={100}
        />
        <h1 className="uppercase text-lg">{classInfo.classType}</h1>
      </div>

      {/* Description */}
      <div className="text-left mt-4">
        <p>{classInfo.description}</p>
      </div>

      {/* Class Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {/* Dates and Times */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="dates-column mb-4">
            <h3 className="text-lg">Class Dates</h3>
            <ul className="list-disc pl-5 text-sm">
              {classInfo.dates.length > 0 ? (
                classInfo.dates.map((date, index) => (
                  <li key={index}>{date}</li>
                ))
              ) : (
                <li>No dates available</li>
              )}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg">Time</h3>
            <ul className="list-disc pl-5 text-sm">
              {classInfo.times.length > 0 ? (
                classInfo.times.map((time, index) => (
                  <li key={index}>{time}</li>
                ))
              ) : (
                <li>No times available</li>
              )}
            </ul>
          </div>
        </div>

        {/* Prices */}
        <div className="border border-black p-4 text-left mt-7 md:mt-0">
          <h3 className="text-sm mb-2">Prices</h3>
          <ul className="list-none space-y-2">
            <li>Drop-In Price: {classInfo.dropInPrice}</li>
            <li>Monthly: {classInfo.monthlyPrice}</li>
          </ul>
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

export default OnlineClassSlides;
