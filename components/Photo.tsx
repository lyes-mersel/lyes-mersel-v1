"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative mb-5 xl:mb-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] absolute"
        >
          <Image
            src={"/images/profile/profile-image.jpg"}
            // priority
            quality={100}
            sizes="(min-width: 1200px) 500px, 300px"
            fill
            alt="Portrait of Lyes MERSEL, a software engineering student and full stack developer."
            className="object-contain"
          />
        </motion.div>

        {/* animation */}
        <motion.svg
          className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative z-10"
          fill="transparent"
          viewBox="0 0 505 505"
          xmlns="https://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;

// mix-blend-lighten
