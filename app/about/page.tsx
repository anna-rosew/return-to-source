import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <h1>Meet Rose</h1>
      <p>
        This page is currently under construction. Please visit,{" "}
        <Link href="https://www.roselong-lifechanges.com/">
          Rose Long: Life Changes
        </Link>{" "}
        for more information.
      </p>
    </div>
  );
};

export default About;
