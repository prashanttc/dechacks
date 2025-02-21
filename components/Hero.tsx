"use client";
import React from "react";
import { TypingAnimation } from "./magicui/typing-animation";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/motion";
import { HyperText } from "./magicui/hyper-text";
import { RetroGrid } from "./magicui/retro-grid";

const Hero = () => {
  return (
    <div id="#" className="w-full relative sm:min-h-screen  flex flex-col items-center justify-center p-10 sm:p-0">
      <RetroGrid className="absolute inset-0 z-0"/>
      <div className="font-bebas  text-white flex flex-col gap-5 text-center items-center z-10">
        <h1 className="hidden sm:flex text-[12rem]">DEV <span className="text-brand">HACKS</span></h1>
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative h-[250px] flex sm:hidden items-center justify-center w-[300px] flex-col text-[6rem]"
        >
          <motion.h1
            variants={fadeIn("left", "tween", 0.1, 0.3)}
            className="absolute top-0 left-0 w-fit overflow-hidden"
          >
            dev
          </motion.h1>
          <div className="h-[200px] left-[35%] rotate-[30deg] absolute w-[5px] bg-brand" />
          <motion.h1
            variants={fadeIn("right", "tween", 0.1, 0.5)}
            className="absolute bottom-0 right-0"
          >
            hacks
          </motion.h1>
        </motion.div>
        <TypingAnimation className="text-3xl font-jetbrains sm:-mt-[60px]">
          hack your way to the future
        </TypingAnimation>
        <h1 className=" font-jetbrains text-white/60">
          A 8 hours long hackathon at citronics cdgi
        </h1>
        <HyperText className=" text-sm font-jetbrains text-white">
        by echelon dev society
        </HyperText>
        <Button className="mt-5 font-jetbrains w-fit p-10 py-[30px] hover:bg-brand  text-2xl bg-black border-[1px] border-brand">
          Register now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
