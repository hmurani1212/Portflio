import React from "react";
import { Link } from "react-router-dom";
function Projects() {
  const project = [
    {
      // id: 1,
      title: " Admin Pannle To Handle Staff Position",
      description:
        "A full-stack web application using React, Node, and MongoDB. This application allows staff to manage their positions, view their schedules, and perform various tasks.",
      technologies: ["React", "Node", "MongoDB"],
      link: "https://admin-panel1-mocha.vercel.app/",
    },
    {
      title: "React Functional Project",
      description:
        "A web application that allows users to create a personalized medicine plan based on their medical history and preferences. Users can also add reminders and track their medication progress.",
      technologies: ["React", "Node", "MongoDB"],
      link: "https://simple-projects-mu.vercel.app/",
    },
    {
      title: "News App",
      description:
        "A web application that allows users to track their job applications, view job postings, and manage interviews. Users can also set reminders and track their application progress.",
      technologies: ["React", "Node", "MongoDB"],
      link: "https://news-website-ivory.vercel.app/",
    },
    {
      title: "News App",
      description:
        "A web application that allows users to track their job applications, view job postings, and manage interviews. Users can also set reminders and track their application progress.",
      technologies: ["React", "Node", "MongoDB"],
      link: "https://news-website-ivory.vercel.app/",
    },
    {
      title: "Attendence Sheet",
      description:
        "A web application that allows users to track their job applications, view job postings, and manage interviews. Users can also set reminders and track their application progress.",
      technologies: ["React", "Node", "MongoDB"],
      link: "https://attendence-shett.vercel.app/",
    },
    {
      title: "Read Notes and Books",
      description:
        "A web application that allows users to track their job applications, view job postings, and manage interviews. Users can also set reminders and track their application progress.",
      technologies: ["React", "Node", "MongoDB"],
      link: "https://read-nots.vercel.app",
    },
    {
      title: "Read Notes and Books", //Redux USE(Deposit and Withdraw Money)
      description:
        "A web application that allows users to track their job applications, view job postings, and manage interviews. Users can also set reminders and track their application progress.",
      technologies: ["React", "Node", "MongoDB"],
      link: "https://read-nots.vercel.app",
    },
    {
      title: "Redux USE(Deposit and Withdraw Money)", //Redux USE(Deposit and Withdraw Money)
      description:
        "A web application that allows users to track their job applications, view job postings, and manage interviews. Users can also set reminders and track their application progress.",
      technologies: ["1) React ", "2) Node ", "3) MongoDB "],
      link: "https://redux-app-ten.vercel.app/",
    },
  ];
  const Naviagte_project = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="skills">
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6">
        <h1 className="text-sm md:text-2xl font-bold text-center">Projects</h1>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.map((data, index) => {
              return (
                <div className="flex flex-col text-black dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden p-6 min-h-[200px]">
                  <h2
                    className="text-xl font-semibold"
                    style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}
                  >
                    <span className="mx-2">{index + 1}</span>
                    {data.title}
                  </h2>

                  <p className="mx-5">{data.description}</p>
                  {/* <p className="ml-5"><span className="font-bold mx-2">technologies </span>{data.technologies}</p> */}
                  <p
                    className="inline-block  w-auto text-center min-w-[100px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400"
                    onClick={() => Naviagte_project(data.link)}
                 style={{cursor: pointer}} >
                    Browse
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
