import React from "react";
import { ProjectCard } from "./ProjectCard";
import prjectData from "./projectData";
import { useState } from "react";

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? prjectData : prjectData.slice(0, 3);

  return (
    <div className="  flex flex-col justify-center items-start md:flex-row">
      <div className="xl:w-3/4  lg:w-4/5 flex flex-col justify-center  mb-10">
        <h1 className="mt-10 text-4xl font-abc font-bold my-10">Projects</h1>
        <div className="flex flex-wrap gap-10 justify-center items-center ">
          {visibleCards.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>{" "}
        {!showAll && prjectData.length > 3 && (
          <button
            className="self-end mt-10 font-abc text-xl font-SemiBold underline hover:decoration-dashed text-lightperpule"
            onClick={() => setShowAll(true)}
          >
            Show All Projects
          </button>
        )}
      </div>{" "}
    </div>
  );
};
