import HeroSection from "@/components/HeroSection";
import Journey from "@/components/Journey";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center w-full px-15">
        <NavBar />
        <HeroSection />
        <Journey />
      </div>
    </div>
  );
}
