"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
          className="flex flex-col xl:flex-row justify-between items-center xl:py-8 xxl:pb-10 xxxl:pb-20"
        >
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Lyes Mersel</span>
            </h1>
            <p className="text-justify max-w-[520px] mb-9 text-white/80">
              Helping businesses and individuals bring their visions to life.
              From sleek websites to custom apps, I craft digital solutions with
              precision and creativity.
            </p>
            {/* donwload CV && social links */}
            <div className="flex flex-col xl:flex-row gap items-center gap-8">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="uppercase flex items-center gap-2"
              >
                <a href="/files/CV - Lyes Mersel.pdf" download>
                  Download CV
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="h-9 w-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Picture */}
          <div>
            <Photo />
          </div>
        </motion.div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
