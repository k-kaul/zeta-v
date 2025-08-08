import ServicesBlock from "./ui/Services-block";
import { SERVICES } from "@/lib/constants";

export default function Services(){

    return (
        <section className="bg-black/90 w-full text-white font-sans">
            <div className="flex flex-col items-center bg-slate-100/10 p-10 gap-5">
                <h1 className="md:text-4xl text-xl font-bold">Services</h1>
                <h2 className="md:text-6xl text-3xl max-w-md md:max-w-5xl text-center font-bold" >
                    How we change the game {/*<br></br>through IT Services */}
                </h2>
                <div className="grid grid-cols-2 items-center m-5 mx-20 min-w-lg md:max-w-7xl">
                    <div className="border-r-1 border-gray-100">
                        <ServicesBlock title={SERVICES[0].title} description={SERVICES[0].description}/>
                        <ServicesBlock title={SERVICES[1].title} description={SERVICES[1].description} className="border-t-1"/>
                    </div>
                    <div>
                        <ServicesBlock title={SERVICES[2].title} description={SERVICES[2].description} />
                        <ServicesBlock title={SERVICES[3].title} description={SERVICES[3].description} className="border-t-1"/>
                    </div>
                </div>
            </div>
        </section>
    )
}