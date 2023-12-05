import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../assets/carton1.jpg";
import { AiOutlineRight } from "react-icons/ai";

const About = ({ className }) => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
    });
  }, []);
  return (
    <div
      id="about"
      data-aos="fade-top"
      className={`h-auto w-full flex flex-col justify-start gap-8 pt-16  px-4 sm:px-14`}
    >
      <div className="to-left">
        <span className="line-border relative font-bold text-4xl text-[#173b6c]">
          About
        </span>
        <p className="mt-10 text-lg leading-8">
          As a highly skilled software engineer specializing in web development,
          I bring a wealth of expertise to the table. Proficient in a wide range
          of technologies including HTML, CSS, JavaScript, TypeScript, React,
          Next.js, Tailwind CSS, Material UI, and Bootstrap, I have a proven
          track record of delivering responsive and user-friendly web
          applications. My strengths lie in problem-solving, performance
          optimization, and effective collaboration with cross-functional teams
          to consistently deliver exceptional web solutions.
        </p>
      </div>
      <div className="to-left w-full flex flex-col lg:flex-row gap-7 ">
        <img
          src={img}
          data-aos="fade-right"
          className="mt-1 w-full h-auto rounded mx-auto sm:w-[550px] sm:h-[530px] md:w-[600px] md:h-[570px] lg:w-6/12 lg:h-72"
        />
        <div className="" data-aos="fade-left">
          <h1 className="mb-2 text-3xl font-bold text-[#173b6c]">
            Front End Web Developer.
          </h1>
          <p className="italic mb-4 text-md">
            Coding Pixels into Dreams: Crafting captivating web experiences, one
            line of code at a time.
          </p>
          <div></div>
          <p className="mt-4 text-base leading-8 mb-0">
            As a Front End Web Developer, I'm your passionate partner in
            crafting captivating online experiences. With expertise in HTML,
            CSS, JavaScript, Bootstrap, Tailwind CSS, ReactJS, and Redux, I
            transform visions into visually stunning, user-friendly websites. I
            thrive on exceeding expectations and ensuring both clients and users
            are thrilled with the results. Let's turn your digital dreams into
            reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
