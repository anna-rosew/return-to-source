"use client";
import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { qualifications } from "@/content/qualifications";
import { Qualification } from "@/types";
import { Button } from "../button";

interface QualificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QualificationsModal: React.FC<QualificationsModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;
  return (
    <div>
      <div className="fixed inset-0 flex items-start justify-start p-0.5 bg-black/80 overflow-y-auto z-50">
        <div className="flex flex-col w-4/5 max-w-[70rem] mx-auto my-4 p-8 bg-customGreen shadow-lg overflow-y-auto max-h-[90vh]">
          <div className="flex justify-end w-full mb-4">
            <Button
              onClick={onClose}
              variant="outline"
              className="hover:opacity-75 transition"
            >
              <X />
            </Button>
          </div>

          <div className="mb-6">
            <h2 className="text-left">Full Credentials:</h2>
          </div>

          <div className="text-left">
            <div className="space-y-4 leading-8">
              {qualifications.map(
                (qualification: Qualification, index: number) => (
                  <p key={index}>
                    {qualification.year}: <strong>{qualification.title}</strong>{" "}
                    {qualification.institution && qualification.institution}
                    <div className="my-2.5 md:my-4" />
                  </p>
                )
              )}
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
