'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from "react-icons/ci";


export default function Navbar() {
  const [click,setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }
  const content = <>
    <div className='md:hidden block absolute top-10 w-full left-0 right-0 bg-[#151925] transition'>
      <ul className='text-center text-xl p-20'>
        <Link href='/'><li className='my-4 py-4  hover:bg-[#01eeff] hover:rounded-xl hover:text-[#151925]'>Home</li></Link>
        <Link href='About'><li className='my-4 py-4  hover:bg-[#01eeff] hover:rounded-xl hover:text-[#151925]'>About</li></Link>
        <Link href='Services'><li className='my-4 py-4  hover:bg-[#01eeff] hover:rounded-xl hover:text-[#151925]'>Services</li></Link>
        <Link href='Portfolio'><li className='my-4 py-4  hover:bg-[#01eeff] hover:rounded-xl hover:text-[#151925]'>Portfolio</li></Link>
        <Link href='Contact'><li className='my-4 py-4  hover:bg-[#01eeff] hover:rounded-xl hover:text-[#151925]'>Contact</li></Link>
      </ul>
    </div></>
  return (
   <>
    <nav >
        <div className='bg-[#191b22] h-10vh flex justify-between z-50 text-white lg:py-[35px] px-20 py-4 '>
            
              <div className=' flex items-center flex-1 pl-[100px] justify-start'>
                <Link href={'/'}><span className='hover:text-[#01EEFF] text-[28px] font-semibold font-sen drop-shadow-light hover:drop-shadow-heavy items-center'>Portfolio.</span></Link>
              </div>
              <div className='lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden'>
                
                <div className='flex justify-center '>
                  <ul className='flex gap-6 mr-0  items-center '>
                    <Link href={'#'}><li className='hover:text-[#01EEFF] transition cursor-pointer text-[28px] font-semibold font-sans drop-shadow-light hover:drop-shadow-heavy'>Home</li></Link>
                    <Link href={'#about'}><li className='hover:text-[#01EEFF] transition cursor-pointer text-[28px] font-semibold font-sans drop-shadow-light hover:drop-shadow-heavy'>About</li></Link>
                    <Link href={'#services'}><li className='hover:text-[#01EEFF] transition cursor-pointer text-[28px] font-semibold font-sans drop-shadow-light hover:drop-shadow-heavy '>Services</li></Link>
                    <Link href={'#portfolio'}><li className='hover:text-[#01EEFF] transition cursor-pointer text-[28px] font-semibold font-sans drop-shadow-light hover:drop-shadow-heavy'>Portfolio</li></Link>
                    <Link href={'#contact'}><li className='hover:text-[#01EEFF] transition cursor-pointer text-[28px] font-semibold font-sans drop-shadow-light hover:drop-shadow-heavy'>Contact</li></Link>
                  </ul>
                </div>
                
              </div>
              <div>
                {click && content}
                <button className='block md:hidden transition' onClick={handleClick}>
                  {click ? <FaTimes/> : <CiMenuFries/>}
                </button>
              </div>
        </div>
    </nav>
   </>

  )
}
