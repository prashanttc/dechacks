import React from "react";
import { BoxReveal } from "./magicui/box-reveal";
import { AnimatedSpan, Terminal, TypingAnimation } from "./magicui/terminal";
import { WordRotate } from "./magicui/word-rotate";
import { OrbitingCircles } from "./magicui/orbiting-circles";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaChrome,
  FaFirefoxBrowser,
} from "react-icons/fa";
import { problemstatement } from "@/lib/utils"

const About = () => {
  return (
<div className="z-10">
   <div
      id="about"
      className=" w-full mt-32 px-10 sm:px-0  flex flex-col items-center"
    >
      <BoxReveal>
        <h1 className=" text-5xl sm:text-7xl font-bebas text-white ">
          about devhacks
        </h1>
      </BoxReveal>
      <BoxReveal>
        <h1 className=" text-xl text-center sm:text-3xl mt-5 sm:mt-3 font-jetbrains text-brand ">
          EVERYTHING YOU NEED TO KNOW ABOUT DEVHACKS
        </h1>
      </BoxReveal>
      <div className="mt-20 w-full flex justify-between ">
      <Terminal className="h-full w-[50%] hidden xl:flex">
          <TypingAnimation className="text-white">
            &gt; devhack info
          </TypingAnimation>
          <AnimatedSpan delay={1500} className="text-brand">
            <span>✔  Fetching event details...</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2000} className="text-brand">
            <span>✔ Event: DevHack 2025</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2500} className="text-brand">
            <span>✔ 📅 Date: March 28, 2025.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={3000} className="text-brand">
            <span>✔ 📍 Location: CDGI College, Indore
            </span>
          </AnimatedSpan>

          <AnimatedSpan delay={4000} className="text-brand">
            <span>✔🎯 Theme: &quot;Innovate. Build. Disrupt.&quot;
            .</span>
          </AnimatedSpan>

          <AnimatedSpan delay={4500} className="text-brand">
            <span>✔ 💡 &quot;Code, Collaborate, Conquer!&quot;  
            </span>
          </AnimatedSpan>
          <TypingAnimation delay={6500} className="text-green-500 ">
            Success! dev hack info fetched successfully .
          </TypingAnimation>

          <TypingAnimation delay={7000} className="text-white/60">
            now you can Register
          </TypingAnimation>
        </Terminal>
        <div className="text-white/90  leading-[30px]  w-full xl:w-[50%] font-jetbrains  text-center text-sm xl:text-xl">
          <h1>
          Welcome to the first-ever hackathon under <span className="text-brand font-semibold">Echelon Dev Society! </span>Dev Hacks isn’t just about coding—it’s about breaking barriers, thinking differently, and building something that actually matters. Whether you’re here to create, compete, or just vibe with fellow techies, this is your space to shine. In just 8 hours, you’ll brainstorm, prototype, and pitch your way to glory. No all-nighters, just pure adrenaline, problem-solving, and innovation at its peak. Ready to make your mark? Let’s hack. Let’s innovate. Let’s <span className="text-brand font-semibold"> Dev Hack.</span>

          </h1>
        </div>
      </div>
      <div className=" -mb-10  xl:mt-0 w-full  text-white flex flex-col items-center">
        <div className=" md:mt-32 mb-10 md:mb-32 w-full h-[500px] flex justify-between">
          <div className=" flex items-center justify-center w-full  md:w-[50%]">
            <div className="flex flex-col items-center justify-center text-center text-5xl xl:text-7xl gap-20 md:gap-5 font-bebas text-white">
              <h1>dominate in your domains</h1>
              <WordRotate
                className="text-brand"
                words={[
                  "AI",
                  "WEB DEVELOPMENT",
                  "MOBILE DEVELOPMENT",
                  "MACHINE LEARNING",
                ]}
              />
            </div>
          </div>
          <div className=" hidden md:flex w-[50%] items-center relative">
            <OrbitingCircles
              className="absolute right-[46%] top-[45%] "
              iconSize={50}
              radius={100}
              duration={30}
              reverse
            >
              <FaReact className="text-blue-500 w-full h-full" />
              <FaNodeJs className="text-green-500 w-full h-full " />
              <FaPython className="text-yellow-500 w-full h-full " />
              <FaDatabase className="text-pink-500 w-full h-full " />
            </OrbitingCircles>
            <OrbitingCircles
              className="absolute right-[46%] top-[45%] "
              iconSize={60}
              radius={200}
              duration={40}
            >
              <FaHtml5 className="text-orange-500 w-full h-full" />
              <FaCss3 className="text-blue-500 w-full h-full " />
              <FaChrome className="text-yellow-500 w-full h-full " />
              <FaFirefoxBrowser className="text-red-500 w-full h-full " />
            </OrbitingCircles>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mb-10 xl:mb-32">
      <h1 className="font-bebas text-white text-center text-5xl md:text-7xl mb-5">PROBLEM STATEMENTS</h1>
      <TypingAnimation   className="text-md md:text-xl text-center font-jetbrains text-brand ">we know you already got so many</TypingAnimation >
      <h1 className="font-jetbrains mb-20 xl:mb-0 text-white  text-center mt-5 sm:text-md text-sm"><span className="text-red-500">NOTE -</span> this are sample problem statements. </h1>
      <div className="mt-0 md:mt-20  w-full flex  xl:gap-0 gap-10  flex-wrap justify-center xl:justify-between items-center">
         {problemstatement.map((ps)=>(
              <div key={ps.id} className="ps">
              <h1 className="text-brand font-bebas text-2xl text-center">{ps.domain}</h1>
               <p className="text-white text-sm mt-4 text-center font-jetbrains">{ps.statement}</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;
