import React from "react";
import Image from "next/image";

type DetailsCardProps = {
  iconUrl: string;
  title: string;
  text: string;
};

const DetailsCard = (props: DetailsCardProps) => {
  return (
    <div className="border border-black rounded-lg hover:bg-black bg-transparent text-left px-4 py-8 my-8 transition-colors duration-700 ease-in-out">
      <div>
        <Image
          src={props.iconUrl}
          alt="Anatata Chakra - heart and courage"
          width={74}
          height={74}
        />

        <h2 className="hover:text-customBeige text-customSienna">
          {props.title}
        </h2>
        <p className=" text-white ">{props.text}</p>
      </div>
    </div>
  );
};

export default DetailsCard;
