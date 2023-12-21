import React, { ComponentPropsWithoutRef } from 'react'
import SkillTag from './SkillTag'

type SkillsBoxProps = ComponentPropsWithoutRef<'div'> & {
  title?: string
  skillList: Array<{ name: string; svg?: string }>
}

const SkillsBox = ({ title, skillList, className }: SkillsBoxProps) => {
  return (
    <div>
      {title && <h2 className="text-lg md:mb-2 md:text-xl lg:text-2xl">{title}</h2>}
      <div className="flex flex-wrap gap-2">
        {skillList.map(function (data, index) {
          return <SkillTag name={data.name} svg={data.svg} key={index} className={className} />
        })}
      </div>
    </div>
  )
}

export default SkillsBox
