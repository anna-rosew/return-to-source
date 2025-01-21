import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactImage from "@/public/Assets/Images/contact.webp";
import ContactSmall from "@/public/Assets/Images/contact-mobile.webp";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ui/ContactForm";

const Contact = () => {
  return (
    <div className="container text-center w-full">
      <h1>Contact</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative order-first md:order-last">
          <Image
            className="medium-screen-component w-full max-w-md h-auto object-contain mx-auto"
            alt="Rose Long sat leading a retreat class in cross-legged position on the floor, smiling with her eyes closed. She is sat in-front of a large bay window which looks out onto a large sun-filled garden. There is a large, golden gong to her left and a plant with a himilayan salt lamp on her right."
            src={ContactImage}
            layout="responsive"
          />

          <Image
            className="small-screen-component"
            alt="Rose Long sat leading a retreat class in cross-legged position on the floor, smiling with her eyes closed. She is sat in-front of a large bay window which looks out onto a large sun-filled garden. There is a large, golden gong to her left and a plant with a himilayan salt lamp on her right."
            src={ContactSmall}
            layout="responsive"
          />
        </div>
        <div className="text">
          
          <ContactForm />

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
              <Link href="/" className="flex-1">
                <Button variant="outline" size="lg">
                  Qualifications
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
