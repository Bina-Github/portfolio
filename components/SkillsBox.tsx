import React from "react";
import SkillTag from "./SkillTag";

interface Props {
  title?: string;
  skillList: Array<{ name: string; svg?: string }>;
  color: string;
  textSize: string;
}

const SkillsBox = ({ title, skillList, color, textSize }: Props) => {
  return (
    <div>
      {title && <h3 className="text-2xl mb-2">{title}</h3>}
      <div className="flex flex-wrap gap-2">
        {skillList.map(function (data) {
          return (
            <SkillTag
              name={data.name}
              svg={data.svg}
              key={data.name}
              color={color}
              textSize={textSize}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillsBox;
