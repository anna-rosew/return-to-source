import Image from "next/image";

import HeroImage from "@/app/Components/HeroImage";
import DefaultButton from "@/app/Components/DefaultButton";



export default function Home() {
  return (
    <div className="relative flex flex-col justify-left items-left lg:justify-center lg:items-center overflow-hidden">
      {/* Content */}
      <h4 className="uppercase text-[28px] lg:text-[48px] leading-2 text-left lg:text-center pt-20 pl-4 font-neato">
        Breath - Mind - Body
      </h4>
      <p className="p-4 lg:mx-[290px] lg:text-center text-customTeal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <HeroImage />
      <DefaultButton text="Start your journey" className="my-5 mx-2" />
    </div>
  );
}

/*   <div className="absolute w-[300px] h-[300px] bg-[rgba(67,108,101,0.60)] rounded-full blur-[50px] top-[100px] left-[68px] animate-move-left" />
      <div className="absolute w-[400px] h-[400px] bg-[rgba(202,187,157,1)] rounded-full blur-[50px] top-[209px] right-[40px] animate-move-right"
      import BlackButton from "@/app/Components/BlackButton";
import PlainButton from "@/app/Components/PlainButton";
      <BlackButton text="Start your journey" />
      <PlainButton text="Start your journey" />
      /> */
