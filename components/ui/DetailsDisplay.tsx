import { DetailsDisplayProps } from '@/types/index';

const DetailsDisplay: React.FC<DetailsDisplayProps> = ({ displayInfo }) => {
  const Icon = displayInfo.icon;
  const Icon2 = displayInfo.icon2;

  return (
    <div className="flex justify-center">
      <div className="flex w-fit gap-8 rounded-3xl bg-customGreen p-6">
        <div className="flex-col items-center text-center">
          <Icon
            className="mx-auto h-10 w-10"
            strokeWidth={1}
            stroke="currentColor"
            fill="currentColor"
          />
          <h2 className="text-[18px]">{displayInfo.heading}</h2>
          <p>{displayInfo.subheading}</p>
        </div>
        <div className="flex-col items-center border-l border-black pl-8 text-center">
          <Icon2
            className="mx-auto h-10 w-10"
            strokeWidth={1}
            stroke="currentColor"
            fill="currentColor"
          />
          <h2 className="text-[18px]">{displayInfo.heading2}</h2>
          <p>{displayInfo.subheading2}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsDisplay;
