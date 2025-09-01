import { Button } from "@/components/ui/button";
import MonthlyCard from "@/components/ui/work/MonthlyCard";
import TestimonialSection from "@/components/ui/testimonials/TestimonialSection";
import RootAndReleaseIcon from "@/public/Assets/Icons/RootsIcon";
import VitalityIcon from "@/public/Assets/Icons/plant";
import LightIcon from "@/public/Assets/Icons/Sunshine";
import { ChevronRight, Calendar, Clock, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const MonthlyTheme = () => {
  const weeklyProgram = [
    {
      Icon: RootAndReleaseIcon,
      title: "Root & Release",
      text: "Reconnect with yourself, root into your reality and release what's draining your energy.",
    },
    {
      Icon: VitalityIcon,
      title: "Reclaim your Vitality",
      text: "Gain clarity of what brings you joy at this time of year - seasonal choices, purposeful action, everyday pleasures.",
    },
    {
      Icon: LightIcon,
      title: "Embody the Light",
      text: "Trust what's come to light and live in gratitude and abundance.",
    },
  ];

  const programIncludes = [
    "Daily emails to keep your intention alive and strong",
    "Live online yoga classes Monday, Wednesday & Friday 7:00-7:30 AM",
    "Two pre-recorded yoga classes each week (dynamic & restorative)",
    "Live Summer Solstice practice on Saturday 21 June",
    "Daily journal prompts for honest reflection",
    "Short breath and meditation practices (15 minutes or less)",
    "Simple rituals to embody your learning",
    "Root & Rise discount on one-to-one coaching",
  ];

  return (
    <div>
      {/* Hero Section with Cover Image */}
      <div className="container mx-auto px-4 py-8">
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <Image
            src="/Assets/Images/solstice.webp"
            alt="Summer Solstice sunrise over peaceful landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <div>
              <h3 className="text-white">September 2025</h3>
              <h1 className="text-white">Equinox Calling</h1>
              <p className="text-lg text-center max-w-2xl mx-auto text-white">
                A four-week Autumn Equinox journey to deepen your self-awareness
                and reclaim balance, clarity & calm.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full container">
        {/* Introduction */}
        <div className="mx-auto text-center mb-16">
          <p className="text-lg text-gray-700 mb-8">
            <strong>The light is here, and so are you!</strong> Let this
            Solstice be a return to your true nature, your chance to tap into
            the deep joy of being awake and alive to the wonder of each day.
            This gentle, low-screen-time program invites you to make this
            solstice a turning point—{" "}
            <strong>a joyful &apos;YES!&apos; </strong>to your vital spirit.
          </p>

          {/* Key Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center p-4 border bg-transparent rounded-lg">
              <Calendar className="w-8 h-8 text-black mb-2" />
              <h3 className="font-semibold text-customSienna">Duration</h3>
              <p className="text-gray-600">3 weeks</p>
              <p className="text-sm text-gray-500">7 June - 28 June</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-transparent rounded-lg">
              <Clock className="w-8 h-8 text-black mb-2" />
              <h3 className="font-semibold text-customSienna">
                Daily Practice
              </h3>
              <p className="text-gray-600">15 minutes</p>
              <p className="text-sm text-gray-500">
                No elaborate setup required
              </p>
            </div>
            <div className="flex flex-col items-center p-4 bg-transparent rounded-lg">
              <Users className="w-8 h-8 text-black mb-2" />
              <h3 className="font-semibold text-customSienna">Investment</h3>
              <p className="text-gray-600">£120</p>
              <p className="text-sm text-gray-500">Limited spaces</p>
            </div>
          </div>
        </div>

        {/* Weekly Program */}
        <div className="mb-16">
          <h2 className="text-3xl text-center text-customSienna mb-12">
            Your Three-Week Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weeklyProgram.map((week, index) => (
              <MonthlyCard
                key={index}
                Icon={week.Icon}
                week={`Week ${index + 1}`}
                title={week.title}
                text={week.text}
                width={70}
                height={70}
              />
            ))}
          </div>
        </div>

        {/* Daily Practice */}
        <div className="mb-16 rounded-lg p-8">
          <h2 className="text-2xl text-customSienna mb-6 text-center">
            Each Day Includes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>A relevant theme to anchor your focus</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>A journal prompt for honest reflection</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>A short breath or meditation practice</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    A simple ritual to bring it into your body and day
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-16">
          <h2 className="text-3xl text-center text-customSienna mb-12">
            Your Investment Includes
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {programIncludes.map((item, index) => (
                <div key={index} className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-12">
          <h2 className="text-3xl text-customSienna mb-6">
            Ready to Say YES to Light?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Mark this Summer Solstice as a pivotal moment in your year. Listen
            for your inner &#39;YES!&apos; and respond.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
            >
              I&lsquo;m a Yes! - Sign Up for £120
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg"
            >
              Email me for details
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-6">
            Spaces limited. Email Rose to secure your place.
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl text-customTeal mb-4">THE INTENTION</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            In Yogic philosophy, <strong>sankalpa</strong> (intention) and{" "}
            <strong>tapas</strong> (daily commitment) remind us that change
            isn&apos;t about striving, it&apos;s about a daily remembering. This
            programme is rooted in self awareness, not driven by unhealthy
            ideals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-customSienna mb-3">
                Your Part:
              </h4>
              <p className="text-gray-700">
                Hold a clear intention, stay curious and allow yourself to be
                changed by what comes to light.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-customSienna mb-3">
                Rose&apos;s Part:
              </h4>
              <p className="text-gray-700">
                Provide the structure, rhythm and encouragement you need to
                consistently show up for yourself.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            Ready to embark on your Solstice Reclamation? We&apos;re here to{" "}
            <strong>have a chat.</strong> So, why not{"  "}
            <span className="inline-flex items-center gap-x-2">
              <Link
                href="/contact"
                className="flex items-center font-medium text-customTeal"
              >
                <strong>get in touch</strong>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </span>
          </p>
        </div>
      </div>

      <TestimonialSection />
    </div>
  );
};

export default MonthlyTheme;
