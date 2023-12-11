import React from "react";

interface Props {
  name: string;
  svg?: string;
  color: string;
  textSize: string;
}

const SkillTag = ({ name, svg, color, textSize }: Props) => {
  return (
    <div
      className={
        color +
        " " +
        textSize +
        " px-2.5 py-1.5 text-cWhite rounded-full font-medium flex flex-row gap-1 items-center justify-center"
      }
    >
      {svg && svg.length > 0 && (
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
