import { Metadata } from 'next';
import { INTRO_PARAGRAPH } from '@/content/copy';
import { Button } from '@/components/ui/button';
import DetailsCard from '@/components/ui/DetailsCard';
import TestimonialSection from '@/components/ui/testimonials/TestimonialSection';
import VideoPlayer from '@/components/ui/VideoPlayer';
import AjnaIcon from '@/public/Assets/Icons/AjnaIcon';
import AnahataIcon from '@/public/Assets/Icons/AnahataIcon';
import MuladharaIcon from '@/public/Assets/Icons/MuladharaIcon';
import StarIcon from '@/public/Assets/Icons/StarIcon';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Approach | Rose Long',
  description:
    'Discover the mind-body-breath approach Rose uses in her coaching and yoga sessions — grounded in ancient wisdom and modern research.',
};

const Approach = () => {
  const cardDetails = [
    {
      Icon: MuladharaIcon,
      title: 'Build Courage',
      text: 'Change asks you to release what is familiar and step into the unknown. This takes real courage. In a clear space of enquiry you can see your patterns, name what no longer serves you, and choose differently.',
    },
    {
      Icon: AjnaIcon,
      title: 'Find Clarity',
      text: 'Through guided reflection and honest self-inquiry, blind spots become visible. Greater self-awareness gives you the clarity to see where you have agency — and the freedom to act from that place.',
    },
    {
      Icon: AnahataIcon,
      title: 'Be Present',
      text: 'The body and breath are your greatest allies. Learning to slow down, listen and inhabit the present moment is where insight and transformation begin. Each session is designed to help you come back to yourself.',
    },
  ];

  return (
    <div>
      <div className="container  w-full">
        <h1>Approach</h1>
        <p className="font-bold md:text-center">{INTRO_PARAGRAPH}</p>
        <VideoPlayer url="https://vimeo.com/981928855" />

        <div className="text-left mt-8 md:grid md:grid-cols-2 md:gap-12">
          <div className="flex items-center justify-center gap-5">
            <StarIcon
              className="hidden md:block text-black  group-hover:text-white transition-colors duration-700"
              width={100}
              height={100}
            />
            <div>
              <h3 className="text-customTeal text-base">TECHNIQUES</h3>
              <h2 className="text-2xl">
                You have the capacity to transform yourself from the inside out.
              </h2>
            </div>
          </div>
          <div className="pl-8">
            <p className="text-customTeal">
              The ancients knew the power of the mind, body and the breath, and modern research is
              proving what they knew; you can alter your own body and mind.
            </p>
            <Link href="/work">
              <Button variant="secondary" size="lg" className="my-3 md:mr-auto w-full md:w-auto ">
                Start my journey
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
          {cardDetails.map((content, index) => (
            <DetailsCard
              key={index}
              Icon={content.Icon}
              title={content.title}
              text={content.text}
              width={70}
              height={70}
            />
          ))}
        </div>
        <div className="m-8">
          <p className="text-center">
            If you feel ready to embark on your journey of discovery or are simply interested, we
            are always here to <strong>have a chat.</strong> So, why not{'  '}
            <span className="inline-flex items-center gap-x-4">
              <Link href="/work" className="flex items-center font-medium">
                <strong>get in touch</strong>
                <ChevronRight />
              </Link>
            </span>
          </p>
        </div>
      </div>
      <TestimonialSection />
    </div>
  );
};

export default Approach;
