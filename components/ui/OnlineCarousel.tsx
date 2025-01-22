import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

import TestimonialCard from "./TestimonialCard";
import OnlineCard from "./OnlineCard";

const onlineDetails = [
  {
    pic: "/Assets/Images/Suri.webp",
    heading: "Finding calm and peace.",
    testimonial:
      "“ Rose came into my life at a traumatic and distressing time.  I've unearthed insights when I didn't think my mind would let me and overcome challenges that I could not see beyond. Through movement, breath and her excellent coaching skills, a sense of calm and peace is restored. I don't know how Rose does it, but she just knows.”",
    name: "Suri",
    location: "Switzerland",
  },
  {
    pic: "/Assets/Images/Rosie.webp",
    heading: "Finding calm and peace.",
    testimonial:
      "“When I started working with Rose I was in a crisis period in my life. Through a gentle and deep process of enquiry with Rose, the seeds of change were sown. I found myself with the strength to take radical action and embark on an enormous transformation.”",
    name: "Rosie",
    location: "UK",
  },
  {
    pic: "/Assets/Images/Jackson.webp",
    heading: "Finding calm and peace.",
    testimonial:
      "“I was stuck on a path that made me deeply unhappy - doggedly overworking in the pursuit of external success. Rose sat with me calmly and gently each time it all seemed way too much, and enabled me to have the clarity and courage to continue on the path I knew, in my heart, to be essential.”",
    name: "Jackson",
    location: "France",
  },
  {
    pic: "/Assets/Images/Antje.webp",
    heading: "Finding calm and peace.",
    testimonial:
      "“Rose is somebody who really listens and knows when to ask the right questions. She makes you feel like you are talking to a good old friend while she always stays professional. The feeling I got from working with her was one of trust, joy and warmth.”",
    name: "Antje",
    location: "Spain",
  },
];

const OnlineCarousel = () => {
  return (
    <div className="text-black relative mx-auto md:px-20 my-4">
      <Carousel className="relative overflow-visible">
        <CarouselContent className="flex items-center space-x-4">
          {onlineDetails.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 w-full md:w-3/4 lg:w-1/2 md:px-4"
            >
              <TestimonialCard
                pic={item.pic}
                heading={item.heading}
                testimonial={item.testimonial}
                name={item.name}
                location={item.location}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center space-x-6 mt-8 sm:mt-0 sm:w-full sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:space-x-0">
          <CarouselPrevious className="sm:absolute sm:-left-10 sm:top-1/2 sm:-translate-y-1/2 z-10" />
          <CarouselNext className="sm:absolute sm:-right-7 sm:top-1/2 sm:-translate-y-1/2 z-10" />
        </div>
      </Carousel>
    </div>
  );
};

export default OnlineCarousel;
