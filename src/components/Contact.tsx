import { motion } from 'framer-motion';
import { useState } from 'react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import type { PersonalInfo } from '../types';

interface ContactProps {
  personal: PersonalInfo;
}

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = 'Please enter your name.';
  }
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email.';
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }
  return errors;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Contact({ personal }: ContactProps) {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
  }

  const inputClass =
    'w-full bg-canvas border border-border rounded-xl text-ink font-sans text-sm px-4 py-3 outline-none transition-all duration-200 placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/10';

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto w-full border-t border-border"
    >
      {/* Section label + heading */}
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <span className="block text-accent text-xs font-semibold tracking-[0.18em] uppercase mb-3">
          Contact
        </span>
        <h2
          className="font-serif font-bold text-ink"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.02em' }}
        >
          Let's work together
        </h2>
      </motion.div>

      {/* 2-col grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-20">

        {/* Left — contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <p className="text-muted leading-relaxed mb-10" style={{ fontSize: '0.95rem', maxWidth: '36ch' }}>
            I'm currently open to freelance projects, full-time roles, and interesting collaborations.
            Don't hesitate to reach out.
          </p>

          <ul className="space-y-5">
            <li>
              <p className="text-muted text-xs font-semibold tracking-[0.14em] uppercase mb-1.5">Email</p>
              <a
                href={`mailto:${personal.email}`}
                className="text-ink font-medium text-sm hover:text-accent transition-colors duration-200"
              >
                {personal.email}
              </a>
            </li>
            <li>
              <p className="text-muted text-xs font-semibold tracking-[0.14em] uppercase mb-1.5">GitHub</p>
              <a
                href={`https://${personal.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink font-medium text-sm hover:text-accent transition-colors duration-200"
              >
                <SiGithub className="text-sm" />
                {personal.github}
              </a>
            </li>
            <li>
              <p className="text-muted text-xs font-semibold tracking-[0.14em] uppercase mb-1.5">LinkedIn</p>
              <a
                href={`https://www.${personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink font-medium text-sm hover:text-accent transition-colors duration-200"
              >
                <FaLinkedinIn className="text-sm" />
                {personal.linkedin}
              </a>
            </li>
            <li>
              <p className="text-muted text-xs font-semibold tracking-[0.14em] uppercase mb-1.5">Based in</p>
              <p className="text-ink font-medium text-sm">{personal.location}</p>
            </li>
          </ul>
        </motion.div>

        {/* Right — form */}
        {submitted ? (
          <motion.div
            className="bg-surface border border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[300px]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-12 h-12 rounded-full bg-accent-pale flex items-center justify-center mb-5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10.5L8 14.5L16 6" stroke="#9966FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-serif font-bold text-ink text-xl mb-2">Message sent!</h3>
            <p className="text-muted text-sm">Your mail client has been opened. I'll be in touch soon.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
          >
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className={`${inputClass} ${errors.name ? 'border-red-400 ring-2 ring-red-400/10' : ''}`}
              />
              {errors.name && (
                <p className="mt-1.5 text-red-500 text-xs">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className={`${inputClass} ${errors.email ? 'border-red-400 ring-2 ring-red-400/10' : ''}`}
              />
              {errors.email && (
                <p className="mt-1.5 text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none ${errors.message ? 'border-red-400 ring-2 ring-red-400/10' : ''}`}
              />
              {errors.message && (
                <p className="mt-1.5 text-red-500 text-xs">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-ink text-white text-sm font-semibold py-3.5 rounded-xl transition-all duration-200 hover:bg-ink/80 hover:-translate-y-0.5 active:translate-y-0"
            >
              Send Message
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
