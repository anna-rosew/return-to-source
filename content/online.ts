import { ClassInfo } from "@/types/index";
import MorningIcon from "@/public/Assets/Icons/MorningStrengthIcon";
import EveningChillIcon from "@/public/Assets/Icons/EveningChillIcon";
import KundaliniIcon from "@/public/Assets/Icons/ChakraIcon";
// import LunarIcon from "@/public/Assets/Icons/LunarIcon";

export const classes: ClassInfo[] = [
  {
    icon: MorningIcon,
    classType: "Morning Strength",
    description:
      "A morning class focused on <strong>core</strong> <strong>strength</strong> and <strong>balance</strong>. In <strong>Yogic anatomy</strong>, <strong>strong roots</strong> allow you to feel fear and remain <strong>grounded and steady</strong>, keeping your <strong>body and mind stable</strong>. A <strong>strong core</strong> allows you to stay <strong>aligned</strong>, so you notice when you're off center, and can find your way back. These classes offer you a <strong>foundational practice</strong> that supports your <strong>exercise and activity</strong> through the rest of the week.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Mon, Dec 1", "Mon, Dec 8", "Mon, Dec 15"],
    times: ["7:00 - 7:30", "7:00 - 7:30", "7:00 - 7:30"],
    dropInPrice: "£8",
    monthlyPrice: "3 session bundle £18",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/morning-strength.webp",
    duration: "30 mins",
    pricingDetails: {
      membershipPrice: "£50",
      bundlePrice: "£18",
      dropInPrice: "£8",
    },
  },
  {
    icon: MorningIcon,
    classType: "Vital Breath",
    description:
      "This month we're exploring the <strong>yin and yang</strong> of breathing. Learn how to <strong>energize yourself without caffeine</strong> and <strong>relax without wine</strong>! As the <strong>only mammals</strong> who can <strong>alter breathing rhythm</strong>, we utilize this <strong>power</strong> to <strong>transform thinking and feeling</strong> by <strong>resetting our nervous system</strong> and influencing <strong>hormone release</strong>.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Wed, Dec 3", "Wed, Dec 10", "Wed, Dec 17"],
    times: ["7:00 - 7:30", "7:00 - 7:30", "7:00 - 7:30"],
    dropInPrice: "£8",
    monthlyPrice: "5 session bundle £30",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/vital-breath.webp",
    duration: "30 mins",
    pricingDetails: {
      membershipPrice: "£50",
      bundlePrice: "£18",
      dropInPrice: "£8",
    },
  },
  {
    icon: EveningChillIcon,
    classType: "Evening",
    description:
      "This is your <strong>weekly pause</strong>, a chance to unwind and reset. In today's fast-paced world, our nervous systems are often in overdrive, leaving us feeling overwhelmed and reactive. These classes are a <strong>deep reset</strong>. Over the weeks you'll enjoy a combination of <strong>gentle floor-based movements</strong> (taught by me, Rose) and <strong>supported Yin practices</strong> (led by Rob).",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Thu, Dec 4 (Full Moon with Rose", "Thu, Dec 11 (Yin with Rob)"],
    times: ["20:00 - 21:00", "20:00 - 21:00"],
    dropInPrice: "£10",
    monthlyPrice: "3 class bundle £16",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/evening-chill.webp",
    duration: "60 mins",
    pricingDetails: {
      membershipPrice: "£50",
      bundlePrice: "£16",
      dropInPrice: "£10",
    },
  },
  {
    icon: KundaliniIcon,
    classType: "Stillness & Silence",
    description:
      "Come and release the physical and emotional stagnation that accumulates in the Winter months. These classes are a <strong>powerful blend of movement, breath and mantra</strong>, a complete work-out that anchors you within leaving you <strong>energised, grounded and clear</strong>.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: [
      "Fri, Dec 5",
      "Fri, Dec 12",
      "Fri, Dec 19",
      "Solstice: Sat, Dec 20",
      "Solstice: Sun, Dec 21",
      "Solstice: Mon, Dec 22",
    ],
    times: [
      "7:00 - 7:30",
      "7:00 - 7:30",
      "7:00 - 7:30",
      "8:00 - 8:30",
      "8:00 - 8:30",
      "7:00 - 7:30",
    ],
    dropInPrice: "£12",
    monthlyPrice: "All Sessions: £35.  Solstice Weekend Only: £25",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/detox.webp",
    duration: "30 mins",
    pricingDetails: {
      membershipPrice: "£50",
      bundlePrice: "All Sessions: £35. Solstice Weekend Only: £25",
      dropInPrice: "£12",
    },
  },
  // {
  //   icon: LunarIcon,
  //   classType: "Lunar",
  //   description:
  //     "Marking the cycles of the Moon helps us connect to our <strong>own natural rhythm</strong>. In this class, we align with the Moon phases and the body’s <strong>energy centres</strong>, deepening intuitive listening. At the <strong>new Moon</strong>, we set intentions; at the <strong>full Moon</strong>, we reflect; and as the Moon <strong>wanes</strong>, we <strong>integrate and release</strong>.",
  //   permanentDescription:
  //     "You can join this class anywhere in the world on Zoom.",
  //   dates: ["Full Moon: Tues, Nov 5", "Equinox New Moon: Tues, Nov 20"],
  //   times: ["20:00 - 21:00", "20:00 - 21:00"],
  //   dropInPrice: "£12",
  //   monthlyPrice: "2 class bundle £18",
  //   width: 100,
  //   height: 100,
  //   backgroundImage: "/Assets/Images/lunar-cycles.webp",
  //   duration: "30 mins",
  //   pricingDetails: {
  //     membershipPrice: "£50",
  //     bundlePrice: "£16",
  //     dropInPrice: "£10",
  //   },
  // },
];
