"use client";

import { useEffect } from "react";
import ConstructionLayout from "@/components/layout/ConstructionLayout";
import { Button } from "@/components/ui/button";

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
    <ConstructionLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-8">
            We apologize for the inconvenience. Please try refreshing the page.
          </p>
          <div className="space-x-4">
            <Button onClick={() => reset()} variant="primary">
              Try again
            </Button>
            <Button
              onClick={() => (window.location.href = "/")}
              variant="outline"
            >
              Go to homepage
            </Button>
          </div>
        </div>
      </div>
    </ConstructionLayout>
  );
}
