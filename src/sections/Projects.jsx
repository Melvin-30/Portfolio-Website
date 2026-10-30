import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-theme">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="PROJECTS SHOWCASE"
          title="Featured Software Projects"
          subtitle="Real-world applications and digital platforms engineered with modern web standards and practical utility."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
