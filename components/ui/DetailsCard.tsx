import React from 'react';

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
    <div className="group mt-8 rounded-lg border border-black bg-transparent px-4 py-8 text-left text-black transition-colors duration-700 ease-in-out hover:bg-black md:my-12 md:px-4 md:py-16">
      <div>
        <Icon
          className={`text-black transition-colors duration-700 group-hover:text-white ${className}`}
          width={width}
          height={height}
          strokeWidth={1}
        />

        <h2 className="text-customSienna transition-colors duration-700 group-hover:text-customBeige">
          {title}
        </h2>
        <p className="text-black transition-colors duration-700 group-hover:text-white">{text}</p>
      </div>
    </div>
  );
};

export default DetailsCard;
