'use client'
import React from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css"

function footer() {
  const route = useRouter()
  return (
    <>
    <h1>This is Footer page</h1>
    <p>Thank you for visiting our website! Follow us on social media to stay updated on our latest news and offerings.</p>
    
    <h3>Click here to visit Homepage</h3>
    <button onClick={()=>route.push('http://localhost:3000/')}>Homepage</button>

    <h3>Click here to visit Navbar Page</h3>
    <button className="p-4 bg-green-400"  onClick={()=> route.push('/navbar')}>Navbar page</button>
    <br />
    <h3>Click here to visit About Page</h3>
    <button className="p-4 bg-green-400"  onClick={()=> route.push('/about')}>About page</button>
    <br />
    <h3>Click here to visit Contact us Page</h3>
    <button className="p-4 bg-green-400"  onClick={()=> route.push('/contact')}>Contact page</button>
    
    </>
  )
}

export default footer