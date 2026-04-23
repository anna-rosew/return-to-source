import { Metadata } from 'next';
import SnowdoniaRetreat from '@/components/ui/retreats/SnowdoniaRetreat';

export const metadata: Metadata = {
  title: 'Retreats | Rose Long',
  description:
    'Step away from the everyday and immerse yourself in a transformative retreat with Rose Long. Yoga, meditation, and community in carefully chosen locations.',
};

const Retreats = () => {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-20 md:px-8">
      <SnowdoniaRetreat />
    </div>
  );
};

export default Retreats;
