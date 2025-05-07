import { IServiceCard } from "@/types";
import HomeOne from "@/public/Assets/Images/HomepageBox1.webp";
import HomeTwo from "@/public/Assets/Images/HomepageBox3_.webp";
import HomeThree from "@/public/Assets/Images/HomepageBox3.webp";

export const serviceData: IServiceCard[] = [
  {
    title: "If you're anxious and can’t switch off...",
    description: "Learn to cultivate inner calm.",
    image: HomeOne,
    imageAlt:
      "Eye by ManuelTheLensman: Fitness, calm and breathing of black woman outdoor in nature, mountains and blue sky background for yoga wellness, meditation and zen energy. Face of girl breathing for peace, freedom and mindfulness",
    reversed: true,
  },
  {
    title: "If you’re tired and your body’s complaining...",
    description: "Discover the source of your natural vitality",
    image: HomeTwo,
    imageAlt: "Ajna Chakra - intuition, imagination, self-realisation",
  },
  {
    title: "If you're drowning in confusion and unable to see the light... ",
    description: "It's time to look within and find the clarity you seek.",
    image: HomeThree,
    imageAlt: "Circle of light on water by Rose Long",
    reversed: true,
  },
];
