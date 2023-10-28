import { Box } from "@mui/material";
import React from "react";

const Resume = () => {
  return (
    <div
      id="resume"
      className={`h-auto w-full flex flex-col justify-start gap-5 py-16 px-4 sm:px-14`}
    >
      <div className="">
        <span className="line-border relative font-bold text-4xl text-[#173b6c]">
          Resume
        </span>
        <p className="mt-10 text-lg leading-8">
          With a strong foundation in web development and a passion for coding
          excellence, I specialize in HTML, CSS, JavaScript, ReactJS, Redux,
          Tailwind CSS, and Bootstrap. My commitment to delivering top-notch
          solutions is evident in every project I undertake. Join me on a
          journey through my professional experience, where innovation and
          precision converge to create exceptional web experiences.
        </p>
      </div>
      <section
        data-aos="fade-top"
        className="text-gray-700 body-font mt-2 gap-54 flex flex-col md:flex-row leading-7 "
      >
        <div className="w-full md:w-6/12 gap-4 px md:px-4  flex flex-row flex-wrap">
          <Box className="">
            <div className="mb-4">
              <span className="font-bold text-2xl text-[#000]">Summary</span>
            </div>
            <Box className=" relative circle border-l-2 border-[#1f5297] pt-0 pl-5 pr-0 mb-4">
              <h4 className="font-bold text-xl text-gray-800 pb-2 ">M Umar</h4>
              <p>
                <em>
                  A seasoned Front End Web Developer with expertise in HTML,
                  CSS, JavaScript, ReactJS, Redux, Tailwind CSS, and Bootstrap.
                  Committed to crafting exceptional web experiences through
                  innovation and precision, driven by a passion for coding
                  excellence.
                </em>
              </p>
              <ul className="mt-2 ml-4">
                <li className="list-item list-disc">
                  6th Road, Rawalpindi, Pakistan
                </li>
                <li className="list-item list-disc">(+92) 302-8022243</li>
                <li className="list-item list-disc">umarktk12141@gmail.com</li>
              </ul>
            </Box>
            <Box className="">
              <div className="mb-4">
                <span className="font-bold text-2xl text-[#000]">
                  Education
                </span>
              </div>
              <Box className="relative circle border-l-2 border-[#1f5297] pt-0 pl-5 pb-5 pr-0 ">
                <h4 className="font-bold text-xl pb-1 text-gray-800">
                  HIGHER EDUCTAION & COLLEGE
                </h4>
                <h5 className="text-sm  inline-block py-1 px-3 font-bold mb-2 font-[cursive] bg-indigo-100">
                  2016 - 2018
                </h5>
                <p className="text-sm font-semibold">
                  <em>Govt degree College, Serai Naurang, KPK</em>
                </p>
                <p className="py-2 text-base leading-7">
                  Completed Intermediate from Govt Degree College, Serai
                  Naurang, with a strong foundation in Computer Science, ready
                  to leverage my knowledge and skills in the tech industry. I am
                  now prepared to apply this knowledge and skills in the tech
                  industry.
                </p>
              </Box>
              <Box className="relative circle border-l-2 border-[#1f5297] pt-0 pl-5 pb-5 pr-0 ">
                <h4 className="font-bold text-xl pb-2 text-gray-800">
                  BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING
                </h4>
                <h5 className="text-sm  inline-block py-1 px-3 font-bold mb-2 font-[cursive] bg-indigo-100">
                  2018 - 2022
                </h5>
                <p className="text-sm font-semibold">
                  <em>
                    Kohat University Of Science & technology, Kpk, Pakistan
                  </em>
                </p>
                <p className="py-2 text-base leading-7">
                  Graduated with a Bachelor's in Software Engineering from Kohat
                  University of Science and Technology, equipped with a robust
                  foundation in software development and a passion for shaping
                  innovative solutions in the ever-evolving tech landscape.
                </p>
              </Box>
            </Box>
          </Box>
        </div>

        {/*.............. new............. */}

        <div className="w-full md:w-6/12 gap-4 px-2 md:px-4  flex flex-row flex-wrap">
          <Box>
            <div className="mb-4">
              <span className="font-bold text-2xl text-[#000]">
                Professional Experience
              </span>
            </div>
            <Box className="relative circle border-l-2 border-[#1f5297] pt-0 pl-5 pb-4 pr-0 ">
              <h4 className="font-bold text-xl text-gray-800 pb-2 ">
                SENIOR FRONT END SPECIALIST
              </h4>
              <h5 className="text-sm border inline-block py-1 px-3 font-bold mb-2 font-[cursive] bg-indigo-100">
                2023 - Present
              </h5>
              <p>
                <em>Alright Tech, Rawalpindi, Pakistan</em>
              </p>
              <ul className="mt-2 ml-4">
                <li className="list-item list-disc">
                  Develop and maintain responsive, user-friendly and functional
                  web applications using HTML, CSS, JavaScript, TypeScript,
                  Next.js, Tailwind CSS, Bootstrap, and Material UI.
                </li>
                <li className="list-item list-disc">
                  Optimize frontend applications for maximum performance,
                  responsiveness, and cross-browser compatibility.
                </li>
                <li className="list-item list-disc">
                  Collaborate closely with cross-functional teams to gather
                  requirements, understand business needs, and implement
                  comprehensive frontend solutions.
                </li>
                <li className="list-item list-disc">
                  Collaborate with UX/UI designers to translate wireframes and
                  prototypes into visually appealing and user-friendly
                  interfaces.
                </li>
              </ul>
            </Box>
          </Box>
          <Box>
            <Box className="relative circle border-l-2 border-[#1f5297] pt-0 pl-5 pb-5 pr-0 ">
              <h4 className="font-bold text-xl pb-1 text-gray-800">
                FRONT END WED DEVELOPER
              </h4>
              <h5 className="text-sm border inline-block py-1 px-3 font-bold mb-2 font-[cursive] bg-indigo-100">
                25 Feb 2022 - 25 Aug 2022
              </h5>
              <p className="text-sm font-semibold">
                <em>
                  National Incubation Center, Kohat University of Science and
                  Technology, Kohat, Pakistan
                </em>
              </p>
              <ul className="mt-2 ml-4">
                <li className="list-item list-disc">
                  I contributed my expertise to the dynamic startup,
                  Mushroolicious.
                </li>
                <li className="list-item list-disc">
                  During my tenure from February 25 to August 25, 2022, I played
                  a pivotal role in designing and developing the front-end of
                  Mushroolicious' web presence.
                </li>
                <li className="list-item list-disc">
                  This experience allowed me to showcase my skills in web
                  development, user interface design, and collaborate with an
                  innovative startup in a dynamic environment.
                </li>
                <li className="list-item list-disc">
                  Created an eye catchy and mobile friendly responsive designs.
                </li>
              </ul>
            </Box>
          </Box>
        </div>
      </section>
    </div>
  );
};

export default Resume;
