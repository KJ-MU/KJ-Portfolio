import React from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";
export const ProjectCard = ({ project }) => {
  return (
    <div
      data-aos="fade-right"
      className="font-abc mt-20 relative max-w-screen-xsm rounded-lg  shadow-lg bg-superWhite dark:bg-lightperpule dark:hover:shadow-Lightgreen  hover:drop-shadow-2xl transition-all duration-300 ease-in-out"
    >
      <img
        className="rounded-2xl p-3 w-full h-auto"
        src={project.imageUrl}
        alt="Card"
      />

      <div className="flex justify-between items-center px-6 py-4">
        <div className="font-bold text-lg mb-2">
          {" "}
          <p className="  dark:text-white ">{project.title}</p>
          <p className="  dark:text-white font-thin text-xs">{project.info}</p>
        </div>
        <div className="flex gap-4 items-center">
          <a
            className="hover:scale-125 transition-all duration-200 ease-in-out"
            href={project.githuburl}
            target="_blank"
          >
            <VscGithubInverted size={30} />
          </a>
          <a
            className="hover:scale-125 transition-all duration-200 ease-in-out"
            href={project.Url}
            target="_blank"
          >
            <IoIosArrowForward size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};
