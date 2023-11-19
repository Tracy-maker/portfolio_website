"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://i.ibb.co/QK7YJhQ/about.jpg"
              alt="Personal image"
              width="300"
              height="300"
              quality="90"
              priority={true}
              className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-amber-50 shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-5xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            ✌️
          </motion.span>
        </div>
      </div>
      <motion.h6
        className="mb-10 mt-4 px-4 text-s font-light !leading-[1.5] sm:text-m"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi! I'm Lesley.</span> I'm an{" "}
        <span className="font-bold">
          🌟 accomplished Australian CPA Accountant with extensive financial
          expertise. 🪄
        </span>
        <br />
        Having dedicated my career to accounting and financial management, I
        navigate diverse financial landscapes with analytical acumen and
        strategic thinking.
        <span className="font-bold">
          Residing in Australia, I contribute insights to the financial sector,
          specializing in crafting strategies, optimizing processes, and
          ensuring compliance.
        </span>
        With a proven track record, I offer valuable experience in financial
        analysis, regulatory compliance, and stakeholder relations.
        <br />
        <span className="italic">
          Now in Australia, I'm eager to leverage my expertise for the country's
          financial landscape. If you seek a seasoned CPA Accountant, I'm here
          to contribute to your financial success. 🌌✨
        </span>
      </motion.h6>

      <motion.div
        className="flex flex-col font-custom sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          id="contact"
          href=""
          className="bg-blue-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-110 hover:bg-gray-700 active:scale-95 transition cursor-pointer border-black/10s"
        >
          Contact me here 🥳
        </Link>
        <a
          href="/CV.pdf"
          download
          className="group bg-blue-300 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
        >
          Download CV 🤠
        </a>
        <a
          href="https://www.linkedin.com/in/lesley-chu-334a93a0/"
          target="_blank"
          className="bg-blue-500  text-white px-7 py-3 flex items-center gap-2 rounded-full text-[1.6rem] focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>
      </motion.div>
    </section>
  );
}
