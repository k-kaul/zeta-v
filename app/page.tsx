import Delivery from "@/components/Delivery";
import Employees from "@/components/Employees";
import HeroSection from "@/components/HeroSection";
import Industries from "@/components/Industries";
import Journey from "@/components/Journey";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col items-center ">
        <NavBar />
        <HeroSection />
        <Journey />
        <Industries />
        <Delivery />
        <Services />
        <Employees />
      </div>
    </div>
  );
}
