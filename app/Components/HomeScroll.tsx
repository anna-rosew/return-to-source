import Link from "next/link";
import Image from "next/image";

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
          <h3 className="font-medium text-[#0085FF] lg:text-[18px]">
            Sales Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Simplify your sales monitoring
          </h1>
          <Image
            src={Feature1}
            alt="Sales Monitoring"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check-mark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check-mark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check-mark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
          </ul>
          <p className="flex items-center gap-x-2 pt-6 font-medium text-[#0085FF] lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={BlueButton} alt="Learn More" />
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-x-6 sm:flex-row">
        <Image
          src={Feature2}
          alt="Growth Monitoring"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-56px">
          <h3 className="font-medium text-[#00A424] lg:text-[18px]">
            Growth Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Monitor your site’s new subscribers
          </h1>
          <Image
            src={Feature2}
            alt="Growth Monitoring"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check-mark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check-mark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="check-mark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
          </ul>
          <p className="flex items-center gap-x-2 pt-6 font-medium text-[#00A424] lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={GreenButton} alt="Learn More" />
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature3}
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
            src={CourageChakra}
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

          <p className="flex items-center gap-x-2 pt-6 font-medium text-[#EB2891] lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={ArrowButton} alt="Learn More" />
            </span>
          </p>
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
