"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-32"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello, I'm a qualified CPA with a robust six-year background in the
        Finance Services and Insurance Technology industry.
        <span className="font-medium">
          I bring a meticulous and highly motivated approach to financial
          management, consistently delivering accurate financials within
          established timelines.
        </span>I take pride in my detail-oriented nature, ensuring precision in every financial task I undertake. 
        <span className="font-medium">
          facilitating informed decision-making and driving internal
          improvements. With a dedicated approach,
        </span>
        <span className="italic">
          I thrive in delivering precise financial information and contribute to
          the overall success of the organization.
        </span>{" "}
        My goal is to bring my skills and commitment to excellence to every
        financial endeavor,
        <span className="font-medium">
          ensuring a positive impact on decision-making processes and internal
          operations.
        </span>
      </p>
    </motion.section>
  );
}
