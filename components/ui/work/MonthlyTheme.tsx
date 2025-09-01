"use client";
import React from "react";
import StarIcon from "@/public/Assets/Icons/StarIcon";
import RootAndReleaseIcon from "@/public/Assets/Icons/RootsIcon";
import WaveIcon from "@/public/Assets/Icons/WaveIcon";
import CompassIcon from "@/public/Assets/Icons/CompassIcon";
import AnchorIcon from "@/public/Assets/Icons/AnchorIcon";
import MonthlyCard from "@/components/ui/work/MonthlyCard";
import { Button } from "../button";
import Link from "next/link";

const MonthlyTheme = () => {
  const themeDetails = [
    {
      Icon: RootAndReleaseIcon,
      title: "Ground",
      text: "As Summer's expansive energy settles, find your feet and cultivate a healthy foundation.",
    },
    {
      Icon: WaveIcon,
      title: "Attune",
      text: "Listen deeply to your body, and notice where imbalance is calling for your attention.",
    },
    {
      Icon: CompassIcon,
      title: "Align",
      text: "Make conscious adjustments through the day and experience your ability to cultivate balance.",
    },
    {
      Icon: AnchorIcon,
      title: "Anchor",
      text: "Integrate what serves you, creating sustainable changes for the months ahead.",
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
          September 2025: Equinox Calling
        </h1>
        <p className="text-white text-center">
          Join Rose for a transformative four-week Equinox journey to find
          balance and stability as the seasons shift. This gentle, grounding
          program invites you to work with your thoughts and emotions through
          yogic wisdom and daily practices. As summer&apos;s expansive energy
          settles into autumn&apos;s reflective rhythm, discover tools to
          navigate life&apos;s challenges with greater ease and confidence.
          Rooted in ancient yogic teachings, this journey offers simple yet
          powerful practices to help you recognize imbalance, return to your
          center, and create sustainable habits. Your part: show up with
          curiosity and commitment. Rose&apos;s part: provide the guidance and
          support you need to cultivate lasting balance and inner stability.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-8">
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
