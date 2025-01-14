"use client";

import React, { useEffect } from "react";

// Define the type of the props, including backgroundColor and children
interface SectionObserverProps {
  backgroundColor: string;
  children: React.ReactNode;
}

export default function SectionObserver({
  backgroundColor,
  children,
}: SectionObserverProps) {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = entry.target.getAttribute(
            "data-backgroundcolor"
          ) as string;
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0.2],
    });

    // Select all sections and observe them
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="flex flex-col items-center w-full"
      data-backgroundcolor={backgroundColor}
      style={{ backgroundColor }}
    >
      <div className="text-center">{children}</div>
    </div>
  );
}
