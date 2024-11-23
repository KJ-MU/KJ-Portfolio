import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Aos from "aos";
import "aos/dist/aos.css";
import landingPage from "../imges/courses page image.png";
// Import icons from react-icons
import { GrReactjs } from "react-icons/gr";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { FaRegFileAlt } from "react-icons/fa";
import { SiJsonwebtokens } from "react-icons/si";
import { FaFileUpload } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const project = {
  title: "Nerdify",
  video:
    "https://firebasestorage.googleapis.com/v0/b/nerdify-3b431.appspot.com/o/nerdifyshowercase.mp4?alt=media&token=0dfed569-9060-4d61-97ca-305607c9bb51",
  image: landingPage,
  description:
    "Nerdify is a transformative platform designed to address the challenges faced by students, such as the high costs of education, overwhelming resources, lack of direction, and the daily struggles of traffic and time management. It is a one-stop solution that enables students to collaborate, learn, earn, and save time while building a strong community of like-minded individuals. At its core, Nerdify empowers students to turn their knowledge into opportunities by teaching others. Whether you're sharing your expertise or learning from others, Nerdify is built to create a cycle of learning through teaching—a win-win for everyone.",
  techStack: [
    { name: "React", icon: <GrReactjs size={50} /> },
    { name: "JavaScript", icon: <SiJavascript size={50} /> },
    { name: "Node.js", icon: <FaNodeJs size={50} /> },
    { name: "MongoDB", icon: <SiMongodb size={50} /> },
    { name: "Express.js", icon: <SiExpress size={50} /> },
    { name: "Firebase", icon: <SiFirebase size={50} /> },
    { name: "Redux Toolkit", icon: <SiRedux size={50} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={50} /> },
    { name: "Axios", icon: <SiAxios size={50} /> },
    { name: "JWT", icon: <SiJsonwebtokens size={50} /> },
    { name: "Multer", icon: <FaFileUpload size={50} /> },
    { name: "Quill", icon: <FaEdit size={50} /> },
    { name: "Formik", icon: <FaRegFileAlt size={50} /> },

    // Add more techs as needed
  ],
  links: [{ label: "GitHub", url: "https://github.com/KJ-MU/Nerdify" }],
};

// Component
export const NerdifyPage = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 750 });
  }, []);

  useEffect(() => {
    gsap.from(imgRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-lightgray min-h-screen px-5 md:px-20">
      <div className="xl:w-3/4 lg:w-4/5 flex flex-col justify-center items-center">
        <h1
          className="text-4xl font-abc font-bold mt-10 mb-6 text-center"
          data-aos="fade-down"
        >
          {project.title}
        </h1>

        <video
          src={project.video}
          controls
          className="w-full max-w-3xl rounded-md shadow-lg mb-10"
          data-aos="fade-up"
        />
        <p
          className="text-lg text-justify mb-8 text-darkgray font-abc leading-relaxed"
          data-aos="fade-up"
        >
          {project.description}
        </p>

        <div className="w-full">
          <h2 className="text-2xl font-abc font-bold mb-4 text-left">
            Technologies Used
          </h2>
          <div
            className="flex flex-wrap gap-8 justify-center items-center"
            data-aos="fade-up"
          >
            {project.techStack.map((tech, index) => (
              <div
                key={index}
                className="mt-4 gap-2 transition-all ease-in-out hover:scale-110 duration-300 flex flex-col justify-center items-center"
              >
                {tech.icon}
                <p className="font-abc">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-10 mb-5">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lightperpule text-white px-4 py-2 rounded-md font-abc font-bold transition-all hover:bg-lightblue duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
