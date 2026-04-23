import { motion } from 'framer-motion';
import type { Skill, SkillCategory } from '../types';

interface SkillsProps {
  skills: Skill[];
}

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  languages: 'Programming Languages',
  frontend:  'Frontend',
  libraries: 'Libraries & Frameworks',
  tools:     'Tools',
};

const CATEGORIES: SkillCategory[] = ['languages', 'frontend', 'libraries', 'tools'];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Skills({ skills }: SkillsProps) {
  const grouped = CATEGORIES.map((cat) => ({
    category: cat,
    label: CATEGORY_LABELS[cat],
    skills: skills.filter((s) => s.category === cat),
  }));

  return (
    <section
      id="skills"
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
          Tech Stack
        </span>
        <h2
          className="font-serif font-bold text-ink"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.02em' }}
        >
          What I work with
        </h2>
      </motion.div>

      {/* Category groups */}
      <div className="space-y-10">
        {grouped.map(({ category, label, skills: catSkills }, gi) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: gi * 0.07, ease: EASE }}
          >
            <p className="text-muted text-xs font-semibold tracking-[0.14em] uppercase mb-4">
              {label}
            </p>
            <div className="flex flex-wrap gap-2">
              {catSkills.map((skill, i) => (
                <motion.span
                  key={skill.name}
                  className="inline-flex items-center bg-chip border border-border text-ink text-xs font-medium px-4 py-2 rounded-full cursor-default transition-all duration-200 hover:bg-accent hover:text-white hover:border-accent hover:-translate-y-0.5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: gi * 0.07 + i * 0.04, ease: EASE }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
