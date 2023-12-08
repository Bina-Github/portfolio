import React from "react";
import SkillsBox from "./SkillsBox";
import { skillArray, toolsTechArray } from "./skillArrays";

const DetailsColumn = () => {
  return (
    <>
      <div className="bg-cYellow h-screen w-[700px] -skew-x-[5deg] absolute -inset-x-[80px]"></div>
      <div className="mt-32 ml-14 text-cBlack h-screen w-[550px] absolute font-bold">
        <div className="mb-40">
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
        <SkillsBox title="Skills" skillList={skillArray} />
        <SkillsBox title="Tools & Technologien" skillList={toolsTechArray} />
      </div>
    </>
  );
};

export default DetailsColumn;
