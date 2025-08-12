import Link from "next/link"

export default function CTA(){
    return (
        <div className="w-screen px-10 py-20 sm:px-20 sm:py-30 bg-linear-to-b from-indigo-950 to-purple-900">
            <div className="flex flex-col md:flex-row items-center md:max-w-9xl gap-5 p-5 justify-between">
                <div className="text-3xl md:text-4xl lg:text-5xl font-medium font-sans text-white sm:flex sm:flex-col lg:justify-center">
                    <h1>Ready to dive in?</h1>
                    <h1 className="text-lg lg:text-xl font-light pt-2">Tell us about your business challenges.</h1>
                </div>
                <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
                    <Link href={'/#home'} className="bg-indigo-700 rounded-lg text-center border border-indigo-700 text-white font-sans hover:scale-105 duration-150 min-w-35 p-2">
                        <button>Get Started</button>
                    </Link>
                    <Link href={'/#home'} className="bg-gray-100 rounded-lg text-center border border-gray-200 font-sans hover:scale-105 duration-150 min-w-35 p-2">
                        <button>Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}