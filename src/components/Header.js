import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiNodedotjs } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiVisualstudio } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiRedux } from "react-icons/si";

import React, { useEffect, useRef, useState } from "react";
import m13me from "../imges/m13me.png";
import { gsap } from "gsap";
import Aos from "aos";
import "aos/dist/aos.css";
export const Header = ({ theme }) => {
  const imgRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    Aos.init({ duration: 750 });
  });
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScrollDirection = scrollY > 0 ? "down" : "up";
      if (scrollDirection !== newScrollDirection) {
        setScrollDirection(newScrollDirection);
      }

      let scaleX = 1 - (scrollY / window.innerHeight) * 13.3;
      if (scaleX < -1) {
        scaleX = -1;
      }
      if (scaleX > 1) {
        scaleX = 1;
      }

      gsap.to(imgRef.current, { scaleX: scaleX });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection]);

  useEffect(() => {
    if (scrollDirection === "down") {
      gsap.to(imgRef.current, { filter: "grayscale(100%)" });
    } else {
      gsap.to(imgRef.current, { filter: "none" });
    }
  }, [scrollDirection]);

  useEffect(() => {
    gsap.to(imgRef.current, { filter: "none" });
  }, []);
  return (
    <div
      className={theme === "dark" ? "bg-Darkblue text-white my-10" : " my-10"}
    >
      <div className="py-10 flex justify-center">
        <header
          className="xl:w-3/4  lg:w-4/5 flex flex-col justify-center items-center md:flex-row"
          data-aos="fade-down"
        >
          <h1
            data-aos="fade-right"
            className="md:mr-0 xl:text-4xl xl:mt-20 lg:mt-0 md:mt-10 md:text-2xl border-b border-dashed  pb-5 flex justify-center flex-wrap gap-3 items-end text-4xl font-thin"
          >
            FULL
            <strong className="p-0 xl:text-6xl text-5xl font-bold">
              {" "}
              STACK{" "}
            </strong>
            WEB{" "}
            <strong className=" p-0 xl:text-6xl text-5xl font-bold">
              {" "}
              DEVELOPER{" "}
            </strong>
          </h1>

          <div>
            {" "}
            <img
              ref={imgRef}
              className="z-10 md:h-auto md:w-full h-60 w-auto my-10 "
              src={m13me}
              alt="personal Photo"
            />
          </div>
          <p
            data-aos="fade-left"
            className="text-xl text-justify md:pl-10 0 xl:w-2/4 lg:w-4/6 xl:mb-36 lg:mb-20 md:mb-16 font-abc border-b border-dashed pb-5 md:flex md:flex-wrap md:justify-left md:items-start"
          >
            Hi!, I'm Khadeeja a passionate React JS developer on a mission to
            craft web solutions that not only shine but also spark joy!✨
          </p>
        </header>
      </div>
      <div className="   flex flex-col justify-center items-start md:flex-row">
        <div className="xl:w-3/4  lg:w-4/5 flex flex-col justify-center items-start ">
          <h1
            className="text-4xl font-abc font-bold my-10"
            data-aos="fade-down"
          >
            Skills
          </h1>
          <p className="mb-16 text-justify text-xl " data-aos="fade-down">
            Proficient in HTML, CSS, and JS, with experience in building small
            and medium web applications using React. Skilled in developing
            custom plugins, implementing features, animations, and coding
            interactive layouts. Familiarity with integrating libraries like
            Tailwind CSS to enhance styling and streamline development
            workflows.
          </p>{" "}
          <div
            data-aos="fade-down"
            className="flex flex-wrap gap-8 justify-center self-center items-center"
          >
            <div className="gap-2 transition-all ease-in-out hover:scale-110 duration-300 flex flex-col justify-center items-center">
              <SiJavascript size={75} />
              <p className="font-abc ">JavaScript</p>
            </div>
            <div className="gap-2 transition-all ease-in-out hover:scale-110 duration-300 flex flex-col justify-center items-center">
              <SiHtml5 size={75} />

              <p className="font-abc ">HTML5</p>
            </div>
            <div className="gap-2 transition-all ease-in-out hover:scale-110 duration-300 flex flex-col justify-center items-center">
              <SiCss3 size={75} />

              <p className="font-abc ">CSS3</p>
            </div>
            <div className="gap-2 transition-all ease-in-out hover:scale-110 duration-300 flex flex-col justify-center items-center">
              <GrReactjs size={75} />

              <p className="font-abc ">React JS</p>
            </div>
            <div className="gap-2 transition-all ease-in-out hover:scale-110 duration-300 flex flex-col justify-center items-center">
              <SiNodedotjs size={75} />

              <p className="font-abc ">Node JS</p>
            </div>
            <div className="gap-2 transition-all ease-in-out hover:scale-110 duration-300 flex flex-col justify-center items-center">
              <SiBootstrap size={75} />

              <p className="font-abc ">Bootstrap</p>
            </div>
            <div className="gap-2 transition-all ease-in-out hover:scale-110 duration-300 flex flex-col justify-center items-center">
              <FaGitAlt size={75} />

              <p className="font-abc ">Git</p>
            </div>
            <div className="gap-2 transition-all ease-in-out hover:scale-110 duration-300 flex flex-col justify-center items-center">
              <SiVisualstudio size={75} />

              <p className="font-abc ">Visualstudio</p>
            </div>
            <div className="gap-2 transition-all ease-in-out hover:scale-110 duration-300 flex flex-col justify-center items-center">
              <SiRedux size={75} />

              <p className="font-abc ">Redux</p>
            </div>
            <div className="gap-2 transition-all ease-in-out hover:scale-110 duration-300 flex flex-col justify-center items-center">
              <IoLogoFigma size={75} />
              <p className="font-abc ">Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
