import Card from "@/components/common/card";
import { Button } from "@/components/ui/button";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import Link from "next/link";

//Add testimonial component to bottom
//add margin to cards

const cards = [
  {
    imageUrl: "/Assets/Images/my-approach.webp",
    title: "Approach",
    subtitle: "Learn from Experience",
    description: "Transform from the inside out!",
    link: "/approach",
    alt: "My Approach - 'Torus in acrylics': painting by Lynn Hanford-Day",
  },
  {
    imageUrl: "/Assets/Images/groups.webp",
    title: "Groups",
    subtitle: "Classes - Workshops - Retreats",
    description: "Transform from the inside out!",
    link: "/groups",
    alt: "Group - 'Chinese Year of the Water Rabbit': painting by Lynn Hanford-Day",
  },
  {
    imageUrl: "/Assets/Images/one-to-one.webp",
    title: "One-to-Ones",
    subtitle: "Coaching & Yoga",
    description: "Transform from the inside out!",
    link: "/approach",
    alt: "One-To-Ones - 'The Lotfollah Dome': painting by Lynn Hanford-Day",
  },
];

const Work = () => {
  return (
    <div>
      <div className="container">
        <h1>Work with Rose</h1>
        <p className="font-bold">
          Come and explore how your body, mind and breath work together. Open
          yourself to new dimensions of experience and personal growth.
        </p>

        <div className="lg:my-20 my-7">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {cards.map((card, index) => (
              <Card key={index} cardInfo={card} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-black flex flex-col md:flex-row items-center justify-center px-4 py-12 md:px-36 md:py-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-white font-semibold">
            Other Peoples&apos; Stories...
          </h2>
          <p className="text-white my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. 
          </p>
          <Link href="/work" className="medium-screen-component">
            <Button
              variant="outline"
              size="lg"
              className="my-3 mx-auto border-white text-white hover:bg-customBeige hover:text-black hover:border-customBeige"
            >
              Start my journey
            </Button>
          </Link>
        </div>

        <div className="flex justify-center items-center w-full md:w-1/2">
          <div className="overflow-hidden w-full">
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
