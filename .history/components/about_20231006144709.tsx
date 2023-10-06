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
      id="about"
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
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
