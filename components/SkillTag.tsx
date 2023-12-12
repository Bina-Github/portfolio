import React, { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  name: string;
  svg?: string;
};

const SkillTag = ({ name, svg, className }: Props) => {
  return (
    <div
      className={
        className +
        " px-2.5 py-1.5 text-cWhite rounded-full font-medium flex flex-row gap-1 items-center justify-center"
      }
    >
      {svg && svg.length > 0 && (
        <p
          className="h-[1lh] w-[1lh]"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      )}
      <p>{name}</p>
    </div>
  );
};

export default SkillTag;
