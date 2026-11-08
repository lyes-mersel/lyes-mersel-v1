import Link from 'next/link';
import type { ReactNode } from 'react';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import type { Project } from '../_data/types';

const bullet = <span className="mt-[10px] h-[6px] w-[6px] shrink-0 rounded-full bg-accent" />;

const IconLink = ({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: typeof BsGithub;
}) => (
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white/5"
        >
          <Icon className="text-3xl text-white transition-all group-hover:text-accent" />
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const StackBadges = ({ stack }: { stack: string[] }) => (
  <ul className="flex flex-wrap gap-2">
    {stack.map((item) => (
      <li key={item}>
        <Badge
          variant="outline"
          className="rounded-md border-accent/40 px-3 py-1 text-sm font-normal text-accent"
        >
          {item}
        </Badge>
      </li>
    ))}
  </ul>
);

const ProjectInfo = ({ project, num }: { project: Project; num: string }) => {
  const { overview, features, highlights, stack, links } = project;

  // Only sections that have data are rendered.
  const sections: { value: string; label: string; content: ReactNode }[] = [];

  if (overview?.length) {
    sections.push({
      value: 'overview',
      label: 'Overview',
      content: (
        <div className="flex flex-col gap-4 text-white/60">
          {overview.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      ),
    });
  }

  if (features?.length) {
    sections.push({
      value: 'features',
      label: 'Features',
      content: (
        <ul className="grid gap-3 sm:grid-cols-2">
          {features.map((feature) => (
            <li key={feature.title}>
              <Card className="h-full rounded-xl border-0 bg-[#232329] text-white shadow-none">
                <CardContent className="flex gap-3 p-4">
                  {bullet}
                  <div>
                    <p>{feature.title}</p>
                    {feature.description && (
                      <p className="text-sm text-white/60">{feature.description}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      ),
    });
  }

  if (stack?.length || highlights?.length) {
    sections.push({
      value: 'tech',
      label: 'Tech',
      content: (
        <div className="flex flex-col gap-6">
          {stack?.length ? <StackBadges stack={stack} /> : null}
          {highlights?.length ? (
            <ul className="flex flex-col gap-2 text-white/60">
              {highlights.map((item, i) => (
                <li key={i} className="flex gap-3">
                  {bullet}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ),
    });
  }

  const meta = [project.year, project.role].filter(Boolean);

  return (
    <div className="flex flex-col gap-6">
      {/* outline number + category + title */}
      <span className="sm:text-8xl text-6xl font-extrabold leading-none text-transparent text-outline">
        {num}
      </span>
      <h3 className="text-3xl font-bold uppercase leading-none text-transparent text-outline transition-all duration-500 sm:text-4xl">
        {project.category} project
      </h3>
      <h2 className="text-4xl font-bold leading-none text-white transition-all duration-500 hover:text-accent sm:text-5xl">
        {project.title}
      </h2>

      {(project.featured || project.kind) && (
        <div className="flex flex-wrap gap-2">
          {project.featured && (
            <Badge className="border-transparent bg-accent text-primary hover:bg-accent-hover">
              Featured
            </Badge>
          )}
          {project.kind && (
            <Badge variant="outline" className="border-white/20 font-normal text-white">
              {project.kind}
            </Badge>
          )}
        </div>
      )}

      {meta.length > 0 && <p className="text-sm text-white/60">{meta.join(' · ')}</p>}

      <p className="text-white/60">{project.description}</p>

      {/* details: tabs when there are several sections, plain content when there is one */}
      {sections.length > 1 ? (
        <Tabs defaultValue={sections[0].value} className="w-full">
          <TabsList className="flex w-full">
            {sections.map((s) => (
              <TabsTrigger key={s.value} value={s.value} className="flex-1">
                {s.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {sections.map((s) => (
            <TabsContent key={s.value} value={s.value} className="mt-6">
              {s.content}
            </TabsContent>
          ))}
        </Tabs>
      ) : (
        sections[0]?.content
      )}

      <Separator className="bg-white/20" />

      {/* links */}
      {(links?.live || links?.github) && (
        <div className="flex items-center gap-4">
          {links.live && <IconLink href={links.live} label="Live Project" icon={BsArrowUpRight} />}
          {links.github && (
            <IconLink href={links.github} label="GitHub Repository" icon={BsGithub} />
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectInfo;
