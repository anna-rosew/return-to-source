import React from "react";

type DetailsCardProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  width?: number;
  height?: number;
  className?: string;
};

const DetailsCard = (props: DetailsCardProps) => {
  const { Icon, title, text, width = 74, height = 74, className } = props;
  return (
    <div className="border group border-black rounded-lg hover:bg-black text-black  bg-transparent text-left px-4 md:px-4 py-8 md:py-16 my-8 md:my-12 transition-colors duration-700 ease-in-out ">
      <div>
        {/* Dynamically render the passed icon */}
        <Icon
          className={` text-black group-hover:text-white transition-colors duration-700 ${className}`}
          width={width}
          height={height}
        />

        <h2 className="text-customSienna group-hover:text-customBeige transition-colors duration-700">
          {title}
        </h2>
        <p className="text-black group-hover:text-white transition-colors duration-700">
          {text}
        </p>
      </div>
    </div>
  );
};

export default DetailsCard;
