'use client';
import Link from 'next/link';
import { X } from 'lucide-react';
import { qualifications } from '@/content/qualifications';
import { Qualification } from '@/types';
import { Button } from '../button';

interface QualificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QualificationsModal: React.FC<QualificationsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-start justify-start overflow-y-auto bg-black/80 p-0.5">
        <div className="mx-auto my-4 flex max-h-[90vh] w-4/5 max-w-[70rem] flex-col overflow-y-auto bg-customGreen p-8 shadow-lg">
          <div className="mb-4 flex w-full justify-end">
            <Button onClick={onClose} variant="outline" className="transition hover:opacity-75">
              <X />
            </Button>
          </div>

          <div className="mb-6">
            <h2 className="text-left">Full Credentials:</h2>
          </div>

          <div className="text-left">
            <div className="space-y-4 leading-8">
              {qualifications.map((qualification: Qualification, index: number) => (
                <p key={index}>
                  {qualification.year}: <strong>{qualification.title}</strong>{' '}
                  {qualification.institution && qualification.institution}
                  <div className="my-2.5 md:my-4" />
                </p>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Link href="/contact" className="block">
              <Button variant="secondary" className="w-full">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationsModal;
