import Image from "next/image";
import NavBar from "./navbar/page";
import Link from "next/link";
import styles from "style.module.css"
import Footer from "./footer/page";

export default function Home() {
  return (
    <>
    <h1 >This is Home page</h1><br />

    <h2>Go to Navbar page, Click on below link</h2>
    <Link href={'/navbar'}><h3>Navbar page</h3></Link>

    <h2>Go to About page, Click on below link</h2>
    <Link href={'/about'}><h3>About page</h3></Link>

    <h2>Go to Contact us page, Click on below link</h2>
    <Link href={'/contact'}><h3>Contact us page</h3></Link>

    <h2>Go to Footer page, Click on below link</h2>
    <Link href={'/footer'}><h3>Footer page</h3></Link>
    
    </>
  );
}
