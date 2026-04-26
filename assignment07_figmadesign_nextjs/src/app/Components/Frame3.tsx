import React from 'react'
import Image from 'next/image'
import pic1 from '../../../Images for Assignment 7/frame3_1.jpg'
import pic2 from '../../../Images for Assignment 7/frame3_2(2).jpg.png'
import pic3 from '../../../Images for Assignment 7/frame3_3(2).jpg.png'
import { Button } from '@/components/ui/button'
import { FaRegPlayCircle } from "react-icons/fa";

export default function Frame3() {
  return (
    <div className='max-w-full w-full bg-[#100425] flex flex-col lg:flex-row justify-center items-center mt-[200px] sm:mt-[300px] md:mt-[350px] lg:mt-[400px] gap-8 sm:gap-12 md:gap-16 p-4 sm:p-8 md:p-12 lg:p-[80px]'>

        {/* Images */}
        <div className='w-full lg:basis-[45%] flex gap-2 sm:gap-3 justify-center lg:justify-end items-center'>
            <div className='hover:scale-[1.05] lg:hover:scale-[1.10] transform transition-transform duration-300'>
                <Image src={pic1} alt='pic1' className='rounded-tr-[40px] sm:rounded-tr-[60px] md:rounded-tr-[90px] w-[180px] sm:w-[240px] md:w-[280px] lg:w-[310px] h-auto aspect-[310/400] object-cover'></Image>
            </div>
            <div className='flex flex-col gap-2 sm:gap-4'>
                <div className='hover:scale-[1.05] lg:hover:scale-[1.10] transform transition-transform duration-300'>
                    <Image src={pic2} alt='pic2' className='rounded-tr-[40px] sm:rounded-tr-[60px] md:rounded-tr-[90px] w-[120px] sm:w-[160px] md:w-[190px] lg:w-[220px] h-auto aspect-[220/240] object-cover'></Image>
                </div>
                <div className='hover:scale-[1.05] lg:hover:scale-[1.10] transform transition-transform duration-300'>
                    <Image src={pic3} alt='pic3' className='rounded-tl-[40px] sm:rounded-tl-[60px] md:rounded-tl-[90px] w-[120px] sm:w-[160px] md:w-[190px] lg:w-[220px] h-auto aspect-[220/240] object-cover'></Image>
                </div>
            </div>
        </div>

        {/* Text and Button */}
        <div className='w-full lg:basis-[45%] text-center lg:text-left px-4 sm:px-0'>
            <h1 className='text-[32px] sm:text-[45px] md:text-[60px] lg:text-[75px] block font-josefin-sans text-white font-bold leading-tight'><span className='bg-gradient-to-r from-[#0CFAF5] via-[#dc00d3] to-[#dc00d3] text-transparent bg-clip-text'>Explore in the metaverse one</span> pixel at a time</h1>
            <p className='text-white font-light mt-6 sm:mt-8 lg:mt-10 text-sm sm:text-base md:text-lg'>Step into a world where each pixel brings the virtual closer to reality. Explore the metaverse like never before, one immersive detail at a time, and unlock endless possibilities in VR.</p>
            <div className='flex gap-4 sm:gap-5 justify-center lg:justify-start items-center'>
            <Button className='mt-6 sm:mt-8 lg:mt-10 bg-gradient-to-r from-[#0CFAF5] via-[#dc00d3] to-[#dc00d3] rounded-3xl shadow-md hover:shadow-lightShadow transition-shadow px-6 py-2 sm:px-8 sm:py-3'>Play Now!</Button>
            <FaRegPlayCircle className='text-white mt-6 sm:mt-8 lg:mt-10 text-[40px] sm:text-[50px] md:text-[60px] hover:text-[#0cfaf5] transition-colors cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}
