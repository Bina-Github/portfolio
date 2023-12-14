import React from "react";

type Props = {
  projectData: {
    title: string;
    shortDesc: string;
    longDesc: string;
    tags: Array<{ name: string }>;
    time: string;
  };
};

const ProjectDetails = ({ projectData }: Props) => {
  return (
    <div>
      <h1 className="text-4xl leading-[3rem] mb-5 font-semibold">
        {projectData.title}
      </h1>
      <p className="mb-5 text-lg text-cGray font-semibold">
        {projectData.time}
      </p>
      <p
        className="text-xl [&>a]:text-cPurple [&>a]:font-semibold [&>a]:underline [&>a:hover]:text-cBlack"
        dangerouslySetInnerHTML={{ __html: projectData.longDesc }}
      ></p>
    </div>
  );
};

export default ProjectDetails;
