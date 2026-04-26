import React from 'react'
import Image from 'next/image'
import VRImage from '../../../Images for Assignment 7/VR top.png'
import pattern from '../../../Images for Assignment 7/pattern.png'
import HeroVR from '../../../Images for Assignment 7/Hero Section VR2 (2).png'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


export default function Hero() {
  return (
    <>
        <section id='/'>
            <div>
                <div className='max-w-full w-full bg-[#100425] relative overflow-hidden'>
                    <div className='relative'>
                            {/* Top Menu Image */}
                        <Link href={'#'}><Image src={VRImage} alt='VR' className='w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] mx-auto my-0 top-0 left-0 right-0 absolute overflow-hidden z-10 hover:scale-110 transition-transform duration-300 animate-slideInFromTop'/></Link>
                    </div>
                        {/* Blur effect backside */}
                    <div className='absolute w-[250px] h-[250px] sm:w-[320px] sm:h-[350px] md:w-[380px] md:h-[420px] lg:w-[580px] lg:h-[600px] bg-gradient-to-r from-[#DC00D3] via-[#dc00d3] to-[#0CFAF5] top-[15%] left-[50%] -translate-x-1/2 rounded-full blur-[120px] opacity-100'>
                    </div>

                        {/*Glass effect  */}
                    <div className='flex'>
                        <div className="w-full mx-auto shadow-inner bg-white bg-opacity-20 backdrop-blur-md rounded-2xl border-gray border-[1px] border-solid box-border min-h-[800px] sm:min-h-[900px] md:min-h-[1000px] lg:h-[900px]"></div>

                    {/* Navbar */}

                        <div className="absolute mt-[80px] sm:mt-[75px] md:mt-[70px] lg:mt-[50px] flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-40 justify-center w-full px-4 animate-slideInFromTop text-sm sm:text-base">
                            <div className="flex gap-4 sm:gap-6 md:gap-10">
                                <div className="text-white hover:text-[#dc00d3] transition-colors"><Link href={'#'}>HOME</Link></div>
                                <div className="text-white hover:text-[#dc00d3] transition-colors"><Link href={'#'}>PRODUCTS</Link></div>
                            </div>
                            <div className='flex gap-4 sm:gap-6 md:gap-10'>
                                <div className="text-white hover:text-[#dc00d3] transition-colors"><Link href={'#'}>SERVICES</Link></div>
                                <div className="text-white hover:text-[#dc00d3] transition-colors"><Link href={'#'}>CONTACT</Link></div>
                            </div>
                        </div>
                        {/* Pattern */}
                        <Image src={pattern} alt='pattern' className='absolute top-[12%] left-1/2 -translate-x-1/2 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[450px] md:h-[450px] lg:w-[700px] lg:h-[700px] opacity-80'/>


                        {/* Hero section */}
                        <div className='flex absolute left-0 right-0 top-[15%] sm:top-[12%] md:top-[10%] lg:top-[10%] flex-col lg:flex-row justify-center items-center w-full px-4 sm:px-6 md:px-8 lg:px-12 gap-8 lg:gap-0'>


                            {/* Text and button */}
                            <div className='w-full lg:basis-[45%] animate-slideInLeft duration-2000 text-center lg:text-left'>
                                <h1 className='max-w-full text-[40px] sm:text-[50px] md:text-[70px] lg:text-[100px] font-josefin-sans text-white font-bold leading-tight'>NEXT GEN</h1>
                                <h2 className='max-w-full text-[24px] sm:text-[32px] md:text-[45px] lg:text-[60px] font-semibold font-josefin-sans bg-gradient-to-r from-[#0CFAF5] via-[#dc00d3] to-[#dc00d3] text-transparent bg-clip-text leading-tight'>VIRTUAL REALITY</h2>
                                <p className='text-white font-light mt-4 text-sm sm:text-base md:text-lg max-w-full lg:max-w-[500px] mx-auto lg:mx-0'>The Future of Virtual Reality is increasingly multisensory,
                                    allowing users to experience the metaverse with all their
                                    senses. The more realistic the virtual world, the more
                                    immersive the experiences.</p>
                                <Button className='mt-6 sm:mt-8 lg:mt-10 bg-gradient-to-r from-[#0CFAF5] via-[#dc00d3] to-[#dc00d3] rounded-3xl hover:shadow-lightShadow transition-shadow px-6 py-2 sm:px-8 sm:py-3'>See more</Button>
                            </div>
                        {/* Picture */}
                            <div className='w-full lg:basis-[55%] animate-slideInBottomRight flex justify-center lg:justify-end'>
                                <Image src={HeroVR} alt='heroVR' className='w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] h-auto object-contain'/>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </section>
    </>
  )
};
