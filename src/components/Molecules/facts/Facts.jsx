import React, { useEffect } from "react";
import {Card} from "../../Atoms"
import PureCounter from "@srexi/purecounterjs";
import detail from "./factsDetails"

const Facts = () => {
  useEffect(() => {
    new PureCounter({
      selector: ".purecounter1",
      start: 0,
      end: 20,
      duration: 1,
    });
    new PureCounter({
      selector: ".purecounter2",
      start: 0,
      end: 20,
      duration: 1,
    });
    new PureCounter({
      selector: ".purecounter3",
      start: 0,
      end: 1453,
      duration: 1,
    });
    new PureCounter({
      selector: ".purecounter4",
      start: 0,
      end: 3,
      duration: 1,
    });
  }, []);
  return (
    <div
      // data-aos="fade-top"
      id="facts"
      className={` h-auto w-full flex flex-col justify-start gap-8  py-16 px-4 sm:px-14`}
    >
      <div className="">
        <span className="line-border relative font-bold text-4xl text-[#173b6c]">
          Facts
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
     { <Card />}
    </div>
  );
};

export default Facts;
