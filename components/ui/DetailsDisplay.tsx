import React from "react";
import { DetailsDisplayProps } from "@/types/index";

const DetailsDisplay: React.FC<DetailsDisplayProps> = ({ displayInfo }) => {
  const Icon = displayInfo.icon;
  const Icon2 = displayInfo.icon2;

  return (
    <div className="flex justify-center">
      <div className="flex gap-8 bg-customGreen rounded-3xl p-6 w-fit">
        <div className="flex-col items-center text-center">
          <Icon
            className="w-10 h-10 mx-auto"
            strokeWidth={1}
            stroke="currentColor"
            fill="currentColor"
          />
          <h2 className="text-[18px]">{displayInfo.heading}</h2>
          <p>{displayInfo.subheading}</p>
        </div>
        <div className="flex-col items-center text-center border-l border-black pl-8">
          <Icon2
            className="w-10 h-10 mx-auto"
            strokeWidth={1}
            stroke="currentColor"
            fill="currentColor"
          />
          <h2 className="text-[18px]">{displayInfo.heading2}</h2>
          <p>{displayInfo.subheading2}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsDisplay;
