import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Download, ExternalLink, ShieldCheck } from 'lucide-react';

export default function CertificateViewer({ certificate, onClose }) {
  const [zoom, setZoom] = useState(1);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!certificate) return null;

  const isImage = certificate.certificateFile.match(/\.(png|jpg|jpeg|webp)$/i);

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 2.5));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5));
  const resetZoom = () => setZoom(1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-viewer-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[90vh] rounded-2xl bg-card border border-theme shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-theme bg-subtle">
          <div className="overflow-hidden mr-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-accent-soft text-teal-600 dark:text-teal-400 border border-accent-custom">
                {certificate.issuer}
              </span>
              {certificate.issueDate && (
                <span className="text-xs text-muted-custom">
                  Issued: {certificate.issueDate}
                </span>
              )}
            </div>
            <h3 id="cert-viewer-title" className="text-base sm:text-lg font-bold text-primary-custom truncate">
              {certificate.title}
            </h3>
          </div>

          {/* Action buttons & Close */}
          <div className="flex items-center gap-2 shrink-0">
            {isImage && (
              <div className="hidden sm:flex items-center gap-1 border border-theme rounded-xl p-1 bg-card">
                <button
                  type="button"
                  onClick={zoomOut}
                  aria-label="Zoom out"
                  className="p-1.5 rounded-lg hover:bg-card-hover text-secondary-custom hover:text-primary-custom"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono px-1.5 text-muted-custom min-w-10 text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  type="button"
                  onClick={zoomIn}
                  aria-label="Zoom in"
                  className="p-1.5 rounded-lg hover:bg-card-hover text-secondary-custom hover:text-primary-custom"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={resetZoom}
                  aria-label="Reset zoom"
                  className="p-1.5 rounded-lg hover:bg-card-hover text-secondary-custom hover:text-primary-custom"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <a
              href={certificate.certificateFile}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open original file in new tab"
              className="p-2 rounded-xl border border-theme bg-card hover:bg-card-hover text-secondary-custom hover:text-primary-custom transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={certificate.certificateFile}
              download
              aria-label="Download certificate"
              className="p-2 rounded-xl border border-theme bg-card hover:bg-card-hover text-secondary-custom hover:text-primary-custom transition-colors"
              title="Download file"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate viewer"
              className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/20 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Viewer Body */}
        <div className="flex-1 bg-black/5 dark:bg-black/40 overflow-auto p-4 flex items-center justify-center">
          {isImage ? (
            <div className="overflow-auto max-w-full max-h-full flex items-center justify-center">
              <img
                src={certificate.certificateFile}
                alt={certificate.title}
                style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-md transition-transform duration-150"
              />
            </div>
          ) : (
            <iframe
              src={certificate.certificateFile}
              title={certificate.title}
              className="w-full h-full rounded-lg border border-theme bg-card shadow-inner"
            />
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-5 py-3 border-t border-theme bg-subtle flex flex-col sm:flex-row items-center justify-between text-xs text-secondary-custom gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-500 shrink-0" />
            <span>
              {certificate.certificateId ? `ID: ${certificate.certificateId}` : 'Verified Academic Credential'}
            </span>
          </div>

          {certificate.verificationUrl ? (
            <a
              href={certificate.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-teal-600 dark:text-teal-400 hover:underline"
            >
              <span>Validate on Official Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-muted-custom italic">Verification link unavailable</span>
          )}
        </div>
      </div>
    </div>
  );
}
