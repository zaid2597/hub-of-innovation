import Image from "next/image";
import Navbar from "@/components/navbar"
import NewArrival from "@/components/newarival";
import PeopleContent from "@/components/peopleContent";

export default function AssetsMainPage() {
  return (
   <>
   <Navbar/>
   <NewArrival/>
   <PeopleContent/>

   </>
  );
}