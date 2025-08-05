import Image from "next/image";
import Logo from '@/assets/ZETAV-LOGO.png'
import Link from "next/link";

export default function NavBar(){
    return (
        <div className="w-full">
            <div className="flex pt-3 gap-10 items-center justify-center text-sm">
                <div className="flex gap-3 items-center">
                    <Image height={50} width={50} src={Logo} alt="logo"/>
                    <span className="text-lg font-bold bg-gradient-to-r from-red-700 via-purple-700 to-blue-700 bg-clip-text text-transparent">Zeta-V</span>
                </div>
                <div className="flex flex-row gap-20 justify-between items-center top-0">
                    <Link href={'/'}>
                        <div>Home</div>
                    </Link>
                    <Link href={'/#discovery'}>
                        <div>Discovery</div>
                    </Link>
                    <Link href={'/#industries'}>
                        <div>Industries</div>
                    </Link>
                    <Link href={'/#services'}>
                        <div>Services</div>
                    </Link>
                    <Link href={'/#romicons'}>
                        <div>Romicons</div>
                    </Link>
                    <Link href={'/#careers'}>
                        <div>Careers</div>
                    </Link>
                    <Link href={'/#contact'}>
                        <div>Contact Us</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}