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
      <div className="bg-cYellow h-full w-[700px] absolute -skew-x-[5deg] -inset-x-[80px]"></div>

      {shown === -1 && (
        <div
          className={classNames(
            "flex flex-col justify-between yellow-text tall:pt-32 shorter:pt-12 pt-8  ml-14 absolute text-cBlack h-full w-[550px] font-bold transition-all duration-500 tall:overflow-y-hidden shorter:overflow-y-hidden overflow-y-scroll",
            {
              "-translate-y-[100vh] translate-x-[100px]":
                fadingOut === -1 || fadingIn === -1,
            }
          )}
        >
          <div>
            {/* Intro-Text */}
            <div className="tall:pb-36 shorter:pb-16 pb-12">
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
            <div className="flex flex-col gap-12 pb-6">
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
          <div className="flex gap-3 pb-4 text-cGray text-md">
            {socialsArray.map(function (data, index) {
              return (
                <Link
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
                className={classNames(
                  "yellow-text tall:pt-32 shorter:pt-12 pt-8 ml-14 absolute text-cBlack h-full w-[500px] transition-all duration-500 tall:overflow-y-hidden overflow-y-scroll",
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
