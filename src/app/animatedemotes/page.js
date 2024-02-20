import Image from "next/image";
import Navbar from "@/components/navbar"
import NewArrival from "@/components/newarival";
import AnimatedEmotes from "@/components/animatedEmotes";

export default function AssetsMainPage() {
  return (
   <>
   <Navbar/>
   <NewArrival/>
   <AnimatedEmotes/>

   </>
  );
}