import Link from 'next/link';
import React from 'react';
import { Button } from '../button';
import { ClassSlidesProps } from '@/types/index';
import { ChevronRight, ClockIcon } from 'lucide-react';
import DetailsDisplay from '../DetailsDisplay';
import VideoCallIcon from '@/public/Assets/Icons/VideoCallIcon';
import StarIcon from '@/public/Assets/Icons/StarIcon';
import { formatDescription } from '@/lib/utils';

const OnlineClassSlide: React.FC<ClassSlidesProps> = ({ classInfo }) => {
  const Icon = classInfo.icon;

  const displayInfo = {
    icon: VideoCallIcon,
    heading: 'Live Zoom Class',
    subheading: 'Playback anytime.',
    icon2: StarIcon,
    heading2: 'Sign up for all Classes',
    subheading2: 'Half price — £48',
  };

  return (
    <div className="relative grid grid-cols-1 gap-5 pt-5 md:grid-cols-3 md:p-5">
      <div className="flex flex-col justify-between">
        <div
          className="class-header relative flex h-full flex-col items-start justify-start rounded-lg bg-cover bg-center p-4 text-left text-white sm:h-[300px] md:h-[500px] md:items-center lg:h-[600px]"
          style={{
            backgroundImage: `url(${classInfo.backgroundImage})`,
          }}
        >
          <div className="flex flex-row items-center justify-start space-x-4">
            <div className="small-screen-component">
              <p className="flex items-center rounded-lg bg-gray-100 bg-opacity-20 p-2 text-white">
                <ClockIcon className="mr-2 h-5 w-5 text-white" />
                {classInfo.duration}
              </p>
            </div>
          </div>
          <div className="small-screen-component flex items-center gap-2">
            <Icon className="class-icon small-screen-component h-8 w-8 fill-white" />
            <h2 className="small-screen-component mt-2 text-white md:mt-0">
              {classInfo.classType}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex h-full flex-col justify-between md:col-span-2">
        <div className="text-left md:mt-4">
          <div className="medium-screen-component hidden items-center gap-2 md:flex">
            <Icon className="class-icon h-6 w-6 fill-black" />
            <h2 className="text-black">{classInfo.classType}</h2>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: formatDescription(classInfo.description),
            }}
          />
        </div>

        <div className="mt-5">
          <div>
            <div className="grid grid-cols-2">
              <div className="mb-4">
                <h3 className="text-md text-center">Class Dates</h3>
                <ul className="list-none py-2 text-sm">
                  {classInfo.dates.length > 0 ? (
                    classInfo.dates.map((date, index) => (
                      <li key={index} className="border-b border-black py-2">
                        {date}
                      </li>
                    ))
                  ) : (
                    <li>No dates available</li>
                  )}
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-md">Time</h3>
                <ul className="list-none py-2 text-sm">
                  {classInfo.times.length > 0 ? (
                    classInfo.times.map((time, index) => (
                      <li key={index} className="border-b border-black py-2">
                        {time}
                      </li>
                    ))
                  ) : (
                    <li>No times available</li>
                  )}
                </ul>
              </div>
            </div>
            <div className="medium-screen-component">
              <DetailsDisplay displayInfo={displayInfo} />
            </div>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="mx-auto mt-4 block w-full">
                Book Now
              </Button>
            </Link>
            <div className="small-screen-component text-left">
              <span className="mt-4 block">
                <Link href="/dashboard" className="flex items-center underline">
                  Online class library
                  <ChevronRight />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineClassSlide;
