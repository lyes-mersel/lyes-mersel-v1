'use client';

import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';

// components
import Socials from '@/app/(root)/_components/Socials';
import Photo from '@/app/(root)/_components/Photo';
import Stats from '@/app/(root)/_components/Stats';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
          }}
          className="flex flex-col xl:flex-row justify-between items-center xl:py-8 xxl:pb-10 xxxl:pb-20"
        >
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="mt-2 lg:mt-4 mb-8 lg:mb-12">
              Hello I&apos;m <br />
              <span className="text-accent">Lyes Mersel</span>
            </h1>
            <p className="text-justify max-w-[520px] text-white/80">
              Helping businesses and individuals bring their visions to life. From sleek websites to
              custom apps, I craft digital solutions with precision and creativity.
            </p>
            {/* donwload CV && social links */}
            <div className="my-8 lg:my-16 flex flex-col xl:flex-row gap items-center gap-8">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="flex items-center gap-3 font-jetBrainsMono text-md font-bold bg-primary hover:bg-accent text-accent hover:text-primary border-accent rounded-xl transition-all duration-500"
              >
                <a href="/files/CV - Lyes Mersel.pdf" download>
                  Download CV
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <Socials
                containerStyles="flex gap-6"
                iconStyles="h-9 w-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
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
