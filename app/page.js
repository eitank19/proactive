"use client";
import { useState, useEffect } from "react";
import About from "./components/About";
import Classes from "./components/Classes";
import Facilities from "./components/Facilities";
import Footer from "./components/Footer";
import Goals from "./components/Goals";
import Hero from "./components/Hero";
import NavSocials from "./components/NavSocials";
import Plans from "./components/Plans";
import Professionals from "./components/Professionals";
import Supplements from "./components/Supplements";
import Scripts from "./components/Scripts";
import sanityClient from "./client";

export default function Home() {
  const [links, setLinks] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "socialUrls"]{
      whatsapp,
      instagram,
      gmaps,
      waze,
    }`
      )
      .then((data) => {
        setLinks(data[0]);
      })
      .catch(console.error);
  }, []);
  if (!links) return null;
  return (
    <main>
      <Scripts links={links} />
      <Hero links={links} />
      <Goals links={links} />
      <Facilities links={links} />
      <Professionals links={links} />
      <Plans links={links} />
      <Classes links={links} />
      <About links={links} />
      <Supplements links={links} />
      <NavSocials links={links} />
      <Footer links={links} />
    </main>
  );
}
