import React, { useState } from "react";
import { Avatar } from "../Atoms";
import {
  AiOutlineHome,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  BiBookContent,
  BiEnvelope,
  BiFileBlank,
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoSkype,
  BiUser,
} from "react-icons/bi";
import { FaServer } from "react-icons/fa";

const Navbar = ({ className, id }) => {
  const [clicked, setClicked] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const menuItems = [
    {
      icon: AiOutlineHome,
      label: "Home",
      link: "#home",
    },
    {
      icon: BiUser,
      label: "About",
      link: "#about",
    },
    {
      icon: BiFileBlank,
      label: "Resume",
      link: "#resume",
    },
    {
      icon: BiBookContent,
      label: "Portfolio",
      link: "#portfolio",
    },
    {
      icon: FaServer,
      label: "Services",
      link: "#services",
    },
    {
      icon: BiEnvelope,
      label: "Contact",
      link: "#contact",
    },
  ];

  return (
    <div id={id} className={className}>
      {/* <div  className={`w-72 h-screen hidden lg:flex justify-start flex-col items-center  fixed bg-[#040b14] text-white font-['poppins','sans']`}> */}
      <Avatar />
      <span className="text-2xl font-bold ">M Umar</span>
      <div className="flex gap-2 mt-4">
        <AiOutlineTwitter
          className={`w-9 h-9 p-2 cursor-pointer transition-all duration-500 rounded-full bg-gray-800  hover:bg-blue-500`}
        />
        <BiLogoFacebook className="w-9 h-9 p-2 cursor-pointer transition-all duration-500 rounded-full bg-gray-800  hover:bg-blue-500" />
        <AiOutlineInstagram className="w-9 h-9 p-2 cursor-pointer transition-all duration-500 rounded-full bg-gray-800  hover:bg-blue-500" />
        <BiLogoSkype className="w-9 h-9 p-2 cursor-pointer transition-all duration-500 rounded-full bg-gray-800  hover:bg-blue-500" />
        <BiLogoLinkedin className="w-9 h-9 p-2 cursor-pointer transition-all duration-500 rounded-full bg-gray-800  hover:bg-blue-500" />
      </div>
      {/* <div className="w-9/12 mt-8 flex flex-col gap-3 relative">
        <div className="h-10  p-2 flex gap-3 transition-all duration-500 text-gray-500 cursor-pointer hover:text-blue-500">
          <AiOutlineHome className="w-6 h-6 hover:text-blue-500  " />{" "}
          <span className="text-lg hover:text-white transition-all duration-500 Menu_after  "><a href="#home">Home</a></span>
        </div>
        <div className="h-10  p-2 flex gap-3 transition-all duration-500 text-gray-500 cursor-pointer hover:text-blue-500">
          <BiUser className="w-6 h-6 hover:text-blue-500  " />
          <span className="text-lg hover:text-white transition-all duration-500 Menu_after "><a href="#about">About</a></span>
        </div>
        <div className="h-10  p-2 flex gap-3 transition-all duration-500 text-gray-500 cursor-pointer hover:text-blue-500">
          <BiFileBlank className="w-6 h-6 hover:text-blue-500  " />
          <span className="text-lg hover:text-white transition-all duration-500 Menu_after "><a href="#resume">Resume</a></span>
        </div>
        <div className="h-10  p-2 flex gap-3 transition-all duration-500 text-gray-500 cursor-pointer hover:text-blue-500">
          <BiBookContent className="w-6 h-6 hover:text-blue-500 " />
          <span className="text-lg hover:text-white transition-all duration-500 Menu_after "><a href="#portfolio">Portfolio</a></span>
        </div>
        <div className="h-10  p-2 flex gap-3 transition-all duration-500  text-gray-500 cursor-pointer hover:text-blue-500">
          <FaServer className="w-6 h-6 hover:text-blue-500  " />
          <span className="text-lg hover:text-white transition-all duration-500 Menu_after "><a href="#services">Services</a></span>
        </div>
        <div className="h-10  p-2 flex gap-3  transition-all duration-500  text-gray-500 cursor-pointer hover:text-blue-500">
          <BiEnvelope className="w-6 h-6 hover:text-blue-500 " />
          <span className="text-lg hover:text-white transition-all duration-500 Menu_after "><a href="#contact">Contact</a></span>
        </div>
        <div className="absolute bottom-[-100px] text-gray-200">
        <span>&copy;Copryright M.Umar</span>
      </div> */}
      {/* </div> */}
      <div className="w-9/12 mt-8 flex flex-col gap-3 relative">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`h-10 p-2 flex gap-3 transition-all duration-500 text-gray-500 cursor-pointer ${
              activeItem === index ? "hover:text-white" : "hover:text-blue-500"
            }`}
            onClick={() => handleItemClick(index)}
          >
            <item.icon
              className={`w-6 h-6 hover:text-blue-500 ${
                activeItem === index ? "text-blue-500" : ""
              }`}
            />
            <span
              className={`text-lg transition-all duration-500 Menu_after ${
                activeItem === index ? "text-white" : ""
              }`}
            >
              <a href={item.link}>{item.label}</a>
            </span>
          </div>
        ))}
        <div className="absolute bottom-[-100px] text-gray-200">
          <span>&copy; Copyright M.Umar</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
