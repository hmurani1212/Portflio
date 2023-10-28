import React, { useEffect } from "react";
import bgImage from "../../assets/bg.svg";
import image from "../../assets/umar21.png";
import video from "../../assets/videoOFmine.gif";
import { TypeAnimation } from "react-type-animation";
import "aos/dist/aos.css";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Initialize AOS as needed
    });
  }, []);
  return (
    // <div className='h-screen w-full bg-black border' style={{background: `url(${bgImage}) no-repeat`, backgroundSize:"500px"}} >Home</div>
    <div
      id="home"
      className={`h-screen w-full flex justify-between items-center bg-[#040b14] bg-opacity-95 py-28 px-2 sm:px-20 md:items-center lg:pl-48`}
      style={{
        background: `url(${bgImage}) no-repeat left`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col mt-24" data-aos="fade-up">
        <p className="text-2xl font-bold text-purple-700 mb-3">Hey There!</p>
        <p className="font-bold text-white text-5xl">
          <span className="text-purple-700">I'm </span>
          <span className="text-cyan-600">M.Umar</span>
        </p>
        <TypeAnimation
          className="text-2xl font-bold mt-3 text-white underline underline-offset-[14px] decoration-clone decoration-cyan-700"
          sequence={["Freelancer", 1000, "Developer", 1000, "Designer", 1000]}
          speed={30}
          repeat={Infinity}
        />
      </div>
      <div className="  border-transparent ml-8 w-8/12 h-6/6 pt-10  relative">
        <img src={image} className=" mt-5 w-full h-92 rounded-lg transform" />
      </div>
    </div>
  );
};

export default Home;
