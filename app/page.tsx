import DetailsColumn from "@/components/DetailsColumn";
import ProjectColumn from "@/components/ProjectColumn";

export default function Home() {
  return (
    <main className="flex flex-row">
      <DetailsColumn />
      <ProjectColumn />
    </main>
  );
}
