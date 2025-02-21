import Image from 'next/image'
import React from 'react'
import { BoxReveal } from './magicui/box-reveal'
import { TypingAnimation } from './magicui/typing-animation'

const Footer = () => {
  return (
  <div className='w-full mt-10 z-10 flex items-center flex-col mb-20 xl:mb-32'>
<BoxReveal>
<h1 className='font-bebas text-5xl mb-5 text-white xl:text-7xl'>About EDS</h1>
</BoxReveal> <TypingAnimation className='font-jetbrains text-brand text-sm xl:text-xl mb-20 '>the masterminds behind devhacks</TypingAnimation>
 <div className='flex flex-row items-center justify-between xl:mx-20'>
 <div className='font-jetbrains text-white text-md w-full xl:w-[60%] px-10 text-center'>
 Echelon Dev Society isn’t just a club, it’s a movement. Built on collaboration, curiosity, and a passion for tech, EDS is your launchpad, your north star in this ever-evolving world of code and creativity. Whether you&apos;re a newbie still Googling &quot;how to center a div&quot; or a pro crafting the next big AI breakthrough, were here to grow with you. Through hackathons, collabs, and sheer community spirit, we make sure no coder walks alone. So, if you’re ready to build, learn, and vibe with the best, welcome to EDS. This is just the beginning. 🚀
 </div>
<div className='w-[50%] hidden xl:flex items-center justify-center'>
<Image src="/logo.png" height={1000} alt="dev" width={1000} className='w-[60%] h-[60%]'/>
</div> </div>
  </div>
  )
}

export default Footer
