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
      <h1 className="lg:text-4xl text-3xl lg:leading-[3rem] leading-[2rem] font-semibold">
        {projectData.title}
      </h1>
      <p className="lg:my-4 my-2 lg:text-lg text-base text-cGray font-semibold">
        {projectData.time}
      </p>
      <p
        className="lg:text-xl text-base [&>a]:text-cPurple [&>a]:font-semibold [&>a]:underline [&>a:hover]:text-cBlack"
        dangerouslySetInnerHTML={{ __html: projectData.longDesc }}
      ></p>
    </div>
  );
};

export default ProjectDetails;
