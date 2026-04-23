'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
  showAlert?: boolean;
}

export const CopyButton = ({ textToCopy, className = '', showAlert = true }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  const [showCopyAlert, setShowCopyAlert] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);

      if (showAlert) {
        setShowCopyAlert(true);
      }

      setTimeout(() => {
        setCopied(false);
        setShowCopyAlert(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <>
      <button
        onClick={handleCopy}
        className={`flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1 transition-colors hover:bg-gray-200 ${className}`}
        aria-label="Copy to clipboard"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        <span>Share</span>
      </button>

      {showCopyAlert && showAlert && (
        <Alert className="fixed bottom-4 right-4 z-50 w-auto border-green-200 bg-green-50">
          <AlertDescription className="text-green-800">Link copied to clipboard!</AlertDescription>
        </Alert>
      )}
    </>
  );
};

export default CopyButton;
