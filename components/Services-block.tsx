import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import Link from "next/link";


const SERVICES = [
    {
        title: 'Digital Acceleration',
        description: 'Rapid adoption of digital technologies driving growth, innovation and efficiency in a digital-first world. We focus on cloud adoption, AI driven automation.'
    }, 
    // {
    //     title: 'Enterprise Transformation',
    //     description: 'Bridging the gap between business goals and IT capabilities, ensuring technology investments support long-term strategic objectives. We focus on SaaS.'
    // }, 
    // {
    //     title: 'Workforce Management',
    //     description: 'Specialised team of consultants providing full range of services including managed talent acquisition, staff augmentation, training, skilling, deployment support.'
    // }, 
    // {
    //     title: 'Shared Services',
    //     description: 'Dedicated business unit focused on providing shared services in India and China on-demand basis for entity incorporation & sustenance; Accounts, HR.'
    // }
]



export default function ServicesBlock({className}:{className?:string;}){
    return (
        <div className={cn('border-gray-100',className)}>
            <div className="p-10">
            <div className="flex gap-2">
            <CheckCircle className="text-blue-600" />
            <h1>{SERVICES[0].title}</h1>
            </div>
            <p>
                {SERVICES[0].description}
            </p>
            <Link href={'/#view-more'}>
                <button>View More</button>
            </Link>
        </div>
        </div>
    )
}