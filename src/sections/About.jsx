import React from 'react';
import { GraduationCap, Code2, Cpu, Database, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/socialLinks';

export default function About() {
  const focusAreas = [
    {
      icon: Code2,
      title: 'Frontend Engineering',
      description: 'Building clean, interactive user interfaces with React, JavaScript, and Tailwind CSS.',
    },
    {
      icon: Database,
      title: 'Backend & Data Storage',
      description: 'Working with relational (MySQL, SQLite) and cloud databases (Firestore) with server-side logic.',
    },
    {
      icon: Cpu,
      title: 'AI & Emerging Tech',
      description: 'Experimenting with Generative AI workflows, LLM API integration, and intelligent feature enhancement.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-theme">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          badge="ABOUT ME"
          title="Background & Engineering Focus"
          subtitle="A genuine glimpse into my academic journey, technical orientation, and software development philosophy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main narrative */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl border border-theme bg-card p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-primary-custom tracking-tight mb-4">
                Pursuing Excellence in Computer Engineering
              </h3>

              {personalInfo.about.map((paragraph, idx) => (
                <p key={idx} className="text-sm sm:text-base text-secondary-custom leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}

              <div className="mt-6 pt-6 border-t border-theme flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-soft text-teal-600 dark:text-teal-400 border border-accent-custom flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-custom font-mono">
                      Degree
                    </h4>
                    <p className="text-sm font-bold text-primary-custom">
                      B.E. Computer Engineering
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-soft text-teal-600 dark:text-teal-400 border border-accent-custom flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-custom font-mono">
                      Institution
                    </h4>
                    <p className="text-sm font-bold text-primary-custom">
                      University of Mumbai
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Focus Area Cards */}
          <div className="lg:col-span-5 space-y-4">
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-theme bg-card p-5 sm:p-6 shadow-sm hover:border-teal-500/30 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-subtle text-teal-600 dark:text-teal-400 border border-theme flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-primary-custom tracking-tight mb-1">
                        {area.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-secondary-custom leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
