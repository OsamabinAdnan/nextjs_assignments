"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

function About() {
  const route = useRouter();
  return (
    <>
      <h1>This is About page</h1>
      <p>
        At [Your Company Name], our mission is to empower individuals and
        organizations through quality information and innovative solutions.
        Founded in [Year], we have grown into a trusted source of knowledge and
        support in our industry. Our dedicated team of professionals is
        passionate about helping our users achieve their goals. We believe in
        the power of community and collaboration, and we are committed to
        providing valuable resources to enhance your experience.
      </p>
      <h3>Click here to visit Homepage</h3>
      <button onClick={() => route.push("http://localhost:3000/")}>
        Homepage
      </button>
      <br />
      <h3>Click here to visit Navbar Page</h3>
      <button
        className="p-4 bg-green-400"
        onClick={() => route.push("/navbar")}
      >
        Navbar page
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

export default About;
