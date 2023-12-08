import React from "react";
import ProjectBox from "./ProjectBox";

const ProjectColumn = () => {
  return (
    <div className="ml-[700px] mr-5 mt-12 w-full">
      {/* Headline */}
      <div className="flex flex-row items-center justify-center mb-12">
        <div className="h-0.5 grow bg-gradient-to-r from-cPurple to-cYellow"></div>
        <h1 className="text-cYellow mx-3 text-3xl">Ausbildung & Projekte</h1>
        <div className="h-0.5 grow bg-gradient-to-l from-cPurple to-cYellow"></div>
      </div>

      {/* Project Boxes */}
      <ProjectBox />
    </div>
  );
};

export default ProjectColumn;
