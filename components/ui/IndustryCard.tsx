import Link from "next/link";
import Image, { StaticImageData } from "next/image";


export default function IndustryCard({ industryName, image }: {
    industryName: string;
    image: StaticImageData;
}){
    return ( 
        <Link href={`/${industryName.toLowerCase()}`} className="w-full items-center hover:scale-105 duration-115">
            <div className="flex flex-col bg-white border border-gray-200 shadow-md rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <Image className="w-full h-auto rounded-t-xl" src={image} alt="Card Image" />
                <div className="p-2 md:p-3 text-center">
                    <h3 className="text-md font-light text-gray-800 dark:text-white">
                        {industryName.toUpperCase()}
                    </h3>
                </div>
            </div>
        </Link>
    )
}