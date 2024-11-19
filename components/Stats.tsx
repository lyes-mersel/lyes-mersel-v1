"use client";

import { useState, useEffect } from "react";
import CountUp from "react-countup";

// Types & Fuctions
import { StatsDataT } from "@/lib/types";
import { calculateYearDifference } from "@/lib/utils";

const Stats = () => {
  const [statsData, setStatsData] = useState<StatsDataT>({
    experience: 0,
    projects: 0,
    technologies: 0,
    commits: 0,
  });

  const stats: { name: keyof StatsDataT; text: string }[] = [
    {
      name: "experience",
      text: `${statsData.experience > 1 ? "Years" : "Year"} of Experience`,
    },
    { name: "projects", text: "Projects" },
    { name: "technologies", text: "Technologies" },
    { name: "commits", text: "Code Commits" },
  ];

  useEffect(() => {
    const fetchStatsData = async () => {
      try {
        const experience = calculateYearDifference("2023-08-01");

        const projectsResponse = await fetch("/api/github-projects");
        const { data: projects } = await projectsResponse.json();

        const technologiesResponse = await fetch("/api/github-technologies");
        const { data: technologies } = await technologiesResponse.json();

        const commitsResponse = await fetch("/api/github-commits");
        const { data: commits } = await commitsResponse.json();

        setStatsData({
          experience,
          projects,
          technologies,
          commits,
        });
      } catch (error) {
        console.error("Error fetching stats data:", error);
      }
    };

    fetchStatsData();
  }, []);

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto flex justify-center xl:justify-start">
        <div className="flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={statsData[item.name]}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <span className={`${item.text.includes(" ") && "max-w-[100px]"}`}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
