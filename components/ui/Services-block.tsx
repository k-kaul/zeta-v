import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ServicesBlock({ className, description, title }:{
    className?:string;
    description: string;
    title:string;
}){
    return (
        <div className={cn('border-gray-100',className)}>
            <div className="flex flex-col p-10 gap-5">
                <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500" />
                    <h1 className="text-xl max-w-lg">{title}</h1>
                </div>
                <div>
                    <p className="font-extralight tracking-wide">
                        {description}
                    </p>
                </div>
                <Link 
                    href={'/#view-more'} 
                    className="p-2 text-white bg-gradient-to-r from-blue-500 to-blue-800 rounded-full w-50 text-center">
                    <button>View More</button>
                </Link>
            </div>
        </div>
    )
}