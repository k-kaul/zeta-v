import { cn } from "@/lib/utils";
import { MailOpen, Phone } from "lucide-react";
import Image from "next/image";
import zetaV from '@/assets/ZETAV-LOGO.png';

const headingStyle = 'text-4xl font-bold';
const listStyle = 'flex flex-col gap-1 pl-1 text-md font-extralight';
const listContainerStyle = 'flex flex-col gap-3';

export default function Footer(){
    return (
        <div className="w-screen bg-linear-to-b from-gray-200 to-white font-sans">
            <div className="flex my-20 gap-5 justify-center w-full">
                <div className="flex flex-row size-fit gap-2">                    
                    <Image src={zetaV} alt="" height={95} width={95} />
                    <h1 className="font-semibold text-3xl bg-gradient-to-r from-blue-700 via-purple-700 to-red-700 bg-clip-text text-transparent p-2">Zeta-V</h1>
                </div>                
                <div className="grid grid-cols-2 flex-wrap gap-10">
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
                        <h1 className={headingStyle}>Connect with Us</h1>
                        <ul className={cn(listStyle)}>
                            <li className="flex gap-2 font-semibold"><Phone className="text-purple-700"/>+91-2069015402</li>
                            <li className="flex gap-2 font-semibold">
                                <MailOpen className="text-purple-700"/>
                                <h1 className="pl-1">contactus@zeta-v.com</h1>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={listContainerStyle}>
                    <h1 className={headingStyle}>Services</h1>
                    <ul className={listStyle}>
                        <li>Strategy Consulting</li>
                        <li>Digital Footprint</li>
                        <li>Analytics & Automation</li>
                        <li>Co-creation & Monetization</li>
                        <li>Strategy & Selection</li>
                        <li>Enterprise Technologies</li>
                        <li>Legacy Transformation</li>
                        <li>Engineering Solutions</li>
                        <li>Staff Augmentation</li>
                        <li>Lateral Hiring</li>
                        <li>Deployment Support</li>
                        <li>Program Management</li>
                        <li>Incorporation Services</li>
                        <li>Sustenance Services</li>
                        <li>Compliance Taxation</li>
                        <li>Managed Infrastructure</li>
                    </ul>
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