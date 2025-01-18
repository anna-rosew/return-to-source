import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";

const testimonialDetails = [
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
      "“When I started working with Rose I was in a crisis period in my life. I'd tried several attempts at changing but all unsuccessful. Through a gentle and deep process of enquiry with Rose, the seeds of change were sown.  I found myself with the strength to take radical action and embark on an enormous transformation.  When I look back at that time, my life is unrecognisable from the person I now am.”",
    name: "Rosie",
    location: "UK",
  },
  {
    pic: "/Assets/Images/Jackson.webp",
    heading: "Finding calm and peace.",
    testimonial:
      "“I was stuck on a path that made me deeply unhappy - doggedly overworking in the pursuit of external success.  Somewhere on the other side of the chaos, a new life and self gradually manifested.  Rose sat with me calmly and gently each time it all seemed way too much, and enabled me to have the clarity and courage to continue on the path I knew, in my heart, to be essential.”",
    name: "Jackson",
    location: "France",
  },
  {
    pic: "/Assets/Images/Antje.webp",
    heading: "Finding calm and peace.",
    testimonial:
      "“Rose is somebody who really listens and knows when to ask the right questions. She is incredibly clear in her observation and way of expression. Rose is very intuitive and combines this with a tangible wisdom and great sense of humour. She makes you feel like you are talking to a good old friend while she always stays professional. The feeling I got from working with her was one of trust, joy and warmth.”",
    name: "Antje",
    location: "Spain",
  },
  {
    pic: "/Assets/Images/Janine.webp",
    heading: "Finding calm and peace.",
    testimonial:
      "“I was stuck on a path that made me deeply unhappy - doggedly overworking in the pursuit of external success.  Somewhere on the other side of the chaos, a new life and self gradually manifested.  Rose sat with me calmly and gently each time it all seemed way too much, and enabled me to have the clarity and courage to continue on the path I knew, in my heart, to be essential.I first practised yoga with Rose on a retreat in Portugal in 2018. It was the first time I had tried kundalini yoga and I found it really powerful. It released emotions and I felt that it was very healing.  I find Rose's calm approach really grounding.  Her on-line yoga leaves me feeling relaxed, much more aware of the power of my breath and with a heightened awareness.”",
    name: "Janine",
    location: "UK",
  },
  {
    pic: "/Assets/Images/Ruth.webp",
    heading: "Finding calm and peace.",
    testimonial:
      "“I really enjoyed being part of the group and I found your Zoom ‘ technique’ worked really well. I just had you on the screen while doing the practice, so it felt like a one to one, whilst being aware of the others in the group , all with a common purpose. Emotionally, it felt so lovely to be part of a ‘family’ in spirit.”",
    name: "Ruth",
    location: "UK",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="text-black relative md:px-12">
      <Carousel className="relative overflow-visible">
        <CarouselContent className="w-full h-full flex items-center justify-center mb-4">
          {testimonialDetails.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center w-full h-full"
            >
              <TestimonialCard
                pic={testimonial.pic}
                heading={testimonial.heading}
                testimonial={testimonial.testimonial}
                name={testimonial.name}
                location={testimonial.location}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center space-x-4 mt-4 sm:mt-0 sm:w-full sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:space-x-0">
          <CarouselPrevious className="sm:absolute sm:-left-10 sm:top-1/2 sm:-translate-y-1/2 z-10" />
          <CarouselNext className="sm:absolute sm:-right-7 sm:top-1/2 sm:-translate-y-1/2 z-10" />
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
