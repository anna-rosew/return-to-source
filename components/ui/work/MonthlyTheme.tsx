"use client";
import React from "react";
import StarIcon from "@/public/Assets/Icons/StarIcon";
import RootAndReleaseIcon from "@/public/Assets/Icons/RootsIcon";
import VitalityIcon from "@/public/Assets/Icons/plant";
import LightIcon from "@/public/Assets/Icons/Sunshine";
import MonthlyCard from "@/components/ui/work/MonthlyCard";
import { Button } from "../button";
import Link from "next/link";

const MonthlyTheme = () => {
  const themeDetails = [
    {
      Icon: RootAndReleaseIcon,
      title: "Root & Release",
      text: "This is not a quick fix. The process asks you to release the familiar and step into the unknown. It takes courage to risk letting go of what no longer works for you.",
    },
    {
      Icon: VitalityIcon,
      title: "Reclaim your Vitality",
      text: "Holding a clear space of enquiry allows you to see your patterns, identify blind spots and unlock your potential. Through this work you see where you have agency, and find your way through the blocks.",
    },
    {
      Icon: LightIcon,
      title: "Embody the Light",
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
        <h1 className="text-white text-[28px]">
          June 2025: Root & Rise - A Solstice Reclamation
        </h1>
        <p className="text-white text-center">
          Join Rose for a transformative three-week Summer Solstice journey to
          reclaim your vitality and natural radiance. This gentle,
          low-screen-time program invites you to make this solstice a turning
          point—a joyful &quot;YES!&ldquo; to your vital spirit. Rooted in yogic
          principles of intention and daily commitment, the journey focuses on
          self-awareness through simple practices that deepen awareness and
          celebrate growth. Your part: hold a clear intention and stay curious.
          Rose&apos;s part: provide the structure and encouragement you need to
          consistently show up for yourself. Say &#34;YES!&quot; to light, life,
          and the wonder of being fully alive.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
        {themeDetails.map((content, index) => (
          <MonthlyCard
            key={index}
            Icon={content.Icon}
            week={`Week ${index + 1}`}
            title={content.title}
            text={content.text}
            width={70}
            height={70}
          />
        ))}
      </div>
      <Link href="/contact">
        <Button variant="secondary" size="lg" className="my-10 mx-auto">
          Email me more info!
        </Button>
      </Link>
    </div>
  );
};

export default MonthlyTheme;
