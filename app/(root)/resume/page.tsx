'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// data
import { education, experience, skills, about } from '@/app/(root)/resume/data';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
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
                src={`/icons/experience${activeTab === 'experience' ? '-black' : '-white'}.png`}
              />
              <span className="w-[90px] text-left">Experience</span>
            </TabsTrigger>
            <TabsTrigger value="education">
              <Image
                height={32}
                width={32}
                alt=""
                src={`/icons/education${activeTab === 'education' ? '-black' : '-white'}.png`}
              />
              <span className="w-[90px] text-left">Education</span>
            </TabsTrigger>
            <TabsTrigger value="skills">
              <Image
                height={32}
                width={32}
                alt=""
                src={`/icons/skills${activeTab === 'skills' ? '-black' : '-white'}.png`}
              />
              <span className="w-[90px] text-left">Skills</span>
            </TabsTrigger>
            <TabsTrigger value="about">
              <Image
                height={32}
                width={32}
                alt=""
                src={`/icons/about-me${activeTab === 'about' ? '-black' : '-white'}.png`}
              />
              <span className="w-[90px] text-left">About me</span>
            </TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
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
                        <div>
                          <span className="text-accent block h-6">{item.duration}</span>
                          <span className="text-accent">
                            {item.employmentType}
                            {item.workArrangement ? ` - ${item.workArrangement}` : ''}
                          </span>
                        </div>
                        <h3 className="flex items-center text-xl max-w-[260px] min-h-[60px] leading-none xs:leading-normal xl:leading-none xxl:leading-normal">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="leading-none">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

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

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                <Tabs defaultValue="languages">
                  <TabsList className="flex w-full mb-5 flex-wrap sm:flex-nowrap">
                    <TabsTrigger value="languages">Languages</TabsTrigger>
                    <TabsTrigger value="front">Front</TabsTrigger>
                    <TabsTrigger value="back">Back</TabsTrigger>
                    <TabsTrigger value="databases">Databases</TabsTrigger>
                    <TabsTrigger value="tools">Tools</TabsTrigger>
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
                  {/* databases */}
                  <TabsContent value="databases" className="min-h-0">
                    <ScrollArea className="h-[330px]">
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                        {skills.databases.map((item, index) => (
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
                  <TabsContent value="tools" className="min-h-0">
                    <ScrollArea className="h-[330px]">
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                        {skills.tools.map((item, index) => (
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
            <TabsContent value="about" className="w-full text-center xl:text-left">
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
                        item.filedName === 'Languages' ? 'xl:col-span-2' : ''
                      }`}
                    >
                      <span className="text-white/60">{item.filedName}</span>
                      <span className="text-base lg:text-lg">{item.fieldValue}</span>
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
