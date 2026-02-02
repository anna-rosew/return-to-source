import Card from "@/components/common/NavCard";
import SectionHeading from "@/components/common/SectionHeading";
import OnlineCarousel from "@/components/ui/online/OnlineCarousel";
import { slides } from "@/content/retreats";
import RetreatsOverview from "@/components/ui/retreats/RetreatsOverview";
import { groupCards } from "@/content/groups";
import React from "react";
// import Link from "next/link";
import InPersonCarousel from "@/components/ui/inperson/InPersonCarousel";

const groups = () => {
  return (
    <div className="container text-center w-full">
      <h1 className="pb-5">Groups</h1>
      <div className="lg:my-20 my-7">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          {groupCards.map((card, index) => (
            <Card key={index} cardInfo={card} />
          ))}
        </div>
      </div>
      <div className="online-groups scroll-mt-16" id="online-section">
        <SectionHeading title="Online Groups" />
        <p className="text md:text-center py-4">
          Join us from <strong>anywhere in the world</strong> for live-streamed
          and on-demand sessions. Practice in the comfort of your own space
          while staying connected to our supportive community.{" "}
        </p>
        <p className="text md:text-center py-4">
          <strong>February</strong> can be a challenging month. When we look
          outward for signs of change we may feel weary and disheartened. This
          is a time to
          <strong> turn inward</strong>, to tend gently to what is growing
          beneath the surface. This month <strong>Imbolc</strong> reminds us to
          nourish the seeds that matter most. What seeds are you tending to at
          this point in your year? Over the years I&apos;ve found a regular yoga
          practice offers a space to
          <strong> listen inwardly</strong>, nourish what is quietly growing,
          and find pleasure in the slow turning of the seasons. That&apos;s why
          I&apos;m offering a rich range of classes and workshops this month, to
          support us in finding the
          <strong> emerging gifts of the season</strong>.
        </p>
        <p className="text md:text-center py-4">
          MEMBERSHIP DEALS: <strong>All Morning Classes: £50</strong>
          (includes Core Strength & Balance, Vital Breath, and Heart & Roots) -
          <strong> save £22!</strong>{" "}
          <strong>One Morning Class & Evening Chill: £40</strong> - save £16! Or
          bring a friend and <strong>both pay half price: £52</strong> for all
          classes including Evening Chill.
        </p>
        <OnlineCarousel />
      </div>
      <div
        className="in-person-groups mb-8 scroll-mt-16"
        id="in-person-section"
      >
        <SectionHeading title="In-Person Groups" />
        <p className="text md:text-center md:py-10 py-4">
          Enjoy the benefits of movement face-to-face at in-person sessions,
          joining in community and finding your flow.
        </p>

        <InPersonCarousel />
      </div>
      <div className="in-person-groups mb-8 scroll-mt-16" id="retreats-section">
        <SectionHeading title="Retreats" />
        {/* <p className="text md:text-center md:py-10 py-4">
          There are currently no retreats planned but{" "}
          <Link href="/contact" className="underline">
            stay-in-touch
          </Link>{" "}
          by asking to be signed up to <strong>the newsletter</strong> to be the
          first to hear!
        </p> */}
        <p className="text md:text-center md:py-10 py-4">
          Step away from the everyday and <strong>immerse</strong> yourself in{" "}
          <strong>transformative experiences</strong>. Our retreats blend{" "}
          <strong>yoga practice</strong>, <strong>meditation</strong>, and{" "}
          <strong>community connection</strong> in carefully chosen locations.
          Whether for a day or a week, these{" "}
          <strong>intimate gatherings</strong> offer a chance to{" "}
          <strong>reset</strong>, <strong>deepen</strong> your practice, and{" "}
          <strong>forge</strong> lasting connections with fellow practitioners.
        </p>
        <RetreatsOverview slides={slides} />
      </div>
    </div>
  );
};

export default groups;
