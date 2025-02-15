import React from "react";
import Link from "next/link";
import Image from "next/image";
import KRI from "@/public/Assets/Icons/kundali-institute.svg";
import IAHC from "@/public/Assets/Icons/IAHC.svg";
import YogaAlliance from "@/public/Assets/Icons/yoga-alliance.svg";
import IIN from "@/public/Assets/Icons/kundali-institute.svg";

const LogoContainer = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-2 md:px-4 gap-4">
      <Link href="https://kundaliniresearchinstitute.org/en/">
        <Image
          src={KRI}
          alt="Kundalini Researh Institute"
          className="md:h-[200px]"
        />
      </Link>
      <Link href="https://iahcnow.org/">
        <Image
          src={IAHC}
          alt="International Association of Health Coaches"
          className="md:h-[200px]"
        />
      </Link>

      <Link href="https://yogaalliance.org/">
        <Image
          src={YogaAlliance}
          alt="Yoga Alliance"
          className="md:h-[200px]"
        />
      </Link>
      <Link href="https://www.integrativenutrition.com/">
        <Image
          src={IIN}
          alt="Institute of Integrative Nutrition"
          className="md:h-[200px]"
        />
      </Link>
    </div>
  );
};

export default LogoContainer;
