import React, { useRef, useState } from "react";
import { BsFillGeoAltFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: name,
      email_id: email,
      message: message,
      subject: subject,
    };
    console.log("i am parama", templateParams);
    emailjs
      .send(
        "service_0udm23a",
        "template_5bd0c1q",
        templateParams,
        "bq9AuM2RUfQWUcIcu"
      )
      .then(
        (result) => {
          console.log(result);
          setEmail("");
          setName("");
          setMessage("");
          setSubject("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className={`h-auto w-full flex flex-col justify-start gap-8 pt-16 px-4 sm:px-14 `}
    >
      <div className="to-left">
        <span className="line-border relative font-bold text-4xl text-[#173b6c]">
          Contact
        </span>
        <p className="mt-10 text-lg leading-8">
          Let's Connect: Reach out and let's start a conversation about your
          next exciting project or collaboration. I'm just a message away!
        </p>
        <section
          className={`body-font relative  h-auto w-full flex flex-col justify-start gap-8`}
        >
          <div className="w-full py-10 flex flex-wrap">
            <div className="flex flex-wrap" data-aos="fade-in">
              <div className="w-full lg:w-5/12">
                <div className="info px-2 bg-white shadow-md">
                  <div
                    data-aos="fade-in"
                    className=" flex p-2 flex-row mb-3 w-full sm:w-11/12  md:w-5/12 lg:w-[82%]  group "
                  >
                    <div className="w-9 h-9 mr-4 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#149ddd] hover:bg-white  text-indigo-500 border-[1px] border-[#149ddd] flex-shrink-0 transition-all duration-1000 delay-75 ease-in-out">
                      <BsFillGeoAltFill className="hover:text-[#149ddd]  text-white font-light w-6 h-6" />
                    </div>
                    <div className="info bg-white pl-3 md:pl-0 flex-grow">
                      <span className="text-xl font-semibold  hover:text-[#149ddd] text-gray-800">
                        Location:
                      </span>
                      <p className="leading-relaxed text-base text-gray-700">
                        Kotka Parade, Serai Naurang, Lakki Marwat, KPK, Pakistan
                      </p>
                    </div>
                  </div>
                  <div
                    data-aos="fade-in"
                    className=" flex p-2 flex-row mb-3 w-full sm:w-11/12  md:w-5/12 lg:w-[82%] group "
                  >
                    <div className=" w-9 h-9 mr-4 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#149ddd] hover:bg-white  text-indigo-500 border-[1px] border-[#149ddd] flex-shrink-0 transition-all duration-1000 delay-75 ease-in-out">
                      <CiMail className="hover:text-[#149ddd]  text-white font-light w-6 h-6" />
                    </div>
                    <div className="info bg-white pl-3 md:pl-0 flex-grow">
                      <span className="text-xl font-semibold  hover:text-[#149ddd] text-gray-800">
                        Email:
                      </span>
                      <p className="leading-relaxed text-base text-gray-700">
                        umarktk12141@gmail.com
                      </p>
                    </div>
                  </div>
                  <div
                    data-aos="fade-in"
                    className=" flex p-2 flex-row mb-3 w-full sm:w-11/12  md:w-5/12 lg:w-[82%]  group "
                  >
                    <div className=" w-9 h-9 mr-4 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#149ddd] hover:bg-white  text-indigo-500 border-[1px] border-[#149ddd] flex-shrink-0 transition-all duration-1000 delay-75 ease-in-out">
                      <IoCallOutline className="hover:text-[#149ddd]  text-white font-light w-6 h-6" />
                    </div>
                    <div className="info bg-white pl-3 md:pl-0 flex-grow">
                      <span className="text-xl font-semibold  hover:text-[#149ddd] text-gray-800">
                        Call:
                      </span>
                      <p className="leading-relaxed text-base text-gray-700">
                        +92 302-8022243
                      </p>
                    </div>
                  </div>
                  <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                    frameBorder="0"
                    style={{ border: 0, width: "100%", height: "290px" }}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="w-full flex-1 mt-5 lg:mt-0 mx-5  info px-2 bg-white shadow-md">
                <form className="h-full" onSubmit={sendEmail}>
                  <div className="flex flex-wrap -mx-4  ">
                    <div className="w-full md:w-1/2 px-4 mb-3">
                      <label htmlFor="name" className="text-lg">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label htmlFor="email" className="text-lg">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email_id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full  mb-4">
                    <label htmlFor="subject" className="text-lg">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                  <div className="w-full h-72 mt-4">
                    <label htmlFor="message" className="text-lg">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      id="message"
                      rows="10"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-full text-base outline-none text-gray-700 py-2 mb-5 px-3 resize-none transition-colors duration-200 ease-in-out"
                      required
                    ></textarea>
                  </div>

                  <div className="text-center px-4 mt-10">
                    <button
                      type="submit"
                      className="py-2 px-6 mt-3 bg-indigo-500 rounded text-white text-lg font-semibold hover:bg-indigo-600 transition duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
