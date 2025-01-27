import { ClockIcon } from "lucide-react";
import React from "react";

const InPersonCard = () => {
  return (
    <div
      className="class-header p-4 flex flex-col items-start justify-start text-left md:items-center relative text-white bg-cover bg-center h-full rounded-lg sm:h-[300px] md:h-[500px] lg:h-[600px]"
      style={{
        backgroundImage: "url('/Assets/Images/about.webp')",
      }}
    >
      <div className="flex flex-row items-center justify-start space-x-4">
        <div
          className="flex items-center justify-center bg-gray-100 bg-opacity-20 rounded-full p-3 text-white 
        md:absolute md:top-4 md:left-4 md:flex-row md:items-start md:space-x-4"
        ></div>
        <div className="small-screen-component">
          <p className="flex items-center bg-gray-100 bg-opacity-20 p-2 rounded-lg text-white">
            <ClockIcon className="w-5 h-5 mr-2 text-white " />
            30 mins
          </p>
        </div>
      </div>
      <h2 className="mt-2 md:mt-0 text-white small-screen-component">
        Workshop
      </h2>
    </div>
  );
};

export default InPersonCard;
