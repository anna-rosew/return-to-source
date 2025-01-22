import { Button } from "@/components/ui/button";
import DetailsCard from "@/components/ui/DetailsCard";
import VideoPlayer from "@/components/ui/VideoPlayer";
import AjnaIcon from "@/public/Assets/Icons/AjnaIcon";
import AnahataIcon from "@/public/Assets/Icons/AnahataIcon";
import MuladharaIcon from "@/public/Assets/Icons/MuladharaIcon";
import Link from "next/link";
import React from "react";

const approach = () => {
  const cardDetails = [
    {
      Icon: MuladharaIcon,
      title: "Sun Chakra",
      text: "This chakra is associated with the sun.",
    },
    {
      Icon: AjnaIcon,
      title: "Moon Chakra",
      text: "This chakra is associated with the moon.",
    },
    {
      Icon: AnahataIcon,
      title: "Moon Chakra",
      text: "This chakra is associated with the moon.",
    },
  ];
  return (
    <div className="container text-center w-full">
      <h1>Approach</h1>
      <p>
        This page is currently under construction. Please visit,{" "}
        <Link href="https://www.roselong-lifechanges.com/">
          Rose Long: Life Changes
        </Link>{" "}
        for more information.
      </p>
      <VideoPlayer url="https://vimeo.com/981928855" />
      <Link href="/work">
        <Button
          variant="outline"
          size="lg"
          className="my-3 mx-auto w-full md:w-auto "
        >
          Start my journey
        </Button>
      </Link>
      <div className="text-left">
        <h3 className="text-customTeal">TECHNIQUES</h3>
        <h2>
          You have the capacity to transform yourself from the inside out.
        </h2>
        <p className="text-customTeal ml-3">
          The ancients knew the power of the mind, body and the breath, and
          modern research is proving what they knew; you can alter your own body
          and mind.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cardDetails.map((content, index) => (
          <DetailsCard
            key={index}
            Icon={content.Icon} // Dynamically pass the icon component
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

export default approach;
