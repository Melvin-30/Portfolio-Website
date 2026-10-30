import React from 'react';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import GithubIcon from '../components/icons/GithubIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';
import { personalInfo } from '../data/socialLinks';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-theme">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="CONNECT WITH ME"
          title="Let's Discuss Projects & Opportunities"
          subtitle="Interested in collaborating on a software project or discussing engineering opportunities? Reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct channels & info */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="rounded-2xl border border-theme bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent-soft text-teal-600 dark:text-teal-400 border border-accent-custom flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-custom font-mono">
                    Direct Email
                  </h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="mt-1 block text-sm sm:text-base font-bold text-primary-custom hover:text-teal-500 transition-colors truncate"
                  >
                    {personalInfo.email}
                  </a>
                  <p className="mt-1 text-xs text-secondary-custom">
                    Direct inquiries, technical collaborations, and messages.
                  </p>
                </div>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="rounded-2xl border border-theme bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent-soft text-teal-600 dark:text-teal-400 border border-accent-custom flex items-center justify-center shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-custom font-mono">
                    GitHub Profile
                  </h4>
                  <a
                    href="https://github.com/Melvin-30"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-primary-custom hover:text-teal-500 transition-colors"
                  >
                    <span>github.com/Melvin-30</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="mt-1 text-xs text-secondary-custom">
                    Open-source repositories, project commits, and codebase history.
                  </p>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="rounded-2xl border border-theme bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent-soft text-teal-600 dark:text-teal-400 border border-accent-custom flex items-center justify-center shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-custom font-mono">
                    LinkedIn Profile
                  </h4>
                  <a
                    href="https://www.linkedin.com/in/melvin-fernandes-43329b34b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-primary-custom hover:text-teal-500 transition-colors truncate max-w-full"
                  >
                    <span className="truncate">in/melvin-fernandes-43329b34b</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                  <p className="mt-1 text-xs text-secondary-custom">
                    Professional network, career updates, and industry connections.
                  </p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="rounded-2xl border border-theme bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent-soft text-teal-600 dark:text-teal-400 border border-accent-custom flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-custom font-mono">
                    Academic Location
                  </h4>
                  <p className="mt-1 text-sm sm:text-base font-bold text-primary-custom">
                    {personalInfo.location}
                  </p>
                  <p className="mt-1 text-xs text-secondary-custom">
                    University of Mumbai, Department of Computer Engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
