import Link from "next/link"

export default function CTA(){
    return (
        <div className="w-full mx-auto py-30 bg-linear-to-b from-indigo-950 to-purple-900">
            <div className="flex p-10 mx-15">
                <div className="w-full px-20">
                    <div className="text-5xl font-medium font-sans text-white">
                        Ready to dive in?
                    </div>
                    <div className="text-xl font-light pt-2 font-sans text-white">
                        Tell us about your business challenges.
                    </div>
                </div>
                <div className="w-lg">
                    <div className="flex gap-5">
                        <Link href={'/#home'} className="p-3 bg-indigo-700 rounded-2xl w-50 text-center border border-indigo-700 text-white font-sans hover:scale-105 duration-150">
                            <button>Get Started</button>
                        </Link>
                        <Link href={'/#home'} className="p-3 bg-gray-100 rounded-2xl w-50 text-center border border-gray-200 font-sans hover:scale-105 duration-150">
                            <button>Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}