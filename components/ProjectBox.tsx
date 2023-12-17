import React, { useState } from 'react'
import SkillsBox from './SkillsBox'
import classNames from 'classnames'

type ProjectBoxProps = {
  id: number
  title: string
  shortDesc: string
  longDesc: string
  skillList: Array<{ name: string; svg?: string }>
  active: boolean
  handleClick: ((projectId: number) => void) | null
}

const ProjectBox = ({
  id,
  title,
  shortDesc,
  longDesc,
  skillList,
  active,
  handleClick
}: ProjectBoxProps) => {
  // Prop "active" is always false on small screens and can't be changed on small screens
  // State "isExpanded" is always false on big screens and can't be changed on big screens
  const [isExpanded, setIsExpanded] = useState(false)

  // handleBoxClick is on the whole ProjectBox component (it is empty on small screens)
  // handleExpand is only on the "mehr/weniger zeigen" p-tag (it is empty on big screens)
  let handleBoxClick
  let handleExpand
  if (handleClick === null) {
    handleExpand = function () {
      setIsExpanded((prev) => !prev)
    }
    handleBoxClick = function () {}
  } else {
    handleExpand = function () {}
    handleBoxClick = () => handleClick(id)
  }

  return (
    <div
      onClick={handleBoxClick}
      className="group relative mx-8 mb-4 rounded-2xl p-4  md:mx-2 md:-ml-4 md:h-[22rem]  md:w-[20rem] md:hover:cursor-pointer lg:ml-0 lg:h-[20rem] lg:w-[32rem] lg:p-8"
    >
      {/* Border with color transition */}
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

      {/* Content */}
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
          <p
            onClick={handleExpand}
            className="text-cYellow mb-4 text-base opacity-90 hover:cursor-pointer hover:underline md:group-hover:underline lg:text-lg"
          >
            &gt; Weniger anzeigen
          </p>
        )}

        {!active && !isExpanded && (
          <p
            onClick={handleExpand}
            className="text-cYellow mb-4 text-base opacity-90 hover:cursor-pointer hover:underline md:group-hover:underline lg:text-lg"
          >
            &gt; Mehr Infos
          </p>
        )}

        <SkillsBox skillList={skillList} className="bg-cGray text-sm" />
      </div>
    </div>
  )
}

export default ProjectBox
