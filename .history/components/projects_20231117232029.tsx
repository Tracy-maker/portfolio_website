"use client";

import React from "react";
import { achievementsData } from "@/lib/data";
import Project from "./project";
import SectionHeading from "./section-heading";

export default function Projects() {
  return (
    <section id="achievements" className="scroll-mt-32 mb-32">
      <SectionHeading>My Achievements</SectionHeading>
      <div>
        {achievementsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
