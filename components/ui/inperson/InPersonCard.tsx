import { ClockIcon } from 'lucide-react';
import { Button } from '../button';
import Link from 'next/link';
import LocationIcon from '@/public/Assets/Icons/LocationIcon';
import CalendarIcon from '@/public/Assets/Icons/CalendarIcon';
import { formatDescription } from '@/lib/utils';

import { InPersonProps } from '@/types/index';

const InPersonCard: React.FC<InPersonProps> = ({ sessionInfo }) => {
  return (
    <div className="relative flex h-full flex-col items-start justify-between overflow-hidden rounded-[20px] p-4 text-left text-white sm:h-[300px] md:h-[500px] md:items-start lg:h-[600px] lg:w-[500px]">
      <div
        className="absolute inset-0 -z-10 rounded-[20px] bg-cover bg-center brightness-50 filter"
        style={{
          backgroundImage: `url(${sessionInfo.backgroundImage})`,
          backgroundColor: 'lightgray',
          backgroundPosition: '50%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <p className="flex items-center rounded-lg bg-gray-100 bg-opacity-30 p-2 text-white">
        <ClockIcon className="mr-2 h-5 w-5 text-white" />
        {sessionInfo.duration}
      </p>

      <div className="mb-4 mt-auto flex flex-grow flex-col justify-start space-y-4">
        <h3 className="relative z-10 pt-4 text-left text-white">Upcoming {sessionInfo.type}</h3>
        <h2 className="relative z-10 text-left text-white">{sessionInfo.title}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: formatDescription(sessionInfo.description),
          }}
          className="relative z-10 mb-4 text-left text-white"
        />
      </div>

      <div className="mt-auto w-full rounded-lg bg-white p-4 text-black">
        <div className="flex flex-row items-center pb-4">
          <div className="flex flex-1 items-center justify-center border-r border-gray-300 pr-4">
            <span className="mt-4 inline-flex items-center text-left">
              <Link href="/dashboard" className="flex items-center gap-4 text-sm">
                <LocationIcon />
                {sessionInfo.location}
              </Link>
            </span>
          </div>

          <div className="flex flex-1 items-center justify-center pl-4">
            <span className="mt-4 inline-flex items-center text-left">
              <Link href="/dashboard" className="flex items-center gap-4 text-sm">
                <CalendarIcon />
                {sessionInfo.date}
              </Link>
            </span>
          </div>
        </div>
        <Link href="/contact">
          <Button variant="secondary" size="lg" className="w-full">
            BOOK NOW
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default InPersonCard;
