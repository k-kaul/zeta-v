import Delivery from "@/components/Delivery";
import HeroSection from "@/components/HeroSection";
import Industries from "@/components/Industries";
import Journey from "@/components/Journey";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center w-full">
        <NavBar />
        <HeroSection />
        <Journey />
        <Industries />
        <Delivery />
        <Services />
      </div>
    </div>
  );
}
