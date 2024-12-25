"use client";

import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

// Types & Fuctions
import { StatsDataT } from "@/lib/types";
import { calculateYearDifference } from "@/lib/utils";

const Stats = () => {
  const [loading, setLoading] = useState(true);
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
        const [projectsRes, technologiesRes, commitsRes] = await Promise.all([
          fetch("/api/github/repositories"),
          fetch("/api/github/technologies"),
          fetch("/api/github/commits"),
        ]);

        const projects = (await projectsRes.json()).data;
        const technologies = (await technologiesRes.json()).data;
        const commits = (await commitsRes.json()).data;

        setStatsData({
          experience,
          projects,
          technologies,
          commits,
        });
      } catch (error) {
        console.error("Error fetching stats data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatsData();
  }, []);

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto flex justify-center xl:justify-start">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
          className="flex flex-wrap gap-2 sm:gap-6 max-w-[80vw] xl:max-w-none"
        >
          {!loading &&
            stats.map((item, index) => (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  key={item.name}
                  end={statsData[item.name]}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <span
                  className={`${item.text.includes(" ") && "max-w-[100px]"}`}
                >
                  {item.text}
                </span>
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
