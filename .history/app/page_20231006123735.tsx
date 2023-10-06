import SectionDivider from "@/components/SectionDivider";
import Intro from "@/components/intro";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <SectionDivider />
    </main>
  );
}