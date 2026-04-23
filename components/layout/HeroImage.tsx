import Image from 'next/image';
import MazeHero from '@/public/Assets/Images/maze-hero.webp';

export default function HeroImage() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-[350px] w-[360px] flex-shrink-0 overflow-hidden p-3 md:h-[400px] md:w-[883px] md:px-[280px] md:py-[29px]">
        <Image
          src={MazeHero}
          alt="Person walking through a round pebble maze on a sandy beach on a clear day."
          fill
          className="object-cover"
          placeholder="blur"
        />
      </div>
    </div>
  );
}
