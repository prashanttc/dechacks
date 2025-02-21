import { Loader } from 'lucide-react'
import React from 'react'

const LoaderP = () => {
  return (
    <div className='w-full flex items-center justify-center h-screen bg-black text-white'>
      <Loader className='animate-spin'/>
      <h1>loading</h1>
    </div>
  )
}

export default LoaderP
