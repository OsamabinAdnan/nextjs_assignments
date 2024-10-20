import Image from 'next/image'
import React from 'react'
import pic1 from '../../images/unsplash_8qEB0fTe9Vw.png'
import pic2 from '../../images/unsplash_6sAl6aQ4OWI.png'
import pic3 from '../../images/unsplash_IKUYGCFmfw4.png'
import pic4 from '../../images/unsplash_LJ9KY8pIH3E.png'
import pic5 from '../../images/unsplash_SrewPUfo2c0.png'
import pic6 from '../../images/unsplash__Fx34KeqIEw.png'
import Link from 'next/link'
import { MdOpenInNew } from "react-icons/md";


export default function Card() {
    
    return (
        <>
          <div className=''>
            {/* Row 1 */}
            <div className='flex lg:flex-row flex-col gap-[50px] mb-10 justify-center'>
              {/* Image 1 */}
              <div className='relative group'>
                <Image
                  src={pic1}
                  alt='pic1'
                  className='w-[420px] h-[300px] rounded-xl'
                />
                {/* Hover Box */}
                <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-[#01eeff] opacity-0 group-hover:opacity-90 group-hover:translate-y-0 translate-y-full transition-all duration-500 ease-in-out rounded-xl flex flex-col justify-center items-center p-4'>
                  <h3 className='text-white font-extrabold mb-4 text-center'>Ad Campaign Optimizer</h3>
                  <p className='text-white text-center text-[18px] mb-4 font-semibold'> Developed an AI tool to optimize digital ad campaigns, improving ROI through data-driven insights.</p>
                  {/* Example icon */}
                  <Link href={'#'} className='text-[#01eeff] drop-shadow-light hover:drop-shadow-heavy text-2xl'><MdOpenInNew /></Link>
                </div>
              </div>
      
              {/* Image 2 */}
              <div className='relative group'>
                <Image
                  src={pic2}
                  alt='pic2'
                  className='w-[420px] h-[300px] rounded-xl'
                />
                <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-[#01eeff] opacity-0 group-hover:opacity-90 group-hover:translate-y-0 translate-y-full transition-all duration-500 ease-in-out rounded-xl flex flex-col justify-center items-center p-4'>
                  <h3 className='text-white font-extrabold mb-4 text-center'>Custom WordPress Store</h3>
                  <p className='text-white text-center text-[18px] font-semibold mb-4'>Built a responsive WordPress e-commerce site with custom themes and SEO optimization.</p>
                  {/* Example icon */}
                  <Link href={'#'} className='text-[#01eeff] drop-shadow-light hover:drop-shadow-heavy text-2xl'><MdOpenInNew /></Link>
                </div>
              </div>
      
              {/* Image 3 */}
              <div className='relative group'>
                <Image
                  src={pic3}
                  alt='pic3'
                  className='w-[420px] h-[300px] rounded-xl'
                />
                <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-[#01eeff] opacity-0 group-hover:opacity-90 group-hover:translate-y-0 translate-y-full transition-all duration-500 ease-in-out rounded-xl flex flex-col justify-center items-center p-4'>
                  <h3 className='text-white font-extrabold mb-4 text-center'>SaaS Dashboard UI/UX</h3>
                  <p className='text-white text-center text-[18px] font-semibold mb-4'>Designed a user-friendly SaaS dashboard focused on simplifying complex marketing analytics.</p>
                  {/* Example icon */}
                  <Link href={'#'} className='text-[#01eeff] drop-shadow-light hover:drop-shadow-heavy text-2xl'><MdOpenInNew /></Link>
                </div>
              </div>
            </div>
      
            {/* Row 2 */}
            <div className='flex lg:flex-row flex-col gap-[50px] justify-center '>
                {/* Image 1 */}
              <div className='relative group'>
                <Image
                  src={pic4}
                  alt='pic4'
                  className='w-[420px] h-[300px] rounded-xl'
                />
                {/* Hover box */}
                <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-[#01eeff] opacity-0 group-hover:opacity-90 group-hover:translate-y-0 translate-y-full transition-all duration-500 ease-in-out rounded-xl flex flex-col justify-center items-center p-4'>
                  <h3 className='text-white font-extrabold mb-4 text-center'>Interactive Portfolio Site</h3>
                  <p className='text-white text-center text-[18px] font-semibold mb-4'>Created a sleek personal portfolio website with engaging UI and dynamic animations.</p>
                  {/* Example icon */}
                  <Link href={'#'} className='text-[#01eeff] drop-shadow-light hover:drop-shadow-heavy text-2xl'><MdOpenInNew /></Link>
                </div>
              </div>
                {/* Image 2 */}
              <div className='relative group'>
                <Image
                  src={pic5}
                  alt='pic5'
                  className='w-[420px] h-[300px] rounded-xl'
                />
                {/* Hover box */}
                <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-[#01eeff] opacity-0 group-hover:opacity-90 group-hover:translate-y-0 translate-y-full transition-all duration-500 ease-in-out rounded-xl flex flex-col justify-center items-center p-4'>
                  <h3 className='text-white font-extrabold mb-4 text-center'>Lead Gen Landing Page</h3>
                  <p className='text-white text-center text-[18px] font-semibold mb-4'>Designed a landing page for real estate, improving conversions by 35% through A/B testing.</p>
                  {/* Example icon */}
                  <Link href={'#'} className='text-[#01eeff] drop-shadow-light hover:drop-shadow-heavy text-2xl'><MdOpenInNew /></Link>
                </div>
              </div>
                {/* Image 3 */}
              <div className='relative group'>
                <Image
                  src={pic6}
                  alt='pic6'
                  className='w-[420px] h-[300px] rounded-xl'
                />
                {/* Hover box */}
                <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-[#01eeff] opacity-0 group-hover:opacity-90 group-hover:translate-y-0 translate-y-full transition-all duration-500 ease-in-out rounded-xl flex flex-col justify-center items-center p-4'>
                  <h3 className='text-white font-extrabold mb-4 text-center'>Digital Marketplace Website</h3>
                  <p className='text-white text-center text-[18px] font-semibold mb-4'>Built a WordPress digital marketplace for selling creative assets with a smooth, SEO-optimized interface.</p>
                  {/* Example icon */}
                  <Link href={'#'} className='text-[#01eeff] drop-shadow-light hover:drop-shadow-heavy text-2xl'><MdOpenInNew /></Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )
}
