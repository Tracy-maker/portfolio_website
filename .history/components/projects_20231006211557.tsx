"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import SectionHeading from "./sectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-32 mb-32">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}