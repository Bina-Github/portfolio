import React from "react";
import SkillsBox from "./SkillsBox";
import { skillArray, toolsTechArray } from "./skillArrays";

const DetailsColumn = () => {
  return (
    <div className="h-screen fixed">
      <div className="bg-cYellow h-full w-[700px] absolute -skew-x-[5deg] -inset-x-[80px]"></div>
      <div className="mt-32 ml-14 absolute text-cBlack h-full w-[550px] font-bold">
        {/* Intro-Text */}
        <div className="mb-36">
          <h1 className="text-6xl leading-[80px]">
            Hi, ich bin
            <br />
            <span className="text-cPurple">Sabine Kokot</span>,
          </h1>
          <h2 className="text-5xl leading-[65px]">
            Softwareentwicklerin
            <br />
            aus Willich
          </h2>
        </div>
        {/* Skill, Tool, Tech Auflistungen */}
        <div className="flex flex-col gap-12">
          <SkillsBox
            title="Skills"
            skillList={skillArray}
            color="bg-cGray"
            textSize="text-base"
          />
          <SkillsBox
            title="Tools & Technologien"
            skillList={toolsTechArray}
            color="bg-cGray"
            textSize="text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsColumn;
