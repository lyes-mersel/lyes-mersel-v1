"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import React, { useState } from "react";

import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// components
import WorkSlidesBtns from "@/components/WorkSlidesBtns";

const projects = [
  {
    num: "01",
    category: "Web",
    title: "Shifa",
    description:
      "A comprehensive reservation system for medical clinics, enabling patients to easily book appointments, manage schedules, and receive notifications.",
    stack: [
      { name: "JS" },
      { name: "Express.js" },
      { name: "EJS" },
      { name: "MySQL" },
    ],
    image: "/assets/images/shifa.png",
    live: "",
    github: "https://github.com/lyes-mersel/shifa",
  },
  {
    num: "02",
    category: "Web",
    title: "inTech Blogs",
    description:
      "A dynamic blogging platform tailored for tech enthusiasts, featuring user authentication, CMS integration, and a sleek, responsive design.",
    stack: [
      { name: "TS" },
      { name: "Next.js" },
      { name: "NextAuth" },
      { name: "SanityCMS" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/images/intech-blogs.png",
    live: "https://intech-blogs.vercel.app",
    github: "https://github.com/lyes-mersel/intech-blogs",
  },
  {
    num: "03",
    category: "Mobile",
    title: "Edutainment",
    description:
      "An interactive mobile app designed to make learning fun and engaging for children, offering educational games, quizzes, and progress tracking.",
    stack: [{ name: "Dart" }, { name: "Flutter" }, { name: "Firebase" }],
    image: "/assets/images/edutainment.png",
    live: "",
    github: "https://github.com/lyes-mersel/edutainment",
  },
  {
    num: "04",
    category: "Desktop",
    title: "Polynomial Master",
    description:
      "A robust C-based desktop application for advanced polynomial manipulation, including arithmetic operations, graph plotting, and CRC computations, built with a focus on performance and usability.",
    stack: [
      { name: "C" },
      { name: "SDL2" },
      { name: "Cmake" },
      { name: "Docker" },
    ],
    image: "/assets/images/polynomial-master.png",
    live: "",
    github: "https://github.com/lyes-mersel/polynomial-master",
  },
  {
    num: "05",
    category: "Web",
    title: "Country Navigator",
    description:
      "A responsive React app that allows users to explore detailed information about countries worldwide, including demographics, geography, and cultural insights, powered by the REST Countries API.",
    stack: [{ name: "JS" }, { name: "React" }, { name: "MUI" }],
    image: "/assets/images/country-navigator.png",
    live: "https://countrynavigator.vercel.app/",
    github: "https://github.com/lyes-mersel/country-navigator",
  },
  {
    num: "06",
    category: "Web",
    title: "Buddy Workout",
    description:
      "A full-stack web application for fitness enthusiasts, enabling users to create, customize, and manage workout routines with secure authentication and a user-friendly interface.",
    stack: [
      { name: "JS" },
      { name: "React" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "JWT" },
    ],
    image: "/assets/images/buddy-workout.png",
    live: "https://tuto-workout.onrender.com",
    github: "https://github.com/lyes-mersel/tuto-workout",
  },
  {
    num: "07",
    category: "Web",
    title: "My Portfolio",
    description:
      "A visually captivating and interactive personal portfolio website to showcase my projects, skills, and experience, featuring smooth animations and responsive design.",
    stack: [
      { name: "TS" },
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "Framer Motion" },
    ],
    image: "/assets/images/lyes-mersel-v1.png",
    live: "/",
    github: "https://github.com/lyes-mersel/lyes-mersel-v1",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] xl:min-h-[460px] xl:justify-between">
              {/* outline num */}
              <span className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </span>
              {/* project category */}
              <h3 className=" text-4xl font-bold leading-none text-transparent text-outline transition-all duration-500 uppercase">
                {project.category} project
              </h3>
              {/* project title */}
              <h2 className="text-5xl font-bold leading-none text-white hover:text-accent transition-all duration-500 cursor-pointer">
                {project.title}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
            </div>
            {/* buttons */}
            <div className="flex items-center gap-4 mt-2">
              {/* live project  */}
              {project.live !== "" && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              )}
              {/* github project */}
              {project.github !== "" && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              )}
            </div>
          </div>
          {/* Swipers */}
          <div className="max-w-[590px] mx-auto">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-10 xl:mb-0"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[350px] sm:h-[460px] max-w-[590px] mx-auto relative group flex justify-center items-center bg-pink-50/50">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-primary"></div>
                    {/* image */}
                    <Image
                      src={project.image}
                      fill
                      className="object-contain"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSlidesBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] rounded-lg flex justify-center items-center transition-all"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
