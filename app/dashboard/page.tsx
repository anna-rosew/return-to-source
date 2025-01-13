import Link from "next/link";
import React from "react";

const dashboard = () => {
  return (
    <div className="container text-center w-full">
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

export default dashboard;
