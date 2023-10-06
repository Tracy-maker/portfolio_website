"use client";

import React from "react";

import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";

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
        Motivated by a profound love for{" "}
        <span className="font-medium">coding,</span> I left a six-year marketing
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
          {" "}
          What sets me apart is my enthusiasm for collaboration and learning. I
          thrive in team settings, and I'm always eager to absorb knowledge from
          experienced developers. I may be new to the field, but I'm a quick
          learner and a diligent worker, ready to contribute to projects with a
          fresh perspective. 🧙‍♂️🚀
        </span>
        This transition marks a pivotal moment, and I am excited about the
        opportunities ahead in the field of software development.
      </p>
    </motion.section>
  );
}
