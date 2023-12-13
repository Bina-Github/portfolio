import React from "react";
import SkillsBox from "./SkillsBox";
import classNames from "classnames";

type Props = {
  id: number;
  title: string;
  shortDesc: string;
  skillList: Array<{ name: string; svg?: string }>;
  active: boolean;
  handleClick: (projectId: number) => void;
};

const ProjectBox = ({
  id,
  title,
  shortDesc,
  skillList,
  active,
  handleClick,
}: Props) => {
  return (
    <div
      onClick={() => handleClick(id)}
      className="relative h-[20rem] w-[26rem] rounded-2xl p-8 mb-6 mx-2 hover:cursor-pointer"
    >
      <div
        className={classNames(
          "absolute opacity-0 -inset-[2px] rounded-2xl transition-all ease-in-out duration-700",
          {
            "opacity-100 bg-gradient-to-br from-cYellow to-cPurple shadow-[0_0_16px_0_rgba(252,186,3,0.3)]":
              active,
          }
        )}
      ></div>
      <div
        className="absolute inset-0 bg-cBlack rounded-2xl"
        aria-hidden="true"
      ></div>
      <div className="relative text-white flex flex-col">
        <div className="flex items-end text-2xl font-medium h-[2lh]">
          <h2>{title}</h2>
        </div>

        <div className="h-0.5 bg-white my-2"></div>

        <p className="text-lg mb-4">{shortDesc}</p>

        <SkillsBox skillList={skillList} className="bg-cGray text-sm" />
      </div>
    </div>
  );
};

export default ProjectBox;
