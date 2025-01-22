import SunIcon from "@/public/Assets/Icons/SunIcon";
import Link from "next/link";
import React from "react";

interface CardInfo {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  alt: string;
}

//plan: make responsive for medium

const NavCard = ({ cardInfo }: { cardInfo: CardInfo }) => {
  return (
    <div
      className="rounded-lg group relative bg-cover bg-center transition-all duration-700 ease-in-out aspect-[1/1] max-h-[240px] md:min-h-[350px] w-full md:w-auto"
      style={{
        backgroundImage: `url(${cardInfo.imageUrl})`,
      }}
      aria-label={cardInfo.alt}
    >
      <Link href={cardInfo.link} className="card-link">
        <div className="rounded-lg absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-0 group-hover:bg-opacity-80 group-hover:bg-black transition-all duration-700">
          <div className="text-center">
            <h2 className="text-white mb-4">{cardInfo.title}</h2>
            <h4 className="capitalize">{cardInfo.title}</h4>
          </div>
        </div>

        <div className="rounded-lg absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black">
          <div className="text-center text-white">
            <SunIcon className=" hover:fill-white hover:text-white mx-auto my-4" />
            <p className="text-customBeige">{cardInfo.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NavCard;
