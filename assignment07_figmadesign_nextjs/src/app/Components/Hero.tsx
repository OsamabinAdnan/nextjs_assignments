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
                <div className='max-w-[100%] sm:w-screen max-h-[100%] h-full bg-[#100425] w-[1980px] relative'>
                    <div className='relative'>
                            {/* Top Menu Image */}
                        <Link href={'#'}><Image src={VRImage} alt='VR' className=' w-[200px] mx-auto my-0 top-0 left-0 right-0 absolute overflow-hidden z-10 hover:scale-125 animate-slideInFromTop'/></Link>
                    </div>
                        {/* Blur effect backside */}
                    <div className='absolute lg:w-[580px] lg:h-[600px] md:w-[380px] md:h-[420px] w-[320px] h-[350px] bg-gradient-to-r from-[#DC00D3] via-[#dc00d3] to-[#0CFAF5] top-[15%] lg:left-[50%] left-[30%] rounded-full blur-[120px] opacity-100'>
                    </div>
                
                        {/*Glass effect  */}
                    <div className='flex'>
                        <div className="w-screen mx-auto shadow-inner bg-white bg-opacity-20 backdrop-blur-md rounded-2xl border-gray border-[1px] border-solid box-border lg:h-[900px] h-[1100px] "></div>
                    
                    {/* Navbar */}
                        
                        <div className="absolute lg:mt-[50px] md:mt-[75px] mt-[80px] mt- flex lg:gap-40 md:gap:30 justify-center max-w-[100%] w-screen animate-slideInFromTop">
                            <div className="flex gap-10 relative pr-[20px]">
                                <div className=" text-white hover:text-[#dc00d3] "><Link href={'#'}>HOME</Link></div>
                                <div className=" text-white hover:text-[#dc00d3]"><Link href={'#'}>PRODUCTS</Link></div>
                            </div>
                            <div className='flex gap-10 relative pl-[20px]'>
                                <div className=" text-white hover:text-[#dc00d3]"><Link href={'#'}>SERVICES</Link></div>
                                <div className=" text-white hover:text-[#dc00d3]"><Link href={'#'}>CONTACT</Link></div>
                            </div>
                        </div>
                        {/* Pattern */}
                        <Image src={pattern} alt='pattern' className='absolute top-[12%] left-[42%] lg:w-[700px] lg:h-[700px] md:w-[450px] md:h-[450px] w-[250px] h-[250px]'/>            

                        
                        {/* Hero section */}
                        <div className=' flex absolute left-[10%] top-[10%] lg:flex-row flex-col justify-center items-center max-w-[90%] w-[1636px] mx-auto '>

                        
                            {/* Text and button */}
                            <div className='basis-[20%] animate-slideInLeft duration-2000'>
                                <h1 className='w-[544px] relative text-[100px] inline-block font-josefin-sans text-white font-bold text-left'>NEXT GEN</h1>
                                <h2 className=' w-[536px] relative text-[60px] font-semibold font-josefin-sans bg-gradient-to-r from-[#0CFAF5] via-[#dc00d3] to-[#dc00d3] text-transparent bg-clip-text'>VIRTUAL REALITY</h2>
                                <p className='text-white font-light inline-block'>The Future of Virtual Reality is increasingly multisensory,
                                    allowing users to experience the metaverse with all their
                                    senses. The more realistic the virtual world, the more
                                    immersive the experiences.</p>
                                <Button className=' mt-10 bg-gradient-to-r from-[#0CFAF5] via-[#dc00d3] to-[#dc00d3] rounded-3xl hover:shadow-lightShadow '>See more</Button>
                            </div> 
                        {/* Picture */}
                            <div className='basis-[80%] animate-slideInBottomRight'>
                                <Image src={HeroVR} alt='heroVR' className=' lg:w-[1480px] lg:h-[810px] w-[780px] h-[610px] justify-start place-self-end  overflow-auto  object-cover object-center  '/>
                            </div>  
                        
                            
                        </div>
                    </div>
                    


                </div>
            </div>
        </section>
    </>
  )
};