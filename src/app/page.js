import Image from "next/image";
import Navbar from "@/components/navbar"
import NewArrival from "@/components/newarival";
import Project from "@/components/Project";

export default function Home() {
  return (
   <>
   <Navbar/>
   <NewArrival/>
   <Project/>
   </>
  );
}
