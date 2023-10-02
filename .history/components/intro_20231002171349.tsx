import Image from "next/image";
import React from "react";
import {motion} from "framer-motion";

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
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
