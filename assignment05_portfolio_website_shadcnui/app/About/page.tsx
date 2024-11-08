import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import aboutImage from '../../public/Aboutdesign2.png'
import { IoIosMore } from "react-icons/io";
import Navbar from '../Navbar/page';
import Footer from '../Footer/page';



export default function About() {
  return (
    <>
    <Navbar/>
        <section id='about'>  
    
            <div className="flex sm:p-[100px] p-[30px] max-w-full h-auto justify-center items-center lg:flex-row flex-col-reverse lg:gap-[40px] gap-[50px] lg:text-ellipsis relative z-50">
                {/* Blur Circle Background */}
                <span className='absolute lg:w-[600px] lg:h-[600px] md:w-[380px] md:h-[380px] w-[220px] h-[350px] bg-[#4ee247] top-[30%] right-[0%] rounded-full blur-[50px] opacity-100 z-[-10]'></span>
                <div className='flex basis-[50%] w-full justify-center items-center mx-auto '>
                    {/* Left Section Image */}
                    <Image src={aboutImage} alt='About-Image' className='min-w-[450px] '/>
                </div>
                    {/* Right Section Image */}
                <div className='basis-[50%] justify-center items-center'>
                    <h1 className='text-black text-[60px] font-extrabold font-[montserrat]'>About <span className='text-[#4ee247]'>Me</span></h1>
                    <h4 className='text-black text-[28px] font-semibold font-[montserrat] pb-10'>Digital Marketer | Frontend Developer | UI UX Designer</h4>
                    <p className='text-black text-left font-medium font-[montserrat] lg:text-[25px] md:text[20px] sm:text[15px] pb-10'>With a degree in Textile Engineering, MBA in Marketing, and certification in Digital Marketing, I create impactful online strategies that drive growth. Now diving into Cloud Applied Generative Engineering, I&apos;m blending marketing expertise with tech innovation to deliver results. Let&apos;s work together to elevate your brand and accelerate your business success.</p>
                    <div className='flex justify-center lg:justify-normal'>
                        {/* Button */}
                        <Button className="bg-black text-white hover:text-black hoverMenu font-bold rounded-[10px]"><IoIosMore /><a href="./OsamabinAdnanCV.pdf" target='_blank'>Contact</a>
                        </Button>
                    </div>
                    
                </div>
            </div>
            
        </section>
    <Footer/>
    </>
  )
}

