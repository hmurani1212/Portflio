import React from "react";
import {
  About,
  Contact,
  Facts,
  Home,
  Portfolio,
  Resume,
  Services,
  Skills,
} from "./index";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Main = () => {
  return (
    // <div className="main w-full lg:flex-[0.8] lg:ml-[-234px]  rounded -z-50 scroll-smooth scroll-p-7 font-[sans-serif]">
    <div className="main text-shadow w-full lg:flex-[0.8] rounded  scroll-smooth scroll-p-7 font-[sans-serif]">
      <Home className="" />
      <div className="section lg:ml-[30px] bg-white">
        <About className="" />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
      </div>
    </div>
  );
};

export default Main;
