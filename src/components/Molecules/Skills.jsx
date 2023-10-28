import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Skills = () => {
  const BorderLinearProgress = styled(LinearProgress)({
    height: 10,
    borderRadius: 5,
    overflow: "hidden",
  });

  const items = [
    { name: "HTML", per: "100%", value: "100" },
    { name: "CSS", per: "90%", value: "90" },
    { name: "TAILWIND", per: "90%", value: "90" },
    { name: "JAVASCRIPT", per: "75%", value: "75" },
    { name: "BOOTSTRAP", per: "90%", value: "90" },
    { name: "REACT", per: "90%", value: "90" },
    { name: "REDUX", per: "90%", value: "90" },
    { name: "NEXT", per: "80%", value: "80" },
  ];

  return (
    <div
      id="skills"
      className={`h-auto w-full flex flex-col justify-start gap-8  py-16 px-4 sm:px-14 bg-indigo-100 `}
    >
      <div className="to-left">
        <span className="line-border relative font-bold text-4xl text-[#173b6c]">
          Skills
        </span>
        <p className="mt-10 text-lg leading-8">
          My passion shines through in every line of HTML, every style in CSS,
          every interactive feature in JavaScript, and every dynamic solution
          with ReactJS and Redux. I'm a maestro of Tailwind CSS and Bootstrap,
          weaving innovation and aesthetics into every project.
        </p>
      </div>
      <Box className="flex flex-col md:flex-row sm:mx-5 md:mx-0 gap-0 md:gap-5 text-gray-600">
        <Box className="border w-full grid grid-cols-1 md:grid-cols-2 gap-5 pb-5 ">
          {items.map((item) => (
            <Box data-aos="fade-up">
              <Box className="w-full flex justify-between text-sm my-1 font-bold">
                <i>{item.name}</i>
                <i>{item.per}</i>
              </Box>
              <BorderLinearProgress variant="determinate" value={item.value} />
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Skills;
