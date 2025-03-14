import React from 'react'
import { BoxReveal } from './magicui/box-reveal'
import { Marquee } from './magicui/marquee'
import Image from 'next/image'

const Sponsors = () => {
  return (

    <div id='sponsors' className='mt-20 w-full px-10 sm:px-0 sm:min-h-screen flex flex-col items-center'>
      <BoxReveal ><h1 className='font-bebas text-5xl sm:text-7xl text-white mb-5'>our sponsors</h1></BoxReveal>
      <BoxReveal ><h1 className='text-brand text-md  text-center sm:text-2xl'>A heartfelt thank you to all our sponsors for fueling the drive behind Dev Hacks Hackathon!
      </h1></BoxReveal>
      <div className='mt-20  gap-10 hidden md:flex flex-col items-center justify-center'>
       <div className='flex  gap-10'>
       <div className='sponsors'>
        <Image height={1000} width={1000} alt='logo' src='/sponsors.png' className=' w-full h-full object-contain '/>
       </div>
       <div className='sponsors'>
        <Image height={1000} width={1000} alt='logo' src='/sponsor-2.png' className=' w-full h-full object-cover '/>
       </div>
       {/* <div className='sponsors'>
        <Image height={1000} width={1000} alt='logo' src='/sponsors.png' className=' w-full h-full object-contain '/>
       </div> */}
       </div>
      </div>
      <div className='mt-10 w-full  mb-10 gap-10 flex md:hidden items-center justify-center'>
        <Marquee pauseOnHover>
        <div className='sponsors'>
        <Image height={1000} width={1000} alt='logo' src='/sponsors.png' className=' w-full h-full object-contain '/>
       </div>
       <div className='sponsors'>
        <Image height={1000} width={1000} alt='logo' src='/sponsors.png' className=' w-full h-full object-contain '/>
       </div>
        </Marquee>
      </div>
      <div className='mt-10 xl:mt-20 items-center justify-center flex flex-col  gap-10 xl:gap-20 w-full mb-20'>
        <h1 className='font-bebas text-3xl  text-center xl:text-5xl text-white'>in collabration with indore police cyber branch</h1>
         <div className='sponsors'><Image width={1000} height={1000} alt='police' src='/police.png' className='w-full h-full object-contain bg-white rounded-xl'/></div>
      </div>
    
    </div>

  )
}

export default Sponsors
