import DetailsColumn from "@/components/DetailsColumn";
import ProjectColumn from "@/components/ProjectColumn";

export default function Home() {
  return (
    <main className="relative max-w-[1920px] flex flex-row">
      <DetailsColumn />
      <ProjectColumn />
    </main>
  );
}
