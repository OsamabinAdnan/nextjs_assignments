import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import pic1 from '../../../Images for Assignment 7/Frame4.png'

export default function Frame4() {
  return (
    <div className='max-w-full w-full bg-[#100425] flex flex-col lg:flex-row justify-center items-center mt-[200px] sm:mt-[300px] md:mt-[350px] lg:mt-[400px] gap-8 sm:gap-10 md:gap-12 p-4 sm:p-8 md:p-12 lg:p-[80px]'>

        {/* Text and Button */}
        <div className='w-full lg:basis-[45%] text-center lg:text-left px-4 sm:px-0'>
            <h1 className='text-[36px] sm:text-[50px] md:text-[65px] lg:text-[80px] block font-josefin-sans text-white font-bold leading-tight'><span className='bg-gradient-to-r from-[#0CFAF5] via-[#dc00d3] to-[#dc00d3] text-transparent bg-clip-text'>Touch the</span> Reality</h1>
            <p className='text-white font-light mt-6 sm:mt-8 lg:mt-10 text-sm sm:text-base md:text-lg'>Experience the sensation of true presence with VR—where virtual worlds feel as real as your own. Reach out and interact, bridging the gap between imagination and reality with every touch.</p>
            <Button className='mt-6 sm:mt-8 lg:mt-10 bg-gradient-to-r from-[#0CFAF5] via-[#dc00d3] to-[#dc00d3] rounded-3xl shadow-md hover:shadow-lightShadow transition-shadow px-6 py-2 sm:px-8 sm:py-3'>Play Now!</Button>
        </div>

        {/* Image */}
        <div className='flex relative w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[600px] h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] justify-center items-center hover:scale-[1.10] lg:hover:scale-[1.25] transform transition-transform duration-300'>
                <div className='w-[70%] h-[80%] bg-gradient-to-b from-[#0CFAF5] via-[#dc00d3] to-[#dc00d3] rounded-tl-[60px] sm:rounded-tl-[100px] md:rounded-tl-[130px] lg:rounded-tl-[150px] relative'></div>
                <Image src={pic1} alt='pic1' className='absolute top-0 w-full h-auto object-contain'></Image>
        </div>
    </div>
  )
}
