import React from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-theme">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="TECHNICAL SKILLS"
          title="Verified Technical Stack"
          subtitle="Organized inventory of programming languages, frameworks, developer tools, and technologies actively studied and practiced."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
