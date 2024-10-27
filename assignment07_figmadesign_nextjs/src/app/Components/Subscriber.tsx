import React from 'react'
import { Button } from '@/components/ui/button'

export default function Subscriber() {
  return (
    <div className='max-w-[100%] sm:w-screen max-h-[100%] h-full bg-[#100425] w-[1980px] flex flex-col lg:flex-row justify-center items-center mt-[400px] gap-12 p-[80px] relative'>
        <div className='flex absolute justify-center items-center lg:w-[970px] lg:h-[370px] rounded-[35px] bg-gradient-to-r from-[#0CFAF5] via-[#dc00d3] to-[#dc00d3] blur-lg z-[0]'></div>
            
            {/* Heading para */}
            <div className=' flex flex-col justify-center items-center lg:w-[985px] lg:h-[380px] rounded-[35px] relative  bg-[#100425]'>
                <h1 className='text-white uppercase sm:text-[32px] text-[25px] font-josefin-sans font-bold text-center'>Subscribe to our Newsletter</h1>
                <p className='text-white px-[50px] text-center py-[40px] sm:text-[20px] text-[15px] font-josefin-sans font-medium'>Stay ahead with the latest updates, exclusive content, and expert tips delivered straight to your inbox! Join our newsletter and never miss out on the trends that matter. Subscribe now and be part of our community!</p>

                {/* Input and Button */}
                <div className='flex'>
                    <input type="email" placeholder='Enter your email address' className='sm:py-[10px] sm:px-[25px] px-[12px] rounded-tl-[35px] rounded-bl-[35px] '/>
                    <Button className='rounded-tr-[35px] rounded-br-[35px] bg-gradient-to-t from-[#0CFAF5] via-[#dc00d3] to-[#dc00d3] hover:shadow-lightShadow'>Subscribe</Button>
                </div>
                
                
            </div>


        
    </div>
  )
}

