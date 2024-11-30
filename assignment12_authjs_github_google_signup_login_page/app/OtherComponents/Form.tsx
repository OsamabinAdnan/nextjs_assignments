'use client'
import React from 'react'
import { Users } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'



export default function Form() {
    const [variant,SetVariant] =useState('login')
    const toggleVariant = () => {
        SetVariant(prevVariant => prevVariant === 'Login' ? 'Signup' : 'Login')
    }
    const formVariant = {
        hidden:{opacity:0, y:50},
        visible:{opacity:1, y:0},
    }
   
  return (
    <>
        
            <motion.form 
                initial='hidden'
                animate='visible'
                transition={{duration:0.7}}
                variants={formVariant}
                className='flex flex-col items-center gap[1.5rem] p-0'>
                <motion.div className='flex justify-center items-center bg-[#2aa7e1] rounded-full w-16 h-16'
                initial={{scale:0}}
                animate={{scale:1}}
                transition={{duration:0.7}}>
                    <Users className='size-10 text-gray-800'/>
                </motion.div>
                <div className='flex flex-col gap-2'>
                    {variant=== 'Signup' && <input type='text' className='input-field' placeholder='Username'/>}
                    <input type='email' className='input-field' placeholder='Email'/>
                    <input type='password' className='input-field' placeholder='Password'/>
                </div>
                <button className='submit-button'>{variant === 'Login'? 'Login': 'Sign up'}</button>
                <motion.p className='mt-2 text-sm text-center transition duration-300 cursor-pointer text-white/40 hover:text-white/60'
                onClick={toggleVariant} whileHover={{scale:1.05}}>
                    {variant === 'Login'? 'Dont have an Account? Signup':'Already have an Account? Login'}
                </motion.p>
            </motion.form>
    </>
  )
}
