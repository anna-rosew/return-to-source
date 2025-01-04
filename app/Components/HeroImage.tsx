import Image from "next/image";
import MazeHero from "@/public/Assets/Images/maze-hero.webp";

export default function HeroImage() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="
          relative
          w-[360px] h-[300px]
          md:w-[883px] md:h-[400px]  
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
          placeholder="blur"
        />
      </div>
    </div>
  );
}
