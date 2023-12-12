import DetailsColumn from "@/components/DetailsColumn";
import Footer from "@/components/Footer";
import ProjectColumn from "@/components/ProjectColumn";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="relative mx-auto max-w-[2000px] flex flex-row ">
        <DetailsColumn />
        <ProjectColumn />
      </div>
      <Footer />
    </main>
  );
}
