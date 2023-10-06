import SectionHeading from "./sectionHeading";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}></React.Fragment>
        ))}
      </div>
    </section>
  );
}
