import React, { ComponentPropsWithoutRef } from 'react'
import SkillTag from './SkillTag'

type Props = ComponentPropsWithoutRef<'div'> & {
  title?: string
  skillList: Array<{ name: string; svg?: string }>
}

const SkillsBox = ({ title, skillList, className }: Props) => {
  return (
    <div>
      {title && <h3 className="text-lg md:mb-2 md:text-xl lg:text-2xl">{title}</h3>}
      <div className="flex flex-wrap gap-2">
        {skillList.map(function (data, index) {
          return <SkillTag name={data.name} svg={data.svg} key={index} className={className} />
        })}
      </div>
    </div>
  )
}

export default SkillsBox
