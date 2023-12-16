"use client";

import DetailsColumn from "@/components/DetailsColumn";
import Footer from "@/components/Footer";
import ProjectColumn from "@/components/ProjectColumn";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeProject, setActiveProject] = useState(-1);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setShouldAnimate(false);
        setActiveProject(-1);
      } else {
        setShouldAnimate(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (projectId: number) => {
    if (activeProject === projectId) {
      setActiveProject(-1);
    } else {
      setActiveProject(projectId);
    }
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="relative mx-auto pb-28 max-w-[2000px] flex md:flex-row flex-col">
        <DetailsColumn
          activeProject={activeProject}
          shouldAnimate={shouldAnimate}
        />
        <ProjectColumn
          activeProject={activeProject}
          handleClick={handleClick}
        />
      </div>
      <Footer />
    </main>
  );
}
