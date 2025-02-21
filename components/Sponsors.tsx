import React from 'react'
import { BoxReveal } from './magicui/box-reveal'
import { Marquee } from './magicui/marquee'

const Sponsors = () => {
  return (

    <div id='sponsors' className='mt-20 w-full px-10 sm:px-0 sm:min-h-screen flex flex-col items-center'>
      <BoxReveal ><h1 className='font-bebas text-5xl sm:text-7xl text-white mb-5'>our sponsors</h1></BoxReveal>
      <BoxReveal ><h1 className='text-brand text-md  text-center sm:text-2xl'>A heartfelt thank you to all our sponsors for fueling the drive behind Dev Hacks Hackathon!
      </h1></BoxReveal>
      <div className='mt-20  gap-10 hidden md:flex flex-col items-center justify-center'>
       <div className='flex  gap-10'>
       <div className='sponsors'></div>
       <div className='sponsors'></div> 
        <div className='sponsors'></div>
       </div>
       <div className='flex gap-10'>
        <div className='sponsors'></div>
        <div className='sponsors'></div>
       </div>
      </div>
      <div className='mt-10 w-full  mb-10 gap-10 flex md:hidden items-center justify-center'>
        <Marquee pauseOnHover>
          <div className='sponsors'></div>
          <div className='sponsors'></div>
          <div className='sponsors'></div>
        </Marquee>
      </div>
    </div>

  )
}

export default Sponsors
