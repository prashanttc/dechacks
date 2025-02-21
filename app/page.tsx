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

const page = () => {
  return (
    <div className="relative w-screen flex items-center flex-col  bg-black">
      <Header />
      <MobileNav />
      <Hero />
      <div className="flex relative  w-full items-center flex-col sm:px-20">
        <LazyLoad>
        <DotPattern  className=" w-full h-full z-0"/>
        <Countdown />
        </LazyLoad>
        <LazyLoad>
          <About />
        </LazyLoad>
        <LazyLoad>
          <Prize />
        </LazyLoad>
        <LazyLoad>
          <Sponsors />
        </LazyLoad>
        <LazyLoad>
          <Faqs />
        </LazyLoad>
      </div>
      <Footer />
    </div>
  );
};

export default page;
