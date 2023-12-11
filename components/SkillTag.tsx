import React from "react";

interface Props {
  name: string;
  svg: string;
}

const SkillTag = ({ name, svg }: Props) => {
  return (
    <div className="px-2.5 py-1.5 bg-cGray text-cWhite rounded-full text-base font-medium flex flex-row gap-1 items-center justify-center">
      {svg.length > 0 && (
        <div
          className="h-[1lh] w-[1lh]"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      )}
      <div>{name}</div>
    </div>
  );
};

export default SkillTag;
