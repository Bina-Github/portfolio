import React from "react";

interface Props {
  title: string;
  shortDesc: string;
  skillList: Array<string>;
}

const ProjectBox = ({ title, shortDesc, skillList }: Props) => {
  return (
    <div className="text-white h-80 w-80 border-2 border-green-400">
      <h2>{title}</h2>
      <div>{shortDesc}</div>
    </div>
  );
};

export default ProjectBox;
