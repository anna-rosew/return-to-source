"use client";
import React from "react";

import Link from "next/link";
import { X } from "lucide-react";

const QualificationsModal = () => {
  const credentials = [
    {
      year: "2023",
      title: "The Yoga Sutras of Patanjali: Kia Miller",
      institution: "Radiant Body Yoga",
    },
    {
      year: "2022",
      title: "Exploring Metaphors with Clean Language",
      institution: "The Clean Coaching Centre",
    },
    {
      year: "2022",
      title: "Self Mastery Training level 2 with Kia Miller",
      institution: "Radiant Body Yoga",
    },
    {
      year: "2021",
      title: "Radiant Body Yoga Teacher Training, Level 2: Prana and Pranayama",
      institution: "",
    },
    {
      year: "2020",
      title: "200 hr Yoga Teacher Training with Dr Kumar",
      institution: "Traditional Yoga certified by Yoga Alliance",
    },
    {
      year: "2020",
      title: "Family Constellations & the Chakras with Delcia McNeil",
      institution: "certified by the Association for Therapeutic Healers",
    },
    {
      year: "2019",
      title: "Coming Back to our Five Senses; the path of self enquiry",
      institution: "5 day intensive with Donna Farhi",
    },
    {
      year: "2018",
      title: "Chakra Psychology with Delcia McNeil",
      institution: "certified by the Association for Therapeutic Healers",
    },
    {
      year: "2017 & 2018",
      title:
        "Capacitar Training in Healing Trauma through Somatic Practice with Dr Patricia Cane",
      institution: "",
    },
    {
      year: "2017",
      title: "Trained as Certified Recovery Coach at The Addiction Academy",
      institution: "",
    },
    {
      year: "2017",
      title: "Supercharge your Chakras course with Andodea Judith",
      institution: "",
    },
    {
      year: "2017",
      title: "Meditation Teacher Training",
      institution: "certified by Traditional Yoga, UK",
    },
    {
      year: "2016-2017",
      title: "Yoga Teacher Training: Foundations Level 2",
      institution: "certified by British Wheel of Yoga",
    },
    {
      year: "2015",
      title:
        "Yoga Teacher Training for Mastering the Addictive Personality with Carolyn Cowan, Kundalini Global",
      institution: "certified by Yoga Alliance",
    },
    {
      year: "2015",
      title: "Trained Facilitator in Psychometric Testing at Metis",
      institution: "",
    },
    {
      year: "2015",
      title:
        "Trained Facilitator of the Strategy Spring Board by Thompson Best",
      institution: "",
    },
    {
      year: "2014-2016",
      title: "200hr Kundalini Yoga Teacher Training with Sada Sat Singh",
      institution: "certified by the Kundalini Research Institute",
    },
    {
      year: "2013-2014",
      title: "Health Coach Training, Institute of Integrative Nutrition",
      institution: "certified by International Assoc for Health Coaches",
    },
    {
      year: "2004-2006",
      title: "Self Expression and Leadership Coach Training",
      institution: "Landmark Education",
    },
    {
      year: "1999",
      title: "The Global Trainer Training",
      institution: "VSO",
    },
    {
      year: "1993-1994",
      title: "Post Graduate Certificate of Education, Religious Studies",
      institution: "University College London",
    },
    {
      year: "1990-1993",
      title: "BA Hons in Comparative Religion, 2:1",
      institution: "Manchester University",
    },
  ];

  return (
    <div>
      <div className="fixed inset-0 flex items-start justify-start p-0.5 bg-gray-200/80 overflow-y-auto z-50">
        <div className="flex flex-col w-4/5 max-w-[37rem] mx-auto my-4 p-8 bg-white shadow-lg overflow-y-auto max-h-[90vh]">
          {/* Exit Button */}
          <div className="flex items-center">
            <Link href="/about">
              <X />
            </Link>
          </div>

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Full Credentials:</h2>
          </div>

          {/* Credentials Container */}
          <div className="text-left">
            <div className="space-y-4 leading-8">
              {credentials.map((credential, index) => (
                <p key={index}>
                  {credential.year}: <strong>{credential.title}</strong>{" "}
                  {credential.institution}
                  <div className="my-2.5 md:my-4" />
                </p>
              ))}
            </div>
          </div>

          {/* Footer Button */}
          <div className="mt-8">
            <Link href="/contact" className="block">
              <button className="w-full py-3 px-6 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200">
                Start Your Journey
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationsModal;
