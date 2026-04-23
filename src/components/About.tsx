import { motion } from 'framer-motion';
import type { PersonalInfo } from '../types';

interface AboutProps {
  personal: PersonalInfo;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function About({ personal }: AboutProps) {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto w-full border-t border-border">

      {/* Section label + heading */}
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <span className="block text-accent text-xs font-semibold tracking-[0.18em] uppercase mb-3">
          About Me
        </span>
        <h2
          className="font-serif font-bold text-ink mb-4"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.02em' }}
        >
          A bit about me
        </h2>
        <p className="text-muted leading-relaxed max-w-xl" style={{ fontSize: '1rem' }}>
          {personal.bio}
        </p>
      </motion.div>

      {/* Highlight cards — 4 col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {personal.highlights.map((item, i) => (
          <motion.div
            key={item.title}
            className="group bg-surface border border-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
          >
            <span className="text-2xl mb-4 block" aria-hidden="true">
              {item.icon}
            </span>
            <h3 className="font-serif font-semibold text-ink mb-2 text-base group-hover:text-accent transition-colors duration-200">
              {item.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
