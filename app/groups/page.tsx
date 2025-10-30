import Card from "@/components/common/NavCard";
import SectionHeading from "@/components/common/SectionHeading";
import OnlineCarousel from "@/components/ui/online/OnlineCarousel";
// import { slides } from "@/content/retreats";
// import RetreatsOverview from "@/components/ui/retreats/RetreatsOverview";
import { groupCards } from "@/content/groups";
import React from "react";
import Link from "next/link";
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
        <p className="text md:text-center md:py-10 py-4">
          Join us from <strong>anywhere in the world</strong> for live-streamed
          and on-demand sessions. Practice in the comfort of your own space
          while staying connected to our supportive community.{" "}
        </p>
        <p className="text md:text-center">
          In <strong>November</strong>, as the earth draws her energy inward, we
          invite you to do the same. This is <strong>Vata season</strong> – a
          time to come back to your body and cultivate inner nourishment and
          vitality as nature retreats into restful preparation.
        </p>
        <p className="text md:text-center">
          Through warming breath practices, grounding movement, and deep
          relaxation, we will work to strengthen your physical stability,
          generate inner warmth, and regulate your nervous system, helping you
          navigate this <strong>season of Drawing In</strong> with steadiness
          and ease.
        </p>
        <h3>Investment Options:</h3>
        <p className="text md:text-center">
          <strong>November Programme: £50</strong> (includes 18 yoga classes +
          lunar cycles + free mantra session)! Pay less and save £42.
        </p>

        <OnlineCarousel />
      </div>
      <div
        className="in-person-groups mb-8 scroll-mt-16"
        id="in-person-section"
      >
        <SectionHeading title="In-Person Groups" />
        <p className="text md:text-center md:py-10 py-4">
          There are currently no in-person sessions planned but{" "}
          <Link href="/contact" className="underline">
            stay-in-touch
          </Link>{" "}
          by asking to be signed up to <strong>the newsletter</strong> to be the
          first to hear!
        </p>

        <InPersonCarousel />
      </div>
      <div className="in-person-groups mb-8 scroll-mt-16" id="retreats-section">
        <SectionHeading title="Retreats" />
        <p className="text md:text-center md:py-10 py-4">
          There are currently no retreats planned but{" "}
          <Link href="/contact" className="underline">
            stay-in-touch
          </Link>{" "}
          by asking to be signed up to <strong>the newsletter</strong> to be the
          first to hear!
        </p>
        {/* <p className="text md:text-center md:py-10 py-4">
          Step away from the everyday and <strong>immerse</strong> yourself in{" "}
          <strong>transformative experiences</strong>. Our retreats blend{" "}
          <strong>yoga practice</strong>, <strong>meditation</strong>, and{" "}
          <strong>community connection</strong> in carefully chosen locations.
          Whether for a day or a week, these{" "}
          <strong>intimate gatherings</strong> offer a chance to{" "}
          <strong>reset</strong>, <strong>deepen</strong> your practice, and{" "}
          <strong>forge</strong> lasting connections with fellow practitioners.
        </p>
        <RetreatsOverview slides={slides} /> */}
      </div>
    </div>
  );
};

export default groups;
