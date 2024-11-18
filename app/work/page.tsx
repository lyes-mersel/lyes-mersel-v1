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
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt tempora obcaecati necessitatibus.",
    stack: [{ name: "HTML 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/images/placeholder.jpg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Web",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt tempora obcaecati necessitatibus.",

    stack: [{ name: "HTML 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/images/placeholder.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Web",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt tempora obcaecati necessitatibus.",
    stack: [{ name: "HTML 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/images/placeholder.jpg",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Web",
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt tempora obcaecati necessitatibus.",
    stack: [{ name: "HTML 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/images/placeholder.jpg",
    live: "",
    github: "",
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
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <span className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </span>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project  */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/50">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <Image
                      src={project.image}
                      fill
                      className="object-cover"
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
