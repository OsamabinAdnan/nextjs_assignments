'use client'
import Link from 'next/link'
import ProgressBar from "@ramonak/react-progress-bar";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from 'next/image';
import heroPicture from '../public/osamacanva.png'
import { Button } from '@/components/ui/button';
import { FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { MdDownload } from "react-icons/md";
import aboutImage from '../public/Aboutdesign2.png'
import { IoIosMore } from "react-icons/io";
import { HiPaintBrush } from "react-icons/hi2";
import { FaCode } from "react-icons/fa";
import { ImEarth } from "react-icons/im";
import { FaElementor } from "react-icons/fa6";
import { SiGoogleads } from "react-icons/si";
import { PiShoppingCartFill } from "react-icons/pi";
import pic1 from '../public/thumbnail.png'
import pic2 from '../public/thumbnail2.png'
import pic3 from '../public/Assignment 08 Thumbnail.png'
import pic4 from '../public/Resumethumbnail.png'
import pic5 from '../public/Questions.png'
import Notification from "./Components/Notification/page";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Home() {
  const [text] = useTypewriter({
    words: [
      " Frontend Developer!",
      " UI UX Designer!",
      " Digital Marketer!",
      " WordPress Developer!",
    ],
    loop: 100,
    onLoopDone: () => console.log(`loop completed after 5000 runs.`),
  });
  return (
    <>
      <main className="h-full w-full">

        {/* Navbar Section */}
        <section>
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
        </section>

        {/* Hero Section */}
        <section>
        <div className='flex sm:p-[100px] p-[30px] max-w-full h-auto  justify-center items-center lg:flex-row flex-col lg:gap-[40px] gap-[50px] lg:text-ellipsis'>
          <div className=' flex lg:flex-row flex-col lg:px-[120px] px-[50px] gap-[2rem] justify-center items-center mt-[80px] mb-[80px]'>
              {/* Blur effect backside */}
              <span>
                  <span className='absolute lg:w-[600px] lg:h-[600px] md:w-[380px] md:h-[380px] w-[220px] h-[350px] bg-[#4ee247] top-[-20%] left-[-10%] rounded-full blur-[50px] opacity-100 -z-10'></span>
              </span>
              {/* Left working */}
              <div className='flex flex-col basis-[60%] w-full'>
                  <div className='py-[10px]'>
                      <h1 className='text-black lg:text-[60px] md:text-[40px] text-[35px] font-bold'>👋Hi!</h1>
                      <h1><span className='text-black lg:text-[60px] md:text-[40px] text-[35px]'>This is</span><span className='text-black lg:text-[60px] md:text-[40px] text-[35px] font-bold'> Osama bin Adnan</span></h1>
                      <span className='text-black lg:text-[60px] md:text-[40px] text-[35px]'>I&apos;m</span><span className='text-[#4ee247] lg:text-[55px] md:text-[40px] text-[32px] font-bold'>{text}<Cursor/></span>
                      <p className="text-black text-left font-medium lg:text-[25px] md:text[20px] sm:text[15px] "> I&apos;m a passionate Frontend Developer, UI/UX Designer, and Digital Marketer with a keen eye for detail and user-centric design. I specialize in creating visually appealing, responsive web interfaces while ensuring seamless user experiences and driving engagement through targeted digital marketing strategies.
                      </p>
                      <div className="flex gap-8 py-8 justify-center lg:justify-start">
                          <Link href="https://github.com/OsamabinAdnan" target="_blank" className="text-black hover:text-[#4ee247]"><FaGithub size={40} /></Link>
                          <Link href="https://www.linkedin.com/in/osama-bin-adnan/" target="_blank" className="text-black hover:text-[#4ee247]"><FaLinkedin size={40} /></Link>
                          <Link href="https://www.facebook.com/usama.adnan.733/" target="_blank" className="text-black hover:text-[#4ee247]"><IoLogoFacebook size={40} /></Link>
                          <Link
                          href="https://www.instagram.com/osamabinadnan/?hl=en" target="_blank" className="text-black hover:text-[#4ee247]"><AiFillInstagram size={40} /></Link>
                      </div>
                      <div className="flex justify-center lg:justify-start">
                          {/* Button */}
                          <Button className="bg-black text-white hover:text-[#151925] hoverMenu font-bold rounded-[10px]">
                              <MdDownload /><a href="OsamabinAdnanCV.pdf" target="_blank" rel="noopener noreferrer"> Download CV </a>
                          </Button>
                      </div>
                  </div>
              </div>
              {/* Right side working */}
              <div className=''>
                  <div className="flex mx-auto h-screen justify-center items-center  basis-[40%]">
                      <Image src={heroPicture} alt='hero-sectionPicture' className='md:h-[600px] md:w-[620px]'></Image>
                  </div>
              </div>
          </div>
          
      </div>
        </section>

        {/* About Section */}
        <section>
        <div className="flex sm:p-[100px] p-[30px] max-w-full h-auto justify-center items-center lg:flex-row flex-col-reverse lg:gap-[40px] gap-[50px] lg:text-ellipsis relative z-50">
              {/* Blur Circle Background */}
              <span className='absolute lg:w-[600px] lg:h-[600px] md:w-[380px] md:h-[380px] w-[220px] h-[350px] bg-[#4ee247] top-[30%] right-[0%] rounded-full blur-[50px] opacity-100 z-[-10]'></span>
              <div className='flex basis-[50%] w-full justify-center items-center mx-auto '>
                  {/* Left Section Image */}
                  <Image src={aboutImage} alt='About-Image' className='min-w-[450px] '/>
              </div>
                  {/* Right Section Image */}
              <div className='basis-[50%] justify-center items-center'>
                  <h1 className='text-black text-[60px] font-extrabold font-[montserrat]'>About <span className='text-[#4ee247]'>Me</span></h1>
                  <h4 className='text-black text-[28px] font-semibold font-[montserrat] pb-10'>Digital Marketer | Frontend Developer | UI UX Designer</h4>
                  <p className='text-black text-left font-medium font-[montserrat] lg:text-[25px] md:text[20px] sm:text[15px] pb-10'>With a degree in Textile Engineering, MBA in Marketing, and certification in Digital Marketing, I create impactful online strategies that drive growth. Now diving into Cloud Applied Generative Engineering, I&apos;m blending marketing expertise with tech innovation to deliver results. Let&apos;s work together to elevate your brand and accelerate your business success.</p>
                  <div className='flex justify-center lg:justify-normal'>
                      {/* Button */}
                      <Button className="bg-black text-white hover:text-black hoverMenu font-bold rounded-[10px]"><IoIosMore /><a href="./OsamabinAdnanCV.pdf" target='_blank'>Contact</a>
                      </Button>
                  </div>
                  
              </div>
          </div>
        </section>

        {/* My Skill section */}
        <section>
              <div className='sm:p-[100px] p-[30px] max-w-full h-auto justify-center items-center lg:flex-row flex-col-reverse lg:gap-[40px] gap-[50px] lg:text-ellipsis'>
                <div className='flex justify-center items-center my-[75px]'>
                    <h1 className='text-black text-[65px] font-extrabold font-[montserrat]'>Skills</h1>
                </div>
                <h2 className='flex lg:text-[50px] md:text-[40px] text-[30px] font-bold my-[30px] bg-gradient-to-r from-[black] via-[#4ee247] to-[black] text-transparent bg-clip-text justify-center'>Digital Marketing</h2>
                <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>WordPress Development</h3>
                        <ProgressBar
                        completed={90}
                        className="wrapper"
                        barContainerClassName="container"
                        completedClassName="barCompleted1"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>Elementor Page Builder</h3>
                        <ProgressBar
                        completed={85}
                        className="wrapper"
                        barContainerClassName="container"
                        completedClassName="barCompleted2"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>Seach Engine Optimization</h3>
                        <ProgressBar
                        completed={82}
                        className="wrapper"
                        barContainerClassName="container"
                        completedClassName="barCompleted3"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>Social Media MKT</h3>
                        <ProgressBar
                        completed={85}
                        className="wrapper"
                        barContainerClassName="container"
                        completedClassName="barCompleted2"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>Ecommerce</h3>
                        <ProgressBar
                        completed={88}
                        className="wrapper"
                        barContainerClassName="container"
                        completedClassName="barCompleted4"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>Search Engine MKT</h3>
                        <ProgressBar
                        completed={93}
                        className="wrapper"
                        barContainerClassName="container"
                        completedClassName="barCompleted4"
                        labelClassName="label"
                        />
                    </div>
                </div>
                <h2 className='flex lg:text-[50px] md:text-[40px] text-[30px] font-bold my-[30px] bg-gradient-to-r from-[black] via-[#4ee247] to-[black] text-transparent bg-clip-text justify-center'>Frontend Development</h2>
                <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>HTML</h3>
                        <ProgressBar
                        completed={90}
                        className="wrapper"
                        barContainerClassName="container"
                        completedClassName="barCompleted1"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>CSS</h3>
                        <ProgressBar
                        completed={85}
                        className="wrapper"
                        barContainerClassName="container"
                        completedClassName="barCompleted2"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>JavaScript</h3>
                        <ProgressBar
                        completed={80}
                        className="wrapper"
                        barContainerClassName="container"
                        completedClassName="barCompleted5"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>Tailwind CSS</h3>
                        <ProgressBar
                        completed={90}
                        className="wrapper"
                        barContainerClassName="container"
                        completedClassName="barCompleted1"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>Figma</h3>
                        <ProgressBar
                        completed={85}
                        className="wrapper"
                        barContainerClassName="container"
                        completedClassName="barCompleted2"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>NextJS</h3>
                        <ProgressBar
                        completed={75}
                        className="wrapper"
                        barContainerClassName="container"
                        completedClassName="barCompleted6"
                        labelClassName="label"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* My Service Section */}
        <section>
            <div className=" sm:p-[70px] p-[30px] bg-white max-w-full h-auto mx-auto justify-center items-center lg:flex-row flex-col lg:gap-[40px] gap-[50px] lg:text-ellipsis relative z-50">

                {/* Blur effect backside */}

                <span className='absolute lg:w-[600px] lg:h-[600px] md:w-[380px] md:h-[380px] w-[220px] h-[220px] bg-[#4ee247] top-[50%] left-[0%] rounded-full blur-[50px] opacity-100 -z[-10]'></span>

                <h1 className='text-black text-[65px] font-extrabold font-[montserrat] text-center mb-20 mt-10px'>My<span className='text-[#4ee247]'> Services</span> </h1>

                <div className='flex lg:flex-row justify-center gap-4 flex-col flex-wrap items-center relative'>

                  {/* 1st box */}
                  <div className='flex flex-col border-black bg-white justify-center items-center px-8 py-10  border-solid w-[500px] h-[430] rounded-xl border-4 hover:border-4 hover:border-solid hover:border-[#4ee247] hover:transition hover:ease-out duration-500 hover:scale-105'>
                      <HiPaintBrush size={50} className='text-[#4ee247] '/>
                      <h1 className='text-black font-bold text-[35px] mt-1 mb-4 text-center'>UI UX Designer</h1>
                      <p className='text-black text-center mb-5 text-[25px]  font-medium'>Crafting seamless, user-centered designs that transform ideas into intuitive digital experiences. Let&apos;s design solutions that captivate and convert your audience</p>
                      <div >
                          <Button className="bg-black text-white hover:text-black hover:bg-[#4ee247] lg:w-[150px] lg:h-[40px] font-bold rounded-[10px] "><a href="#" target='_blank'>Read More </a>
                          </Button>
                      </div>
                  </div>

                  {/* 2nd box */}
                  <div className='flex flex-col border-black border-solid border-4  bg-white justify-center items-center  px-8 py-10   w-[500px] h-[430] rounded-xl hover:border-4 hover:border-solid hover:border-[#4ee247] hover:transition hover:ease-out duration-500 hover:scale-105'>
                      <FaCode size={50} className='text-[#4ee247]'/>
                      <h1 className='text-black font-bold text-[35px] mt-1 mb-4 text-center'>Web Development</h1>
                      <p className='text-black text-center mb-5 text-[25px]  font-medium'>Building fast, responsive websites tailored to your business needs. Get a sleek, functional site that stands out and delivers an exceptional user experience</p>
                      <div>
                          <Button className="bg-black text-white hover:text-black hover:bg-[#4ee247] lg:w-[150px] lg:h-[40px] font-bold rounded-[10px]"><a href="#" target='_blank'>Read More </a>
                          </Button>
                      </div>
                  </div>
                  {/* 3rd box */}
                  <div className='flex flex-col  bg-white justify-center items-center px-8 py-10 border-solid border-black w-[500px] h-[430] rounded-xl border-4 hover:border-4 hover:border-solid hover:border-[#4ee247] hover:transition hover:ease-out duration-500 hover:scale-105'>
                      <ImEarth size={50} className='text-[#4ee247]'/>
                      <h1 className='text-black font-bold text-[35px] mt-1 mb-4 text-center'>Digital Marketing</h1>
                      <p className='text-black text-center mb-5 text-[25px]  font-medium'>Elevating your brand with targeted digital strategies that drive traffic, boost engagement, and deliver measurable results. Let&apos;s grow your online presence together</p>
                      <div>
                          <Button className="bg-black text-white hover:text-black hover:bg-[#4ee247] lg:w-[150px] lg:h-[40px] font-bold rounded-[10px]"><a href="#" target='_blank'>Read More </a>
                          </Button>
                      </div>
                  </div>
                    {/* 4th box */}
                    <div className='flex flex-col bg-white justify-center items-center px-8 py-10 border-solid border-black w-[500px] h-[430] rounded-xl border-4 hover:border-4 hover:border-solid hover:border-[#4ee247] hover:transition hover:ease-out duration-500 hover:scale-105'>
                      <FaElementor  size={50} className='text-[#4ee247] '/>
                      <h1 className='text-black font-bold text-[35px] mt-1 mb-4 text-center'>Elementor</h1>
                      <p className='text-black text-center mb-5'>Bringing your vision to life with Elementor&apos;s powerful, intuitive tools. Get a pixel-perfect, mobile-responsive site tailored to your brand&apos;s style and functionality.</p>
                      <div >
                          <Button className="bg-black text-white hover:text-black hover:bg-[#4ee247] lg:w-[150px] lg:h-[40px] font-bold rounded-[10px] "><a href="#" target='_blank'>Read More </a>
                          </Button>
                      </div>
                  </div>
                  {/* 5th box */}
                  <div className='flex flex-col  bg-white justify-center items-center px-8 py-10 border-solid border-black w-[500px] h-[430] rounded-xl border-4  hover:border-4 hover:border-solid hover:border-[#4ee247] hover:transition hover:ease-out duration-500 hover:scale-105'>
                      <SiGoogleads size={50} className='text-[#4ee247]'/>
                      <h1 className='text-black font-bold text-[35px] mt-1 mb-4 text-center'>Google Ads</h1>
                      <p className='text-black text-center mb-5'>Grow your business with Google Ads tailored to your goals. From campaign setup to optimization, reach more customers and get impactful results.</p>
                      <div>
                          <Button className="bg-black text-white hover:text-black hover:bg-[#4ee247] lg:w-[150px] lg:h-[40px] font-bold rounded-[10px]"><a href="#" target='_blank'>Read More </a>
                          </Button>
                      </div>
                  </div>
                  {/* 6th box */}
                  <div className='flex flex-col  bg-white justify-center items-center px-8 py-10 border-solid border-black w-[500px] h-[430] rounded-xl border-4  hover:border-4 hover:border-solid hover:border-[#4ee247] hover:transition hover:ease-out duration-500 hover:scale-105'>
                      <PiShoppingCartFill  size={50} className='text-[#4ee247]'/>
                      <h1 className='text-black font-bold text-[35px] mt-1 mb-4 text-center'>eCommerce</h1>
                      <p className='text-black text-center mb-5'>Comprehensive eCommerce solutions to power your online business. From product pages to checkout, we build seamless shopping experiences.</p>
                      <div>
                          <Button className="bg-black text-white hover:text-black hover:bg-[#4ee247] lg:w-[150px] lg:h-[40px] font-bold rounded-[10px]"><a href="#" target='_blank'>Read More </a>
                          </Button>
                      </div>
                  </div>
                </div>

                </div>
        </section>

        {/* My Portfolio Section */}
        <section>
                  <div className=" sm:p-[80px] p-[30px] bg-white max-w-full h-auto mx-auto lg:gap-[40px] gap-[50px] lg:text-ellipsis relative z-50 ">

            {/* Blur effect backside */}

            <span className='absolute lg:w-[600px] lg:h-[600px] md:w-[380px] md:h-[380px] w-[220px] h-[220px] bg-[#4ee247] top-[40%] right-[0%] rounded-full blur-[50px] opacity-100 z-0'></span>

            <h1 className='text-black text-[65px] font-extrabold font-[montserrat] text-center mb-20 mt-10px'>My<span className='text-[#4ee247]'> Portfolio</span> </h1>
            {/* 1st picture */}
            <div className='grid xl:grid-cols-3 gap-5'>
                <div className='w-full h-full group  '>
                    <div className='relative overflow-hidden'>
                        <Image src={pic1} alt='pic1' className='border-[#4ee247] border-solid border-[4px] rounded-[10px]'></Image>
                        <div className='absolute h-full w-full bg-black/80 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700  rounded-[10px]'>
                            <h3 className='text-white font-bold mb-4 text-center'>Portfolio Website</h3>
                            <p className='text-white text-center text-[18px] mb-4 mx-5 font-semibold'> Developed a portfolio website by converting a Figma design into a responsive site using Next.js, Tailwind CSS, and Shadcn UI</p>
                            <Button className='bg-[#4ee247] rounded-[10px]  text-white py-2 px-5'><Link href={'https://portfolio-website-figma.vercel.app/'} target='blank'>View project</Link></Button>
                        </div>
                    </div>
                </div>
                {/* 2nd picture */}
                <div className='w-full h-full group'>
                    <div className='relative overflow-hidden'>
                        <Image src={pic2} alt='pic2' className='border-[#4ee247] border-solid border-[4px] rounded-[10px]'></Image>
                        <div className='absolute h-full w-full bg-black/80 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[10px]'>
                            <h3 className='text-white font-bold mb-4 text-center'>VR Zone</h3>
                            <p className='text-white text-center text-[18px] mb-4 mx-5 font-semibold'> Built a VR website by converting a Figma design with Next.js, Tailwind CSS, and Shadcn UI.</p>
                            <Button className='bg-[#4ee247] rounded-[10px]  text-white py-2 px-5'><Link href={'https://vrzone.vercel.app/'} target='blank'>View project</Link></Button>
                        </div>
                    </div>
                </div>
                {/* 3rd picture */}
                <div className='w-full h-full group'>
                    <div className='relative overflow-hidden'>
                        <Image src={pic3} alt='pic2' className='w-full h-full border-[#4ee247] border-solid border-[4px] rounded-[10px]'></Image>
                        <div className='absolute h-full w-full bg-black/80 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700  rounded-[10px]'>
                            <h3 className='text-white font-bold mb-4 text-center'>Financial Dashboard</h3>
                            <p className='text-white text-center text-[18px] mb-4 mx-5 font-semibold'> Developed a Financial Dashboard website by following the Next.js official course, utilizing Next.js, and Tailwind CSS for a clean and responsive interface.</p>
                            <Button className='bg-[#4ee247] rounded-[10px]  text-white py-2 px-5'><Link href={'https://financialdashboard-assignment.vercel.app/'} target='blank'>View project</Link></Button>
                        </div>
                    </div>
                </div>
                {/* 4th picture */}
                <div className='w-full h-full group'>
                    <div className='relative overflow-hidden'>
                        <Image src={pic4} alt='pic2' className='w-full h-full border-[#4ee247] border-solid border-[4px] rounded-[10px]'></Image>
                        <div className='absolute h-full w-full bg-black/80 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700  rounded-[10px]'>
                            <h3 className='text-white font-bold mb-4 text-center'>CV Generator</h3>
                            <p className='text-white text-center text-[18px] mb-4 mx-5 font-semibold'>Created a CV builder that generates unique, shareable links for each CV, built with HTML, CSS, and JavaScript to offer a seamless, personalized experience.</p>
                            <Button className='bg-[#4ee247] rounded-[10px]  text-white py-2 px-5'><Link href={'https://resume-hackathon-milestone5-osamabinadnan.vercel.app/'} target='blank'>View project</Link></Button>
                        </div>
                    </div>
                </div>
                {/* 5th picture */}
                <div className='w-full h-full group'>
                    <div className='relative overflow-hidden'>
                        <Image src={pic5} alt='pic2' className='w-full h-full border-[#4ee247] border-solid border-[4px] rounded-[10px]'></Image>
                        <div className='absolute h-full w-full bg-black/80 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700  rounded-[10px]'>
                            <h3 className='text-white font-bold mb-4 text-center'>More Projects <br /><span className='text-[#4ee247] text-[25px]'><em>Comming Soon</em></span></h3>
                          
                        </div>
                    </div>
                </div>            
                
            </div>
            </div>
        </section>

        {/* Contact Section */}
        <section>
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

        {/* Footer Section */}
        <section>
            <div className='max-w-[100%] sm:w-screen max-h-[100%] h-full bg-white w-screen flex flex-col justify-center items-center mt-[100px] gap-12 p-[0px] bgImage'>
              
              {/* Divider line */}
              <div >
                  <div className='lg:w-[950px] h-[3px] bg-gradient-to-r from-[#4ee247] to-[#000000] '>
                  </div>
              </div>

              <div className='flex justify-center items-center flex-col lg:gap-10 md:gap-8 sm:gap-[25px] gap-[25px]'>
                  
                  

                  {/* Social Media links */}
                  <div className='flex justify-end items-end gap-4'>
                      <Link href={'https://github.com/OsamabinAdnan'} target='_blank'><FaGithub className='text-black w-[30px] h-[30px] hover:text-[#4ee247] hover:scale-150 transition-all duration-300'/></Link>
                      <Link href={'https://www.linkedin.com/in/osama-bin-adnan/'} target='_blank'><FaLinkedinIn className='text-black w-[30px] h-[30px] hover:text-[#4ee247] hover:scale-150 transition-all duration-300'/></Link>
                      <Link href={'https://github.com/OsamabinAdnan'} target='_blank'><FaFacebookF className='text-black w-[30px] h-[30px] hover:text-[#4ee247] hover:scale-150 transition-all duration-300'/></Link>
                      <Link href={'https://github.com/OsamabinAdnan'} target='_blank'><FaInstagram className='text-black w-[30px] h-[30px] hover:text-[#4ee247] hover:scale-150 transition-all duration-300'/></Link>
                  </div>

                  {/* Copyright line */}
                  <div className='text-black justify-center items-center'>
                      <p className=' text-[25px] font-semibold'>&copy; 2024 Osama bin Adnan. All Rights Reserved</p>
                  </div>
              </div>
          </div>
        </section>
      </main>

    </>
  );
}
