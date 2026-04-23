import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center py-32 text-center space-y-6">
      <h1 className="text-6xl font-light">404</h1>
      <h2>Page not found</h2>
      <p className="text-black/60 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link href="/">
        <Button variant="primary" size="lg">
          Back to home
        </Button>
      </Link>
    </div>
  );
}
