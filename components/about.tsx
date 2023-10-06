"use client";

import React from "react";

import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Motivated by a profound love for{" "}
        <span className="font-medium">coding,</span>I left a six-year marketing
        management role in China to pursue an in-depth study of computer science
        in Australia.{" "}
        <span className="font-medium">
          A proud graduate of RMIT's Information Technology Graduate Program ,
        </span>
        <span className="italic">
          {" "}
          I credit the program for opening doors to the digital world.
        </span>{" "}
        My joy lies in finding solutions to intricate problems, honing skills in
        JavaScript, React.js, Tailwind, CSS, Next.js, TypeScript, RESTful APIs,
        and Firebase.
        <span className="font-medium">
          Currently seeking a full-time position as a software developer or
          junior front-end developer, I am eager to contribute my refined skills
          to an innovative organization.
        </span>
        This transition marks a pivotal moment, and I am excited about the
        opportunities ahead in the field of software development.
      </p>
    </motion.section>
  );
}
