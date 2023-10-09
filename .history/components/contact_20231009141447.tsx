"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -m-6 dark:text-white/80">
        Please contact me directly at <a></a>
      </p>
    </motion.section>
  );
}
