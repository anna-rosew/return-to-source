import { ClassInfo } from "@/types/index";
import MorningIcon from "@/public/Assets/Icons/MorningStrengthIcon";
import EveningChillIcon from "@/public/Assets/Icons/EveningChillIcon";
import KundaliniIcon from "@/public/Assets/Icons/ChakraIcon";
import LunarIcon from "@/public/Assets/Icons/LunarIcon";

export const classes: ClassInfo[] = [
  {
    icon: MorningIcon,
    classType: "Morning Strength",
    description:
      "A morning class focused on <strong>core</strong> <strong>strength</strong> and <strong>balance</strong>. In <strong>Yogic anatomy</strong>, <strong>strong roots</strong> allow you to feel fear and remain <strong>grounded and steady</strong>, keeping your <strong>body and mind stable</strong>. A <strong>strong core</strong> allows you to stay <strong>aligned</strong>, so you notice when you're off center, and can find your way back. These classes offer you a <strong>foundational practice</strong> that supports your <strong>exercise and activity</strong> through the rest of the week.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: [
      "Mon, Jun 2",
      "Mon, Jun 9",
      "Mon, Jun 16",
      "Mon, Jun 23",
      "Mon, Jun 30",
    ],
    times: ["7:00 - 7:30", "7:00 - 7:30", "7:00 - 7:30", "7:00 - 7:30"],
    dropInPrice: "£8",
    monthlyPrice: "3 session bundle £24",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/morning-strength.webp",
    duration: "30 mins",
    pricingDetails: {
      membershipPrice: "£66",
      bundlePrice: "£24",
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
    dates: ["Wed, Jun 4", "Wed, Jun 11", "Wed, Jun 18", "Wed, Jun 25"],
    times: ["7:00 - 7:30", "7:00 - 7:30", "7:00 - 7:30", "7:00 - 7:30"],
    dropInPrice: "£8",
    monthlyPrice: "4 session bundle £24",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/vital-breath.webp",
    duration: "30 mins",
    pricingDetails: {
      membershipPrice: "£66",
      bundlePrice: "£24",
      dropInPrice: "£8",
    },
  },
  {
    icon: EveningChillIcon,
    classType: "Evening",
    description:
      "In today's <strong>fast-paced world</strong>, overwhelming stress triggers our nervous system without allowing reset time. Over the weeks, experience <strong>gentle floor-based movements led by <strong>Rose</strong> and supported <strong>Yin</strong> practices guided by <strong>Rob</strong>. Engage in <strong>deep, restorative relaxation</strong> that releases tension, calms the mind, and <strong>restores equilibrium</strong>. Regular practice cultivates <strong>inner balance</strong>, <strong>manages stress</strong>, <strong>improves sleep</strong>, and brings spaciousness and ease to daily life challenges.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Thu, Jun 5", "Thu, Jun 12", "Thu, Jun 19", "Thu, Jun 26"],
    times: ["20:00 - 21:00", "20:00 - 21:00", "20:00 - 21:00", "20:00 - 21:00"],
    dropInPrice: "£10",
    monthlyPrice: "3 class bundle £21",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/evening-chill.webp",
    duration: "60 mins",
    pricingDetails: {
      membershipPrice: "£66",
      bundlePrice: "£28",
      dropInPrice: "£10",
    },
  },
  {
    icon: KundaliniIcon,
    classType: "Friday Detox",
    description:
      "Come and <strong>release</strong> <strong>physical and emotional stagnation</strong> accumulated over Winter. Align with <strong>Spring's regenerative energy</strong>, <strong>clearing space for the new</strong> in your life.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Fri, May 6", "Fri, May 13", "Fri, May 20", "Fri, May 27"],
    times: [
      "7:00 - 7:30",
      "7:00 - 7:30",
      "7:00 - 7:30",
      "7:00 - 7:30",
      "7:00 - 7:30",
    ],
    dropInPrice: "£8",
    monthlyPrice: "3 class bundle £18",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/detox.webp",
    duration: "30 mins",
    pricingDetails: {
      membershipPrice: "£66",
      bundlePrice: "£30",
      dropInPrice: "£8",
    },
  },
  {
    icon: LunarIcon,
    classType: "Lunar",
    description:
      "Marking the cycles of the Moon helps us connect to our <strong>own natural rhythm</strong>. In this class, we align with the Moon phases and the body’s <strong>energy centres</strong>, deepening intuitive listening. At the <strong>new Moon</strong>, we set intentions; at the <strong>full Moon</strong>, we reflect; and as the Moon <strong>wanes</strong>, we <strong>integrate and release</strong>.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Full Moon: Wed, Jun 11", "New Moon: Tue, Jun 25"],
    times: ["20:00 - 21:00", "7:00 - 8:00"],
    dropInPrice: "£15",
    monthlyPrice: "2 class bundle £20",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/lunar-cycles.webp",
    duration: "30 mins",
    pricingDetails: {
      membershipPrice: "£66",
      bundlePrice: "£20",
      dropInPrice: "£15",
    },
  },
];
