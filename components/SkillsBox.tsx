import React, { ComponentPropsWithoutRef } from "react";
import SkillTag from "./SkillTag";

type Props = ComponentPropsWithoutRef<"div"> & {
  title?: string;
  skillList: Array<{ name: string; svg?: string }>;
};

const SkillsBox = ({ title, skillList, className }: Props) => {
  return (
    <div>
      {title && <h3 className="lg:text-2xl text-xl mb-2">{title}</h3>}
      <div className="flex flex-wrap gap-2">
        {skillList.map(function (data) {
          return (
            <SkillTag
              name={data.name}
              svg={data.svg}
              key={data.name}
              className={className}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillsBox;
