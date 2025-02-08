import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  pic: string;
  heading: string;
  testimonial: string;
  name: string;
  location: string;
}

const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div className="testimonial-card p-7 rounded shadow-md bg-customBeige text-left">
      <div className="mb-4">
        <Image
          src={props.pic}
          alt={props.heading}
          width={100}
          height={100}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
      </div>
      <h2 className="font-bold text-lg mb-2 text-customSienna">
        {props.heading}
      </h2>
      <p className="italic mb-4">{props.testimonial}</p>
      <p className="text-sm  text-customSienna">
        <span className="font-semibold ">{props.name}</span> |{" "}
        <span>{props.location}</span>
      </p>
    </div>
  );
};

export default TestimonialCard;
