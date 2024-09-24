"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

function Navbar() {
  const route = useRouter();
  return (
    <>
      <h1>This is Navigation Bar page</h1>
      <p>
        Your starting point for all the latest updates and resources. Learn more
        about our mission, vision, and the team behind the platform. Discover
        the range of services we offer to help you succeed. Get in touch with us
        for inquiries, support, or feedback. Read insightful articles and stay
        updated with our latest posts.
      </p>
      <h3>Click here to visit Homepage</h3>
      <button onClick={() => route.push("http://localhost:3000/")}>
        Homepage
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

export default Navbar;
