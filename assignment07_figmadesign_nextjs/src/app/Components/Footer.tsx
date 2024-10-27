import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import pic1 from '../../../Images for Assignment 7/Google.png'
import pic2 from '../../../Images for Assignment 7/Apple.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='max-w-[100%] sm:w-screen max-h-[100%] h-full bg-[#100425] w-screen flex flex-col  justify-center items-center mt-[200px] gap-12 p-[80px]'>
        
        {/* Footer top menu */}
        <div className=''>
            <ul className='text-white flex justify-between items-center lg:gap-[100px] md:gap-8 sm:gap-8 gap-[20px] lg:text-[24px] md:text-[21px] sm:text-[16px] text-[16px]'>
                <li className='hover:text-[#dc00d3]'><Link href={'#'}>Help</Link></li>
                <li className='hover:text-[#dc00d3]'><Link href={'#'}>About us</Link></li>
                <li className='hover:text-[#dc00d3]'><Link href={'#'}>Company</Link></li>
                <li className='hover:text-[#dc00d3]'><Link href={'#'}>Services</Link></li>
                <li className='hover:text-[#dc00d3]'><Link href={'#'}>Contact</Link></li>
            </ul>
        </div>

        {/* Heading, para and app links */}
        <div className='flex flex-col justify-center items-center lg:w-[800px] md:w-[600px] w-[480px]'>
            <h1 className='text-white text-[32px] font-bold'>Download our App</h1>
            <p className='text-white text-center text-[22px] font-medium my-[50px]'>Stay connected on the go! Download our app now to enjoy a seamless, personalized experience and keep up with the latest in real-time.</p>
            <div className='flex justify-center items-center sm:flex-row flex-col gap-3'>
            <Link href={'https://play.google.com/store/games?hl=en'} target='blank'><Image src={pic1} alt='pic1' className='w-[250px] h-[80px] hover:scale-[1.15] transform transition-transform duration-300'></Image></Link>
            <Link href={'https://www.apple.com/app-store/'} target='blank'><Image src={pic2} alt='pic2' className='w-[230px] h-[62px] rounded-sm hover:scale-[1.15] transform transition-transform duration-300'></Image></Link>
            </div>
        </div>

        {/* Divider line */}
        <div >
            <div className='lg:w-[950px] h-[3px] bg-gradient-to-r from-[#0CFAF5] to-[#dc00d3] '></div>
        </div>

        <div className='flex justify-center items-center lg:flex-row flex-col lg:gap-10 md:gap-8 sm:gap-[25px] gap-[25px]'>
            {/* Footer bottom menu */}
            <div >
                <ul className='text-white flex flex-row justify-start items-start gap-2.5'>
                    <li className='hover:text-[#dc00d3]'><Link href={'#'}>Terms</Link></li>
                    <li className='hover:text-[#dc00d3]'><Link href={'#'}>Privacy</Link></li>
                    <li className='hover:text-[#dc00d3]'><Link href={'#'}>Conditions</Link></li>
                </ul>
            </div>

            {/* Copyright line */}
            <div className='text-white font-extralight justify-center items-center'>
                <p className=' lg:text-[16px] text-[12px]'>&copy; 2024 VR ZONE Ltd. All Rights Reserved</p>
            </div>

            {/* Social Media links */}
            <div className='flex justify-end items-end gap-4'>
                <Link href={'https://github.com/OsamabinAdnan'} target='_blank'><FaGithub className='text-white w-[30px] h-[30px] hover:text-[#dc00d3]'/></Link>
                <Link href={'https://www.linkedin.com/in/osama-bin-adnan/'} target='_blank'><FaLinkedinIn className='text-white w-[30px] h-[30px] hover:text-[#dc00d3]'/></Link>
                <Link href={'https://github.com/OsamabinAdnan'} target='_blank'><FaFacebookF className='text-white w-[30px] h-[30px] hover:text-[#dc00d3]'/></Link>
                <Link href={'https://github.com/OsamabinAdnan'} target='_blank'><FaInstagram className='text-white w-[30px] h-[30px] hover:text-[#dc00d3]'/></Link>
            </div>

        </div>
    </div>
  )
}
