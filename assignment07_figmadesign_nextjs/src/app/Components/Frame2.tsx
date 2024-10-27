import React from 'react'
import Image from 'next/image'
import pic1 from '../../../Images for Assignment 7/frame2_1.jpg'
import pic2 from '../../../Images for Assignment 7/frame2_2.jpg'
import pic3 from '../../../Images for Assignment 7/pic3.png'

export default function Frame2() {
  return (
    <>
        <section>
            <div className='max-w-[100%] sm:w-screen max-h-[100%] h-full bg-[#100425] w-[1980px] flex justify-center items-center mt-[300px]'>
                <div className='flex lg:flex-row flex-col w-[1180px] gap-10 justify-between items-center'>
                    
                    {/* Right picture */}
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <div className='flex flex-col justify-center items-center gap-5 p-[10px] rounded-3xl bg-gradient-to-b from-[#0CFAF5] to-[#dc00d3] hover:scale-[1.15] transform transition-transform duration-300'>
                            <Image src={pic1} alt='pic1' className='w-[365px] h-[400px] rounded-3xl justify-center items-center '></Image>                
                        </div>
                        <div className=''>
                                <h2 className='text-white font-josefin-sans font-bold'>Gear VR Headset</h2>
                        </div>
                    </div>
                    
                    {/* Center picture */}
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <div className='flex flex-col justify-center items-center gap-5 p-[10px] rounded-3xl bg-gradient-to-b from-[#0CFAF5] to-[#dc00d3] hover:scale-[1.15] transform transition-transform duration-300'>
                            <Image src={pic2} alt='pic1' className='w-[250px] h-[320px] rounded-3xl justify-center items-center'></Image>                
                        </div>
                        <div className=''>
                                <h2 className='text-white font-josefin-sans font-bold'>Smart VR Headset</h2>
                        </div>
                    </div>

                    {/* Left Picture */}
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <div className='flex flex-col justify-center items-center gap-5 p-[10px] rounded-3xl bg-gradient-to-b from-[#0CFAF5] to-[#dc00d3] hover:scale-[1.15] transform transition-transform duration-300'>
                            <Image src={pic3} alt='pic1' className='w-[365px] h-[400px] rounded-3xl justify-center items-center'></Image>                
                        </div>
                        <div className=''>
                                <h2 className='text-white font-josefin-sans font-bold'>Play Station VR</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
