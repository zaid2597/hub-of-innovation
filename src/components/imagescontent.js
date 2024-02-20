import React from "react";
import * as style from "@/style/mainContent.css";
import Sidebar from "./sidebar";
import pfpOne from "@/assest/image/pfpOne.jpg"
import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";

export default function ImagesContent() {
    return (
        <>
            <div style={{ display: "flex",padding: "0 60px" }}>
                <Sidebar />
                <div className="MainContent">
                    <div className="SearchBar">
                        {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                        <IoSearchSharp />
                        <input type="text" placeholder="Search The Creative World At Work" />
                    </div>
                    <div className="CardSection">
                        <div className="Card">
                            <div className="CardImageContainer">
                                <Image
                                    className="img"
                                    src={pfpOne.src}
                                    width={0}
                                    height={0}  
                                    sizes="100vw"
                                />
                            </div>
                            <p className="hover-underline-animation">The Shaw Prize</p>
                        </div>
                        <div className="Card">
                            <div className="CardImageContainer">
                                <Image
                                    className="img"
                                    src={pfpOne.src}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                />
                            </div>
                            <p className="hover-underline-animation">The Shaw Prize</p>
                        </div>
                        <div className="Card">
                            <div className="CardImageContainer">
                                <Image
                                    className="img"
                                    src={pfpOne.src}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                />
                            </div>
                            <p className="hover-underline-animation">The Shaw Prize</p>
                        </div>
                        <div className="Card">
                            <div className="CardImageContainer">
                                <Image
                                    className="img"
                                    src={pfpOne.src}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                />
                            </div>
                            <p className="hover-underline-animation">The Shaw Prize</p>
                        </div>
                        <div className="Card">
                            <div className="CardImageContainer">
                                <Image
                                    className="img"
                                    src={pfpOne.src}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                />
                            </div>
                            <p className="hover-underline-animation">The Shaw Prize</p>
                        </div>
                        <div className="Card">
                            <div className="CardImageContainer">
                                <Image
                                    className="img"
                                    src={pfpOne.src}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                />
                            </div>
                            <p className="hover-underline-animation">The Shaw Prize</p>
                        </div>
                        <div className="Card">
                            <div className="CardImageContainer">
                                <Image
                                    className="img"
                                    src={pfpOne.src}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                />
                            </div>
                            <p className="hover-underline-animation">The Shaw Prize</p>
                        </div>
                        <div className="Card">
                            <div className="CardImageContainer">
                                <Image
                                    className="img"
                                    src={pfpOne.src}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                />
                            </div>
                            <p className="hover-underline-animation">The Shaw Prize</p>
                        </div>
                        <div className="Card">
                            <div className="CardImageContainer">
                                <Image
                                    className="img"
                                    src={pfpOne.src}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                />
                            </div>
                            <p className="hover-underline-animation">The Shaw Prize</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}