import HeroImage from "@/app/Components/HeroImage";
import DefaultButton from "@/app/Components/DefaultButton";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center overflow-hidden">
      {/* Background Animated Circles */}
      <div className="absolute w-[300px] h-[300px] bg-[rgba(67,108,101,0.60)] rounded-full blur-[50px] top-[100px] left-[68px] animate-move-left" />
      <div className="absolute w-[400px] h-[400px] bg-[rgba(202,187,157,1)] rounded-full blur-[50px] top-[209px] right-[40px] animate-move-right" />

      {/* Content */}
      <h1 className="uppercase text-[28px] lg:text-[48px] leading-2 text-center pt-10 pb-3">
        Breath - Mind - Body
      </h1>
      <HeroImage />
      <DefaultButton text="Start your journey" />
    </div>
  );
}
