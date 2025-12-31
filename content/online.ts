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
      "Supports <strong>overall stability & posture</strong>. This <strong>grounding, centering</strong> practice brings <strong>awareness</strong> back to the <strong>present moment</strong>, promoting <strong>inner steadiness and resilience</strong> in both everyday life and challenging situations.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Mon, Jan 6", "Mon, Jan 13", "Mon, Jan 20", "Mon, Jan 27"],
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
    dates: ["Wed, Jan 7", "Wed, Jan 14", "Wed, Jan 21", "Wed, Jan 28"],
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
    icon: EveningChillIcon,
    classType: "Evening Chill",
    description:
      "A dedicated space to <strong>pause, unwind, and gently regulate your nervous system</strong>. Over the weeks you'll enjoy a combination of <strong>gentle floor-based movements</strong> (taught by me, Rose) and <strong>supported Yin practices</strong> (led by Rob).",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Thu, Jan 8", "Thu, Jan 15", "Thu, Jan 22", "Thu, Jan 29"],
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
  {
    icon: KundaliniIcon,
    classType: "Detox",
    description:
      "Supporting your body's built-in ability to <strong>restore and renew</strong> itself. This class combines <strong>dynamic movement & cleansing breath work</strong>.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Fri, Jan 9", "Fri, Jan 16", "Fri, Jan 23", "Fri, Jan 30"],
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
