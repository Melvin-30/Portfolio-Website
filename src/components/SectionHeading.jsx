import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignmentClasses =
    align === 'left'
      ? 'text-left items-start'
      : align === 'right'
      ? 'text-right items-end'
      : 'text-center items-center';

  return (
    <div className={`flex flex-col ${alignmentClasses} mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase font-mono bg-accent-soft text-teal-600 dark:text-teal-400 border border-accent-custom mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary-custom">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-secondary-custom leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
