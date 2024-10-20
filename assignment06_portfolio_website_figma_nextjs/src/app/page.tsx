import Image from "next/image";
import Navbar from "./components/Navbar/page";
import HeroSection from "./components/HeroSection/page";
import About from "./components/About/page";
import Services from "./components/Services/page";
import Projects from "./components/Projects/page";
import Contact from "./components/Contact/page";

export default function Home() {
  return (
   <>
    <div className="bg-[#191b22] max-w-full">
      <Navbar/>
    </div>
    <div className="bg-[#191b22] max-w-full" >
      <HeroSection/>
    </div>
    <div>
      <About/>
    </div>
    <div>
      <Services/>
    </div>
    <div>
      <Projects/>
    </div>
    <div>
      <Contact/>
    </div>
   
   </>
  );
}
