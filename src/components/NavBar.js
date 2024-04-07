import React from "react";
import { Link } from "react-router-dom";
import hamburgerIcon from "../imges/hamburgerIcon.png";
import { useState, useRef } from "react";
import { MdWbSunny } from "react-icons/md";
import { TbMoonFilled } from "react-icons/tb";
import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { gsap } from "gsap";
export const NavBar = ({ theme, handleTheme, pathname }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      gsap.to(menuRef.current, {
        duration: 0.5,
        height: "270",
        opacity: 1,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(menuRef.current, {
        duration: 0.5,
        height: 0,
        opacity: 0,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <>
      <nav className="flex justify-between  items-center lg:justify-around  top-0 z-10">
        <div className="dark:text-white">
          <Link to="/">
            {" "}
            <h1 className="text-xl h-auto font-abc hover:tracking-widest hover:text-2xl font-bold w-auto transition-all duration-500 ">
              {"<KJ />"}
            </h1>
          </Link>
        </div>
        <div className="flex gap-20">
          <ul className="hidden lg:flex justify-evenly items-center  font-abc font-bold gap-8 ">
            <li className="hover:tracking-wider hover:text-xl transition-all duration-500">
              {" "}
              <Link to="/">// Home </Link>
            </li>
            <li className="hover:tracking-wider hover:text-xl transition-all duration-500">
              {" "}
              <Link to="/about">// About </Link>
            </li>

            <li className="hover:tracking-wider hover:text-xl transition-all duration-500">
              {" "}
              <Link to="/projects">// Projects </Link>
            </li>

            <li className="hover:tracking-wider hover:text-xl transition-all duration-500">
              {" "}
              <Link to="/contact me">// Contact me </Link>
            </li>
          </ul>
          <div>
            <div className="hidden lg:flex  gap-8 items-center">
              <a
                className="hidden lg:block hover:text-Lightgreen transition-all duration-75"
                href="https://github.com/KJ-MU"
                target="_blank"
              >
                {" "}
                <VscGithubInverted size={30} />
              </a>
              <a
                className="hidden lg:block hover:text-Lightgreen transition-all duration-75"
                href="https://www.instagram.com/kj_aljabiry/"
                target="_blank"
              >
                {" "}
                <RiInstagramFill size={30} />
              </a>
              <a
                className="hidden lg:block hover:text-Lightgreen transition-all duration-75 "
                href="https://iq.linkedin.com/in/khadeeja-al-jabiry-5a6794246"
                target="_blank"
              >
                {" "}
                <SiLinkedin size={30} />
              </a>
              {theme === "dark" ? (
                <TbMoonFilled
                  className="m-4 text-white hover:text-Lightgreen transition-all duration-75"
                  onClick={handleTheme}
                  size={30}
                />
              ) : (
                <MdWbSunny
                  className="m-4 hover:text-Lightgreen transition-all duration-75"
                  onClick={handleTheme}
                  size={30}
                />
              )}
            </div>
          </div>
          <img
            onClick={toggleNav}
            className="lg:hidden w-12"
            src={hamburgerIcon}
            alt=""
          />
        </div>
      </nav>

      <ul
        ref={menuRef}
        className={`lg:hidden flex flex-col h-auto items-center gap-8 dark:bg-Darkblue dark:text-white transition-all duration-500`}
        style={{ height: 0, opacity: 0, overflow: "hidden" }}
      >
        <li className="hover:decoration-dashed underline">
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li className="hover:decoration-dashed underline">
          {" "}
          <Link to="/about">About</Link>
        </li>
        <li className="hover:decoration-dashed underline">
          {" "}
          <Link to="/projects">Projects</Link>
        </li>

        <li className="hover:decoration-dashed underline">
          {" "}
          <Link to="/contact me">Contact me </Link>
        </li>

        <li className="flex gap-8 ">
          <a
            className=" hover:text-Lightgreen transition-all duration-75"
            href="https://github.com/KJ-MU"
            target="_blank"
          >
            {" "}
            <VscGithubInverted size={30} />
          </a>
          <a
            className=" hover:text-Lightgreen transition-all duration-75"
            href="https://www.instagram.com/kj_aljabiry/"
            target="_blank"
          >
            {" "}
            <RiInstagramFill size={30} />
          </a>
          <a
            className=" hover:text-Lightgreen transition-all duration-75"
            href="https://iq.linkedin.com/in/khadeeja-al-jabiry-5a6794246"
            target="_blank"
          >
            {" "}
            <SiLinkedin size={30} />
          </a>{" "}
          <div>
            {" "}
            {theme === "dark" ? (
              <TbMoonFilled
                className=" text-white  hover:text-Lightgreen transition-all duration-75 "
                onClick={handleTheme}
                size={30}
              />
            ) : (
              <MdWbSunny
                className=" hover:text-Lightgreen transition-all duration-75 "
                onClick={handleTheme}
                size={30}
              />
            )}
          </div>
        </li>
      </ul>
    </>
  );
};
