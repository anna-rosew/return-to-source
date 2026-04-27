import { Metadata } from 'next';
import { INTRO_PARAGRAPH } from '@/content/copy';
import Card from '@/components/common/NavCard';
import SectionHeading from '@/components/common/SectionHeading';
import OnlineCarousel from '@/components/ui/online/OnlineCarousel';

export const metadata: Metadata = {
  title: 'Groups | Rose Long',
  description:
    'Join Rose Long for online and in-person yoga and coaching groups, seasonal programmes, and retreats. Something for every stage of your journey.',
};
// import InPersonCarousel from "@/components/ui/inperson/InPersonCarousel";
// import { slides } from '@/content/retreats';
// import RetreatsOverview from '@/components/ui/retreats/RetreatsOverview';
import { groupCards } from '@/content/groups';

const Groups = () => {
  return (
    <div className="container w-full text-center">
      <h1 className="pb-5">Groups</h1>
      <p className="font-bold md:text-center">{INTRO_PARAGRAPH}</p>
      <div className="my-7 lg:my-20">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          {groupCards.map((card, index) => (
            <Card key={index} cardInfo={card} />
          ))}
        </div>
      </div>
      <div id="online-groups" className="online-groups">
        <SectionHeading title="Online Groups" />

        {/* May theme */}
        <div className="pb-6 pt-2 text-center">
          <p className="font-semibold italic text-customSienna md:text-center">
            May Theme: Align with your Inner Compass
          </p>
          <p className="mt-1 text-sm text-black/50 md:text-center">
            Sessions to help you tune in, reconnect, and find a renewed sense of clarity and focus.
            Classes begin Wednesday 20th May.
          </p>
        </div>

        <OnlineCarousel />
      </div>
      <div id="in-person-groups" className="in-person-groups mb-8">
        <SectionHeading title="In-Person Groups" />
        <p className="text py-2 md:py-4 md:text-center">
          Come and join our community for intimate in-person sessions. These classes and workshops
          offer personal attention and guidance in a supportive space. Whether you&apos;re drawn to
          gentle Breathing Courses, energising Kundalini flow, or connecting at our post-class
          gatherings, there&apos;s something for every stage of your journey.
        </p>
        {/* <InPersonCarousel /> */}
        <p className="py-6 text-sm italic text-black/50 md:text-center">
          New in-person sessions coming soon — check back shortly or{' '}
          <a href="/contact" className="underline">
            get in touch
          </a>{' '}
          to be notified.
        </p>
      </div>
      <div id="retreats" className="in-person-groups mb-8">
        <SectionHeading title="Retreats" />
        <p className="text py-4 md:py-10 md:text-center">
          Step away from the everyday and immerse yourself in transformative experiences. Our
          retreats blend yoga practice, meditation, and community connection in carefully chosen
          locations. Whether for a day or a week, these intimate gatherings offer a chance to reset,
          deepen your practice, and forge lasting connections with fellow practitioners.
        </p>
        <p className="py-6 text-sm italic text-black/50 md:text-center">
          New in-person sessions coming soon — check back shortly or{' '}
          <a href="/contact" className="underline">
            get in touch
          </a>{' '}
          to be notified.
        </p>
        {/*
        <RetreatsOverview slides={slides} /> */}
      </div>
    </div>
  );
};

export default Groups;
