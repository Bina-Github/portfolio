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

  return (
    <div className="h-screen fixed z-10">
      <div className="bg-cYellow h-full w-[620px] absolute -skew-x-[5deg] -inset-x-[80px]"></div>

      {shown === -1 && (
        <div
          className={classNames(
            "flex flex-col justify-between yellow-text tall:pt-28 shorter:pt-16 pt-8  pl-10 absolute text-cBlack h-full w-[550px] font-bold transition-all duration-500 tall:overflow-y-hidden shorter:overflow-y-hidden overflow-y-scroll",
            {
              "-translate-y-[100vh] translate-x-[100px]":
                fadingOut === -1 || fadingIn === -1,
            }
          )}
        >
          <div>
            {/* Intro-Text */}
            <div className="tall:pb-32 shorter:pb-12 pb-12">
              <h1 className="tall:text-6xl shorter:text-6xl text-5xl tall:leading-[5rem] shorter:leading-[5rem] leading-[4rem]">
                Hi, ich bin
                <br />
                <span className="text-cPurple">Sabine Kokot</span>,
              </h1>
              <h2 className="tall:text-5xl shorter:text-5xl text-4xl tall:leading-[4rem] shorter:leading-[4rem] leading-[3rem]">
                Softwareentwicklerin
                <br />
                aus Willich
              </h2>
            </div>
            {/* Skill, Tool, Tech Auflistungen */}
            <div className="flex flex-col gap-12 pb-6 w-[450px]">
              <SkillsBox
                title="Skills"
                skillList={skillArray}
                className="bg-cGray text-base"
              />
              <SkillsBox
                title="Tools & Technologien"
                skillList={toolsTechArray}
                className="bg-cGray text-base"
              />
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-3 flex-wrap pt-4 pb-4 -ml-3 text-cGray text-md w-[500px] whitespace-nowrap">
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
                  key={index}
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
      {projectArray.map(function (data, index) {
        return (
          <>
            {shown === index && (
              <div
                key={index}
                className={classNames(
                  "yellow-text tall:pt-28 shorter:pt-10 pt-8 pb-4 pl-10 absolute text-cBlack h-full w-[480px] transition-all duration-500 tall:overflow-y-hidden overflow-y-scroll",
                  {
                    "translate-y-[100vh] -translate-x-[100px]":
                      fadingIn === index || fadingOut === index,
                  }
                )}
              >
                <ProjectDetails projectData={data} />
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default DetailsColumn;
