import Link from "next/link";
import Image from "next/image";
import React from "react";
import AboutImage from "@/public/Assets/Images/about.webp";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="container text-center w-full">
      <h1 className="pb-5">Meet Rose</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="text">
          <p className="para">
            I used to regularly ask myself, ‘What’s the point?’ Life was a
            struggle; I didn’t like what was going on in the world, or inside
            me. I was deeply uncomfortable, wanting to make the world better
            while unconsciously driven to fix myself and those around me.
          </p>
          <p className="para">
            In my thirties, running a Social Enterprise, I worked hard, played
            hard, and paid the price. Stress and anxiety led me to reach for
            quick fixes that only increased my inner turmoil. Life brought me to
            my knees, everything falling apart for real change to take place. In
            chaos and despair, I admitted I didn’t know how to live but longed
            to learn. Admitting this sparked change.
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
            <div className="flex space-x-4">
              <Link href="/blog">
                <Button variant="outline" size="lg">
                  Blog
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg">
                  Qualifications
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            className="about-image rounded-lg"
            alt="Rose Long"
            src={AboutImage}
            layout="responsive w-full h-full"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
