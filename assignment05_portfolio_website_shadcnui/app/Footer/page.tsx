import React from 'react'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


export default function Footer() {
  return (
    <>
        <div className='max-w-[100%] sm:w-screen max-h-[100%] h-full bg-white w-screen flex flex-col justify-center items-center mt-[100px] gap-12 p-[0px] bgImage'>
            
            {/* Divider line */}
            <div >
                <div className='lg:w-[950px] h-[3px] bg-gradient-to-r from-[#4ee247] to-[#000000] '>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col lg:gap-10 md:gap-8 sm:gap-[25px] gap-[25px]'>
                
                

                {/* Social Media links */}
                <div className='flex justify-end items-end gap-4'>
                    <Link href={'https://github.com/OsamabinAdnan'} target='_blank'><FaGithub className='text-black w-[30px] h-[30px] hover:text-[#4ee247] hover:scale-150 transition-all duration-300'/></Link>
                    <Link href={'https://www.linkedin.com/in/osama-bin-adnan/'} target='_blank'><FaLinkedinIn className='text-black w-[30px] h-[30px] hover:text-[#4ee247] hover:scale-150 transition-all duration-300'/></Link>
                    <Link href={'https://github.com/OsamabinAdnan'} target='_blank'><FaFacebookF className='text-black w-[30px] h-[30px] hover:text-[#4ee247] hover:scale-150 transition-all duration-300'/></Link>
                    <Link href={'https://github.com/OsamabinAdnan'} target='_blank'><FaInstagram className='text-black w-[30px] h-[30px] hover:text-[#4ee247] hover:scale-150 transition-all duration-300'/></Link>
                </div>

                {/* Copyright line */}
                <div className='text-black justify-center items-center'>
                    <p className=' text-[25px] font-semibold'>&copy; 2024 Osama bin Adnan. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </>
  )
}