import IndustryCard from "./IndustryCard"
import image from '@/assets/FINANCIAL-SERVICES.webp';

const industries = [
    {
        industry: "manufacturing",
        image
    },{
        industry: "Finance",
        image
    },{
        industry: "healthcare",
        image
    },{
        industry: "government",
        image
    },
]

export default function Industries(){
    return ( 
        <section className="flex flex-col items-center justify-center gap-8 bg-red-200 pt-10">
            <div className="flex flex-col gap-3">
                <h1 className="text-center text-4xl font-bold">Industries</h1>
                <h2 className="text-md font-extralight tracking-wide">Transforming Industries with Cutting-Edge Technology</h2>
            </div>
            <div className="flex gap-10 w-screen px-20 h-90">
                {
                    industries.map((industry, index) => <IndustryCard key={index} industryName={industry.industry} image={industry.image} />)
                }
            </div>
        </section>
    )
}