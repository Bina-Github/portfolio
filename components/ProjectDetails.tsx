import React from 'react'

type Props = {
  projectData: {
    title: string
    shortDesc: string
    longDesc: string
    tags: Array<{ name: string }>
    time: string
  }
}

const ProjectDetails = ({ projectData }: Props) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold leading-[2rem] lg:text-4xl lg:leading-[3rem]">
        {projectData.title}
      </h1>
      <p className="my-2 text-base font-semibold text-cGray lg:my-4 lg:text-lg">
        {projectData.time}
      </p>
      <p
        className="text-base lg:text-xl [&>a:hover]:text-cBlack [&>a]:font-semibold [&>a]:text-cPurple [&>a]:underline"
        dangerouslySetInnerHTML={{ __html: projectData.longDesc }}
      ></p>
    </div>
  )
}

export default ProjectDetails
