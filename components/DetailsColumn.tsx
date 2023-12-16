import React, { useEffect, useState } from "react";
import SkillsBox from "./SkillsBox";
import { skillArray, toolsTechArray } from "./skillArrays";
import classNames from "classnames";
import ProjectDetails from "./ProjectDetails";
import { projectArray } from "./projectArray";
import { socialsArray } from "./socialsArray";
import Link from "next/link";

type Props = {
  activeProject: number;
};

const handleMailButtonClick: React.MouseEventHandler = (e) => {
  e.preventDefault();
  window.location.href = `mailto:${atob(
    "c2FiaW5la29rb3QxOTk4QGdtYWlsLmNvbQ=="
  )}`;
};

const DetailsColumn = ({ activeProject }: Props) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [shown, setShown] = useState(-1);
  const [fadingOut, setFadingOut] = useState<number | null>(null);
  const [fadingIn, setFadingIn] = useState<number | null>(null);

  useEffect(() => {
    if (!isFirstRender) {
      setFadingOut(shown);
      setFadingIn(activeProject);
      setTimeout(() => {
        setShown(activeProject);
        setTimeout(() => {
          setFadingOut(null);
          setFadingIn(null);
        }, 10);
      }, 500);
    } else {
      setIsFirstRender(false);
    }
  }, [activeProject]);

  const activeProjectDetails = projectArray.find(
    (_data, index) => shown === index
  );

  return (
    <div className="md:h-screen md:w-0 w-full md:fixed z-10">
      <div className="md:bg-cYellow md:h-full h-0 lg:w-[620px] md:w-[420px] w-screen absolute md:-skew-x-[5deg] md:-inset-x-[80px]"></div>

      {shown === -1 && (
        <div
          className={classNames(
            "md:bg-transparent bg-cYellow flex flex-col justify-between yellow-text tall:pt-28 shorter:pt-16 short:pt-8 pt-8 wide:pl-2 lg:pl-10 pl-8 md:absolute relative text-cBlack md:h-full lg:w-[550px] md:w-[350px] w-full font-bold transition-transform duration-500 tall:overflow-y-hidden shorter:overflow-y-hidden overflow-y-scroll",
            {
              "-translate-y-[100vh] translate-x-[100px]":
                fadingOut === -1 || fadingIn === -1,
            }
          )}
        >
          <div>
            {/* Intro-Text */}
            <div className="tall:pb-32 shorter:pb-12 short:pb-12 pb-8">
              <h1 className="tall:text-6xl shorter:text-6xl short:text-5xl text-3xl tall:leading-[5rem] shorter:leading-[5rem] short:leading-[4rem] leading-[2rem]">
                Hi, ich bin
                <br />
                <span className="text-cPurple">Sabine Kokot</span>,
              </h1>
              <h2 className="tall:text-5xl shorter:text-5xl short:text-4xl text-3xl tall:leading-[4rem] shorter:leading-[4rem] short:leading-[3rem] leading-[2rem]">
                Softwareentwicklerin
                <br />
                aus Willich
              </h2>
            </div>
            {/* Skill, Tool, Tech Auflistungen */}
            <div className="flex flex-col gap-12 pb-6 lg:w-[450px] md:w-[280px] w-full">
              <SkillsBox
                title="Skills"
                skillList={skillArray}
                className="bg-cGray lg:text-base text-sm"
              />
              <SkillsBox
                title="Tools & Technologien"
                skillList={toolsTechArray}
                className="bg-cGray lg:text-base text-sm"
              />
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-3 flex-wrap pt-4 pb-4 -ml-3 text-cGray text-md lg:w-[500px] md:w-[270px] whitespace-nowrap">
            <button
              onClick={handleMailButtonClick}
              className="flex gap-1 items-center"
              title="E-Mail"
            >
              <svg
                fill="var(--cGray)"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M22 5v4l-10 4L2 9V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zM2 11.154V19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7.846l-10 4z" />
              </svg>
              E-Mail
            </button>
            {socialsArray.map(function (data, index) {
              return (
                <Link
                  key={"socials" + index}
                  className="flex gap-1 items-center"
                  href={data.link}
                  title={data.name}
                  target="_blank"
                  dangerouslySetInnerHTML={{ __html: data.svg + data.name }}
                ></Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Texte zu den Projekten */}
      {activeProjectDetails && (
        <div
          className={classNames(
            "yellow-text tall:pt-28 shorter:pt-10 short:pt-8 pt-8 pb-4 wide:pl-2 lg:pl-10 pl-8 absolute text-cBlack h-full lg:w-[480px] md:w-[300px] transition-transform duration-500 tall:overflow-y-hidden overflow-y-scroll",
            {
              "translate-y-[100vh] -translate-x-[100px]":
                fadingIn === shown || fadingOut === shown,
            }
          )}
        >
          <ProjectDetails projectData={activeProjectDetails} />
        </div>
      )}
    </div>
  );
};

export default DetailsColumn;
