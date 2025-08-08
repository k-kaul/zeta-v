import { IndustryCards } from "./ui/industries";

export default function Industries(){
    return ( 
        <section className="flex flex-col items-center justify-center gap-8 bg-linear-to-b from-indigo-950 to-purple-900 p-15 py-15 h-full w-screen">
            <div className="flex flex-col gap-5 text-white">
                <h1 className="text-center text-4xl font-bold">Industries</h1>
                <h2 className="text-md font-extralight tracking-wide">Transforming Industries with Cutting-Edge Technology</h2>
            </div>
            <div className="w-screen">
                <div className="p-5 py-7">
                    <IndustryCards />
                </div>
            </div>
        </section>
    )
}