"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import profileImage from "../../images/osama-blue-2.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { MdDownload } from "react-icons/md";

export default function HeroSection() {
  const [text] = useTypewriter({
    words: [
      " Frontend Developer!",
      " UI UX Designer!",
      " Digital Marketer!",
      " WordPress Developer!",
    ],
    loop: 10,
    onLoopDone: () => console.log(`loop completed after 5000 runs.`),
  });

  return (
    <>
      <div className="flex sm:p-[100px] p-[30px] bg-[#191b22] max-w-full h-auto  justify-center items-center lg:flex-row flex-col lg:gap-[40px] gap-[50px] lg:text-ellipsis">
            {/* Left Section */}
            <div className="flex flex-col basis-[50%] w-full">
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-2xl text:2xl font-Inter font-semibold py-2">Hello, it's Me</h3>
                <h1 className="text-white lg:text-6xl md:text-4xl sm:text-4xl text:3xl font-inter font-bold pb-2">Osama bin Adnan</h1>
                <span className="text-white lg:text-3xl md:text-2xl sm:text-2xl text:2xl font-Inter font-semibold pb-5">And I'm a 
                <span className="gap-1 text-[#01eeff] font-bold drop-shadow-light sm:text-2xl md:text-2xl lg:text-3xl ">{text}<Cursor/></span>
                </span>
               
                <p className="text-white text-left font-light font-inter lg:text-[25px] md:text[20px] sm:text[15px]"> I'm a passionate Frontend Developer, UI/UX Designer, and Digital Marketer with a keen eye for detail and user-centric design. I
                    specialize in creating visually appealing, responsive web interfaces
                    while ensuring seamless user experiences and driving engagement
                    through targeted digital marketing strategies.
                </p>
                <div className="flex gap-8 py-10 justify-center lg:justify-start">
                    <Link href="https://github.com/OsamabinAdnan" target="_blank" className="text-[#01eeff] hover:drop-shadow-heavy"><FaGithub size={40} /></Link>
                    <Link href="https://www.linkedin.com/in/osama-bin-adnan/" target="_blank" className="text-[#01eeff] hover:drop-shadow-heavy"><FaLinkedin size={40} /></Link>
                    <Link href="https://www.facebook.com/usama.adnan.733/" target="_blank" className="text-[#01eeff] hover:drop-shadow-heavy"><IoLogoFacebook size={40} /></Link>
                    <Link
                    href="https://www.instagram.com/osamabinadnan/?hl=en" target="_blank" className="text-[#01eeff] hover:drop-shadow-heavy"><AiFillInstagram size={40} /></Link>
                </div>
                <div className="flex justify-center lg:justify-start">
                    {/* Button */}
                    <Button className="bg-[#01eeff]  drop-shadow-light hover:drop-shadow-heavy hover:bg-[#01eeff] hover:text-[#151925] font-inter font-bold rounded-[20px]">
                        <MdDownload /><a href="./OsamabinAdnanCV.pdf" target="_blank" rel="noopener noreferrer"> Download CV </a>
                    </Button>
                </div>
            </div>
            
            {/* Right Section */}
            <div>
            <div className="mx-auto items-center">
          <Image
            src={profileImage}
            alt="profile-image"
            className="min-w-[450px] items-center relative"
          />
        </div>

            </div>
      </div>
    </>
  );
}
