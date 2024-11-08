import React from 'react'
import Link from 'next/link'


export default function Navbar() {
 
  return (
    <div className='max-w-[100%]  py-[30px] shadow-lg sticky'>
        <div className='flex lg:flex-row flex-col w-screen gap-5'>
            <div className='mx-auto font-[montserrat] text-[30px] font-bold'>
                <Link href={'/'} >
                    <div className='hover:scale-[1.25] transition-all duration-1000 ease-in-out'>
                    <span className='text-black hover:scale-[1.05] transition-all'>OsamabinAdnan</span> 
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4ee247] top-[-0.3rem] right-[-0.1rem] animate-pulse ease-in-out duration-1000"></span>
                    </div>
                </Link>
            </div>
            <div className='mx-auto'>
                <ul className='flex gap-5 font-[montserrat] lg:text-[30px] md:text-[20px] text-[18px] font-semibold '>
                <Link href={'/'} className='text-black hover:scale-[1.05] transition-all hoverMenu'><li>Home</li></Link>
                <Link href={'About'} className='text-black hover:scale-[1.05] transition-all hoverMenu'><li>About</li></Link>
                <Link href={'/Services'} className='text-black hover:scale-[1.05] transition-all hoverMenu'><li>Services</li></Link>
                <Link href={'/Portfolio'} className='text-black hover:scale-[1.05] transition-all hoverMenu'><li>Portfolio</li></Link>
                <Link href={'/Contact'} className='text-black hover:scale-[1.05] transition-all hoverMenu'><li>Contact</li></Link>
                </ul>
            </div>
            
        </div>
        
    </div>
  )
}
