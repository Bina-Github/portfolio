import React from 'react'
import ProjectBox from './ProjectBox'
import { projectArray } from './projectArray'

type Props = {
  activeProject: number
  handleClick: (projectId: number) => void
}

const ProjectColumn = ({ activeProject, handleClick }: Props) => {
  return (
    <div className="w-full px-6 pt-14 md:ml-[400px] md:pl-0 md:pr-5 lg:ml-[600px]">
      {/* Headline */}
      <div className="mb-14 flex flex-row items-center justify-center">
        <div className="h-0.5 grow bg-gradient-to-r from-cPurple to-cYellow"></div>
        <h1 className="mx-3 text-2xl text-cYellow lg:text-3xl">Ausbildung & Projekte</h1>
        <div className="h-0.5 grow bg-gradient-to-l from-cPurple to-cYellow"></div>
      </div>

      {/* Project Boxes md screen */}
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
              skillList={data.tags}
              active={active}
              handleClick={handleClick}
            />
          )
        })}
      </div>

      {/* Project Boxes sm screen */}
      <div className="flex flex-row flex-wrap justify-evenly gap-6 md:hidden">
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
              skillList={data.tags}
              active={active}
              handleClick={() => {}}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProjectColumn
