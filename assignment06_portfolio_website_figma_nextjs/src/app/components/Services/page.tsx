import React from 'react'
import { HiPaintBrush } from "react-icons/hi2";
import { Button } from '@/components/ui/button';
import { FaCode } from "react-icons/fa";
import { ImEarth } from "react-icons/im";




export default function Services() {
  return (
    <>
        <section id='services'>
            <div className=" sm:p-[100px] p-[30px] bg-[#191b22] max-w-full h-auto  justify-center items-center lg:flex-row flex-col lg:gap-[40px] gap-[50px] lg:text-ellipsis">
                
                <h1 className='text-white text-[48px] font-extrabold font-inter text-center mb-20 mt-10px'>Our <span className='text-[#01eeff]'>Services</span></h1>
                
                <div className='flex justify-between gap-4 relative flex-col lg:flex-row items-center'>
                    <div className='flex flex-col bg-[#323846] justify-center items-center px-8 py-10 w-[500px] h-[430] rounded-xl border-4 border-transparent hover:border-4 hover:border-solid hover:border-[#01eeff] hover:transition hover:ease-out'>
                        <HiPaintBrush size={50} className='text-[#01eeff] drop-shadow-light'/>
                        <h1 className='text-white font-bold text-[35px] mt-1 mb-4 text-center'>UI UX Designer</h1>
                        <p className='text-white text-center mb-5'>Crafting seamless, user-centered designs that transform ideas into intuitive digital experiences. Let's design solutions that captivate and convert your audience</p>
                        <div>
                            <Button className="bg-[#01eeff] drop-shadow-light hover:drop-shadow-heavy hover:bg-[#01eeff] hover:text-[#151925] font-inter font-bold rounded-[20px]"><a href="#" target='_blank'>Read More </a>
                            </Button>
                        </div>
                    </div>
                    <div className='flex flex-col bg-[#323846] justify-center items-center px-8 py-10 border-solid border-[#01eeff] w-[500px] h-[430] rounded-xl border-4 border-transparent hover:border-4 hover:border-solid hover:border-[#01eeff] hover:transition hover:ease-out'>
                        <FaCode size={50} className='text-[#01eeff] drop-shadow-light'/>
                        <h1 className='text-white font-bold text-[35px] mt-1 mb-4 text-center'>Web Development</h1>
                        <p className='text-white text-center mb-5'>Building fast, responsive websites tailored to your business needs. Get a sleek, functional site that stands out and delivers an exceptional user experience</p>
                        <div>
                            <Button className="bg-[#01eeff] drop-shadow-light hover:drop-shadow-heavy hover:bg-[#01eeff] hover:text-[#151925] font-inter font-bold rounded-[20px]"><a href="#" target='_blank'>Read More </a>
                            </Button>
                        </div>
                    </div>
                    <div className='flex flex-col bg-[#323846] justify-center items-center px-8 py-10 border-solid border-[#01eeff] w-[500px] h-[430] rounded-xl border-4 border-transparent hover:border-4 hover:border-solid hover:border-[#01eeff] hover:transition hover:ease-out'>
                        <ImEarth size={50} className='text-[#01eeff] drop-shadow-light'/>
                        <h1 className='text-white font-bold text-[35px] mt-1 mb-4 text-center'>Digital Marketing</h1>
                        <p className='text-white text-center mb-5'>Elevating your brand with targeted digital strategies that drive traffic, boost engagement, and deliver measurable results. Let's grow your online presence together</p>
                        <div>
                            <Button className="bg-[#01eeff] drop-shadow-light hover:drop-shadow-heavy hover:bg-[#01eeff] hover:text-[#151925] font-inter font-bold rounded-[20px]"><a href="#" target='_blank'>Read More </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
