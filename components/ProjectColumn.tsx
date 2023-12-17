import React, { useState } from 'react'
import ProjectBox from './ProjectBox'
import { projectArray } from './projectArray'

type ProjectColumnProps = {
  activeProject: number
  handleClick: (projectId: number) => void
}

const ProjectColumn = ({ activeProject, handleClick }: ProjectColumnProps) => {
  return (
    <div className="w-full px-6 pt-14 md:ml-[400px] md:pl-0 md:pr-5 lg:ml-[600px]">
      {/* Headline */}
      <div className="mb-14 flex flex-row items-center justify-center">
        <div className="from-cPurple to-cYellow h-0.5 grow bg-gradient-to-r"></div>
        <h1 className="text-cYellow mx-3 text-2xl lg:text-3xl">Ausbildung & Projekte</h1>
        <div className="from-cPurple to-cYellow h-0.5 grow bg-gradient-to-l"></div>
      </div>

      {/* Project Boxes for big screens */}
      <div className="hidden flex-row flex-wrap justify-evenly gap-6 md:flex">
        {projectArray.map(function (data, index) {
          let i = index
          let active = activeProject === i
          index++
          return (
            <ProjectBox
              id={i}
              title={data.title}
              key={'projectBox' + index}
              shortDesc={data.shortDesc}
              longDesc=""
              skillList={data.tags}
              active={active}
              handleClick={handleClick}
            />
          )
        })}
      </div>

      {/* Project Boxes small screens */}
      <div className="flex flex-col items-center gap-6 md:hidden">
        {projectArray.map(function (data, index) {
          let i = index
          index++
          return (
            <ProjectBox
              id={i}
              title={data.title}
              key={'projectBox' + index}
              shortDesc={data.shortDesc}
              longDesc={data.longDesc}
              skillList={data.tags}
              active={false}
              handleClick={null}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProjectColumn
