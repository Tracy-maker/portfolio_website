"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section>
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
              width="192"
              height="192"
              quality="98"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-amber-50 shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
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
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Yingxin.</span> I'm a{" "}
        <span className="font-bold">
          🌟 Junior Frontend Enthusiast Eager to Learn! 🪄
        </span>
        I'm currently honing my skills in
        <span className="font-bold">
          {""} JavaScript,React.js,Tailwind,CSS,Next.js,Type-script,Firebase...
        </span>
        and I'm excited about the journey ahead. 🌐
        {""}{" "}
        <span className="italic">
          If you're in search of a junior teammate for your web development
          adventures, someone who's eager to add a touch of magic to your
          projects while learning and growing alongside you, I'm here and ready
          to embark on this exciting journey of web development together. Let's
          create some enchanting digital experiences! 🌌✨
        </span>
      </motion.h1>
    </section>
  );
}
