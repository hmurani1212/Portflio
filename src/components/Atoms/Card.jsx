import React from 'react'

import { GoSmiley } from "react-icons/go";
import { BsJournalRichtext, BsHeadset, BsPeople } from "react-icons/bs";
import PureCounter from "@srexi/purecounterjs";

const Card = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto flex flex-wrap">
          <div className="flex flex-wrap justify-start md:justify-center -m-8 mt-2 gap-2 ">
            {/*............. Clients............ */}

            <div className="w-11/12 sm:w-9/12 lg:w-5/12 md:w-5/12 border-2 rounded-lg border-gray-200 border-opacity-50">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex p-2 md:p-4 flex-row"
              >
                <div className="w-16 h-16 sm:mr-5 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <GoSmiley className="w-10 h-10 text-6xl text-[#149ddd] font-normal" />
                </div>
                <div className="pl-3 md:pl-0 flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-1">
                    <span className="purecounter1 ">0</span>
                  </h2>
                  <p className="leading-relaxed text-base">
                    <strong>Happy Clients</strong> satisfaction as my ultimate
                    goal.
                  </p>
                </div>
              </div>
            </div>
            {/*............. Projects............ */}

            <div className="w-11/12 sm:w-9/12 lg:w-5/12 md:w-5/12 border-2 rounded-lg border-gray-200 border-opacity-50">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex p-2 md:p-4 flex-row"
              >
                <div className="w-16 h-16 sm:mr-5 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <BsJournalRichtext className="w-10 h-10 text-6xl text-[#149ddd] font-normal" />
                </div>
                <div className="pl-3 md:pl-0 flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-1">
                    <span className="purecounter2">0</span>
                  </h2>
                  <p className="leading-relaxed text-base">
                    <strong>Projects</strong> Turning Ideas into Stunning
                    Realities.
                  </p>
                </div>
              </div>
            </div>
            {/*.............Avalabitlity............ */}

            <div className="w-11/12 sm:w-9/12 lg:w-5/12 md:w-5/12 border-2 rounded-lg border-gray-200 border-opacity-50">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex p-2 md:p-4 flex-row"
              >
                <div className="w-16 h-16 sm:mr-5 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <BsHeadset className="text-6xl text-[#149ddd] font-light w-10 h-10" />
                </div>
                <div className="pl-3 md:pl-0 flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-1">
                    <span className="purecounter3">0</span>
                  </h2>
                  <p className="leading-relaxed text-base">
                    <strong>Hours Of Support</strong> I'm always here.
                  </p>
                </div>
              </div>
            </div>
            {/*............. Workers............ */}

            <div className="w-11/12 sm:w-9/12 lg:w-5/12 md:w-5/12 border-2 rounded-lg border-gray-200 border-opacity-50">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex p-2 md:p-4 flex-row"
              >
                <div className="w-16 h-16 sm:mr-5 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <BsPeople className="w-10 h-10 text-6xl text-[#149ddd] font-normal" />
                </div>
                <div className="pl-3 md:pl-0 flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-1">
                    <span className="purecounter4">0</span>
                  </h2>
                  <p className="leading-relaxed text-base">
                    <strong>Hard Workers</strong> Hours Of Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Card