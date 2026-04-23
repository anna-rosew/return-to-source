import { Button } from '@/components/ui/button';
import SunIcon from '@/public/Assets/Icons/SunIcon';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className="container flex h-screen items-center justify-center">
      <div className="mx-auto">
        <SunIcon className="mx-auto my-4" />
        <h1 className="mb-8 text-center md:text-6xl">Coming Soon!</h1>

        <p className="mt-4 justify-center text-center text-lg">
          <>
            <span>Check back soon!</span>
            <br />
            <span>
              In the meantime, you take a look at <Link href="/blog">classes & retreats.</Link>
            </span>
            <Link href="/work">
              <Button variant="outline" size="lg" className="mx-auto my-5">
                Start my journey
              </Button>
            </Link>
          </>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
