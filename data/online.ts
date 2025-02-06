import { ClassInfo } from "@/types/index";
import MorningIcon from "@/public/Assets/Icons/MorningIcon";
import EveningChillIcon from "@/public/Assets/Icons/EveningChillIcon";
import KundaliniIcon from "@/public/Assets/Icons/KundaliniIcon";
import LunarIcon from "@/public/Assets/Icons/LunarIcon";

export const classes: ClassInfo[] = [
  {
    icon: MorningIcon,
    classType: "Morning",
    description:
      "If you're looking for a fast way to <strong>regenerate your body, mind, and spirit,</strong> come and experience the magic of the breath. Deeply detoxifying, revitalising, and balancing, the practice of <strong>Pranayama</strong> has deep and lasting benefits.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Tue, Aug 6", "Wed, Aug 21", "Tue, Aug 27"],
    times: ["7:00 - 7:30 am", "7:00 - 7:30 am", "7:00 - 7:30 am"],
    dropInPrice: "£8",
    monthlyPrice: "3 session bundle £18",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/morning-breath.webp",
    duration: "30 mins",
  },
  {
    icon: EveningChillIcon,
    classType: "Evening",
    description:
      "Thursday nights are about releasing tension and moving into the parasympathetic nervous system, which allows the body to replenish and heal. This hour is a deeply restorative way to look after your health in these stressful times. Come and enjoy an hour to unwind and relax.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Thu, Aug 1", "Thu, Aug 8", "Thu, Aug 27", "Thur, Sep 5"],
    times: ["8:00 - 9:00 pm", "8:00 - 9:00 pm", "8:00 - 9:00 pm"],
    dropInPrice: "£10",
    monthlyPrice: "3 class bundle £21",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/evening-chill.webp",
    duration: "30 mins",
  },
  {
    icon: KundaliniIcon,
    classType: "Kundalini",
    description:
      "These 90-minute classes combine movement, breath, and sound. If you’re looking for an intense physical workout and a tangible experience of expansive awareness, this is for you. Kundalini Yoga is the fastest way to experience altered states of consciousness without substances.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Sat, Aug 3", "Sun, Sep 1", "Sat, Sep 7"],
    times: ["8:00 - 9:00 am", "8:00 - 9:00 am", "8:00 - 9:00 am"],
    dropInPrice: "£12",
    monthlyPrice: "3 class bundle £30",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/kundalini-magic.webp",
    duration: "30 mins",
  },
  {
    icon: LunarIcon,
    classType: "Lunar",
    description:
      "Meeting twice each month, this practice helps you drop into the natural rhythms of your body and the world. Women have practiced at the New and Full Moon for centuries to deepen awareness of their bodies and cyclical connection with nature. Set an intention with each New Moon and reflect and release with each Full Moon.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["NEW MOON KUNDALINI: Sat, Aug 3", "FULL MOON: Tue, Aug 20"],
    times: ["8:00 - 10:30 am", "8:00 - 9:00 pm"],
    dropInPrice: "£12 (New Moon), £10 (Full Moon)",
    monthlyPrice: "2 class bundle £17",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/lunar-cycles.webp",
    duration: "30 mins",
  },
];
