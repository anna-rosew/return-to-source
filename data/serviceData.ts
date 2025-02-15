import { IServiceCard } from "@/types";
import AnahataChakra from "@/public/Assets/Images/HomepageBox1.webp";
import AjnaChakra from "@/public/Assets/Images/HomepageBox3_.webp";
import MuladharaChakra from "@/public/Assets/Images/HomepageBox3.webp";

export const serviceData: IServiceCard[] = [
  {
    serviceName: "Anahata",
    title: "Build Courage",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: AnahataChakra,
    imageAlt: "Anatata Chakra - heart and courage",
    reversed: true,
  },
  {
    serviceName: "Ajna",
    title: "Find Clarity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: AjnaChakra,
    imageAlt: "Ajna Chakra - intuition, imagination, self-realisation",
  },
  {
    serviceName: "Muladhara",
    title: "Be Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: MuladharaChakra,
    imageAlt: "Muladhara Chakra - Rooting and Grounding",
    reversed: true,
  },
];
