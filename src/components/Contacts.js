import React from "react";
import { useState } from "react";
import Animation from "./Animation";
import instagram from "../imges/instagram.png";
import linkedin from "../imges/linkedin.png";

export const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col justify-center my-10">
      <div
        className=" xl:w-3/4  lg:w-4/5 flex flex-col justify-center lg:self-center "
        data-aos="fade-left"
      >
        {" "}
        <h1 className="mb-10 text-4xl font-abc font-bold my-10">Contact Me</h1>
        <div>Get in touch with me via social media or email.</div>
        <div className="flex items-center flex-wrap justify-center md:justify-between">
          <div className="flex gap-10 justify-start">
            <div>
              <a
                className="flex justify-center items-center gap-2 font-abc text-lg font-SemiBold"
                href="https://www.instagram.com/kj_aljabiry/"
                target="_blank"
              >
                {" "}
                <img
                  className="  h-auto w-14 my-10 "
                  src={instagram}
                  alt="personal Photo"
                />{" "}
                Instagram
              </a>{" "}
            </div>
            <div>
              {" "}
              <a
                className="flex justify-center items-center gap-2 font-abc text-lg font-SemiBold"
                href="https://iq.linkedin.com/in/khadeeja-al-jabiry-5a6794246"
                target="_blank"
              >
                {" "}
                <img
                  className="h-auto w-14 my-10 "
                  src={linkedin}
                  alt="personal Photo"
                />
                Linkedin
              </a>{" "}
            </div>
          </div>
          <div className="flex-shrink">
            {" "}
            <Animation />
          </div>
        </div>
        <h1
          className="mb-10 text-2xl font-abc font-regular my-10"
          data-aos="fade-down"
        >
          Send me an email
        </h1>
        <form onSubmit={handleSubmit}>
          <div
            className="flex flex-col md:flex-row md:justify-between   gap-10 justify-start font-thin font-abc text-lg "
            data-aos="fade-down"
          >
            <div className="flex flex-col gap-10 ">
              <div>
                <label htmlFor="name" className="">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full h-10 p-2 my-2 rounded dark:text-Darkblue hover:brightness-75 "
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full h-10 p-2 my-2 dark:text-Darkblue rounded hover:brightness-75"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="">
                Message
              </label>
              <textarea
                className="w-full h-full p-2 my-2 dark:text-Darkblue rounded hover:brightness-75"
                placeholder="Your Message"
                value={message}
                rows={5}
                cols={50}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className=" mt-4 text-white font-abc font-bold bg-lightperpule rounded p-2 hover:brightness-75 "
            data-aos="fade-down"
          >
            Submit
          </button>
        </form>{" "}
      </div>
    </div>
  );
};
