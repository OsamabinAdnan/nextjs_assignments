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
    <div className='max-w-full w-full bg-[#100425] flex flex-col justify-center items-center mt-[150px] sm:mt-[180px] md:mt-[200px] gap-8 sm:gap-10 md:gap-12 p-4 sm:p-6 md:p-8 lg:p-[80px]'>

        {/* Footer top menu */}
        <div className='w-full'>
            <ul className='text-white flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[100px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px]'>
                <li className='hover:text-[#dc00d3] transition-colors'><Link href={'#'}>Help</Link></li>
                <li className='hover:text-[#dc00d3] transition-colors'><Link href={'#'}>About us</Link></li>
                <li className='hover:text-[#dc00d3] transition-colors'><Link href={'#'}>Company</Link></li>
                <li className='hover:text-[#dc00d3] transition-colors'><Link href={'#'}>Services</Link></li>
                <li className='hover:text-[#dc00d3] transition-colors'><Link href={'#'}>Contact</Link></li>
            </ul>
        </div>

        {/* Heading, para and app links */}
        <div className='flex flex-col justify-center items-center w-full max-w-[320px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[800px] px-4'>
            <h1 className='text-white text-[24px] sm:text-[28px] md:text-[32px] font-bold text-center'>Download our App</h1>
            <p className='text-white text-center text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium my-6 sm:my-8 md:my-10 lg:my-[50px] leading-relaxed'>Stay connected on the go! Download our app now to enjoy a seamless, personalized experience and keep up with the latest in real-time.</p>
            <div className='flex justify-center items-center flex-col sm:flex-row gap-3 sm:gap-4'>
            <Link href={'https://play.google.com/store/games?hl=en'} target='_blank'><Image src={pic1} alt='Google Play Store' className='w-[200px] sm:w-[220px] md:w-[250px] h-auto hover:scale-[1.10] lg:hover:scale-[1.15] transform transition-transform duration-300'></Image></Link>
            <Link href={'https://www.apple.com/app-store/'} target='_blank'><Image src={pic2} alt='Apple App Store' className='w-[180px] sm:w-[200px] md:w-[230px] h-auto rounded-sm hover:scale-[1.10] lg:hover:scale-[1.15] transform transition-transform duration-300'></Image></Link>
            </div>
        </div>

        {/* Divider line */}
        <div className='w-full flex justify-center'>
            <div className='w-[280px] sm:w-[400px] md:w-[600px] lg:w-[950px] h-[2px] sm:h-[3px] bg-gradient-to-r from-[#0CFAF5] to-[#dc00d3]'></div>
        </div>

        <div className='flex justify-center items-center flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-10 w-full'>
            {/* Footer bottom menu */}
            <div className='order-2 lg:order-1'>
                <ul className='text-white flex flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 text-[12px] sm:text-[14px] md:text-[16px]'>
                    <li className='hover:text-[#dc00d3] transition-colors'><Link href={'#'}>Terms</Link></li>
                    <li className='hover:text-[#dc00d3] transition-colors'><Link href={'#'}>Privacy</Link></li>
                    <li className='hover:text-[#dc00d3] transition-colors'><Link href={'#'}>Conditions</Link></li>
                </ul>
            </div>

            {/* Copyright line */}
            <div className='text-white font-extralight text-center order-1 lg:order-2'>
                <p className='text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]'>&copy; 2026 VR ZONE Ltd. All Rights Reserved</p>
            </div>

            {/* Social Media links */}
            <div className='flex justify-center items-center gap-3 sm:gap-4 order-3'>
                <Link href={'https://github.com/OsamabinAdnan'} target='_blank'><FaGithub className='text-white w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px] hover:text-[#dc00d3] transition-colors'/></Link>
                <Link href={'https://www.linkedin.com/in/osama-bin-adnan/'} target='_blank'><FaLinkedinIn className='text-white w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px] hover:text-[#dc00d3] transition-colors'/></Link>
                <Link href={'https://github.com/OsamabinAdnan'} target='_blank'><FaFacebookF className='text-white w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px] hover:text-[#dc00d3] transition-colors'/></Link>
                <Link href={'https://github.com/OsamabinAdnan'} target='_blank'><FaInstagram className='text-white w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px] hover:text-[#dc00d3] transition-colors'/></Link>
            </div>

        </div>
    </div>
  )
}
