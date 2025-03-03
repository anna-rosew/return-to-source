import React from "react";
import { Button } from "../button";
import Link from "next/link";

const HomeCTA = () => {
  return (
    <div className="w-full bg-customGreen flex flex-col gap-y-[56px] lg:gap-y-[80px] lg:py-[120px] py-[56px] px-4 justify-center items-center">
      <h2 className="text-black">When you feel lost and overwhelmed...</h2>
      <div className="flex">
        <Link href="/work">
          <Button variant="secondary" className="inline-flex">
            There is a way out
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCTA;
