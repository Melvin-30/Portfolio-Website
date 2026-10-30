import React from 'react';
import {
  Code2,
  Coffee,
  FileCode,
  Terminal,
  Database,
  Server,
  Layers,
  Cpu,
  Box,
  Layout,
  Palette,
  Atom,
  Wind,
  Sparkles,
  Flame,
  Globe,
  HardDrive,
  Cloud,
  GitBranch,
  Code,
  Monitor,
  Bot,
  Zap,
  Brain,
  Smartphone,
} from 'lucide-react';
import GithubIcon from './icons/GithubIcon';

const iconMap = {
  Smartphone,
  Code2,
  Coffee,
  FileCode,
  Terminal,
  Database,
  Server,
  Layers,
  Cpu,
  Box,
  Layout,
  Palette,
  Atom,
  Wind,
  Sparkles,
  Flame,
  Globe,
  HardDrive,
  Cloud,
  GitBranch,
  Code,
  Monitor,
  Bot,
  Zap,
  Brain,
  Github: GithubIcon,
};

export default function SkillCard({ category }) {
  return (
    <div className="rounded-2xl border border-theme bg-card p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 hover:border-teal-500/30 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-primary-custom tracking-tight">
            {category.title}
          </h3>
          <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-subtle text-secondary-custom border border-theme">
            {category.skills.length} skills
          </span>
        </div>
        <p className="text-xs sm:text-sm text-secondary-custom mb-6 leading-relaxed">
          {category.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => {
          const IconComponent = iconMap[skill.icon] || Code2;

          return (
            <div
              key={skill.name}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-subtle hover:bg-card-hover border border-theme text-primary-custom transition-all duration-150 hover:scale-[1.02]"
            >
              <IconComponent className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
              <span>{skill.name}</span>
              {skill.level && (
                <span className="text-[10px] text-muted-custom font-normal hidden sm:inline">
                  • {skill.level}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
