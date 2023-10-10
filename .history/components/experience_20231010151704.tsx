"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  console.log(experiencesData);

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) =>{
          return
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "bg-gray-200 dark:bg-opacity-5 bg-white",
                boxShadow: "none",
                border: "border-2 border-opacity-50",
                textAlign: "left",
                padding: "p-5",
              }}
              contentArrowStyle={{
                borderRight:
                  "border-r-2 border-gray-500 dark:border-white opacity-50",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "bg-white dark:bg-opacity-15 bg-white",
                fontSize: "text-lg",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal mt-0">{item.location}</p>
              <p className="mt-1 font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
}
        )}
      </VerticalTimeline>
    </section>
  );
}
