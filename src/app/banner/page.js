import Image from "next/image";
import Navbar from "@/components/navbar"
import NewArrival from "@/components/newarival";
import Banner from "@/components/banner";

export default function BannerPage() {
    return (
        <>
            <Navbar />
            <NewArrival />
            <Banner />
        </>
    );
}