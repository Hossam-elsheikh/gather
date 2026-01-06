import Image from 'next/image'
import React from 'react'
import HeroImage from '@/public/hero/heroimg.svg'
const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-2 items-center mt-10 md:mt-20'>
      <div>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>Connect. Communicate. Collaborate.</h1>
        <p className='text-lg md:text-xl mb-6'>Experience seamless communication with Gather - the ultimate platform for all your messaging needs.</p>
        <button className='bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition'>Get Started</button>
      </div>
      <Image src={HeroImage} alt="Hero Image"/>
    </div>
  )
}

export default HeroSection