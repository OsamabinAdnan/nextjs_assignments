import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SignOutPage from '@/components/login/SignOutComponent'
import { SessionWrapper } from '@/components/SessionWrapper'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-center px-10 py-4 lg:justify-around'>
        <div className='cursor-pointer'>
            <Image src={'/logo-4.png'} alt='logo' width={80} height={80} className='transition duration-1000 transform hover:scale-125'/>
        </div>
        <div className='hidden gap-8 lg:pr-10 xl:gap-20 lg:flex'>
            <Link href={'#'} className='fold-bold uppercase text-sm hover:text-[#38b6ff] transition duration-300'>Home</Link>
            <Link href={'#'} className='fold-bold uppercase text-sm hover:text-[#38b6ff] transition duration-300'>About</Link>
            <Link href={'#'} className='fold-bold uppercase text-sm hover:text-[#38b6ff] transition duration-300'>Services</Link>
            <Link href={'#'} className='fold-bold uppercase text-sm hover:text-[#38b6ff] transition duration-300'>Contact</Link>
        </div>
        <div>
            <SessionWrapper>
              <SignOutPage/>
            </SessionWrapper>
        </div>
    </nav>
  )
}
