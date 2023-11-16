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
        </span>
        I take pride in my detail-oriented nature, ensuring precision in every
        financial task I undertake.
        <span className="font-medium">
          Whether it's uncovering meaningful information behind financial
          results or identifying areas for enhancement, my goal is to contribute
          significantly to organizational success.
        </span>
        <span className="italic">
          am driven by a commitment to excellence, aiming to not only meet but
          exceed expectations in delivering timely and accurate financial
          information.
        </span>
        By leveraging my analytical skills, I seek to empower decision-makers
        with the insights needed for strategic planning and contribute to the
        overall efficiency and success of the team.
        <span className="font-medium">
          I am enthusiastic about the opportunity to bring my skills and
          dedication to your organization, making a positive impact on your
          financial processes and outcomes.
        </span>
      </p>
    </motion.section>
  );
}
