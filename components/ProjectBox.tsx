import React from 'react'
import SkillsBox from './SkillsBox'
import classNames from 'classnames'

type Props = {
  id: number
  title: string
  shortDesc: string
  skillList: Array<{ name: string; svg?: string }>
  active: boolean
  handleClick: (projectId: number) => void
}

const ProjectBox = ({ id, title, shortDesc, skillList, active, handleClick }: Props) => {
  return (
    <div
      onClick={() => handleClick(id)}
      className="group relative mx-2 -ml-4 mb-4 h-[22rem] w-[20rem] rounded-2xl  p-4 hover:cursor-pointer lg:ml-0 lg:h-[20rem] lg:w-[32rem] lg:p-8"
    >
      <div
        className={classNames(
          'absolute -inset-[2px] rounded-2xl opacity-0 transition-all duration-700 ease-in-out',
          {
            'bg-gradient-to-br from-cYellow to-cPurple opacity-100 shadow-[0_0_16px_0_rgba(252,186,3,0.3)]':
              active
          }
        )}
      ></div>
      <div className="absolute inset-0 rounded-2xl bg-cBlack" aria-hidden="true"></div>
      <div className="relative flex flex-col text-white">
        <div className="flex h-[2lh] items-end text-lg font-medium lg:text-2xl">
          <h2>{title}</h2>
        </div>

        <div className="my-2 h-0.5 bg-white"></div>

        <p className="text-base lg:text-lg">{shortDesc}</p>

        {active && (
          <p className="mb-4 text-base text-cYellow opacity-90 group-hover:underline lg:text-lg">
            &gt; Weniger anzeigen
          </p>
        )}

        {!active && (
          <p className="mb-4 text-base text-cYellow opacity-90 group-hover:underline lg:text-lg">
            &gt; Mehr Infos
          </p>
        )}

        <SkillsBox skillList={skillList} className="bg-cGray text-sm" />
      </div>
    </div>
  )
}

export default ProjectBox
