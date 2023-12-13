import React from "react";

type Props = {
  projectData: {
    title: string;
    shortDesc: string;
    longDesc: string;
    tags: Array<{ name: string }>;
  };
};

const ProjectDetails = ({ projectData }: Props) => {
  return (
    <div>
      <h1 className="text-4xl leading-[3rem] mb-8 font-semibold">
        {projectData.title}
      </h1>
      <p
        className="text-xl [&>a]:text-cPurple [&>a]:font-semibold [&>a:hover]:underline"
        dangerouslySetInnerHTML={{ __html: projectData.longDesc }}
      ></p>
    </div>
  );
};

export default ProjectDetails;
