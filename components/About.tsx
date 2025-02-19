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
import { MagicCard } from "./magicui/magic-card";

const About = () => {
  return (
  <>
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
            &gt; pnpm dlx shadcn@latest init
          </TypingAnimation>

          <AnimatedSpan delay={1500} className="text-brand">
            <span>✔ Preflight checks.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2000} className="text-brand">
            <span>✔ Verifying framework. Found Next.js.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2500} className="text-brand">
            <span>✔ Validating Tailwind CSS.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={3000} className="text-brand">
            <span>✔ Validating import alias.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={3500} className="text-brand">
            <span>✔ Writing components.json.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={4000} className="text-brand">
            <span>✔ Checking registry.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={4500} className="text-brand">
            <span>✔ Updating tailwind.config.ts</span>
          </AnimatedSpan>

          <AnimatedSpan delay={5000} className="text-brand">
            <span>✔ Updating app/globals.css</span>
          </AnimatedSpan>

          <AnimatedSpan delay={5500} className="text-brand">
            <span>✔ Installing dependencies.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={6000} className="text-blue-500">
            <span>/ Updated 1 file:</span>
            <span className="pl-2">- lib/utils.ts</span>
          </AnimatedSpan>

          <TypingAnimation delay={6500} className="text-green-500 ">
            Success! Project initialization completed.
          </TypingAnimation>

          <TypingAnimation delay={7000} className="text-white/60">
            You may now add components.
          </TypingAnimation>
        </Terminal>
        <div className="text-white/70 leading-[25px] md:tex-white w-full md:w-[50%] text-center text-sm md:text-xl">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            tenetur vero hic quos. Eaque hic assumenda labore dolorum, neque
            fugiat illo nesciunt, necessitatibus quis, repudiandae recusandae!
            Quo iure placeat doloremque aut autem quasi hic, sunt vitae, error
            neque voluptatibus reprehenderit ducimus atque laboriosam
            exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Iure tenetur vero hic quos. Eaque hic assumenda labore
            dolorum, neque fugiat illo nesciunt, necessitatibus quis,
            repudiandae recusandae! Quo iure placeat doloremque aut autem quasi
            hic, sunt vitae, error neque voluptatibus reprehenderit ducimus
            atque laboriosam exercitationem. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iure tenetur vero hic quos. Eaque hic
            assumenda labore dolorum, neque fugiat illo nesciunt, necessitatibus
            quis, repudiandae recusandae! Quo iure placeat doloremque aut autem
            quasi hic, sunt vitae, error neque voluptatibus reprehenderit
            ducimus atque laboriosam exercitationem.
          </h1>
        </div>
      </div>
      <div className=" -mb-10  xl:mt-0 w-full  text-white flex flex-col items-center">
        <div className=" md:mt-32 mb-10 xl:mb-32 w-full h-[500px] flex justify-between">
          <div className=" flex items-center justify-center w-full  md:w-[50%]">
            <div className="flex flex-col items-center justify-center text-center text-5xl md:text-7xl gap-20 md:gap-5 font-bebas text-white">
              <h1>explore various domains</h1>
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
              <FaDatabase className="text-gray-500 w-full h-full " />
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
      <TypingAnimation   className="text-md md:text-xl text-center font-jetbrains text-brand mb-20 xl:mb-0">we know you already got so many</TypingAnimation >
      <div className="mt-0 md:mt-20  w-full flex xl:flex-row xl:gap-0 gap-10 flex-col justify-between">
        <MagicCard className="ps">
          <h1 className="text-brand font-bebas text-2xl">Mobile Development</h1>
          <p className="text-white text-sm mt-4 text-center font-jetbrains">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatem molestias similique, possimus tenetur dolores nesciunt dolorem earum rem sequi, corrupti itaque libero eum omnis! Explicabo dolorum laborum dolor eius, est reiciendis ipsum similique laudantium quia illo temporibus magnam sit expedita unde, odit dignissimos?</p>
        </MagicCard>
        <MagicCard className="ps">
          <h1 className="text-brand font-bebas text-2xl">Mobile Development</h1>
          <p className="text-white text-sm mt-4 text-center font-jetbrains">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatem molestias similique, possimus tenetur dolores nesciunt dolorem earum rem sequi, corrupti itaque libero eum omnis! Explicabo dolorum laborum dolor eius, est reiciendis ipsum similique laudantium quia illo temporibus magnam sit expedita unde, odit dignissimos?</p>
        </MagicCard>
        <MagicCard className="ps">
          <h1 className="text-brand font-bebas text-2xl">Mobile Development</h1>
          <p className="text-white text-sm mt-4 text-center font-jetbrains">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatem molestias similique, possimus tenetur dolores nesciunt dolorem earum rem sequi, corrupti itaque libero eum omnis! Explicabo dolorum laborum dolor eius, est reiciendis ipsum similique laudantium quia illo temporibus magnam sit expedita unde, odit dignissimos?</p>
        </MagicCard>
        <MagicCard className="ps">
          <h1 className="text-brand font-bebas text-2xl">Mobile Development</h1>
          <p className="text-white text-sm mt-4 text-center font-jetbrains">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatem molestias similique, possimus tenetur dolores nesciunt dolorem earum rem sequi, corrupti itaque libero eum omnis! Explicabo dolorum laborum dolor eius, est reiciendis ipsum similique laudantium quia illo temporibus magnam sit expedita unde, odit dignissimos?</p>
        </MagicCard>

      </div>
      </div>
    </div></>
  );
};

export default About;
