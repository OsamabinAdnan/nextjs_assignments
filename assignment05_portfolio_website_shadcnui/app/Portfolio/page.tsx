import React from 'react'
import Image from 'next/image'
import pic1 from '../../public/thumbnail.png'
import pic2 from '../../public/thumbnail2.png'
import pic3 from '../../public/Assignment 08 Thumbnail.png'
import pic4 from '../../public/Resumethumbnail.png'
import pic5 from '../../public/Questions.png'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Navbar from '../Navbar/page'
import Footer from '../Footer/page'





export default function Portfolio() {
  return (
    <>
        <Navbar/>
            <section>
                
                <div className=" sm:p-[80px] p-[30px] bg-white max-w-full h-auto mx-auto lg:gap-[40px] gap-[50px] lg:text-ellipsis relative z-50 ">

                    {/* Blur effect backside */}
                    
                    <span className='absolute lg:w-[600px] lg:h-[600px] md:w-[380px] md:h-[380px] w-[220px] h-[220px] bg-[#4ee247] top-[40%] right-[0%] rounded-full blur-[50px] opacity-100 z-0'></span>
                    
                    <h1 className='text-black text-[65px] font-extrabold font-[montserrat] text-center mb-20 mt-10px'>My<span className='text-[#4ee247]'> Portfolio</span> </h1>
                    {/* 1st picture */}
                    <div className='grid xl:grid-cols-3 gap-5'>
                        <div className='w-full h-full group  '>
                            <div className='relative overflow-hidden'>
                                <Image src={pic1} alt='pic1' className='border-[#4ee247] border-solid border-[4px] rounded-[10px]'></Image>
                                <div className='absolute h-full w-full bg-black/80 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700  rounded-[10px]'>
                                    <h3 className='text-white font-bold mb-4 text-center'>Portfolio Website</h3>
                                    <p className='text-white text-center text-[18px] mb-4 mx-5 font-semibold'> Developed a portfolio website by converting a Figma design into a responsive site using Next.js, Tailwind CSS, and Shadcn UI</p>
                                    <Button className='bg-[#4ee247] rounded-[10px]  text-white py-2 px-5'><Link href={'https://portfolio-website-figma.vercel.app/'} target='blank'>View project</Link></Button>
                                </div>
                            </div>
                        </div>
                        {/* 2nd picture */}
                        <div className='w-full h-full group'>
                            <div className='relative overflow-hidden'>
                                <Image src={pic2} alt='pic2' className='border-[#4ee247] border-solid border-[4px] rounded-[10px]'></Image>
                                <div className='absolute h-full w-full bg-black/80 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[10px]'>
                                    <h3 className='text-white font-bold mb-4 text-center'>VR Zone</h3>
                                    <p className='text-white text-center text-[18px] mb-4 mx-5 font-semibold'> Built a VR website by converting a Figma design with Next.js, Tailwind CSS, and Shadcn UI.</p>
                                    <Button className='bg-[#4ee247] rounded-[10px]  text-white py-2 px-5'><Link href={'https://vrzone.vercel.app/'} target='blank'>View project</Link></Button>
                                </div>
                            </div>
                        </div>
                        {/* 3rd picture */}
                        <div className='w-full h-full group'>
                            <div className='relative overflow-hidden'>
                                <Image src={pic3} alt='pic2' className='w-full h-full border-[#4ee247] border-solid border-[4px] rounded-[10px]'></Image>
                                <div className='absolute h-full w-full bg-black/80 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700  rounded-[10px]'>
                                    <h3 className='text-white font-bold mb-4 text-center'>Financial Dashboard</h3>
                                    <p className='text-white text-center text-[18px] mb-4 mx-5 font-semibold'> Developed a Financial Dashboard website by following the Next.js official course, utilizing Next.js, and Tailwind CSS for a clean and responsive interface.</p>
                                    <Button className='bg-[#4ee247] rounded-[10px]  text-white py-2 px-5'><Link href={'https://financialdashboard-assignment.vercel.app/'} target='blank'>View project</Link></Button>
                                </div>
                            </div>
                        </div>
                        {/* 4th picture */}
                        <div className='w-full h-full group'>
                            <div className='relative overflow-hidden'>
                                <Image src={pic4} alt='pic2' className='w-full h-full border-[#4ee247] border-solid border-[4px] rounded-[10px]'></Image>
                                <div className='absolute h-full w-full bg-black/80 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700  rounded-[10px]'>
                                    <h3 className='text-white font-bold mb-4 text-center'>CV Generator</h3>
                                    <p className='text-white text-center text-[18px] mb-4 mx-5 font-semibold'>Created a CV builder that generates unique, shareable links for each CV, built with HTML, CSS, and JavaScript to offer a seamless, personalized experience.</p>
                                    <Button className='bg-[#4ee247] rounded-[10px]  text-white py-2 px-5'><Link href={'https://resume-hackathon-milestone5-osamabinadnan.vercel.app/'} target='blank'>View project</Link></Button>
                                </div>
                            </div>
                        </div>
                        {/* 5th picture */}
                        <div className='w-full h-full group'>
                            <div className='relative overflow-hidden'>
                                <Image src={pic5} alt='pic2' className='w-full h-full border-[#4ee247] border-solid border-[4px] rounded-[10px]'></Image>
                                <div className='absolute h-full w-full bg-black/80 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700  rounded-[10px]'>
                                    <h3 className='text-white font-bold mb-4 text-center'>More Projects <br /><span className='text-[#4ee247] text-[25px]'><em>Comming Soon</em></span></h3>
                                
                                </div>
                            </div>
                        </div>            
                        
                    </div>
                </div>
            </section>
        <Footer/>
    </>
  )
}
