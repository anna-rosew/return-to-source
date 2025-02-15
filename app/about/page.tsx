"use client";
import Image from "next/image";
import React, { useState } from "react";
import AboutImage from "@/public/Assets/Images/about.webp";
import AboutSmall from "@/public/Assets/Images/about-small.webp";
import { Button } from "@/components/ui/button";
import QualificationsModal from "@/components/ui/modals/QualificationsModal";
import LogoContainer from "@/components/ui/about/LogoContainer";
import TestimonialSection from "@/components/ui/TestimonialSection";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="container mb-8">
        <h1 className="text-left">Meet Rose</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative order-first md:order-last">
            <Image
              className="medium-screen-component w-full max-w-md h-auto object-contain mx-auto"
              alt="Rose Long sat leading a retreat class in cross-legged position on the floor, smiling with her eyes closed. She is sat in-front of a large bay window which looks out onto a large sun-filled garden. There is a large, golden gong to her left and a plant with a himilayan salt lamp on her right."
              src={AboutImage}
              layout="responsive"
            />

            <Image
              className="small-screen-component"
              alt="Rose Long sat leading a retreat class in cross-legged position on the floor, smiling with her eyes closed. She is sat in-front of a large bay window which looks out onto a large sun-filled garden. There is a large, golden gong to her left and a plant with a himilayan salt lamp on her right."
              src={AboutSmall}
              placeholder="blur"
              layout="responsive"
            />
          </div>
          <div className="text">
            <p className="para">
              I used to regularly ask myself, &apos;What&apos;s the point?&apos;
              Life was a struggle; I didn&apos;t like what was going on in the
              world, or inside me. I was deeply uncomfortable, wanting to make
              the world better while unconsciously driven to fix myself and
              those around me.
            </p>
            <p className="para">
              In my thirties, running a Social Enterprise, I worked hard, played
              hard, and paid the price. Stress and anxiety led me to reach for
              quick fixes that only increased my inner turmoil. Life brought me
              to my knees, everything falling apart for real change to take
              place. In chaos and despair, I admitted I didn&apos;t know how to
              live but longed to learn. Admitting this sparked change.
            </p>
            <div className="quote">
              <p>
                The despair I felt began to transform into quiet gratitude and
                wonder.
              </p>
            </div>
            <div>
              <p className="para">
                Life brought teachers, mentors and transformative practices.
                Challenges became opportunities for growth. I learned to
                cultivate inner coherence instead of chaos. The mystery of life
                opened from within. I continue to be amazed by what&apos;s
                possible when we make a conscious choice to change. Working with
                people who are up for the challenge keeps me inspired and
                motivated to keep learning and growing myself.
              </p>
            </div>
          </div>
        </div>
        <div className="page-section">
          <h2 className="text-left mb-5">Qualifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="para">
                I’ve been teaching and facilitating groups since my
                mid-twenties. After training as a secondary school teacher in
                Religious Education, I quickly realised the school system wasn’t
                for me. This led me to Human Rights Education, where I set up
                the Education Department at Anti-Slavery International, working
                with incredible individuals and communities locally, nationally
                and internationally.
              </p>
              <p className="para">
                In my early thirties, inspired by Paulo Freire’s work, I
                co-founded Living Lens, an international social enterprise that
                used video to amplify marginalised voices and spark social
                change. The work was deeply rewarding and it was during this
                time that I trained as a Self-Expression & Leadership Coach.{" "}
              </p>
              <p className="para">
                In my early forties I trained as a Holistic Health Coaching and
                trained as a Yoga & Meditation Teacher. I am a perpetual student
                and am grateful to all my teachers and mentors, and the rich
                traditions that I draw upon in my work.
              </p>

              <Button
                variant="secondary"
                size="lg"
                className="w-full mt-8"
                onClick={() => setIsModalOpen(true)}
              >
                View Full Credentials
              </Button>
            </div>
            <LogoContainer />
          </div>
        </div>
        <QualificationsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
      <TestimonialSection />
    </div>
  );
};

export default About;
