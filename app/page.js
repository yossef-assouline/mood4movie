"use client"
import Navbar from "@/components/ui/NavBar";
import Image from "next/image";

import { Hero } from "@/components/ui/Hero";
import { Footer } from "@/components/ui/Footer";
import { Explaination } from "@/components/ui/Explaination";


export default function Home() {
  
  return (
    <>
   <Navbar/>
   <Hero/>
   <hr/>
   <Explaination/>
   <Footer/>
   </>
   
  );
}
