"use client";
import React from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Es  from "./components/Es";
import Stats  from "./components/Stats";
import Index from "./components/Services"
import Employee from "./components/Employee";
import Uses from "./components/Uses";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import Punchline  from "./components/Punchline";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="h-full w-full mt-0 bg-gray-100">
      
      <Navbar />
      <Hero />
      <Es />
      <Stats />
      <Index />
    <Employee />
    <Uses />
    <Reviews />
    <Faq />
    <Punchline />
    <Partners />
    <Footer />
    </div>
  );
}
