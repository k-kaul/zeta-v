import ServicesBlock from "./Services-block";


export default function Services(){
    return (
        <section>
            <div className="flex flex-col items-center bg-slate-100/10">
                <h1 className="uppercase">Services</h1>
                <h2 className="text-5xl" >Unlocking Business Potential through IT Services</h2>
                <div className="grid grid-cols-2 items-center m-5 mx-20">
                    <div className="border-r-2 border-gray-100">
                        <ServicesBlock />
                        <ServicesBlock className="border-t-2"/>
                    </div>
                    <div>
                        <ServicesBlock />
                        <ServicesBlock className="border-t-2"/>
                    </div>
                </div>
            </div>
        </section>
    )
}