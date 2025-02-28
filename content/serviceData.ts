import { IServiceCard } from "@/types";
import HomeOne from "@/public/Assets/Images/HomepageBox1.webp";
import HomeTwo from "@/public/Assets/Images/HomepageBox3_.webp";
import HomeThree from "@/public/Assets/Images/HomepageBox3.webp";

export const serviceData: IServiceCard[] = [
  {
    serviceName: "Clarity",
    title: "If your mind’s racing and you can’t switch off…",
    description:
      "Learn how to regain clarity, and calm the turmoil within you.",
    image: HomeOne,
    imageAlt:
      "Eye by ManuelTheLensman: Fitness, calm and breathing of black woman outdoor in nature, mountains and blue sky background for yoga wellness, meditation and zen energy. Face of girl breathing for peace, freedom and mindfulness",
    reversed: true,
  },
  {
    serviceName: "Restore",
    title: "If your energy is drained and your body feels out of sync...",
    description:
      "Discover how to reconnect with your body and the healing power within you.",
    image: HomeTwo,
    imageAlt: "Ajna Chakra - intuition, imagination, self-realisation",
  },
  {
    serviceName: "Courage",
    title: "If you’re struggling to make sense of it all...",
    description:
      "Let’s work together so you can find the courage and clarity you need to navigate life, without adding to your stress.",
    image: HomeThree,
    imageAlt: "Circle of light on water by Rose Long",
    reversed: true,
  },
];
