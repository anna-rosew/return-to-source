import Link from "next/link";
import Image from "next/image";
import React from "react";
import AboutImage from "@/public/Assets/Images/register.webp";

const About = () => {
  return (
    <div className="container text-center w-full">
      <h1>Meet Rose</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="text">
          <p className="mb-4">
            I used to regularly ask myself, ‘What’s the point?’ Life was a
            struggle; I didn’t like what was going on in the world, or inside
            me. I was deeply uncomfortable, wanting to make the world better
            while unconsciously driven to fix myself and those around me.
          </p>
          <p className="mb-4">
            In my thirties, running a Social Enterprise, I worked hard, played
            hard, and paid the price. Stress and anxiety led me to reach for
            quick fixes that only increased my inner turmoil. Life brought me to
            my knees, everything falling apart for real change to take place. In
            chaos and despair, I admitted I didn’t know how to live but longed
            to learn. Admitting this sparked change.
          </p>
          <p className="quote italic text-lg mb-4">
            The despair I felt began to transform into quiet gratitude and
            wonder.
          </p>
          <div className="desktop-and-mobile-element">
            <p className="mb-4">
              Life brought teachers, mentors and transformative practices.
              Challenges became opportunities for growth. I learned to cultivate
              inner coherence instead of chaos. The mystery of life opened from
              within. I continue to be amazed by what&apos;s possible when we
              make a conscious choice to change. Working with people who are up
              for the challenge keeps me inspired and motivated to keep learning
              and growing myself.
            </p>
            <div className="grid-button-container flex space-x-4">
              <Link
                href="/blog"
                className="general-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Blog
              </Link>
              <Link
                href="/qualifications"
                className="general-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Qualifications
              </Link>
            </div>
          </div>
        </div>
        <div className="about-image-container relative">
          <Image
            className="about-image rounded-lg"
            alt="Rose Long"
            src={AboutImage}
            layout="responsive"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
