import Image from "next/image";
import Navbar from "@/components/navbar"
import NewArrival from "@/components/newarival";
import StaticEmotes from "@/components/staticEmotes";

export default function AssetsMainPage() {
  return (
   <>
   <Navbar/>
   <NewArrival/>
   <StaticEmotes/>

   </>
  );
}