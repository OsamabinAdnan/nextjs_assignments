import React from 'react'
import Image from 'next/image'
import aboutImage from '../../images/osama about.png';
import { Button } from '@/components/ui/button';
import { IoIosMore } from "react-icons/io";


export default function About() {
  return (
    <>
    <section id='about'>
        <div className="flex sm:p-[100px] p-[30px] bg-[#323846] max-w-full h-auto justify-center items-center lg:flex-row flex-col-reverse lg:gap-[40px] gap-[50px] lg:text-ellipsis">
            <div className=' basis-[50%] w-full'>
                {/* Left Section Image */}
                <Image src={aboutImage} alt='About-Image' className='min-w-[450px] '/>
            </div>
        
            <div className='basis-[50%]'>
                <h1 className='text-white text-[48px] font-extrabold font-inter'>About <span className='text-[#01eeff]'>Me</span></h1>
                <h4 className='text-white text-[28px] font-semibold font-inter pb-10'>Digital Marketer | Frontend Developer | UI UX Designer</h4>
                <p className='text-white text-left font-light font-inter lg:text-[25px] md:text[20px] sm:text[15px] pb-10'>With a degree in Textile Engineering, an MBA in Marketing, and certification in Digital Marketing, I create impactful online strategies that drive growth. Now diving into Cloud Applied Generative Engineering, I&apos;m blending marketing expertise with tech innovation to deliver results. Let&apos;s work together to elevate your brand and accelerate your business success.</p>
                <div className='flex justify-center lg:justify-normal'>
                    {/* Button */}
                    <Button className="bg-[#01eeff] drop-shadow-light hover:drop-shadow-heavy hover:bg-[#01eeff] hover:text-[#151925] font-inter font-bold rounded-[20px] "><IoIosMore /><a href="./OsamabinAdnanCV.pdf" target='_blank'>See More </a>
                    </Button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
