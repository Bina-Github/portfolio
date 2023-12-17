import React, { useState } from 'react'
import SkillsBox from './SkillsBox'
import classNames from 'classnames'

type Props = {
  id: number
  title: string
  shortDesc: string
  longDesc: string
  skillList: Array<{ name: string; svg?: string }>
  active: boolean
  handleClick: ((projectId: number) => void) | null
}

const ProjectBox = ({ id, title, shortDesc, longDesc, skillList, active, handleClick }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  let handleClickFunction
  if (handleClick === null) {
    handleClickFunction = function () {
      setIsExpanded((prev) => !prev)
    }
  } else {
    handleClickFunction = () => handleClick(id)
  }

  return (
    <div
      onClick={handleClickFunction}
      className="group relative mx-8 mb-4 rounded-2xl p-4  hover:cursor-pointer md:mx-2 md:-ml-4  md:h-[22rem] md:w-[20rem] lg:ml-0 lg:h-[20rem] lg:w-[32rem] lg:p-8"
    >
      <div
        className={classNames(
          'absolute -inset-[2px] rounded-2xl opacity-0 transition-all duration-700 ease-in-out',
          {
            'from-cYellow to-cPurple bg-gradient-to-br opacity-100 shadow-[0_0_16px_0_rgba(252,186,3,0.3)]':
              active
          }
        )}
      ></div>
      <div className="bg-cBlack absolute inset-0 rounded-2xl" aria-hidden="true"></div>
      <div className="relative flex flex-col text-white">
        <div className="flex h-[2lh] items-end text-lg font-medium lg:text-2xl">
          <h2>{title}</h2>
        </div>

        <div className="my-2 h-0.5 bg-white"></div>

        {!isExpanded && <p className="text-base lg:text-lg">{shortDesc}</p>}
        {isExpanded && (
          <p
            className="[&>a]:text-cYellow text-base lg:text-lg [&>a:hover]:underline"
            dangerouslySetInnerHTML={{ __html: longDesc }}
          ></p>
        )}

        {(active || isExpanded) && (
          <p className="text-cYellow mb-4 text-base opacity-90 group-hover:underline lg:text-lg">
            &gt; Weniger anzeigen
          </p>
        )}

        {!active && !isExpanded && (
          <p className="text-cYellow mb-4 text-base opacity-90 group-hover:underline lg:text-lg">
            &gt; Mehr Infos
          </p>
        )}

        <SkillsBox skillList={skillList} className="bg-cGray text-sm" />
      </div>
    </div>
  )
}

export default ProjectBox
