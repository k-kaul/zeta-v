import ServicesBlock from "./Services-block";

export default function Services(){
    return (
        <section className="bg-black/90 w-full text-white font-sans">
            <div className="flex flex-col items-center bg-slate-100/10 p-10 gap-5">
                <h1 className="text-4xl font-bold">Services</h1>
                <h2 className="text-6xl max-w-md md:max-w-5xl text-center font-bold" >
                    How we change the game {/*<br></br>through IT Services */}
                </h2>
                <div className="grid grid-cols-2 items-center m-5 mx-20 min-w-2xl md:max-w-7xl">
                    <div className="border-r-1 border-gray-100">
                        <ServicesBlock />
                        <ServicesBlock className="border-t-1"/>
                    </div>
                    <div>
                        <ServicesBlock />
                        <ServicesBlock className="border-t-1"/>
                    </div>
                </div>
            </div>
        </section>
    )
}