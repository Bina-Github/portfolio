import React from "react";
import ProjectBox from "./ProjectBox";
import { projectArray } from "./projectArray";

type Props = {
  activeProject: number | null;
  handleClick: (projectId: number) => void;
};

const ProjectColumn = ({ activeProject, handleClick }: Props) => {
  return (
    <div className="ml-[700px] pr-5 pt-20 w-full">
      {/* Headline */}
      <div className="flex flex-row items-center justify-center mb-24">
        <div className="h-0.5 grow bg-gradient-to-r from-cPurple to-cYellow"></div>
        <h1 className="text-cYellow mx-3 text-3xl">Ausbildung & Projekte</h1>
        <div className="h-0.5 grow bg-gradient-to-l from-cPurple to-cYellow"></div>
      </div>

      {/* Project Boxes */}
      <div className="flex flex-row flex-wrap justify-evenly mx-4">
        {projectArray.map(function (data, index) {
          let i = index;
          let active = activeProject === i;
          index++;
          return (
            <ProjectBox
              id={i}
              title={data.title}
              key={data.title}
              shortDesc={data.shortDesc}
              skillList={data.tags}
              active={active}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectColumn;
