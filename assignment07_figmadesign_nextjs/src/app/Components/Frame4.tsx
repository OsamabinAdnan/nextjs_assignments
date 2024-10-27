import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import pic1 from '../../../Images for Assignment 7/Frame4.png'

export default function Frame4() {
  return (
    <div className='max-w-[100%] sm:w-screen max-h-[100%] h-full bg-[#100425] w-[1980px] flex flex-col lg:flex-row justify-center items-center mt-[400px] gap-12 p-[80px]'>
        
        {/* Text and Button */}
        <div className='basis-[40%] items-start'>
            <h1 className='  text-[80px] block font-josefin-sans text-white font-bold text-left leading-[80px]'><span className='bg-gradient-to-r from-[#0CFAF5]   via-[#dc00d3] to-[#dc00d3] text-transparent bg-clip-text'>Touch the</span> Reality</h1>
            <p className='text-white font-light mt-10'>Experience the sensation of true presence with VR—where virtual worlds feel as real as your own. Reach out and interact, bridging the gap between imagination and reality with every touch.</p>
            <Button className=' mt-10 bg-gradient-to-r from-[#0CFAF5] via-[#dc00d3] to-[#dc00d3]  rounded-3xl shadow-md  hover:shadow-lightShadow  '>Play Now!</Button>
        </div>

        {/* Image */}
        <div className='flex relative  w-[600px] h-[500px] justify-center items-center hover:scale-[1.25] transform transition-transform duration-300'>
                <div className='w-[420px] h-[400px] bg-gradient-to-b from-[#0CFAF5] via-[#dc00d3] to-[#dc00d3] rounded-tl-[150px] relative justify-center items-center top-0'></div>
                <Image src={pic1} alt='pic1' className='justify-center items-center w-[590px] h-[450px] absolute top-0 '></Image>
        </div>
    </div>
  )
}
