import Image from "next/image";
import Navbar from "@/components/navbar"
import NewArrival from "@/components/newarival";

import ImagesContent from "@/components/imagescontent";

export default function AssetsMainPage() {
  return (
   <>
   <Navbar/>
   <NewArrival/>
   <ImagesContent/>

   </>
  );
}