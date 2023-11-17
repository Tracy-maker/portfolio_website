"use client";
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                boxShadow: "none",
                className="dark:text-black"
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize dark:text-sky-500">
                {experience.title}
              </h3>
              <p className="font-normal !mt-0 dark:text-sky-500">
                {experience.location}
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-sky-500">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
