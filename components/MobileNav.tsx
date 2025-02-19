import { BarChart } from 'lucide-react'
import React from 'react'

const MobileNav = () => {
  return (
    <div className='w-full sm:hidden h-[60px] bg-white text-black items-center flex px-5 justify-between'>
     <h1 className='font-bebas text-2xl'>DEVHACKS</h1>
     <BarChart className='rotate-90 hover:cursor-pointer'/>
    </div>
  )
}

export default MobileNav
