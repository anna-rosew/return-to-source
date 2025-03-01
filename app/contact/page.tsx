"use client";
import React from "react";
import Image from "next/image";
import ContactImage from "@/public/Assets/Images/contact.webp";
import ContactSmall from "@/public/Assets/Images/contact-mobile.webp";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:rose@rose-long.com";
  };

  return (
    <div className="container text-center w-full">
      <h1 className="mb-8">Contact</h1>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="relative order-first md:order-last">
          <Image
            className="medium-screen-component w-full max-w-md h-auto object-contain mx-auto responsive"
            alt="Rose Long sat leading a retreat class in cross-legged position on the floor, smiling with her eyes closed. She is sat in-front of a large bay window which looks out onto a large sun-filled garden. There is a large, golden gong to her left and a plant with a himilayan salt lamp on her right."
            src={ContactImage}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            placeholder="blur"
          />

          <Image
            className="small-screen-component responsive"
            alt="Rose Long sat leading a retreat class in cross-legged position on the floor, smiling with her eyes closed. She is sat in-front of a large bay window which looks out onto a large sun-filled garden. There is a large, golden gong to her left and a plant with a himilayan salt lamp on her right."
            src={ContactSmall}
            placeholder="blur"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="text mb-12">
          <Card className="mx-auto max-w-md text-left border-hidden shadow-none">
            <CardHeader className="px-0">
              <CardTitle>
                <h2>Get in Touch</h2>
              </CardTitle>
              <CardDescription>
                <p className="para pt-4">
                  If you&apos;d like to book a{" "}
                  <strong>class, workshop, or retreat,</strong> or have any
                  questions, please don&apos;t hesitate to reach out.
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-1">
              <Button
                onClick={handleEmailClick}
                variant="primary"
                className="w-full"
              >
                email me
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
