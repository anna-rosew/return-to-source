'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold">Oops! Something went wrong</h2>
        <p className="mb-8 text-gray-600">
          We apologize for the inconvenience. Please try refreshing the page.
        </p>
        <div className="space-x-4">
          <Button onClick={() => reset()} variant="primary">
            Try again
          </Button>
          <Button onClick={() => (window.location.href = '/')} variant="outline">
            Go to homepage
          </Button>
        </div>
      </div>
    </div>
  );
}
