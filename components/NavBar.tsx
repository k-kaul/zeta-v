import Image from "next/image";
import Logo from '@/assets/ZETAV-LOGO.png'
import Link from "next/link";

export default function NavBar(){
    return (
        <div className="w-full mt-5">
            <div className="flex gap-10 items-center">
                <div className="flex gap-2 items-center">
                    <Image height={50} width={50} src={Logo} alt="logo"/>
                    <span>Zeta-V</span>
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