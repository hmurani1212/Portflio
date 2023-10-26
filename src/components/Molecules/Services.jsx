import React from "react";
import ServiceCard from "../Atoms/servicecard/ServiceCard";
import serviceDetails from "../Atoms/servicecard/details"

const Services = () => {
  return (
    <div
    id="services"
      className={`h-auto w-full flex flex-col justify-start gap-8 pt-16 px-4 sm:px-14 `}
    >
      <div className="to-left">
        <span className="line-border relative font-bold text-4xl text-[#173b6c]">
          Services
        </span>
        <p className="mt-10 text-lg leading-8">
          Discover a world of possibilities with our expertise in web
          development. We offer a range of services to empower your digital
          presence.
        </p>
        <section className=" flex flex-wrap justify-center my-5 gap-3 ">
          {serviceDetails.map(item => <ServiceCard title={item.title} content={item.content} icon={item.icon} />)}
        </section>
      </div>
    </div>
  );
};

export default Services;
