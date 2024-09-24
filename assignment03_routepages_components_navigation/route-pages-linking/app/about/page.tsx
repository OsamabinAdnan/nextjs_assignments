import React from 'react'
import Link from 'next/link'

function about() {
  return (
    <>
    <h1>This is About page</h1>
    <br />
    <h2>Go back to Homepage, Click on below link</h2>
    <Link href={'http://localhost:3000/'}><h3>Homepage</h3></Link> <br />

    <h2>Go to Navbar page, Click on below link</h2>
    <Link href={'/navbar'}><h3>Navbar page</h3></Link> <br />

    <h2>Go to Contact us page, Click on below link</h2>
    <Link href={'/contact'}><h3>Contact us page</h3></Link>
    <br />

    <h2>Go to Footer page, Click on below link</h2>
    <Link href={'/footer'}><h3>Footer page</h3></Link> <br />
    </>
  )
}

export default about