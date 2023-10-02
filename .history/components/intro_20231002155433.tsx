import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image
            src="https://i.ibb.co/MRHHtS5/Wechat-IMG7.jpg"
            alt="Personal image"
            width="192"
            height="192"
            quality="98"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}