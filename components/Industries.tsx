import IndustryCard from "./IndustryCard"
import image from '@/assets/FINANCIAL-SERVICES.webp';
import { CardDemo } from "./ui/industries";

export default function Industries(){
    return ( 
        <section className="flex flex-col items-center justify-center gap-8 bg-red-200 p-10 h-full w-screen">
            <div className="flex flex-col gap-3">
                <h1 className="text-center text-4xl font-bold">Industries</h1>
                <h2 className="text-md font-extralight tracking-wide">Transforming Industries with Cutting-Edge Technology</h2>
            </div>
            <div className="border w-full">
                <div className="p-20">
                    <CardDemo />
                </div>
            </div>
        </section>
    )
}