import React from "react";

interface Props {
  name: string;
  svg: string;
}

const SkillTag = ({ name, svg }: Props) => {
  return (
    <div className="pl-2 pr-3 py-1.5 bg-cGray text-cWhite rounded-full text-base font-medium flex flex-row gap-1 items-center justify-center">
      <div className="h-5 w-5" dangerouslySetInnerHTML={{ __html: svg }} />
      <div>{name}</div>
    </div>
  );
};

export default SkillTag;
