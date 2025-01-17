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
    pic: "/Assets/Images/Suri.webp",
    heading: "Finding calm and peace.",
    testimonial:
      "“ Rose came into my life at a traumatic and distressing time.  I've unearthed insights when I didn't think my mind would let me and overcome challenges that I could not see beyond. Through movement, breath and her excellent coaching skills, a sense of calm and peace is restored. I don't know how Rose does it, but she just knows.”",
    name: "Suri",
    location: "Switzerland",
  },
  {
    pic: "/Assets/Images/Suri.webp",
    heading: "Finding calm and peace.",
    testimonial:
      "“ Rose came into my life at a traumatic and distressing time.  I've unearthed insights when I didn't think my mind would let me and overcome challenges that I could not see beyond. Through movement, breath and her excellent coaching skills, a sense of calm and peace is restored. I don't know how Rose does it, but she just knows.”",
    name: "Suri",
    location: "Switzerland",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="text-black">
      <Carousel>
        <CarouselContent className="w-full flex items-center justify-center">
          {testimonialDetails.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center"
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
