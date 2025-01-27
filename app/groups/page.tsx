import Card from "@/components/common/NavCard";
import SectionHeading from "@/components/common/SectionHeading";
import OnlineCarousel from "@/components/ui/OnlineCarousel";
import React from "react";

//make images darker
//Add other components to scroll

const cards = [
  {
    imageUrl: "/Assets/Images/online-groups.webp",
    title: "Online Groups",
    subtitle: "yoga | community",
    description: "Transform from the inside out!",
    link: "/groups",
    alt: "Online Groups - Photo of a laptop on the beach with a live Zoom class led by Rose Long.",
  },
  {
    imageUrl: "/Assets/Images/in-person-groups.webp",
    title: "In-Person Sessions",
    subtitle: "Classes | workshops",
    description: "Transform from the inside out!",
    link: "/groups",
    alt: "In-Person Groups - Photo of a relaxing yoga class being led by Rose Long. All participants lying on matts and Rose sat at the front of the class next to a large gong.",
  },
  {
    imageUrl: "/Assets/Images/retreats.webp",
    title: "Retreats",
    subtitle: "Journeys | Growth | Exploration",
    description: "Transform from the inside out!",
    link: "/group",
    alt: "In-Person Groups - Photo of a group on retreat doing a yoga session led by Rose Long on a beach on a sunny day, facing the sea.",
  },
];

const groups = () => {
  return (
    <div className="container text-center w-full">
      <h1>Groups</h1>
      <p className="font-bold md:text-center">
        Come and explore how your body, mind and breath work together. Open
        yourself to new dimensions of experience and personal growth.
      </p>
      <div className="lg:my-20 my-7">
        <div className="lg:my-20 my-7">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
            {cards.map((card, index) => (
              <Card key={index} cardInfo={card} />
            ))}
          </div>
        </div>
      </div>
      <div className="online-groups">
        <SectionHeading title="Online Groups" />
        <OnlineCarousel />
      </div>
    </div>
  );
};

export default groups;
