'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// components
import ProjectGallery from '@/app/(root)/projects/_components/ProjectGallery';
import ProjectInfo from '@/app/(root)/projects/_components/ProjectInfo';

// data
import { projects } from '@/app/(root)/projects/_data';

const pad = (n: number) => String(n).padStart(2, '0');

const navBtn =
  'bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] rounded-lg flex justify-center items-center transition-all';

const Projects = () => {
  const [selected, setSelected] = useState(0);
  const [stripApi, setStripApi] = useState<CarouselApi>();

  const project = projects[selected];
  const total = projects.length;

  // keep the selector strip scrolled to the active project
  useEffect(() => {
    stripApi?.scrollTo(selected);
  }, [stripApi, selected]);

  const go = (step: number) => setSelected((i) => (i + step + total) % total);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex flex-col justify-center pb-12 pt-0 xl:px-0"
    >
      <div className="container mx-auto">
        {/* project selector */}
        <div className="mb-4 flex items-center justify-between">
          <span className="text-white/60">
            {pad(selected + 1)} / {pad(total)}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              className={navBtn}
              onClick={() => go(-1)}
              aria-label="Previous project"
            >
              <PiCaretLeftBold />
            </button>
            <button
              type="button"
              className={navBtn}
              onClick={() => go(1)}
              aria-label="Next project"
            >
              <PiCaretRightBold />
            </button>
          </div>
        </div>

        <Carousel setApi={setStripApi} opts={{ align: 'start', dragFree: true }}>
          <CarouselContent className="-ml-3">
            {projects.map((p, i) => (
              <CarouselItem
                key={p.id}
                className="basis-[150px] pl-3 sm:basis-[200px] xl:basis-[230px]"
              >
                <button
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-pressed={i === selected}
                  className={cn(
                    'flex h-full w-full flex-col items-start gap-2 rounded-xl border bg-[#232329] p-4 text-left transition-all',
                    i === selected ? 'border-accent' : 'border-white/10 hover:border-white/30',
                  )}
                >
                  <span
                    className={cn(
                      'text-4xl font-extrabold leading-none text-transparent',
                      i === selected ? 'text-outline-hover' : 'text-outline',
                    )}
                  >
                    {pad(i + 1)}
                  </span>
                  <span className="font-semibold leading-tight text-white">{p.title}</span>
                  <span className="flex flex-wrap items-center gap-2 text-sm text-white/60">
                    {p.category}
                    {p.featured && (
                      <Badge className="border-transparent bg-accent px-2 py-0 text-xs text-primary hover:bg-accent-hover">
                        Featured
                      </Badge>
                    )}
                  </span>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* active project: re-mounted per project so tabs and gallery reset */}
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="mt-10 grid min-w-0 gap-10 xl:grid-cols-2 xl:gap-[30px]"
        >
          <div className="order-2 xl:order-1">
            <ProjectInfo project={project} num={pad(selected + 1)} />
          </div>
          <div className="order-1 mx-auto min-w-0 w-full max-w-[590px] self-start xl:sticky xl:top-6 xl:order-2">
            <ProjectGallery title={project.title} screenshots={project.screenshots} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
