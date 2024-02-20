import React from "react";
import * as style from "@/style/navbar.css"
import Image from "next/image";
import HubLogo from "@/assest/image/HubLogo.png"
import Link from "next/link";


export default function Navbar() {
    return (
        <>
            <header >
                <div className="navbar">
                    <div className="NavigationOptions">
                        <div className="CompanyLogo">
                            <Link href="/"> <Image
                                src={HubLogo}
                                height={0}
                                width={0}
                                sizes="100vw"
                            /></Link>
                        </div>
                        <p><Link href="/">home</Link></p>
                        {/* <p><Link href="#">logos</Link></p>
                        <p><Link href="#">pfps</Link></p> */}
                        <p><Link href="/logos">logos</Link></p>
                        <p><Link href="/banner">banners</Link></p>
                        <p><Link href="#">models</Link></p>

                    </div>
                    <div className="NavigationContactOption">
                        {/* <p><Link href="/contactmain">Contact sales</Link></p> */}
                        <Link href="/contactmain"><button className="LogInBtn">contact us</button></Link>
                        <button className="SignUpBtn">sign up</button>
                    </div>
                </div>
            </header>
        </>
    )
}