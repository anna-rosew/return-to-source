import React from "react";

type MonthlyCardProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  week: string;
  title: string;
  text: string;
  width?: number;
  height?: number;
  className?: string;
};

const MonthlyCard = (props: MonthlyCardProps) => {
  const { Icon, week, title, text, width = 10, height = 10, className } = props;
  return (
    <div>
      <Icon
        className={`text-black mx-auto mt-10  ${className}`}
        width={width}
        height={height}
        strokeWidth={1}
      />
      <h3 className="text-white pt-4">{week}</h3>

      <div className="group rounded-lg flex min-h-[300px] flex-col items-center justify-start text-black bg-customBeige text-center px-4 md:px-4 py-4 transition-colors duration-700 ease-in-out">
        <div>
          <h2 className="text-customSienna transition-colors duration-700 text-[1.5em]">
            {title}
          </h2>
          <p className="text-black transition-colors duration-700 text-[1rem]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MonthlyCard;
