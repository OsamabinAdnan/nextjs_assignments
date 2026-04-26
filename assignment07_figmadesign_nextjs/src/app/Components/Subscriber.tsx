import React from 'react'
import { Button } from '@/components/ui/button'

export default function Subscriber() {
  return (
    <div className='max-w-full w-full bg-[#100425] flex flex-col justify-center items-center mt-[200px] sm:mt-[300px] md:mt-[350px] lg:mt-[400px] gap-8 sm:gap-10 md:gap-12 p-4 sm:p-6 md:p-8 lg:p-[80px] relative'>
        <div className='flex absolute justify-center items-center w-[280px] h-[280px] sm:w-[400px] sm:h-[320px] md:w-[700px] md:h-[350px] lg:w-[970px] lg:h-[370px] rounded-[35px] bg-gradient-to-r from-[#0CFAF5] via-[#dc00d3] to-[#dc00d3] blur-lg z-[0]'></div>

            {/* Heading para */}
            <div className='flex flex-col justify-center items-center w-full max-w-[350px] sm:max-w-[500px] md:max-w-[750px] lg:max-w-[985px] rounded-[35px] relative bg-[#100425] px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-0 lg:h-[380px]'>
                <h1 className='text-white uppercase text-[24px] sm:text-[28px] md:text-[32px] font-josefin-sans font-bold text-center'>Subscribe to our Newsletter</h1>
                <p className='text-white text-center py-6 sm:py-8 md:py-10 lg:py-[40px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-josefin-sans font-medium max-w-full'>Stay ahead with the latest updates, exclusive content, and expert tips delivered straight to your inbox! Join our newsletter and never miss out on the trends that matter. Subscribe now and be part of our community!</p>

                {/* Input and Button */}
                <div className='flex flex-col sm:flex-row w-full gap-2 sm:gap-0'>
                    <input type="email" placeholder='Enter your email address' className='flex-1 py-2 sm:py-3 px-4 sm:px-6 rounded-tl-[35px] rounded-bl-[35px] sm:rounded-bl-[35px] rounded-tr-[35px] sm:rounded-tr-none text-sm sm:text-base'/>
                    <Button className='rounded-tr-[35px] rounded-br-[35px] sm:rounded-tl-none sm:rounded-bl-none bg-gradient-to-t from-[#0CFAF5] via-[#dc00d3] to-[#dc00d3] hover:shadow-lightShadow transition-shadow px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base'>Subscribe</Button>
                </div>


            </div>



    </div>
  )
}

