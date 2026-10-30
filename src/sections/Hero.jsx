import React from 'react';
import { ArrowDown, Mail, GraduationCap, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import GithubIcon from '../components/icons/GithubIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';
import { personalInfo } from '../data/socialLinks';


const PROFILE_PHOTO = '/profile/Melvin.png';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[400px] bg-teal-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-400/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

        {/* ── LEFT: Text + CTAs ── */}
        <div className="flex flex-col items-start text-left order-2 lg:order-1 lg:col-span-7">

          {/* Academic status pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-soft text-teal-700 dark:text-teal-300 border border-accent-custom text-xs font-semibold tracking-wide uppercase font-mono mb-5"
          >
            <GraduationCap className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{personalInfo.degree}</span>
            <span className="text-muted-custom">•</span>
            <span>{personalInfo.university}</span>
          </motion.div>

          {/* Primary headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary-custom leading-[1.12]"
          >
            Hi, I'm{' '}
            <span className="text-teal-600 dark:text-teal-400 block sm:inline">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg sm:text-xl font-medium text-secondary-custom font-mono"
          >
            {personalInfo.role}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-5 text-base sm:text-lg text-secondary-custom max-w-lg leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-accent-custom text-white hover:opacity-90 shadow-sm transition-all hover:scale-105"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-theme bg-card hover:bg-card-hover text-primary-custom shadow-sm transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4 text-teal-500" />
              <span>Connect With Me</span>
            </a>

            <a
              href="https://github.com/Melvin-30"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm border border-theme bg-card hover:bg-card-hover text-secondary-custom hover:text-primary-custom shadow-sm transition-all hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/melvin-fernandes-43329b34b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm border border-theme bg-card hover:bg-card-hover text-secondary-custom hover:text-primary-custom shadow-sm transition-all hover:scale-105"
            >
              <LinkedinIcon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>LinkedIn</span>
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-7 flex items-center gap-2 text-xs text-muted-custom"
          >
            <MapPin className="w-3.5 h-3.5 text-teal-500" />
            <span>Based in {personalInfo.location}</span>
          </motion.div>
        </div>

        {/* ── RIGHT: Profile photo with dynamic aura and bottom fade ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end items-end lg:col-span-5 relative"
        >
          {/* Main photo frame wrapper with isolated stacking context */}
          <div className="relative isolate w-64 sm:w-72 md:w-80 lg:w-[360px] xl:w-[410px] flex flex-col items-center select-none group">

            {/* Ambient diffused teal glow behind subject - permanently visible */}
            <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-tr from-teal-500/25 via-emerald-500/15 to-transparent blur-3xl rounded-full z-0 pointer-events-none" />

            {/* Circular arch backdrop framing the portrait - top part stays, bottom bar removed */}
            <div
              className="absolute top-0 sm:top-2 lg:top-2 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[440px] xl:h-[440px] rounded-full bg-gradient-to-b from-teal-500/15 via-teal-500/5 to-transparent dark:from-teal-400/20 dark:via-teal-400/10 dark:to-transparent border-t-2 border-x-2 border-b-0 border-teal-500/30 dark:border-teal-400/35 shadow-[0_-10px_40px_rgba(13,148,136,0.15)] z-0 pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to bottom, black 50%, transparent 85%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 85%)',
              }}
            />

            {/* Photo container positioned above background effects */}
            <div className="relative z-10 w-full overflow-hidden rounded-b-[2.5rem] sm:rounded-b-[3.5rem] transition-transform duration-500 ease-out group-hover:scale-[1.01]">
              <img
                src={PROFILE_PHOTO}
                alt={`${personalInfo.name} — ${personalInfo.role}`}
                className="w-full h-auto object-contain object-top filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.65)]"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
