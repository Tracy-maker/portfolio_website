"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
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
              src="https://i.ibb.co/MRHHtS5/Wechat-IMG7.jpg"
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
        <span className="font-bold">Hello, I'm Yingxin.</span> I'm a{" "}
        <span className="font-bold">
          🌟 Junior Frontend Enthusiast Eager to Learn! 🪄
        </span>
        <br />
        I'm currently honing my skills in
        <span className="font-bold">
          {" "}
          JavaScript,React.js,Tailwind,CSS,Next.js,Type-script.js,RESTful-API,Firebase...
        </span>
        and I'm excited about the journey ahead. 🌐
        <br />
        <span className="italic">
          If you're in search of a junior teammate for your web development
          adventures, someone who's eager to add a touch of magic to your
          projects while learning and growing alongside you, I'm here and ready
          to embark on this exciting journey of web development together. Let's
          create some enchanting digital experiences! 🌌✨
        </span>
      </motion.h6>

      <div>
        <Link
          href="#contact"
          className="bg-blue-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Contact me here 🥳
        </Link>
        <a className="bg-blue-300 px-7 py-3 flex items-center gap-2 rounded-full">
          Download CV 🤠
        </a>
        <a className="bg-blue-300 px-7 py-3 flex items-center gap-2 rounded-full">
          <BsLinkedin />
        </a>
        <a className="bg-blue-300 px-7 py-3 flex items-center gap-2 rounded-full">
          <FaGithubSquare />
        </a>
      </div>
    </section>
  );
}
