import React from "react";
import * as style from "@/style/sidebar.css"
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import Link from "next/link";


export default function Sidebar() {
    return (
        <>
            <div className="SideBar">
                <div className="SideBarFilterOptions">
                    <TbAdjustmentsHorizontal />
                    <h1>filter</h1>
                </div>
                <p className="button"><Link href="/">projects</Link></p>

                <div class="dropdown">
                    <p className="button dropbtn" >emotes</p>
                    <div class="dropdown-content">
                        <p className="dropbtn" href="#"><Link href="/emotescontent">static emotes</Link></p>
                        <p className="dropbtn" href="#"><Link href="/animatedemotes">animated emotes</Link></p>

                    </div>
                </div>

                <p className="button"><Link href="/overlaysMain">overlays</Link></p>
                <p className="button"><Link href="/pfpMain">PFP's</Link></p>

            </div>
        </>
    )
}
