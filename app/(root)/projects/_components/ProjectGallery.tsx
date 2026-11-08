'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

import type { Screenshot } from '../_data/types';

const arrowStyles =
  'border-0 bg-accent text-primary hover:bg-accent-hover hover:text-primary disabled:opacity-40';

/** Tracks the selected slide index of an Embla carousel. */
function useSelectedIndex(api?: CarouselApi) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => setIndex(api.selectedScrollSnap());
    update();
    api.on('select', update);
    return () => {
      api.off('select', update);
    };
  }, [api]);

  return index;
}

/** Enlarged preview. Mounted only while the dialog is open, so it always starts at `startIndex`. */
const Preview = ({
  title,
  screenshots,
  startIndex,
}: {
  title: string;
  screenshots: Screenshot[];
  startIndex: number;
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const index = useSelectedIndex(api);
  const current = screenshots[index] ?? screenshots[startIndex];

  return (
    <>
      <DialogHeader className="text-left">
        <DialogTitle className="text-white">{title}</DialogTitle>
        <DialogDescription className="text-white/60">
          {current.caption ?? `Screenshot ${index + 1} of ${screenshots.length}`}
        </DialogDescription>
      </DialogHeader>
      <Carousel opts={{ startIndex }} setApi={setApi} className="w-full">
        <CarouselContent>
          {screenshots.map((shot) => (
            <CarouselItem key={shot.src}>
              <div className="relative h-[50vh] sm:h-[65vh] w-full rounded-lg bg-[#232329]">
                <Image
                  src={shot.src}
                  alt={shot.alt ?? `${title} screenshot`}
                  fill
                  sizes="(max-width: 1024px) 95vw, 960px"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {screenshots.length > 1 && (
          <>
            <CarouselPrevious className={cn(arrowStyles, 'left-2')} />
            <CarouselNext className={cn(arrowStyles, 'right-2')} />
          </>
        )}
      </Carousel>
    </>
  );
};

const ProjectGallery = ({ title, screenshots }: { title: string; screenshots?: Screenshot[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const current = useSelectedIndex(api);
  const [previewOpen, setPreviewOpen] = useState(false);

  if (!screenshots?.length) {
    return (
      <div className="flex aspect-[16/10] w-full items-center justify-center rounded-xl border border-dashed border-white/20 bg-[#232329] px-6 text-center text-white/60">
        No screenshots available for this project yet.
      </div>
    );
  }

  const hasMany = screenshots.length > 1;

  return (
    <div className="flex flex-col gap-3">
      <Carousel setApi={setApi} className="w-full min-w-0">
        <CarouselContent>
          {screenshots.map((shot, i) => (
            <CarouselItem key={shot.src} className="min-w-0">
              <button
                type="button"
                onClick={() => setPreviewOpen(true)}
                aria-label={`Enlarge screenshot ${i + 1} of ${screenshots.length}`}
                className="relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-xl bg-[#232329]"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt ?? `${title} screenshot`}
                  fill
                  sizes="(max-width: 1199px) 100vw, 590px"
                  className="object-contain"
                  priority={i === 0}
                />
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        {hasMany && (
          <>
            <CarouselPrevious className={cn(arrowStyles, 'left-2 h-10 w-10 rounded-lg')} />
            <CarouselNext className={cn(arrowStyles, 'right-2 h-10 w-10 rounded-lg')} />
          </>
        )}
      </Carousel>

      {hasMany && (
        <ul className="flex gap-2 overflow-x-auto pb-1">
          {screenshots.map((shot, i) => (
            <li key={shot.src} className="shrink-0">
              <button
                type="button"
                onClick={() => api?.scrollTo(i)}
                aria-label={`Show screenshot ${i + 1}`}
                aria-current={i === current}
                className={cn(
                  'relative block h-14 w-20 overflow-hidden rounded-md border bg-[#232329] transition-all sm:h-16 sm:w-24',
                  i === current ? 'border-accent' : 'border-white/10 opacity-60 hover:opacity-100',
                )}
              >
                <Image src={shot.src} alt="" fill sizes="96px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="w-[95vw] max-w-5xl gap-4 border-white/20 bg-primary p-4 text-white sm:p-6">
          <Preview title={title} screenshots={screenshots} startIndex={current} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectGallery;
