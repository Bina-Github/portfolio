import React from 'react'

type ProjectDetailsProps = {
  projectData: {
    title: string
    shortDesc: string
    longDesc: string
    tags: Array<{ name: string }>
    time: string
  }
}

const ProjectDetails = ({ projectData }: ProjectDetailsProps) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold leading-[2rem] lg:text-4xl lg:leading-[3rem]">
        {projectData.title}
      </h1>
      <p className="text-cGray my-2 text-base font-semibold lg:my-4 lg:text-lg">
        {projectData.time}
      </p>
      <p
        className="[&>a:hover]:text-cBlack [&>a]:text-cPurple text-base lg:text-xl [&>a]:font-semibold [&>a]:underline"
        dangerouslySetInnerHTML={{ __html: projectData.longDesc }}
      ></p>
    </div>
  )
}

export default ProjectDetails
