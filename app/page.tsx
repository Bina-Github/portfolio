import DetailsColumn from "@/components/DetailsColumn";
import ProjectColumn from "@/components/ProjectColumn";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="relative mx-auto max-w-[2000px] flex flex-row ">
        <DetailsColumn />
        <ProjectColumn />
      </div>
      {/* Footer */}
      <div className="clip-footer absolute right-0 bottom-0 bg-cGray h-36 w-full">
        <p className="relative float-right text-white">uwu it me</p>
      </div>
    </main>
  );
}
