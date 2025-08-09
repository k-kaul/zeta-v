import Image from "next/image";
import gender from '@/assets/gender.png';
import national_origin from '@/assets/national-origin.png';
import experience from '@/assets/experience.png';
import education from '@/assets/education.png';
import affirmative from '@/assets/affirmative.png';


export default function Employees(){
    
    return (
        <div className="flex flex-col gap-10 p-10 w-full items-center justify-center my-10 mb-15">
            <div className="text-center mb-5">
                <h1 className="text-4xl font-bold">Our Employees</h1>
            </div>
            <div className="grid grid-cols-1 xl:grid xl:grid-cols-3 md:grid md:grid-cols-2 gap-10">
                <div className="flex items-center justify-center border py-5 px-2 rounded-4xl border-indigo-500 shadow-lg min-w-sm">
                    <Image alt="gender-identity" src={gender} className="w-30 xl:w-80 lg:w-50 md:40"/>
                    <h1 className="text-lg font-bold tracking-tight p-2 mx-2">Gender Identity</h1>
                </div>
                <div className="flex items-center justify-center border py-5 px-2 rounded-4xl border-indigo-500 shadow-lg min-w-sm">
                    <Image alt="national-origin" src={national_origin} className="w-30 xl:w-80 lg:w-50 md:40"/>
                    <h1 className="text-lg font-bold tracking-tight p-2">National Origin</h1>
                </div>
                <div className="flex items-center justify-center border py-5 px-2 rounded-4xl border-indigo-500 shadow-lg min-w-sm">
                    <Image alt="experience" src={experience} className="w-30 xl:w-80 lg:w-50 md:40"/>
                    <h1 className="text-lg font-bold tracking-tight p-2 ml-2">Experience</h1>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-center justify-center">
                <div className="flex items-center justify-center border py-10 px-2 rounded-4xl border-indigo-500 shadow-lg min-w-sm">
                    <Image alt="education" src={education} className="w-30 xl:w-80 lg:w-50 md:40"/>
                    <h1 className="text-lg font-bold tracking-tight p-2">Education</h1>
                </div>
                <div className="flex items-center justify-center border py-5 px-2 rounded-4xl border-indigo-500 shadow-lg min-w-sm">
                    <Image alt="affirmative" src={affirmative} className="w-30 xl:w-80 lg:w-50 md:40"/>
                    <h1 className="text-lg font-bold tracking-tight p-2">Affirmative Action</h1>
                </div>
            </div>
        </div>
    )
}