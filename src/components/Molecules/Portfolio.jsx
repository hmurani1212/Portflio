import React from "react";
import { PortfolioProject } from "../Atoms";
import projectDetails from "../Atoms/portfolioProject/Detail";

const Portfolio = () => {
  return (
    <div
      // data-aos="fade-top"
    id="portfolio"

      className={`h-auto w-full flex flex-col justify-start gap-5 py-5 px-4 sm:px-14 bg-indigo-100`}
    >
      <div className="">
        <span className="line-border relative font-bold text-4xl text-[#173b6c]">
          Portfolio
        </span>
        <p className="mt-10 text-lg leading-8">
          Crafted with a passion for web development, my portfolio showcases a
          journey marked by creativity and technical expertise. Through projects
          encompassing HTML, CSS, JavaScript, ReactJS, Redux, Tailwind CSS, and
          Bootstrap, I demonstrate a commitment to delivering outstanding
          digital experiences. Explore my work and experience the fusion of
          innovation and precision.
        </p>
      </div>
      <div className="w-full flex  flex-wrap justify-center gap-4 ">
        {projectDetails.map((item) => (
          <PortfolioProject key={item.id} url={item.url} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
