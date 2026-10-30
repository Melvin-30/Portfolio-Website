import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';

export default function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl border border-theme bg-card p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-teal-500/30 flex flex-col justify-between">
      <div>
        {/* Header badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent-soft text-teal-600 dark:text-teal-400 border border-accent-custom font-mono">
            {project.category}
          </span>
          {project.status && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              {project.status}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-primary-custom tracking-tight mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-secondary-custom leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-custom mb-3 font-mono">
              Key Capabilities & Features
            </h4>
            <ul className="grid grid-cols-1 gap-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-secondary-custom">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        {/* Technologies */}
        <div className="pt-4 border-t border-theme mb-6">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-subtle text-primary-custom border border-theme"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-accent-custom text-white hover:opacity-95 transition-all shadow-sm cursor-pointer"
            >
              <span>Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-theme bg-card hover:bg-card-hover text-primary-custom transition-all shadow-sm cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Repository</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
