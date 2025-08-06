import { MoveRight } from "lucide-react"
import Link from "next/link"
import LogoSlider from "./ui/logoslider"

export default function HeroSection(){
    return (
        <section className="flex flex-col py-30 gap-6 w-full h-full bg-gray-100">
            <div className="flex flex-col gap-8">
                <h1 className="text-center text-7xl font-extrabold tracking-tight font-sans">
                    Democratizing IT {' '}
                    <br></br>
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
                <div className="flex flex-col gap-5">
                    <h1 className="text-xl font-light text-center text-black tracking-wide">Trusted by customers worldwide</h1>
                    {/* <h1 className="text-xl font-light text-center text-gray-700 tracking-wide pb-5">
                        Zeta-V has specialized industry and business process specific partners. <span>For various business processes <br></br>in the value chain of the industry Zeta-V collaborates with best of breed and agile partners </span>who are<br></br> complimentary in nature to bring the best value for the clients.We have a comprehensive <br></br>mechanism to enroll right partners in the ecosystem.
                    </h1> */}
                    
                        {/* <LogoSlider slidesToShow={10} slidesToScroll={2} speed={3000}/> */}
                        <LogoSlider />
                </div>
                
            </div>
        </section>
    )
}