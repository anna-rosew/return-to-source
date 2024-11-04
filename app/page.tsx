import HeroImage from "@/app/Components/HeroImage";
import DefaultButton from "@/app/Components/DefaultButton";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="uppercase flex justify-center items-center text-[28px] lg:text-[48px] leading-2 text-center pt-10 pb-3">
        Breath - Mind - Body
      </h1>
      <HeroImage />
      <DefaultButton text="Start your journey" />
    </div>
  );
}
