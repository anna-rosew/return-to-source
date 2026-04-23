import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { IServiceCard } from '@/types';

export const ServiceCard = ({
  serviceName,
  title,
  description,
  image,
  imageAlt,
  reversed = false,
}: IServiceCard) => {
  return (
    <div
      className={`flex flex-col items-center gap-x-12 ${
        reversed ? 'sm:flex-row-reverse' : 'sm:flex-row'
      } mx-auto w-full max-w-screen-lg justify-center`}
    >
      <Image src={image} alt={imageAlt} className="hidden w-2/5 sm:block" />
      <div className="sm:w-1/2 sm:px-10 lg:py-[56px]">
        <h3 className="text-center text-[1rem] text-customBeige md:text-left">{serviceName}</h3>
        <h1 className="pt-[12px] text-center text-2xl font-medium text-white md:text-left lg:text-[42px] lg:leading-[58px]">
          {title}
        </h1>
        <div className="mx-auto block sm:hidden lg:h-[600px] lg:w-[600px]">
          <Image src={image} alt={imageAlt} className="pt-7" />
        </div>
        <p className="py-[24px] text-center text-white md:text-left lg:text-[18px]">
          {description}
        </p>
        <Link href="/work">
          <div className="group flex items-center justify-center md:justify-start">
            <p className="flex items-center gap-x-2 pt-1 text-center font-medium text-customGreen sm:pt-6 md:text-left lg:text-[18px]">
              Learn More{' '}
              <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                <ChevronRight />
              </span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
