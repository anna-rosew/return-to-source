import { serviceData } from "@/content/serviceData";
import { ServiceCard } from "@/components/ui/ServiceCard";

export default function HomeScroll() {
  return (
    <div className="w-full bg-black flex flex-col gap-y-[56px] lg:gap-y-[80px] lg:py-[120px] py-[56px] px-4">
      {serviceData.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
}
