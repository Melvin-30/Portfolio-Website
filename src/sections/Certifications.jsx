import React, { useState, useMemo } from 'react';
import { Search, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CertificationCard from '../components/CertificationCard';
import CertificateViewer from '../components/CertificateViewer';
import { certificationCategories, certifications } from '../data/certifications';

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const filteredCertificates = useMemo(() => {
    return certifications.filter((cert) => {
      const matchesCategory =
        activeCategory === 'All' || cert.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (cert.description && cert.description.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-theme">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="CERTIFICATIONS"
          title="Verified Professional Credentials"
          subtitle="Genuine accredited certifications spanning artificial intelligence, full-stack software development, database architecture, network security, and computer applications."
        />

        {/* Filter & Search Bar */}
        <div className="mb-10 space-y-4">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-muted-custom absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, issuer, or topic..."
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-card border border-theme text-primary-custom placeholder:text-muted-custom focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all shadow-sm"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {certificationCategories.map((cat) => {
              const count =
                cat === 'All'
                  ? certifications.length
                  : certifications.filter((c) => c.category === cat).length;

              if (count === 0 && cat !== 'All') return null;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-accent-custom text-white shadow-sm'
                      : 'bg-card border border-theme text-secondary-custom hover:text-primary-custom hover:bg-card-hover'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      activeCategory === cat
                        ? 'bg-white/20 text-white'
                        : 'bg-subtle text-muted-custom'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Result count indicator */}
          <div className="text-center text-xs text-muted-custom flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
            <span>
              Showing {filteredCertificates.length} of {certifications.length} verified credentials
            </span>
          </div>
        </div>

        {/* Certificate Cards Grid */}
        {filteredCertificates.length === 0 ? (
          <div className="rounded-2xl border border-theme bg-card p-12 text-center max-w-md mx-auto shadow-sm">
            <p className="text-sm text-secondary-custom mb-2">No certificates found matching your filter.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert) => (
              <CertificationCard
                key={cert.id}
                certificate={cert}
                onView={setSelectedCertificate}
              />
            ))}
          </div>
        )}

        {/* Interactive Modal Viewer */}
        {selectedCertificate && (
          <CertificateViewer
            certificate={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          />
        )}
      </div>
    </section>
  );
}
