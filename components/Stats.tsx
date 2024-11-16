"use client";

import CountUp from "react-countup";

const stats = [
  { num: 1, text: "Years of Experience" },
  { num: 3, text: "Projects Completed" },
  { num: 5, text: "Technologies Mastered" },
  { num: 160, text: "Code Commits" },
];

const Stats = () => {
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
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <span
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                }`}
              >
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
