import Image from "next/image";
import Navbar from "@/components/navbar"
import NewArrival from "@/components/newarival";
import Logos from "@/components/logos";

export default function BannerPage() {
    return (
        <>
            <Navbar />
            <NewArrival />
            <Logos />
        </>
    );
}