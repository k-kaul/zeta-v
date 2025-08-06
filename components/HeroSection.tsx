import { MoveRight } from "lucide-react"
import Link from "next/link"
import LogoSlider from "./ui/logoslider"

export default function HeroSection(){
    return (
        <section className="flex flex-col my-40 gap-6 w-full">
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
                        <button className="flex bg-blue-600 py-2 px-5 rounded-full text-white cursor-pointer">About Us <MoveRight className="pl-2"/></button>
                    </Link>
                    <Link href={'/contact'}>
                        <button className="flex bg-gray-100 py-2 px-5 rounded-full text-black cursor-pointer">Contact Us <MoveRight className="pl-2"/></button>
                    </Link>
                </div>
                <LogoSlider />
            </div>
        </section>
    )
}