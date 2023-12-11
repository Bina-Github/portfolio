import DetailsColumn from "@/components/DetailsColumn";
import ProjectColumn from "@/components/ProjectColumn";

export default function Home() {
  return (
    <main className="relative mx-auto max-w-[2000px] flex flex-row">
      <DetailsColumn />
      <ProjectColumn />
    </main>
  );
}
