import React from 'react'

import Card from '../Card/page'


export default function Projects() {
  return (
    <>
    <section id='portfolio'>
        {/* Heading of the section */}
      <div className="flex sm:p-[100px] p-[30px] bg-[#323846] max-w-full h-auto justify-center items-center flex-col lg:gap-[40px] gap-[50px] lg:text-ellipsis">
        <div>
          <h1 className='text-white text-[48px] font-extrabold font-inter text-center mb-20 '>Our <span className='text-[#01eeff]'>Projects</span></h1>
        </div>
        {/* Card of the section */}
        <div>
          <Card/>
        </div>


      </div>
    </section>
    </>
  )
}
