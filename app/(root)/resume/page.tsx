"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// icons
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaJava,
  FaPython,
  FaServer,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiOracle,
  SiPostgresql,
  SiMongodb,
  SiC,
  SiMui,
  SiUml,
  SiJquery,
  SiPostman,
  SiJsonwebtokens,
  SiNestjs,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { TbBrandFramerMotion } from "react-icons/tb";
import Image from "next/image";
import { useState } from "react";
import { calculateYearDifference } from "@/lib/utils";

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I'm driven by a passion for learning. Here's a snapshot of my education:",
  items: [
    {
      institution: "University of Bejaia",
      degree: "Master's Degreee in Software Engineering",
      duration: "2024 - 2026",
    },
    {
      institution: "University of Bejaia",
      degree: "Bachelor's Degreee in Computer Science",
      duration: "2021 - 2024",
    },
    {
      institution: "ESI Algiers",
      degree: "Preparatory Classes",
      duration: "2019 - 2021",
    },
    {
      institution: "High School",
      degree: "Mathematics track Baccalaureate",
      duration: "2019",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "Here's a quick overview of my professional journey:",
  items: [
    {
      company: "Freelance",
      position: "Full Stack Developer",
      duration: "08/2024 - Current",
    },
    {
      company: "Al Maha - Kuwait",
      position: " Software Engineer Intern – Backend",
      duration: "06/2025 - 08/2025",
    },
    {
      company: "Cevital - Bejaia",
      position: "Information System Intern",
      duration: "07/2024 - 08/2024",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description: "Here are the main technologies I’ve worked with on my journey.",
  languages: [
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiC />, name: "C" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaPython />, name: "Python" },
  ],
  front: [
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiMui />, name: "Material UI" },
    { icon: <TbBrandFramerMotion />, name: "Framer Motion" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiJquery />, name: "jQuery" },
  ],
  back: [
    { icon: <FaNode />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiNestjs />, name: "NestJS" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiOracle />, name: "Oracle" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <DiRedis />, name: "Redis" },
    { icon: <FaServer />, name: "REST API" },
    { icon: <SiJsonwebtokens />, name: "JWT" },
  ],
  others: [
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiUml />, name: "UML 2" },
  ],
};

// about data
const about = {
  title: "About me",
  description:
    "I’m a Software Developer pursuing a Master's in Software Engineering at the University of Bejaia. Passionate about web development and cloud technologies, I focus on building scalable solutions and contributing to impactful projects.",
  info: [
    {
      filedName: "Name",
      fieldValue: "Lyes Mersel",
    },
    {
      filedName: "Experience",
      fieldValue: (() => {
        // calculate and display the experience in years
        const value = calculateYearDifference("2023-08-01");
        return value > 1 ? `+${value} Years` : `+${value} Year`;
      })(),
    },
    {
      filedName: "Email",
      fieldValue: "dev.mersel@gmail.com",
    },
    {
      filedName: "Nationality",
      fieldValue: "Algerian",
    },
    {
      filedName: "Phone",
      fieldValue: "(+213) 783 31 05 46",
    },
    {
      filedName: "Freelance",
      fieldValue: "Available",
    },
    {
      filedName: "Languages",
      fieldValue: "English, French, Arabic, Kabylian",
    },
  ],
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 xxl:pt-10"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="experience">
              <Image
                height={32}
                width={32}
                alt=""
                src={`/icons/experience${
                  activeTab === "experience" ? "-black" : "-white"
                }.png`}
              />
              <span className="w-[90px] text-left">Experience</span>
            </TabsTrigger>
            <TabsTrigger value="education">
              <Image
                height={32}
                width={32}
                alt=""
                src={`/icons/education${
                  activeTab === "education" ? "-black" : "-white"
                }.png`}
              />
              <span className="w-[90px] text-left">Education</span>
            </TabsTrigger>
            <TabsTrigger value="skills">
              <Image
                height={32}
                width={32}
                alt=""
                src={`/icons/skills${
                  activeTab === "skills" ? "-black" : "-white"
                }.png`}
              />
              <span className="w-[90px] text-left">Skills</span>
            </TabsTrigger>
            <TabsTrigger value="about">
              <Image
                height={32}
                width={32}
                alt=""
                src={`/icons/about-me${
                  activeTab === "about" ? "-black" : "-white"
                }.png`}
              />
              <span className="w-[90px] text-left">About me</span>
            </TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left leading-none xs:leading-normal xl:leading-none xxl:leading-normal">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left leading-none xs:leading-normal xl:leading-none xxl:leading-normal">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <Tabs defaultValue="languages">
                  <TabsList className="flex w-full mb-5 flex-wrap xs:flex-nowrap">
                    <TabsTrigger value="languages">Languages</TabsTrigger>
                    <TabsTrigger value="front">Front</TabsTrigger>
                    <TabsTrigger value="back">Back</TabsTrigger>
                    <TabsTrigger value="others">Others</TabsTrigger>
                  </TabsList>
                  {/* programming languages */}
                  <TabsContent value="languages" className="min-h-0">
                    <ScrollArea className="h-[330px]">
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                        {skills.languages.map((item, index) => (
                          <li key={index} className="">
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                    {item.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{item.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </TabsContent>
                  {/* frontend technologies */}
                  <TabsContent value="front" className="min-h-0">
                    <ScrollArea className="h-[330px]">
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                        {skills.front.map((item, index) => (
                          <li key={index} className="">
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                    {item.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{item.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </TabsContent>
                  {/* backend technologies */}
                  <TabsContent value="back" className="min-h-0">
                    <ScrollArea className="h-[330px]">
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                        {skills.back.map((item, index) => (
                          <li key={index} className="">
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                    {item.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{item.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </TabsContent>
                  {/* other technologies */}
                  <TabsContent value="others" className="min-h-0">
                    <ScrollArea className="h-[330px]">
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                        {skills.others.map((item, index) => (
                          <li key={index} className="">
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                    {item.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{item.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </TabsContent>
                </Tabs>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 text-justify xs:text-center xl:text-justify">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 max-w-[800px] mx-auto xl:mx-0 text-left">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className={`flex justify-start xs:justify-center xl:justify-start gap-4 ${
                        item.filedName === "Languages" ? "xl:col-span-2" : ""
                      }`}
                    >
                      <span className="text-white/60">{item.filedName}</span>
                      <span className="text-base lg:text-lg">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
