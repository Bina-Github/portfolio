import React from "react";
import SkillsBox from "./SkillsBox";

type Props = {
  title: string;
  shortDesc: string;
  skillList: Array<{ name: string; svg?: string }>;
};

const ProjectBox = ({ title, shortDesc, skillList }: Props) => {
  return (
    <div className="text-white h-[20rem] w-[26rem] rounded-2xl flex flex-col mb-6 mx-4">
      <div className="flex items-end text-2xl font-medium h-[2lh]">
        <h2>{title}</h2>
      </div>

      <div className="h-0.5 bg-white my-2"></div>

      <p className="text-lg mb-4">{shortDesc}</p>

      <SkillsBox skillList={skillList} className="bg-cGray text-sm" />
    </div>
  );
};

export default ProjectBox;
