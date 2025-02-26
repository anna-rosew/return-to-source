import { Button } from "@/components/ui/button";
import SunIcon from "@/public/Assets/Icons/SunIcon";
import Link from "next/link";


import React from "react";

const dashboard = () => {
  return (
    <div className="flex justify-center items-center h-screen container">
      <div className="mx-auto">
        <SunIcon className="mx-auto my-4" />
        <h1 className="text-center md:text-6xl mb-8 ">Coming Soon!</h1>

        <p className="mt-4 text-lg justify-center text-center">
          <>
            <span>Check back soon!</span>
            <br />
            <span>
              In the meantime, you take a look at{" "}
              <Link href="/blog">classes & retreats.</Link>
            </span>
            <Link href="/work">
              <Button variant="outline" size="lg" className="my-5 mx-auto">
                Start my journey
              </Button>
            </Link>
          </>
        </p>
      </div>
    </div>
  );
};

export default dashboard;
