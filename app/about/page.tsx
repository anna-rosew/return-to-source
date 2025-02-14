import Link from "next/link";
import Image from "next/image";
import React from "react";
import AboutImage from "@/public/Assets/Images/about.webp";
import AboutSmall from "@/public/Assets/Images/about-small.webp";
import { Button } from "@/components/ui/button";
import { SearchParamProps } from "@/types/index";
import QualificationsModal from "@/components/ui/modals/QualificationsModal";

const About = ({ searchParams }: SearchParamProps) => {
  const show = searchParams?.show;

  return (
    <div className="container mb-8">
      <h1>Meet Rose</h1>
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
            world, or inside me. I was deeply uncomfortable, wanting to make the
            world better while unconsciously driven to fix myself and those
            around me.
          </p>
          <p className="para">
            In my thirties, running a Social Enterprise, I worked hard, played
            hard, and paid the price. Stress and anxiety led me to reach for
            quick fixes that only increased my inner turmoil. Life brought me to
            my knees, everything falling apart for real change to take place. In
            chaos and despair, I admitted I didn&apos;t know how to live but
            longed to learn. Admitting this sparked change.
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
              Challenges became opportunities for growth. I learned to cultivate
              inner coherence instead of chaos. The mystery of life opened from
              within. I continue to be amazed by what&apos;s possible when we
              make a conscious choice to change. Working with people who are up
              for the challenge keeps me inspired and motivated to keep learning
              and growing myself.
            </p>
            <div className="button-container">
              <Link href="/blog" className="flex-1">
                <Button variant="outline" size="lg">
                  Blog
                </Button>
              </Link>
              <Link href="?show=true" scroll={false} className="flex-1">
                <Button variant="outline" size="lg">
                  Qualifications
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {show && <QualificationsModal />}
    </div>
  );
};

export default About;
