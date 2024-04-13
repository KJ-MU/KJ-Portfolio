import React from "react";

import { RiInstagramFill } from "react-icons/ri";

import { Link } from "react-router-dom";
import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
export const Footer = () => {
  return (
    <div className=" flex justify-center">
      <div className="h-20 flex justify-between items-center xl:w-3/4  lg:w-4/5 lg:self-center">
        <Link to="/">
          <div className="font-abc text-thin text-sm text-gray hover:text-lightperpule">
            @ 2024 Khadeeja M. Aljabiry
          </div>{" "}
        </Link>

        <div className="flex  gap-8 items-center">
          <a
            className="hidden lg:block hover:text-lightperpule transition-all duration-75"
            href="https://github.com/KJ-MU"
            target="_blank"
          >
            {" "}
            <VscGithubInverted size={30} />
          </a>
          <a
            className="hidden lg:block hover:text-lightperpule transition-all duration-75"
            href="https://www.instagram.com/kj_aljabiry/"
            target="_blank"
          >
            {" "}
            <RiInstagramFill size={30} />
          </a>
          <a
            className="hidden lg:block hover:text-lightperpule transition-all duration-75 "
            href="https://iq.linkedin.com/in/khadeeja-al-jabiry-5a6794246"
            target="_blank"
          >
            {" "}
            <SiLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};
