'use client'
import 'react-notifications/lib/notifications.css';
import Notification from '../ButtonNotification/page';



export default function Contact() {
   
  return (
    <>
        <section id='contact'>
            <div className=" sm:p-[100px] p-[30px] bg-[#191b22] max-w-full h-auto  justify-center items-center lg:flex-row flex-col lg:gap-[40px] gap-[50px] lg:text-ellipsis">
                <h1 className='text-white text-[48px] font-extrabold font-inter text-center mb-20 mt-10px'>Contact <span className='text-[#01eeff]'>Me!</span></h1>
                <div className=''>
                    <form action="">
                        <div className='flex gap-10 justify-center lg:flex-row flex-col mb-[2.5rem] items-center'>
                            <div className=''>
                                <label htmlFor=""></label>
                                <input type="text"    placeholder='Enter your First Name' required name='firstName' className='py-[17px] px-[30px]  rounded-xl  active:bg-[#323846] bg-[#323846] border-2 hover:border-2 hover:border-[#01eeff] text-inter text-white md:w-[590px] sm:w-[570px] w-[450px]'/>
                            </div>
                            <div>
                                <label htmlFor=""></label>
                                <input type="text"  placeholder='Enter your Last Name' required name='lastName' className='py-[17px] px-[30px] rounded-xl active:bg-[#323846] bg-[#323846] border-2 hover:border-2 hover:border-[#01eeff] text-inter text-white md:w-[590px] sm:w-[570px] w-[450px]'/>
                            </div>
                        </div>
                        <div className='flex gap-10 justify-center lg:flex-row flex-col mb-[2.5rem] items-center'>
                            <div className=''>
                                <label htmlFor=""></label>
                                <input type="email"  placeholder='Enter your Email Adress' required name='email' className='py-[17px] px-[30px] rounded-xl active:bg-[#323846] bg-[#323846] border-2 hover:border-2 hover:border-[#01eeff] text-inter text-white md:w-[590px] sm:w-[570px] w-[450px]'/>
                            </div>
                            <div>
                                <label htmlFor=""></label>
                                <input type="number"  placeholder='Enter your Phone Number' required name='phoneNumber' className='py-[17px] px-[30px] rounded-xl active:bg-[#323846] bg-[#323846] border-2 hover:border-2 hover:border-[#01eeff] text-inter text-white md:w-[590px] sm:w-[570px] w-[450px]'/>
                            </div>
                        </div>
                        <div className='flex gap-10 justify-center lg:flex-row flex-col mb-[2.5rem] items-center'>
                            <div className='flex  justify-center'>
                                <label htmlFor=""></label>
                                <textarea name="" id=""  rows={10} placeholder='Enter your Message' required className='py-[17px] px-[30px] lg:w-[1240px] md:w-[590px] sm:w-[570px] w-[450px] relative rounded-xl active:bg-[#323846] bg-[#323846] border-2 hover:border-2 hover:border-[#01eeff] text-inter text-white'/>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            
                        <Notification/>
                            
                        </div>
                    </form>
                   
                </div>
            </div>
        </section>
    </>
  )
}

