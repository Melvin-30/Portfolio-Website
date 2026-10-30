import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { personalInfo } from '../data/socialLinks';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide a message of at least 15 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus('submitting');

    try {
      // Direct mail client fallback or Formspree integration
      // Creating mailto link with encoded URI parameters
      const subject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      // Simulate submission network response delay for UI feedback
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Trigger mail client or successful state
      window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');

      setStatus('success');
      setStatusMessage('Thank you! Your default email client was opened to dispatch this message directly to Melvin.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
      setStatusMessage('An error occurred while preparing your message. Please write directly to ' + personalInfo.email);
    }
  };

  return (
    <div className="rounded-2xl border border-theme bg-card p-6 sm:p-8 shadow-sm">
      <h3 className="text-xl font-bold text-primary-custom tracking-tight mb-2">
        Send a Direct Message
      </h3>
      <p className="text-xs sm:text-sm text-secondary-custom mb-6">
        Fill out the form below to initiate communication regarding projects, collaborations, or inquiries.
      </p>

      {status === 'success' && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <p className="font-semibold">Message Prepared Successfully</p>
            <p className="mt-0.5">{statusMessage}</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-400 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <p className="font-semibold">Something went wrong</p>
            <p className="mt-0.5">{statusMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-primary-custom mb-1.5 uppercase font-mono tracking-wider">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-subtle text-primary-custom placeholder:text-muted-custom focus:outline-none focus:ring-2 transition-all ${
              errors.name
                ? 'border-rose-500 focus:ring-rose-500/30'
                : 'border-theme focus:border-teal-500 focus:ring-teal-500/20'
            }`}
          />
          {errors.name && <p className="mt-1 text-xs text-rose-500">{errors.name}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-primary-custom mb-1.5 uppercase font-mono tracking-wider">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@domain.com"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-subtle text-primary-custom placeholder:text-muted-custom focus:outline-none focus:ring-2 transition-all ${
              errors.email
                ? 'border-rose-500 focus:ring-rose-500/30'
                : 'border-theme focus:border-teal-500 focus:ring-teal-500/20'
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-rose-500">{errors.email}</p>}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-xs font-semibold text-primary-custom mb-1.5 uppercase font-mono tracking-wider">
            Subject <span className="text-rose-500">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Collaboration or Project Inquiry"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-subtle text-primary-custom placeholder:text-muted-custom focus:outline-none focus:ring-2 transition-all ${
              errors.subject
                ? 'border-rose-500 focus:ring-rose-500/30'
                : 'border-theme focus:border-teal-500 focus:ring-teal-500/20'
            }`}
          />
          {errors.subject && <p className="mt-1 text-xs text-rose-500">{errors.subject}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-primary-custom mb-1.5 uppercase font-mono tracking-wider">
            Message <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-subtle text-primary-custom placeholder:text-muted-custom focus:outline-none focus:ring-2 transition-all resize-y ${
              errors.message
                ? 'border-rose-500 focus:ring-rose-500/30'
                : 'border-theme focus:border-teal-500 focus:ring-teal-500/20'
            }`}
          ></textarea>
          {errors.message && <p className="mt-1 text-xs text-rose-500">{errors.message}</p>}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-accent-custom text-white hover:opacity-95 disabled:opacity-50 transition-all cursor-pointer shadow-sm"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Preparing Message...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
