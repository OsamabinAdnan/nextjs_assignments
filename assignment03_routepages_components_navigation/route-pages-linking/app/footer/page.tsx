import React from 'react'
import Link from 'next/link'

function footer() {
  return (
    <>
    <h1>This is Footer page</h1>
    <br />
    <h2>Go back to Homepage, Click on below link</h2>
    <Link href={'http://localhost:3000/'}><h3>Homepage</h3></Link> <br />

    <h2>Go to Navbar page, Click on below link</h2>
    <Link href={'/navbar'}><h3>Navbar page</h3></Link> <br />

    <h2>Go to About pages, Click on below link</h2>
    <Link href={'/about'}><h3>About page</h3></Link>

    <br />
    <h2>Go to Contact us page, Click on below link</h2>
    <Link href={'/contact'}><h3>Contact us page</h3></Link>
    
    </>
  )
}

export default footer