import SectionDivider from "@/components/sectionDivider";
import About from "@/components/about";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
    </main>
  );
}
