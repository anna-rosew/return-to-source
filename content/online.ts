// lib/data/classes.ts
import { ClassInfo } from "@/types/index";
import MorningIcon from "@/public/Assets/Icons/MorningStrengthIcon";
import EveningChillIcon from "@/public/Assets/Icons/EveningChillIcon";
import KundaliniIcon from "@/public/Assets/Icons/ChakraIcon";
// import LunarIcon from "@/public/Assets/Icons/LunarIcon";

export const classes: ClassInfo[] = [
  {
    icon: MorningIcon,
    classType: "Core Strength",
    description:
      "Supports <strong>overall stability & posture</strong>. This <strong>grounding, centering</strong> practice brings <strong>awareness</strong> back to the <strong>present moment</strong>, promoting <strong>inner steadiness and resilience</strong> in both everyday life and challenging situations.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Mon, Feb 2", "Mon, Feb 9", "Mon, Feb 16", "Mon, Feb 23"],
    times: ["7:00 - 7:30", "7:00 - 7:30", "7:00 - 7:30", "7:00 - 7:30"],
    dropInPrice: "£8",
    monthlyPrice: "4 class bundle £24",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/morning-strength.webp",
    duration: "30 mins",
    pricingDetails: {
      membershipPrice: "£50",
      bundlePrice: "£24",
      dropInPrice: "£8",
    },
  },
  {
    icon: MorningIcon,
    classType: "Vital Breath",
    description:
      "Consistent practice supports <strong>improved emotional regulation</strong>, so you can manage <strong>anxiety & overwhelming feelings</strong>. Over time, breath work improves <strong>sleep quality</strong>, increases <strong>energy levels</strong>, and strengthens the <strong>mind–body connection</strong>.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Wed, Feb 4", "Wed, Feb 11", "Wed, Feb 18", "Wed, Feb 25"],
    times: ["7:00 - 7:30", "7:00 - 7:30", "7:00 - 7:30", "7:00 - 7:30"],
    dropInPrice: "£8",
    monthlyPrice: "4 class bundle £24",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/vital-breath.webp",
    duration: "30 mins",
    pricingDetails: {
      membershipPrice: "£50",
      bundlePrice: "£24",
      dropInPrice: "£8",
    },
  },
  {
    icon: KundaliniIcon,
    classType: "Heart & Roots",
    description:
      "Living from the heart requires commitment. If you'd like to explore <strong>heart-centered living</strong>, this class provides techniques that cultivate <strong>heart-coherence</strong>. Wondering what that means? Come along and experience for yourself.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Fri, Feb 6", "Fri, Feb 13", "Fri, Feb 20", "Fri, Feb 27"],
    times: ["7:00 - 7:30", "7:00 - 7:30", "7:00 - 7:30", "7:00 - 7:30"],
    dropInPrice: "£8",
    monthlyPrice: "4 class bundle £24",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/detox.webp",
    duration: "30 mins",
    pricingDetails: {
      membershipPrice: "£50",
      bundlePrice: "£24",
      dropInPrice: "£8",
    },
  },
  {
    icon: EveningChillIcon,
    classType: "Evening Chill",
    description:
      "A dedicated space to <strong>pause, unwind, and gently regulate your nervous system</strong>. Over the weeks you'll enjoy a combination of <strong>gentle floor-based movements</strong> (taught by me, Rose) and <strong>supported Yin practices</strong> (led by Rob).",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Thu, Feb 5", "Thu, Feb 12", "Thu, Feb 19", "Thu, Feb 26"],
    times: ["20:00 - 21:00", "20:00 - 21:00", "20:00 - 21:00", "20:00 - 21:00"],
    dropInPrice: "£10",
    monthlyPrice: "4 class bundle £32",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/evening-chill.webp",
    duration: "60 mins",
    pricingDetails: {
      membershipPrice: "£50",
      bundlePrice: "£32",
      dropInPrice: "£10",
    },
  },
  // {
  //   icon: LunarIcon,
  //   classType: "Lunar",
  //   description:
  //     "Marking the cycles of the Moon helps us connect to our <strong>own natural rhythm</strong>. In this class, we align with the Moon phases and the body's <strong>energy centres</strong>, deepening intuitive listening. At the <strong>new Moon</strong>, we set intentions; at the <strong>full Moon</strong>, we reflect; and as the Moon <strong>wanes</strong>, we <strong>integrate and release</strong>.",
  //   permanentDescription:
  //     "You can join this class anywhere in the world on Zoom.",
  //   dates: ["Full Moon: Tues, Nov 5", "Equinox New Moon: Tues, Nov 20"],
  //   times: ["20:00 - 21:00", "20:00 - 21:00"],
  //   dropInPrice: "£12",
  //   monthlyPrice: "2 class bundle £18",
  //   width: 100,
  //   height: 100,
  //   backgroundImage: "/Assets/Images/lunar-cycles.webp",
  //   duration: "60 mins",
  //   pricingDetails: {
  //     membershipPrice: "£50",
  //     bundlePrice: "£18",
  //     dropInPrice: "£12",
  //   },
  // },
];
