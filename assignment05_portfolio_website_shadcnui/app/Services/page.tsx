'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { HiPaintBrush } from "react-icons/hi2";
import { FaCode } from "react-icons/fa";
import { ImEarth } from "react-icons/im";
import { FaElementor } from "react-icons/fa6";
import { SiGoogleads } from "react-icons/si";
import { PiShoppingCartFill } from "react-icons/pi";
import Navbar from '../Navbar/page';
import Footer from '../Footer/page';



export default function Services() {
  return (
    <>
        <section id='services'>
            <Navbar/>    
                <div className=" sm:p-[70px] p-[30px] bg-white max-w-full h-auto mx-auto justify-center items-center lg:flex-row flex-col lg:gap-[40px] gap-[50px] lg:text-ellipsis relative z-50">

                    {/* Blur effect backside */}
                
                    <span className='absolute lg:w-[600px] lg:h-[600px] md:w-[380px] md:h-[380px] w-[220px] h-[220px] bg-[#4ee247] top-[50%] left-[0%] rounded-full blur-[50px] opacity-100 -z[-10]'></span>
                    
                    <h1 className='text-black text-[65px] font-extrabold font-[montserrat] text-center mb-20 mt-10px'>My<span className='text-[#4ee247]'> Services</span> </h1>
                    
                    <div className='flex lg:flex-row justify-center gap-4 flex-col flex-wrap items-center relative'>

                        {/* 1st box */}
                        <div className='flex flex-col border-black bg-white justify-center items-center px-8 py-10  border-solid w-[500px] h-[430] rounded-xl border-4 hover:border-4 hover:border-solid hover:border-[#4ee247] hover:transition hover:ease-out duration-500 hover:scale-105'>
                            <HiPaintBrush size={50} className='text-[#4ee247] '/>
                            <h1 className='text-black font-bold text-[35px] mt-1 mb-4 text-center'>UI UX Designer</h1>
                            <p className='text-black text-center mb-5 text-[25px]  font-medium'>Crafting seamless, user-centered designs that transform ideas into intuitive digital experiences. Let&apos;s design solutions that captivate and convert your audience</p>
                            <div >
                                <Button className="bg-black text-white hover:text-black hover:bg-[#4ee247] lg:w-[150px] lg:h-[40px] font-bold rounded-[10px] "><a href="#" target='_blank'>Read More </a>
                                </Button>
                            </div>
                        </div>

                        {/* 2nd box */}
                        <div className='flex flex-col border-black border-solid border-4  bg-white justify-center items-center  px-8 py-10   w-[500px] h-[430] rounded-xl hover:border-4 hover:border-solid hover:border-[#4ee247] hover:transition hover:ease-out duration-500 hover:scale-105'>
                            <FaCode size={50} className='text-[#4ee247]'/>
                            <h1 className='text-black font-bold text-[35px] mt-1 mb-4 text-center'>Web Development</h1>
                            <p className='text-black text-center mb-5 text-[25px]  font-medium'>Building fast, responsive websites tailored to your business needs. Get a sleek, functional site that stands out and delivers an exceptional user experience</p>
                            <div>
                                <Button className="bg-black text-white hover:text-black hover:bg-[#4ee247] lg:w-[150px] lg:h-[40px] font-bold rounded-[10px]"><a href="#" target='_blank'>Read More </a>
                                </Button>
                            </div>
                        </div>
                        {/* 3rd box */}
                        <div className='flex flex-col  bg-white justify-center items-center px-8 py-10 border-solid border-black w-[500px] h-[430] rounded-xl border-4 hover:border-4 hover:border-solid hover:border-[#4ee247] hover:transition hover:ease-out duration-500 hover:scale-105'>
                            <ImEarth size={50} className='text-[#4ee247]'/>
                            <h1 className='text-black font-bold text-[35px] mt-1 mb-4 text-center'>Digital Marketing</h1>
                            <p className='text-black text-center mb-5 text-[25px]  font-medium'>Elevating your brand with targeted digital strategies that drive traffic, boost engagement, and deliver measurable results. Let&apos;s grow your online presence together</p>
                            <div>
                                <Button className="bg-black text-white hover:text-black hover:bg-[#4ee247] lg:w-[150px] lg:h-[40px] font-bold rounded-[10px]"><a href="#" target='_blank'>Read More </a>
                                </Button>
                            </div>
                        </div>
                        {/* 4th box */}
                        <div className='flex flex-col bg-white justify-center items-center px-8 py-10 border-solid border-black w-[500px] h-[430] rounded-xl border-4 hover:border-4 hover:border-solid hover:border-[#4ee247] hover:transition hover:ease-out duration-500 hover:scale-105'>
                            <FaElementor  size={50} className='text-[#4ee247] '/>
                            <h1 className='text-black font-bold text-[35px] mt-1 mb-4 text-center'>Elementor</h1>
                            <p className='text-black text-center mb-5'>Bringing your vision to life with Elementor&apos;s powerful, intuitive tools. Get a pixel-perfect, mobile-responsive site tailored to your brand&apos;s style and functionality.</p>
                            <div >
                                <Button className="bg-black text-white hover:text-black hover:bg-[#4ee247] lg:w-[150px] lg:h-[40px] font-bold rounded-[10px] "><a href="#" target='_blank'>Read More </a>
                                </Button>
                            </div>
                        </div>
                        {/* 5th box */}
                        <div className='flex flex-col  bg-white justify-center items-center px-8 py-10 border-solid border-black w-[500px] h-[430] rounded-xl border-4  hover:border-4 hover:border-solid hover:border-[#4ee247] hover:transition hover:ease-out duration-500 hover:scale-105'>
                            <SiGoogleads size={50} className='text-[#4ee247]'/>
                            <h1 className='text-black font-bold text-[35px] mt-1 mb-4 text-center'>Google Ads</h1>
                            <p className='text-black text-center mb-5'>Grow your business with Google Ads tailored to your goals. From campaign setup to optimization, reach more customers and get impactful results.</p>
                            <div>
                                <Button className="bg-black text-white hover:text-black hover:bg-[#4ee247] lg:w-[150px] lg:h-[40px] font-bold rounded-[10px]"><a href="#" target='_blank'>Read More </a>
                                </Button>
                            </div>
                        </div>
                        {/* 6th box */}
                        <div className='flex flex-col  bg-white justify-center items-center px-8 py-10 border-solid border-black w-[500px] h-[430] rounded-xl border-4  hover:border-4 hover:border-solid hover:border-[#4ee247] hover:transition hover:ease-out duration-500 hover:scale-105'>
                            <PiShoppingCartFill  size={50} className='text-[#4ee247]'/>
                            <h1 className='text-black font-bold text-[35px] mt-1 mb-4 text-center'>eCommerce</h1>
                            <p className='text-black text-center mb-5'>Comprehensive eCommerce solutions to power your online business. From product pages to checkout, we build seamless shopping experiences.</p>
                            <div>
                                <Button className="bg-black text-white hover:text-black hover:bg-[#4ee247] lg:w-[150px] lg:h-[40px] font-bold rounded-[10px]"><a href="#" target='_blank'>Read More </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            <Footer/>
        </section>
    </>
  )
}


