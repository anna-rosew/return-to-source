import React from "react";

interface HeadingProps {
  title: string;
}

const SectionHeading = ({ title }: HeadingProps) => {
  return (
    <div>
      <h2 className="relative text-center max-w-[31.25em] mx-auto my-2 sm:my-4">
        <span className="inline-block relative z-10">{title}</span>
        <span className="section-heading-left"></span>
        <span className="section-heading-right"></span>
      </h2>
    </div>
  );
};

export default SectionHeading;
