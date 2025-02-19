"use client";
import React, { useEffect, useState } from "react";
import { HyperText } from "./magicui/hyper-text";

const Countdown = () => {
  const targetDate = new Date("2025-03-04T23:59:59").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="z-10 relative">
      <div className="px-10 sm:px-0 mb-10 sm:mb-0  w-full text-white mt-10 sm:mt-0 sm:h-screen items-center justify-center flex flex-col gap-10">
        <HyperText className="font-bebas text-3xl md:text-7xl">
          COMING SOON
        </HyperText>
        <div className="flex gap-2 sm:gap-10 font-jetbrains text-3xl md:text-7xl">
            <div className="countdown-box">{timeLeft.days}    <span className="text-brand text-sm">days</span></div>
            <div className="countdown-box">{timeLeft.hours}   <span className="text-brand text-sm">hours</span> </div>
            <div className="countdown-box">{timeLeft.minutes} <span className="text-brand text-sm">minutes</span> </div>
  
                </div>
        <h1 className="text-white text-sm text-center md:text-xl mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, deserunt?
        </h1>
      </div>
    </div>
  );
};

export default Countdown;
