import React from "react";
import ProjectBox from "./ProjectBox";
import { projectArray } from "./projectArray";

const ProjectColumn = () => {
  return (
    <div className="ml-[700px] mr-5 mt-20 w-full">
      {/* Headline */}
      <div className="flex flex-row items-center justify-center mb-32">
        <div className="h-0.5 grow bg-gradient-to-r from-cPurple to-cYellow"></div>
        <h1 className="text-cYellow mx-3 text-3xl">Ausbildung & Projekte</h1>
        <div className="h-0.5 grow bg-gradient-to-l from-cPurple to-cYellow"></div>
      </div>

      {/* Project Boxes */}
      <div className="flex flex-row flex-wrap justify-center gap-20 mx-4">
        {projectArray.map(function (data) {
          return (
            <ProjectBox
              title={data.title}
              key={data.title}
              shortDesc={data.shortDesc}
              skillList={data.tags}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectColumn;
