import { cn } from "@/lib/utils";
import { MailOpen, Phone } from "lucide-react";
import Image from "next/image";
import zetaV from '@/assets/ZETAV-LOGO.png';

const headingStyle = 'text-2xl font-bold';
const listStyle = 'flex flex-col gap-1 pl-1 text-sm md:text-sm lg:text-sm font-extralight';
const listContainerStyle = 'flex flex-col gap-3';

export default function Footer(){
    return (
        <div className="w-full bg-linear-to-b from-gray-200 to-white font-sans">
            {/* <div className="grid grid-cols-2 md:grid md:grid-cols-1 my-20 mx-20 gap-5 "> */}
            <div className="p-10 flex justify-center gap-10 items-center ">
                <div className="flex flex-col size-fit gap-2 items-center justify-center">
                    <Image src={zetaV} alt="" className="w-20 h-20"/>
                    <h1 className="font-semibold text-2xl lg:text-4xl md:text-3xl bg-gradient-to-r from-blue-700 via-purple-700 to-red-700 bg-clip-text text-transparent p-2 md:min-w-35 min-w-25">Zeta-V</h1>
                </div>                
                <div className="lg:flex md:grid md:grid-cols-3 grid grid-cols-2 justify-center gap-10">
                    <div className={listContainerStyle}>
                        <h1 className={headingStyle}>Discover <span className="bg-gradient-to-r from-blue-700 via-purple-700 to-red-700 bg-clip-text text-transparent">Zeta-V</span></h1>
                        <ul className={listStyle}>
                            <li>About Us</li>
                            <li>Leadership</li>
                            <li>Accelerator</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className={listContainerStyle}>
                        <h1 className={headingStyle}>Industries</h1>
                        <ul className={listStyle}>
                            <li>Financial Services</li>
                            <li>Manufacturing</li>
                            <li>Healthcare</li>
                            <li>Government</li>
                        </ul>
                    </div>
                    <div className={listContainerStyle}>
                        <h1 className={headingStyle}>Romicons</h1>
                        <ul className={listStyle}>
                            <li>Growth Advisory</li>
                            <li>Deal Advisory</li>
                            <li>Market Advisory</li>
                            <li>Tech Advisory</li>                    
                        </ul>
                    </div>
                    <div className={listContainerStyle}>
                        <h1 className={headingStyle}>Contact Us</h1>
                        <ul className={listStyle}>
                            <li>Worldwide Offices</li>
                            <li>Enquiries</li>
                            <li>Suggestions</li>
                        </ul>
                    </div>
                    <div className={listContainerStyle}>
                        <h1 className='text-2xl font-bold min-w-49'>Connect with Us</h1>
                        <ul className={cn(listStyle)}>
                            <li className="flex gap-1 min-w-37 font-semibold"><Phone className="text-purple-700"/>+91-2069015402</li>
                            <li className="flex gap-1 min-w-48 font-semibold">
                                <MailOpen className="text-purple-700"/>
                                <h1 className="pl-1">contactus@zeta-v.com</h1>
                            </li>
                        </ul>
                    </div>
                </div>                
            </div>
            <div className="flex flex-col w-screen">
                <div className="bg-gradient-to-r from-gray-50 via-gray-900/10 to-gray-50 h-0.5"/>
                <div className="font-extralight text-gray-700 text-center text-xs p-5 tracking-wide">
                    <p>© 2025 ZETA-V. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}