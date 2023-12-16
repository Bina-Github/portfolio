import React, { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'div'> & {
  name: string
  svg?: string
}

const SkillTag = ({ name, svg, className }: Props) => {
  return (
    <div
      className={
        className +
        ' flex flex-row items-center justify-center gap-1 rounded-full px-2.5 py-1.5 font-medium text-cWhite'
      }
    >
      {svg && svg.length > 0 && (
        <p className="h-[1lh] w-[1lh]" dangerouslySetInnerHTML={{ __html: svg }} />
      )}
      <p>{name}</p>
    </div>
  )
}

export default SkillTag
