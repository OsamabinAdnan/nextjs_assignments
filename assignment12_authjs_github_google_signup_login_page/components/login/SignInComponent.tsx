'use client'

import { signIn } from "next-auth/react"
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useEffect, useState } from "react";

export default function SignInPage (){
    const [isVisible, SetIsVisible] = useState(false);

    // Simulate the effect of "visible" on mount
    useEffect(() => {
        const timer = setTimeout(() => SetIsVisible(true), 0);
        return () => clearTimeout(timer); // Cleanup the timer
    }, []);
    return(
        <>
       
            <div className={`flex flex-col items-center p-0 transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                
           
                <button onClick={()=>signIn('github')} className="social-button"><span>Sign In with</span><span><FaGithub/></span></button>
                <button onClick={()=>signIn('google')} className="social-button"><span>Sign In with</span><span><SiGmail/></span></button>
           
            </div>
        </>
    )
}