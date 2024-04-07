import React from "react";
import "tailwindcss/tailwind.css";

import { Projects } from "./Projects";
import { Header } from "./Header";
import { Contacts } from "./Contacts";
export const Home = ({ theme }) => {
  return (
    <div className={theme === "dark" && "bg-Darkblue text-white"}>
      <div>
        <Header theme={theme} />
      </div>

      <div>
        <Projects />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};
