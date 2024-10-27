import Frame2 from "./Components/Frame2";
import Frame3 from "./Components/Frame3";
import Frame4 from "./Components/Frame4";
import Subscriber from "./Components/Subscriber";
import Footer from  "./Components/Footer";
import Hero from "./Components/Hero";
import HeroBottomBlur from "./Components/HeroBottomBlur";

export default function Home() {
  return (
  <>
    <div className="bg-[#100425]">
    <Hero/>

    <HeroBottomBlur/>

    <Frame2/>

    <Frame3/>

    <Frame4/>

    <Subscriber/>

    <Footer/>
    
    </div>
  </> 
  );
};



    
