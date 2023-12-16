import React, { useEffect, useState } from 'react'
import SkillsBox from './SkillsBox'
import { skillArray, toolsTechArray } from './skillArrays'
import classNames from 'classnames'
import ProjectDetails from './ProjectDetails'
import { projectArray } from './projectArray'
import { socialsArray } from './socialsArray'
import Link from 'next/link'

type Props = {
  activeProject: number
  shouldAnimate: boolean
}

const handleMailButtonClick: React.MouseEventHandler = (e) => {
  e.preventDefault()
  window.location.href = `mailto:${atob('c2FiaW5la29rb3QxOTk4QGdtYWlsLmNvbQ==')}`
}

const DetailsColumn = ({ activeProject, shouldAnimate }: Props) => {
  const [isFirstRender, setIsFirstRender] = useState(true)
  const [shown, setShown] = useState(-1)
  const [fadingOut, setFadingOut] = useState<number | null>(null)
  const [fadingIn, setFadingIn] = useState<number | null>(null)

  useEffect(() => {
    if (!isFirstRender && shouldAnimate) {
      setFadingOut(shown)
      setFadingIn(activeProject)
      setTimeout(() => {
        setShown(activeProject)
        setTimeout(() => {
          setFadingOut(null)
          setFadingIn(null)
        }, 10)
      }, 500)
    } else if (!isFirstRender && !shouldAnimate) {
      setShown(activeProject)
    } else {
      setIsFirstRender(false)
    }
  }, [activeProject])

  const activeProjectDetails = projectArray.find((_data, index) => shown === index)

  const detailsColumnTextClasses =
    'yellow-text wide:pl-2 lg:pl-10 pl-8 text-cBlack transition-transform duration-500'

  return (
    <div className="z-10 w-full md:fixed md:h-screen md:w-0">
      <div className="absolute h-0 w-screen md:-inset-x-[80px] md:h-full md:w-[420px] md:-skew-x-[5deg] md:bg-cYellow lg:w-[620px]"></div>

      {(shown === -1 || !shouldAnimate) && (
        <div
          className={classNames(
            'relative flex min-h-[500px] w-full flex-col justify-between overflow-y-scroll bg-cYellow pt-8 font-bold md:absolute md:h-full md:min-h-0 md:w-[350px] md:bg-transparent lg:w-[550px] tall:overflow-y-hidden tall:pt-28 shorter:overflow-y-hidden shorter:pt-16 short:pt-8',
            detailsColumnTextClasses,
            {
              '-translate-y-[100vh] translate-x-[100px]': fadingOut === -1 || fadingIn === -1
            }
          )}
        >
          <div>
            {/* Intro-Text */}
            <div className="pb-8 tall:pb-32 shorter:pb-12 short:pb-12">
              <h1 className="text-3xl leading-[2rem] tall:text-6xl tall:leading-[5rem] shorter:text-6xl shorter:leading-[5rem] short:text-5xl short:leading-[4rem]">
                Hi, ich bin
                <br />
                <span className="text-cPurple">Sabine Kokot</span>,
              </h1>
              <h2 className="text-3xl leading-[2rem] tall:text-5xl tall:leading-[4rem] shorter:text-5xl shorter:leading-[4rem] short:text-4xl short:leading-[3rem]">
                Softwareentwicklerin
                <br />
                aus Willich
              </h2>
            </div>
            {/* Skill, Tool, Tech Auflistungen */}
            <div className="flex w-full flex-col gap-12 pb-6 md:w-[280px] lg:w-[450px]">
              <SkillsBox
                title="Skills"
                skillList={skillArray}
                className="bg-cGray text-sm lg:text-base"
              />
              <SkillsBox
                title="Tools & Technologien"
                skillList={toolsTechArray}
                className="bg-cGray text-sm lg:text-base"
              />
            </div>
          </div>

          {/* Socials */}
          <div className="text-md -ml-3 flex flex-wrap gap-3 whitespace-nowrap pb-4 pt-4 text-cGray md:w-[270px] lg:w-[500px]">
            <button
              onClick={handleMailButtonClick}
              className="flex items-center gap-1"
              title="E-Mail"
            >
              <svg fill="var(--cGray)" width="24" height="24" viewBox="0 0 24 24">
                <path d="M22 5v4l-10 4L2 9V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zM2 11.154V19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7.846l-10 4z" />
              </svg>
              E-Mail
            </button>
            {socialsArray.map(function (data, index) {
              return (
                <Link
                  key={'socials' + index}
                  className="flex items-center gap-1"
                  href={data.link}
                  title={data.name}
                  target="_blank"
                  dangerouslySetInnerHTML={{ __html: data.svg + data.name }}
                ></Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Texte zu den Projekten */}
      {activeProjectDetails && (
        <div
          className={classNames(
            'absolute hidden h-full overflow-y-scroll pb-4 pt-8 md:block md:w-[300px] lg:w-[480px] tall:overflow-y-hidden tall:pt-28 shorter:pt-10 short:pt-8',
            detailsColumnTextClasses,
            {
              '-translate-x-[100px] translate-y-[100vh]': fadingIn === shown || fadingOut === shown
            }
          )}
        >
          <ProjectDetails projectData={activeProjectDetails} />
        </div>
      )}
    </div>
  )
}

export default DetailsColumn
