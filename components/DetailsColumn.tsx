import React, { useEffect, useState } from "react";
import SkillsBox from "./SkillsBox";
import { skillArray, toolsTechArray } from "./skillArrays";
import classNames from "classnames";
import ProjectDetails from "./ProjectDetails";
import { projectArray } from "./projectArray";

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
            "mt-32 ml-14 absolute text-cBlack h-full w-[550px] font-bold transition-all duration-500",
            {
              "-translate-y-[100vh] translate-x-[100px]":
                fadingOut === -1 || fadingIn === -1,
            }
          )}
        >
          {/* Intro-Text */}
          <div className="mb-36">
            <h1 className="text-6xl leading-[5rem]">
              Hi, ich bin
              <br />
              <span className="text-cPurple">Sabine Kokot</span>,
            </h1>
            <h2 className="text-5xl leading-[4rem]">
              Softwareentwicklerin
              <br />
              aus Willich
            </h2>
          </div>
          {/* Skill, Tool, Tech Auflistungen */}
          <div className="flex flex-col gap-12">
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
      )}

      {projectArray.map(function (data, index) {
        return (
          <>
            {shown === index && (
              <div
                className={classNames(
                  "mt-32 ml-14 absolute text-cBlack h-full w-[500px] transition-all duration-500",
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
