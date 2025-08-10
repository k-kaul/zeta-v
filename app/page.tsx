import CTA from "@/components/CTA";
import Delivery from "@/components/Delivery";
import Employees from "@/components/Employees";
import HeroSection from "@/components/HeroSection";
import Industries from "@/components/Industries";
import Journey from "@/components/Journey";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {

  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col items-center font-sans">
        <HeroSection />
        <Journey />
        <Industries />
        <Delivery />
        <Services />
        <Employees />
        <Testimonials />
        <CTA />
      </div>
    </div>
  );
}
