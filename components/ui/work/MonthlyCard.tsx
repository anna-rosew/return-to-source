import React from 'react';

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
        className={`mx-auto mt-10 text-black ${className}`}
        width={width}
        height={height}
        strokeWidth={1}
      />
      <h3 className="pt-4 text-white">{week}</h3>

      <div className="group flex min-h-[300px] flex-col items-center justify-start rounded-lg bg-customBeige px-4 py-4 text-center text-black transition-colors duration-700 ease-in-out md:px-4">
        <div>
          <h2 className="text-[1.5em] text-customSienna transition-colors duration-700">{title}</h2>
          <p className="text-[1rem] text-black transition-colors duration-700">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default MonthlyCard;
