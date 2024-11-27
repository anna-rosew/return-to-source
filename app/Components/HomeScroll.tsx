import Link from "next/link";

//images
import Image from "next/image";
import AnahataChakra from "@/public/Assets/courage-white.svg";
import AjnaChakra from "@/public/Assets/clarity-white.svg";
import MuladharaChakra from "@/public/Assets/presence-white.svg";
import NextArrow from "@/public/Assets/arrow_forward.svg";

export default function HomeScroll() {
  {
    /* 
            const homeFeatures = [
    {
      imageSrc: "",
      title: "Build Courage",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      buttonText: "Explore Classes",
    },
    {
      title: "Build Courage",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      buttonText: "Explore Classes",
    },
    {
      title: "Be Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      buttonText: "Explore Classes",
    },
  ];
            */
  }

  return (
    <div className="flex flex-col gap-y-[56px] lg:gap-y-[80px] lg:py-[120px] py-[56px]">
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={AnahataChakra}
          alt="Anatata Chakra - heart and courage"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-56px">
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Build Courage
          </h1>
          <Image
            src={AnahataChakra}
            alt="Sales Monitoring"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. 
          </p>
          <Link href="/work">
            <p className="flex items-center gap-x-2 pt-6 font-medium text-[#0085FF] lg:text-[18px]">
              Learn More{" "}
              <span>
                <Image src={NextArrow} alt="Learn More" />
              </span>
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-x-6 sm:flex-row">
        <Image
          src={AjnaChakra}
          alt="Growth Monitoring"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-56px">
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Monitor your site’s new subscribers
          </h1>
          <Image
            src={AjnaChakra}
            alt="Growth Monitoring"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <Link href="/work">
            <p className="flex items-center gap-x-2 pt-6 font-medium text-[#0085FF] lg:text-[18px]">
              Learn More{" "}
              <span>
                <Image src={NextArrow} alt="Learn More" />
              </span>
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={MuladharaChakra}
          alt="Sales Monitoring"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-56px">
          <h3 className="font-medium text-[#EB2891] lg:text-[18px]">
            Growth Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#36485C] lg:text-[42px] lg:leading-[58px]">
            Monitor your sites new subscribers
          </h1>
          <Image
            src={MuladharaChakra}
            alt="Growth Monitoring"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <div className="flex w-full gap-x-[24px]">
            <div className="w-1/2 flex flex-col ">
              <h3 className="text-[20px] font-medium text-[#172026]">100+</h3>
              <p className="text-[#36485C]">Lorem ipsum dolor si</p>
            </div>
            <div className="w-1/2 flex flex-col ">
              <h3 className="text-[20px] font-medium text-[#172026]">100+</h3>
              <p className="text-[#36485C]">Lorem ipsum dolor si</p>
            </div>
          </div>
          <Link href="/work">
            <p className="flex items-center gap-x-2 pt-6 font-medium text-[#0085FF] lg:text-[18px]">
              Learn More{" "}
              <span>
                <Image src={NextArrow} alt="Learn More" />
              </span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* 
             <div className="text-white flex-col justify-center">
      {homeFeatures.map((item, index) => (
        <h1>{item.title}</h1>
      ))}
    </div>
            */
