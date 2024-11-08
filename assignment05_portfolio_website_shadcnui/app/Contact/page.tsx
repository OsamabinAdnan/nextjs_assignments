'use client'
import React from 'react';
import Notification from '../Components/Notification/page'
import Navbar from '../Navbar/page';
import Footer from '../Footer/page';


export default function Contact() {
   
  return (
    <>
        <Navbar/>
            <section id='contact' className=''>
            
            <div className=" sm:p-[100px] p-[30px] bg-white max-w-full h-auto  justify-center items-center lg:flex-row flex-col lg:gap-[40px] gap-[50px] lg:text-ellipsis relative z-50">

                {/* Blur effect backside */}
            
                <span className='absolute lg:w-[600px] lg:h-[600px] md:w-[380px] md:h-[380px] w-[220px] h-[220px] bg-[#4ee247] top-[50%] left-[0%] rounded-full blur-[50px] opacity-100 z-0'></span>

                <h1 className='text-black text-[65px] font-extrabold font-[montserrat] text-center mb-20 mt-10px'>Contact <span className='text-[#4ee247]'>Me!</span></h1>
                <div className=''>
                    
                    <form action="">
                        <div className='flex gap-10 justify-center lg:flex-row flex-col mb-[2.5rem] items-center'>
                            <div className=''>
                                <label htmlFor=""></label>
                                <input type="text"    placeholder='Enter your First Name' required name='firstName' className='py-[17px] px-[30px]  rounded-xl  active:bg-[#eeeeee] bg-white border-2 hover:border-2 border-black hover:border-[#4ee247]  text-black md:w-[590px] sm:w-[570px] w-[450px]'/>
                            </div>
                            <div>
                                <label htmlFor=""></label>
                                <input type="text"  placeholder='Enter your Last Name' required name='lastName' className='py-[17px] px-[30px]  rounded-xl  active:bg-[#eeeeee] bg-white border-2 hover:border-2 border-black hover:border-[#4ee247]  text-black md:w-[590px] sm:w-[570px] w-[450px]'/>
                            </div>
                        </div>
                        <div className='flex gap-10 justify-center lg:flex-row flex-col mb-[2.5rem] items-center'>
                            <div className=''>
                                <label htmlFor=""></label>
                                <input type="email"  placeholder='Enter your Email Adress' required name='email' className='py-[17px] px-[30px]  rounded-xl  active:bg-[#eeeeee] bg-white border-2 hover:border-2 border-black hover:border-[#4ee247]  text-black md:w-[590px] sm:w-[570px] w-[450px]'/>
                            </div>
                            <div>
                                <label htmlFor=""></label>
                                <input type="number"  placeholder='Enter your Phone Number' required name='phoneNumber' className='py-[17px] px-[30px]  rounded-xl  active:bg-[#eeeeee] bg-white border-2 hover:border-2 border-black hover:border-[#4ee247]  text-black md:w-[590px] sm:w-[570px] w-[450px]'/>
                            </div>
                        </div>
                        <div className='flex gap-10 justify-center lg:flex-row flex-col mb-[2.5rem] items-center'>
                            <div className='flex  justify-center'>
                                <label htmlFor=""></label>
                                <textarea name="" id=""  rows={10} placeholder='Enter your Message' required className='py-[17px] px-[30px] lg:w-[1240px] md:w-[590px] sm:w-[570px] w-[450px] relative rounded-xl active:bg-[#eeeeee] bg-white border-2 hover:border-2 border-black hover:border-[#4ee247]  text-black'/>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            
                        
                            
                        <Notification/>
                        </div>
                    </form>
                   
                </div>
            </div>
            </section>
        <Footer/>
    </>
  )
}

