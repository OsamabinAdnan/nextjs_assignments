'use client'
import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from 'next/image';
import heroPicture from '../../public/osamacanva.png'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { MdDownload } from "react-icons/md";





export default function Hero() {
    const [text] = useTypewriter({
        words: [
          " Frontend Developer!",
          " UI UX Designer!",
          " Digital Marketer!",
          " WordPress Developer!",
        ],
        loop: 100,
        onLoopDone: () => console.log(`loop completed after 5000 runs.`),
      });
  return (
    <>
    <div className='flex sm:p-[100px] p-[30px] max-w-full h-auto  justify-center items-center lg:flex-row flex-col lg:gap-[40px] gap-[50px] lg:text-ellipsis'>
        <div className=' flex lg:flex-row flex-col lg:px-[120px] px-[50px] gap-[2rem] justify-center items-center mt-[80px] mb-[80px]'>
            {/* Blur effect backside */}
            <span>
                <span className='absolute lg:w-[600px] lg:h-[600px] md:w-[380px] md:h-[380px] w-[220px] h-[350px] bg-[#4ee247] top-[-20%] left-[-10%] rounded-full blur-[50px] opacity-100 -z-10'></span>
            </span>
            {/* Left working */}
            <div className='flex flex-col basis-[60%] w-full'>
                <div className='py-[10px]'>
                    <h1 className='text-black lg:text-[60px] md:text-[40px] text-[35px] font-bold'>👋Hi!</h1>
                    <h1><span className='text-black lg:text-[60px] md:text-[40px] text-[35px]'>This is</span><span className='text-black lg:text-[60px] md:text-[40px] text-[35px] font-bold'> Osama bin Adnan</span></h1>
                    <span className='text-black lg:text-[60px] md:text-[40px] text-[35px]'>I&apos;m</span><span className='text-[#4ee247] lg:text-[55px] md:text-[40px] text-[32px] font-bold'>{text}<Cursor/></span>
                    <p className="text-black text-left font-medium lg:text-[25px] md:text[20px] sm:text[15px] "> I&apos;m a passionate Frontend Developer, UI/UX Designer, and Digital Marketer with a keen eye for detail and user-centric design. I specialize in creating visually appealing, responsive web interfaces while ensuring seamless user experiences and driving engagement through targeted digital marketing strategies.
                    </p>
                    <div className="flex gap-8 py-8 justify-center lg:justify-start">
                        <Link href="https://github.com/OsamabinAdnan" target="_blank" className="text-black hover:text-[#4ee247]"><FaGithub size={40} /></Link>
                        <Link href="https://www.linkedin.com/in/osama-bin-adnan/" target="_blank" className="text-black hover:text-[#4ee247]"><FaLinkedin size={40} /></Link>
                        <Link href="https://www.facebook.com/usama.adnan.733/" target="_blank" className="text-black hover:text-[#4ee247]"><IoLogoFacebook size={40} /></Link>
                        <Link
                        href="https://www.instagram.com/osamabinadnan/?hl=en" target="_blank" className="text-black hover:text-[#4ee247]"><AiFillInstagram size={40} /></Link>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        {/* Button */}
                        <Button className="bg-black text-white hover:text-[#151925] hoverMenu font-bold rounded-[10px]">
                            <MdDownload /><a href="OsamabinAdnanCV.pdf" target="_blank" rel="noopener noreferrer"> Download CV </a>
                        </Button>
                    </div>
                </div>
            </div>
            {/* Right side working */}
            <div className=''>
                <div className="flex mx-auto h-screen justify-center items-center  basis-[40%]">
                    <Image src={heroPicture} alt='hero-sectionPicture' className='md:h-[600px] md:w-[620px]'></Image>
                </div>
            </div>
        </div>
        
    </div>
    </>
  )
}
