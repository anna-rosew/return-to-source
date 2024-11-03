import Image from "next/image";
import MazeHero from "@/public/Assets/maze-hero.webp";

export default function HeroImage() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="
          relative
          w-[360px] h-[380px]
          md:w-[883px] md:h-[462px]  
          p-3                          
          md:px-[280px] md:py-[29px]  
          flex-shrink-0               
          overflow-hidden              
        "
      >
        <Image
          src={MazeHero}
          alt="Person walking through a round pebble maze on a sandy beach on a clear day."
          fill
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
