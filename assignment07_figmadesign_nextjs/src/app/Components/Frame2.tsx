import React from 'react'
import Image from 'next/image'
import pic1 from '../../../Images for Assignment 7/frame2_1.jpg'
import pic2 from '../../../Images for Assignment 7/frame2_2.jpg'
import pic3 from '../../../Images for Assignment 7/pic3.png'

export default function Frame2() {
  return (
    <>
        <section>
            <div className='max-w-full w-full bg-[#100425] flex justify-center items-center mt-[150px] sm:mt-[200px] md:mt-[250px] lg:mt-[300px] px-4 sm:px-6 md:px-8'>
                <div className='flex flex-col lg:flex-row w-full max-w-[1180px] gap-8 sm:gap-10 md:gap-12 justify-center items-center'>

                    {/* First picture */}
                    <div className='flex flex-col justify-center items-center gap-5 w-full sm:w-auto'>
                        <div className='flex flex-col justify-center items-center gap-5 p-[10px] rounded-3xl bg-gradient-to-b from-[#0CFAF5] to-[#dc00d3] hover:scale-[1.10] lg:hover:scale-[1.15] transform transition-transform duration-300'>
                            <Image src={pic1} alt='pic1' className='w-full max-w-[280px] sm:max-w-[320px] md:max-w-[365px] h-auto aspect-[365/400] rounded-3xl object-cover'></Image>
                        </div>
                        <div className='text-center'>
                                <h2 className='text-white font-josefin-sans font-bold text-base sm:text-lg'>Gear VR Headset</h2>
                        </div>
                    </div>

                    {/* Center picture */}
                    <div className='flex flex-col justify-center items-center gap-5 w-full sm:w-auto'>
                        <div className='flex flex-col justify-center items-center gap-5 p-[10px] rounded-3xl bg-gradient-to-b from-[#0CFAF5] to-[#dc00d3] hover:scale-[1.10] lg:hover:scale-[1.15] transform transition-transform duration-300'>
                            <Image src={pic2} alt='pic2' className='w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] h-auto aspect-[250/320] rounded-3xl object-cover'></Image>
                        </div>
                        <div className='text-center'>
                                <h2 className='text-white font-josefin-sans font-bold text-base sm:text-lg'>Smart VR Headset</h2>
                        </div>
                    </div>

                    {/* Third Picture */}
                    <div className='flex flex-col justify-center items-center gap-5 w-full sm:w-auto'>
                        <div className='flex flex-col justify-center items-center gap-5 p-[10px] rounded-3xl bg-gradient-to-b from-[#0CFAF5] to-[#dc00d3] hover:scale-[1.10] lg:hover:scale-[1.15] transform transition-transform duration-300'>
                            <Image src={pic3} alt='pic3' className='w-full max-w-[280px] sm:max-w-[320px] md:max-w-[365px] h-auto aspect-[365/400] rounded-3xl object-cover'></Image>
                        </div>
                        <div className='text-center'>
                                <h2 className='text-white font-josefin-sans font-bold text-base sm:text-lg'>Play Station VR</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
