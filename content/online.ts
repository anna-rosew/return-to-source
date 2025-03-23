import { ClassInfo } from "@/types/index";
import MorningIcon from "@/public/Assets/Icons/MorningIcon";
import EveningChillIcon from "@/public/Assets/Icons/EveningChillIcon";
import KundaliniIcon from "@/public/Assets/Icons/ChakraIcon";
import LunarIcon from "@/public/Assets/Icons/LunarIcon";

export const classes: ClassInfo[] = [
  {
    icon: MorningIcon,
    classType: "Morning Strength",
    description:
      "A <strong>morning class</strong> focused on core strength and balance. The practice of <strong>strengthening our core</strong> develops <strong>inner strength</strong> for life's challenges. Like a <strong>tiger</strong> balancing <strong>intention</strong> and <strong>action</strong>, we navigate modern living from a <strong>centered place</strong>. By cultivating <strong>core strength</strong>, we find the <strong>still point</strong> where <strong>peace</strong> resides.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Mon, Apr 7", "Mon, Apr 14", "Mon, Apr 28"],
    times: ["7:00 - 7:30 am", "7:00 - 7:30 am", "7:00 - 7:30 am"],
    dropInPrice: "£8",
    monthlyPrice: "3 session bundle £18",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/evening-chill.webp",
    duration: "30 mins",
  },
  {
    icon: MorningIcon,
    classType: "Vital Breath",
    description:
      "Our <strong>breathing practice</strong> reveals imbalances while offering <strong>equilibrium</strong>. Through <strong>conscious breathing</strong>, we navigate opposing forces and know when to <strong>act</strong> or <strong>rest</strong>. As <strong>Spring's energy</strong> propels us forward, we maintain <strong>internal balance</strong>, harnessing vitality without losing our <strong>center</strong>. The <strong>breath</strong> teaches us to flow with our natural <strong>rhythms</strong>.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Wed, Apr 9", "Wed, Apr 16", "Wed, Apr 23", "Wed, Apr 30"],
    times: [
      "7:00 - 7:30 am",
      "7:00 - 7:30 am",
      "7:00 - 7:30 am",
      "7:00 - 7:30 am",
    ],
    dropInPrice: "£8",
    monthlyPrice: "4 session bundle £24",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/vital-breath.webp",
    duration: "30 mins",
  },
  {
    icon: EveningChillIcon,
    classType: "Evening",
    description:
      "<strong>Modern life</strong> keeps our <strong>nervous system</strong> reacting to constant stress. Without <strong>resetting</strong>, we become overwhelmed. Through <strong>gentle movements</strong> and <strong>Yin practices</strong>, you'll experience <strong>deep relaxation</strong> that releases tension. This <strong>regular practice</strong> restores <strong>equilibrium</strong>, helping manage stress, improve <strong>sleep</strong>, and create <strong>inner balance</strong> and <strong>ease</strong>.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Thu, Apr 13", "Thu, Apr 10", "Thu, Apr 24"],
    times: ["8:00 - 9:00 pm", "8:00 - 9:00 pm", "8:00 - 9:00 pm"],
    dropInPrice: "£10",
    monthlyPrice: "3 class bundle £21",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/evening-online.webp",
    duration: "30 mins",
  },
  {
    icon: KundaliniIcon,
    classType: "Detox",
    description:
      "<strong>Friday's Detox</strong> enlivens your <strong>liver</strong>, Spring's organ. Through <strong>mindful movement</strong>, <strong>targeted breathwork</strong>, and <strong>gentle twists</strong>, we support natural <strong>detoxification</strong>. Release Winter's <strong>stagnation</strong> and align with <strong>Spring's energy</strong>. End your work week by processing <strong>accumulated stress</strong>, entering the weekend with renewed <strong>clarity</strong> and <strong>vitality</strong>.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Fri, Apr 4", "Fri, Apr 11", "Fri, Apr 25"],
    times: ["7:00 - 7:30 am", "7:00 - 7:30 am", "7:00 - 7:30 am"],
    dropInPrice: "£8",
    monthlyPrice: "3 class bundle £18",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/kundalini-magic.webp",
    duration: "30 mins",
  },
  {
    icon: LunarIcon,
    classType: "Lunar",
    description:
      "The <strong>Moon's cycles</strong> connect us to our <strong>natural rhythms</strong>. We work with <strong>energy centres</strong>, deepening our <strong>intuitive intelligence</strong>. The <strong>new Moon</strong> invites pause and <strong>intention-setting</strong>. At <strong>full Moon</strong>, we reflect on what's illuminated. During <strong>waning phases</strong>, we <strong>integrate</strong> and <strong>release</strong>, creating space for <strong>new intentions</strong> in the next <strong>lunar cycle</strong>.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Full Moon: Sun, Apri 13", "NEW MOON: Sun, Apr 27"],
    times: ["9:00am - 10:00 am", "9:00am - 10:00 am"],
    dropInPrice: "£15",
    monthlyPrice: "2 class bundle £20",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/lunar-cycles.webp",
    duration: "30 mins",
  },
];
