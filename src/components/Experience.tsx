import { motion } from 'framer-motion';
import type { ExperienceItem, Education } from '../types';

interface ExperienceProps {
  experience: ExperienceItem[];
  education: Education;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Experience({ experience, education }: ExperienceProps) {
  return (
    <section
      id="experience"
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
          Experience
        </span>
        <h2
          className="font-serif font-bold text-ink"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.02em' }}
        >
          Work history
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative pl-6 md:pl-8 border-l-2 border-border space-y-0">
        {experience.map((item, i) => (
          <motion.article
            key={`${item.company}-${i}`}
            className="group relative pb-12 last:pb-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
          >
            {/* Timeline dot */}
            <div className="absolute -left-[calc(1.5rem+1px)] md:-left-[calc(2rem+1px)] top-1 w-3 h-3 rounded-full border-2 border-border bg-canvas group-hover:border-accent group-hover:bg-accent-pale transition-all duration-300" />

            {/* Card */}
            <div className="bg-surface border border-border rounded-2xl p-6 md:p-7 transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-sm">

              {/* Top row — company + date */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <h3 className="font-serif font-bold text-ink text-lg leading-tight">
                  {item.company}
                </h3>
                <span className="flex-shrink-0 bg-chip border border-border text-muted text-xs font-medium px-3 py-1 rounded-full">
                  {item.period}
                </span>
              </div>

              {/* Role */}
              <p className="text-accent text-sm font-semibold mb-5">{item.role}</p>

              {/* Bullets */}
              <ul className="space-y-2.5 mb-6">
                {item.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-muted text-sm leading-relaxed">
                    <span className="text-accent/60 mt-[0.35em] flex-shrink-0 text-xs">▸</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-chip border border-border text-muted text-[0.65rem] font-medium px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Education */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <span className="block text-accent text-xs font-semibold tracking-[0.18em] uppercase mb-6">
          Education
        </span>
        <div className="bg-surface border border-border rounded-2xl p-6 md:p-7">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
            <h3 className="font-serif font-bold text-ink text-lg">{education.school}</h3>
            <span className="flex-shrink-0 bg-chip border border-border text-muted text-xs font-medium px-3 py-1 rounded-full">
              {education.period}
            </span>
          </div>
          <p className="text-muted text-sm mb-1">{education.degree}</p>
          <p className="text-muted/70 text-xs">{education.location}</p>
        </div>
      </motion.div>
    </section>
  );
}
