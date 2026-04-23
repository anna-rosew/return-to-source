import { serviceData } from '@/content/serviceData';
import { ServiceCard } from '@/components/ui/ServiceCard';

export default function HomeScroll() {
  return (
    <div className="flex w-full flex-col gap-y-[56px] bg-black px-4 py-[56px] lg:gap-y-[80px] lg:py-[120px]">
      {serviceData.map((service) => (
        <ServiceCard key={service.serviceName} {...service} />
      ))}
    </div>
  );
}
