import React from 'react'
import Image from 'next/image'
import pic1 from '../../../Images for Assignment 7/frame3_1.jpg'
import pic2 from '../../../Images for Assignment 7/frame3_2(2).jpg.png'
import pic3 from '../../../Images for Assignment 7/frame3_3(2).jpg.png'
import { Button } from '@/components/ui/button'
import { FaRegPlayCircle } from "react-icons/fa";

export default function Frame3() {
  return (
    <div className='max-w-[100%] sm:w-screen max-h-[100%] h-full bg-[#100425] w-[1980px] flex flex-col lg:flex-row justify-center items-center mt-[400px] gap-16 p-[80px]'>

        {/* Images */}
        <div className='basis-[40%] flex gap-3 justify-end items-center '>
            <div className=' hover:scale-[1.10] transform transition-transform duration-300'>
                <Image src={pic1} alt='pic1' className='rounded-tr-[90px] w-[310px] h-[400px]'></Image>
            </div>
            <div>
                <div className='  mb-10 relative hover:scale-[1.10] transform transition-transform duration-300 '>
                    <Image src={pic2} alt='pic2' className='rounded-tr-[90px] w-[220px] h-[240px]'></Image>
                </div>
                <div className=' mt-4 relative hover:scale-[1.10] transform transition-transform duration-300'>
                    <Image src={pic3} alt='pic3' className='rounded-tl-[90px] w-[220px] h-[240px]'></Image>
                </div>
            </div>
        </div>

        {/* Text and Button */}
        <div className='basis-[40%] items-start'>
            <h1 className='  text-[75px] block font-josefin-sans text-white font-bold text-left leading-[80px]'><span className='bg-gradient-to-r from-[#0CFAF5]   via-[#dc00d3] to-[#dc00d3] text-transparent bg-clip-text'>Explore in the metaverse one</span> pixel at a time</h1>
            <p className='text-white font-light mt-10'>Step into a world where each pixel brings the virtual closer to reality. Explore the metaverse like never before, one immersive detail at a time, and unlock endless possibilities in VR.</p>
            <div className='flex gap-5'>
            <Button className=' mt-10 bg-gradient-to-r from-[#0CFAF5] via-[#dc00d3] to-[#dc00d3]  rounded-3xl shadow-md  hover:shadow-lightShadow  '>Play Now!</Button>
            <FaRegPlayCircle  className='text-white mt-10 text-[60px] hover:text-[#0cfaf5]'/>
            </div>
        </div>
    </div>
  )
}
