"use client";
import React from "react";
import StarIcon from "@/public/Assets/Icons/StarIcon";
import AjnaIcon from "@/public/Assets/Icons/AjnaIcon";
import AnahataIcon from "@/public/Assets/Icons/AnahataIcon";
import MuladharaIcon from "@/public/Assets/Icons/MuladharaIcon";
import MonthlyCard from "@/components/ui/work/MonthlyCard";

const MonthlyTheme = () => {
  const themeDetails = [
    {
      Icon: MuladharaIcon,
      title: "Building Courage",
      text: "This is not a quick fix. The process asks you to release the familiar and step into the unknown. It takes courage to risk letting go of what no longer works for you.",
    },
    {
      Icon: AjnaIcon,
      title: "Finding Clarity",
      text: "Holding a clear space of enquiry allows you to see your patterns, identify blind spots and unlock your potential. Through this work you see where you have agency, and find your way through the blocks.",
    },
    {
      Icon: AnahataIcon,
      title: "Be Present",
      text: "With presence comes greater self-awareness deepening your self-knowledge.  This opens you to new choices and gives you freedom from the past.  The more you release the past, the more you can live in the present.",
    },
  ];
  return (
    <div className="w-full container py-10">
      <div>
        <StarIcon
          className="fill-white text-white mx-auto mt-7  group-hover:text-white transition-colors duration-700"
          width={25}
          height={25}
        />
        <h1 className="text-white text-[28px]">Sample Class</h1>
        <p className="text-white text-center">
          This breathing practice is an enquiry into how the breath moves
          through the left lung and the right lung. With the a-symmetry of the
          lungs (the right lung having 3 lobes and the left lung 2 lobes), we
          focus on the yin and yang qualities of the two lungs as we breathe,
          using the flow of the breath to cultivate balance.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
        {themeDetails.map((content, index) => (
          <MonthlyCard
            key={index}
            Icon={content.Icon}
            title={content.title}
            text={content.text}
            width={70}
            height={70}
          />
        ))}
      </div>
    </div>
  );
};

export default MonthlyTheme;
