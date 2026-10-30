import React from 'react';
import { Eye, ExternalLink, Calendar, Hash, Award } from 'lucide-react';

export default function CertificationCard({ certificate, onView }) {
  const hasVerification = Boolean(certificate.verificationUrl && certificate.verificationUrl.trim().length > 0);

  return (
    <div className="rounded-2xl border border-theme bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:border-teal-500/30 flex flex-col justify-between overflow-hidden group">
      {/* Certificate Preview Header */}
      <div
        onClick={() => onView(certificate)}
        className="relative aspect-video w-full bg-subtle border-b border-theme overflow-hidden flex items-center justify-center cursor-pointer group-hover:opacity-95"
      >
        {certificate.previewImage ? (
          <img
            src={certificate.previewImage}
            alt={`Preview of ${certificate.title}`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center text-muted-custom">
            <div className="w-12 h-12 rounded-2xl bg-accent-soft text-teal-600 dark:text-teal-400 border border-accent-custom flex items-center justify-center mb-2">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-medium text-secondary-custom">
              {certificate.issuer}
            </span>
          </div>
        )}

        {/* Hover Overlay with View Action */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-card text-primary-custom text-xs font-semibold shadow-lg backdrop-blur-sm">
            <Eye className="w-3.5 h-3.5 text-teal-500" />
            <span>Quick View</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Issuer & Category Badge */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accent-soft text-teal-600 dark:text-teal-400 border border-accent-custom font-mono">
              {certificate.issuer}
            </span>
            {certificate.issueDate && (
              <span className="inline-flex items-center gap-1 text-[11px] text-muted-custom">
                <Calendar className="w-3 h-3" />
                <span>{certificate.issueDate}</span>
              </span>
            )}
          </div>

          {/* Certificate Title */}
          <h3 className="text-base font-bold text-primary-custom tracking-tight mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
            {certificate.title}
          </h3>

          {/* Description */}
          {certificate.description && (
            <p className="text-xs text-secondary-custom leading-relaxed mb-4 line-clamp-2">
              {certificate.description}
            </p>
          )}

          {/* Certificate ID */}
          {certificate.certificateId && (
            <div className="mb-4 flex items-center gap-1.5 text-[11px] text-muted-custom font-mono truncate">
              <Hash className="w-3 h-3 shrink-0" />
              <span className="truncate">ID: {certificate.certificateId}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-theme grid grid-cols-2 gap-2 mt-auto">
          {/* View Certificate Modal Trigger */}
          <button
            type="button"
            onClick={() => onView(certificate)}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-accent-custom text-white hover:opacity-95 shadow-sm transition-all cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View</span>
          </button>

          {/* Verify Certificate External Link */}
          {hasVerification ? (
            <a
              href={certificate.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border border-theme bg-card hover:bg-card-hover text-primary-custom shadow-sm transition-all cursor-pointer truncate"
              title="Verify credential on issuing platform"
            >
              <ExternalLink className="w-3.5 h-3.5 text-teal-500 shrink-0" />
              <span className="truncate">Verify</span>
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex items-center justify-center px-2 py-2 rounded-xl text-[11px] font-medium bg-subtle text-muted-custom border border-theme cursor-not-allowed text-center truncate"
              title="Verification link unavailable"
            >
              <span className="truncate">No link</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
