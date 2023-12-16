import React from "react";
import ProjectBox from "./ProjectBox";
import { projectArray } from "./projectArray";

type Props = {
  activeProject: number;
  handleClick: (projectId: number) => void;
};

const ProjectColumn = ({ activeProject, handleClick }: Props) => {
  return (
    <div className="lg:ml-[600px] md:ml-[400px] md:pr-5 md:pl-0 px-6 pt-14 w-full">
      {/* Headline */}
      <div className="flex flex-row items-center justify-center mb-14">
        <div className="h-0.5 grow bg-gradient-to-r from-cPurple to-cYellow"></div>
        <h1 className="text-cYellow mx-3 lg:text-3xl text-2xl">
          Ausbildung & Projekte
        </h1>
        <div className="h-0.5 grow bg-gradient-to-l from-cPurple to-cYellow"></div>
      </div>

      {/* Project Boxes md screen */}
      <div className="md:flex hidden flex-row gap-6 flex-wrap justify-evenly">
        {projectArray.map(function (data, index) {
          let i = index;
          let active = activeProject === i;
          index++;
          return (
            <ProjectBox
              id={i}
              title={data.title}
              key={"projectBox" + index}
              shortDesc={data.shortDesc}
              skillList={data.tags}
              active={active}
              handleClick={handleClick}
            />
          );
        })}
      </div>

      {/* Project Boxes sm screen */}
      <div className="md:hidden flex flex-row gap-6 flex-wrap justify-evenly">
        {projectArray.map(function (data, index) {
          let i = index;
          let active = activeProject === i;
          index++;
          return (
            <ProjectBox
              id={i}
              title={data.title}
              key={"projectBox" + index}
              shortDesc={data.shortDesc}
              skillList={data.tags}
              active={active}
              handleClick={() => {}}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectColumn;
