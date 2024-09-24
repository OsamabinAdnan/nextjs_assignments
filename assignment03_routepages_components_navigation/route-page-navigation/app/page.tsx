'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css"


export default function Home() {
  const route = useRouter()
  return (
    <>
      <h1>This is Homepage</h1>
      <p>
        Discover a world of possibilities at our platform. We strive to provide
        the best resources, services, and community support for our users.
        Whether you’re looking for informative articles, engaging tutorials, or
        the latest news, we have something for everyone. Join us on this journey
        to knowledge and growth, and explore what we have to offer today!
      </p>
      <h3>Click here to visit Navbar Page</h3>
      <button
        className="p-4 bg-green-400"
        onClick={() => route.push("/navbar")}
      >
        Navbar page
      </button>
      <br />
      <h3>Click here to visit About Page</h3>
      <button className="p-4 bg-green-400" onClick={() => route.push("/about")}>
        About page
      </button>
      <br />
      <h3>Click here to visit Contact us Page</h3>
      <button
        className="p-4 bg-green-400"
        onClick={() => route.push("/contact")}
      >
        Contact page
      </button>
      <br />
      <h3>Click here to visit Footer Page</h3>
      <button
        className="p-4 bg-green-400"
        onClick={() => route.push("/footer")}
      >
        Footer page
      </button>
    </>
  );
}
