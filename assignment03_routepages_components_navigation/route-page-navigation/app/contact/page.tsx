"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

function contact() {
  const route = useRouter();
  return (
    <>
      <h1>This is Contact page</h1>
      <p>
        We'd love to hear from you! Whether you have questions, feedback, or
        need support, feel free to reach out to us. You can contact us via email
        at [email@example.com] or fill out the form below. Our team is here to
        assist you and will respond as soon as possible. Thank you for your
        interest in [Your Company Name]!
      </p>

      <h3>Click here to visit Homepage</h3>
      <button onClick={() => route.push("http://localhost:3000/")}>
        Homepage
      </button>

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

export default contact;
