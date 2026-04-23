import { Metadata } from 'next';
import SnowdoniaRetreat from '@/components/ui/retreats/SnowdoniaRetreat';

export const metadata: Metadata = {
  title: 'Retreats | Rose Long',
  description:
    'Step away from the everyday and immerse yourself in a transformative retreat with Rose Long. Yoga, meditation, and community in carefully chosen locations.',
};

const Retreats = () => {
  return (
    <div className="w-full px-4 md:px-8 pb-20 max-w-5xl mx-auto">
      <SnowdoniaRetreat />
    </div>
  );
};

export default Retreats;
