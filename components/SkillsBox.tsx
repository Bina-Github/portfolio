import React from "react";
import SkillTag from "./SkillTag";

interface Props {
  title: string;
  skillList: Array<{ name: string; svg: string }>;
}

const SkillsBox = ({ title, skillList }: Props) => {
  return (
    <div>
      <h3 className="text-2xl">{title}</h3>
      <div className="flex flex-wrap gap-2 mt-3 mb-12">
        {skillList.map(function (data) {
          return <SkillTag name={data.name} svg={data.svg} key={data.name} />;
        })}
      </div>
    </div>
  );
};

export default SkillsBox;
