"use client";

import DetailsColumn from "@/components/DetailsColumn";
import Footer from "@/components/Footer";
import ProjectColumn from "@/components/ProjectColumn";
import { useState } from "react";

export default function Home() {
  const [activeProject, setActiveProject] = useState(-1);

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
        <DetailsColumn activeProject={activeProject} />
        <ProjectColumn
          activeProject={activeProject}
          handleClick={handleClick}
        />
      </div>
      <Footer />
    </main>
  );
}
