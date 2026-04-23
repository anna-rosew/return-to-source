'use client';

import { ArrowLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Section {
  id: string;
  title: string;
  content: string;
}

interface TableOfContentsProps {
  sections: Section[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Log initial sections

    // Observer setup
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (sectionId: string) => {

    const element = document.getElementById(sectionId);

    if (element) {
      // Get the header height (adjust this value based on your layout)
      const headerOffset = 100;

      // Log position calculations
      const elementPosition = element.getBoundingClientRect().top;

      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      // Attempt scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {

      // Log all available heading elements
      const allHeadings = document.querySelectorAll('h1, h2, h3');
      console.log(
        'Available headings:',
        Array.from(allHeadings).map((h) => ({
          id: h.id,
          text: h.textContent,
          tag: h.tagName,
        }))
      );
    }
  };

  return (
    <nav className="hidden  md:block max-w-4xl mx-auto px-4 text-left">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="font-normal m-0">Table of Contents</h3>
      </div>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left border-b border-black transition-colorsflex my-1 pb-1 items-center justify-center md:justify-start group ${
                activeSection === section.id ? 'bg-gray-200 text-black' : 'text-gray-600'
              }`}
            >
              <p className="flex items-center gap-x-2 font-medium m-0 text-black text-center md:text-left">
                {section.title}
                <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                  <ChevronRight />
                </span>
              </p>
            </button>
          </li>
        ))}
      </ul>
      <Link
        href="/blog"
        className="font-bold uppercase list-none flex items-center gap-x-2 text-sm text-black text-left"
      >
        <span className="transform transition-transform duration-300 group-hover:translate-x-2">
          <ArrowLeft />
        </span>
        Back to blog
      </Link>
    </nav>
  );
}
