import React from "react";

type MonthlyCardProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  width?: number;
  height?: number;
  className?: string;
};

const MonthlyCard = (props: MonthlyCardProps) => {
  const { Icon, title, text, width = 74, height = 74, className } = props;
  return (
    <div className="border group border-black rounded-lg  text-black  bg-white text-left px-4 md:px-4 py-8 md:py-16 mt-8 md:my-12 transition-colors duration-700 ease-in-out ">
      <div>
        <Icon
          className={` text-black  ${className}`}
          width={width}
          height={height}
          strokeWidth={1}
        />

        <h2 className="text-customSienna  transition-colors duration-700">
          {title}
        </h2>
        <p className="text-black  transition-colors duration-700">{text}</p>
      </div>
    </div>
  );
};

export default MonthlyCard;
