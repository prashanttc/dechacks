 import Countdown from "@/components/Countdown";
import About from "@/components/About";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sponsors from "@/components/Sponsors";
import { Separator } from "@/components/ui/separator";
import React from "react";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import { DotPattern } from "@/components/magicui/dot-pattern";

const page = () => {
  return (

      <div className="relative w-screen flex items-center flex-col  sm:py-5 bg-black">
        <Header />
        <MobileNav/>
        <Hero />
      <div className="flex relative w-full items-center flex-col sm:px-20 bg-gradient-to-b  to-transparent to-30% ">
      <Separator className="bg-white/30"/>
      <DotPattern className="absolute z-0"/>
        <Countdown/> 
        <Separator className="bg-white/30"/>
        <About/>
        <Separator className="bg-white/30 "/>
        <Sponsors/>
        <Separator className="bg-white/30   "/>
        <Faqs/>
        <Separator className="bg-white/30   "/>
       
      </div>
      <Footer/>
    </div>
  );
};

export default page;
