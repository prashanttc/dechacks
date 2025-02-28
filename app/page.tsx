import Countdown from "@/components/Countdown";
import About from "@/components/About";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sponsors from "@/components/Sponsors";
import React from "react";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import Prize from "@/components/Prize";
import { DotPattern } from "@/components/magicui/dot-pattern";
import LazyLoad from "@/components/LazyLoad";
import { Separator } from "@/components/ui/separator";
import Bot from "@/components/Bot";

const page = () => {
  return (
    <div className="relative w-screen flex items-center flex-col  bg-black">
      <Header />
      <MobileNav />
      <Hero />
      <Separator className="bg-white/50" />
      <div className="flex relative  h-fit w-full items-center flex-col sm:px-20">
        <DotPattern className="absolute right-0 inset-y-0 w-full    h-full z-0" />
        <Countdown />
        <Separator className="bg-white/50" />
        <LazyLoad>
          <About />
        </LazyLoad>
        <Separator className="bg-white/50" />
        <Prize />
        <Separator className="bg-white/50" />
        <LazyLoad>
          <Sponsors />
        </LazyLoad>
        <Separator className="bg-white/50" />
      </div>
      <div className="w-full  bg-gradient-to-t from-[#18529B]/70  to-transparent to-100% ">
        <Footer />
        <Separator className="bg-white/50" />
        <Faqs />
        <Bot />
      </div>
    </div>
  );
};

export default page;
