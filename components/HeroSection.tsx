import { MoveRight } from "lucide-react"
import Link from "next/link"
import LogoSlider from "./ui/logoslider"
import { cn } from "@/lib/utils"

export default function HeroSection(){
    return (
        <section className="flex flex-col gap-15 w-full">
            <div className="relative flex flex-col h-[45rem] w-full items-center justify-center bg-white">
                  <div
                    className={cn(
                      "absolute inset-0",
                      "[background-size:20px_20px]",
                      "[background-image:radial-gradient(#b2b2b2_1px,transparent_1px)]",
                    )}
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
                <div className="relative flex flex-col gap-8 items-center">
                    <h1 className="text-center xl:text-7xl text-6xl font-extrabold tracking-tight font-sans max-w-2xl">
                        Democratizing IT {' '}                    
                        <span className="bg-gradient-to-r from-blue-700 via-purple-700 to-red-700 bg-clip-text text-transparent">Beyond Barriers</span>
                    </h1>    
                    <h2 className="text-center font-light text-gray-900 tracking-wider">
                        We believe in making technology accessible to everyone,<br></br> regardless of location, expertise, or resources.
                    </h2>
                    <div className="flex flex-row gap-5 justify-center font-bold">
                        <Link href={'/#aboutus'}>
                            <button className="flex bg-blue-600 py-2 px-5 rounded-full text-white cursor-pointer hover:scale-105 duration-150">About Us <MoveRight className="pl-2"/></button>
                        </Link>
                        <Link href={'/contact'}>
                            <button className="flex bg-gray-100 py-2 px-5 rounded-full text-black cursor-pointer hover:scale-105 duration-150">Contact Us <MoveRight className="pl-2"/></button>
                        </Link>
                    </div>                
                </div>
                <div className="pt-15">
                    <div className="flex flex-col gap-5 items-center">
                        <h1 className="font-light text-center text-gray-900 tracking-wider">Trusted by customers worldwide</h1>
                        <LogoSlider />
                    </div>
                </div>
            </div>
        </section>
    )
}