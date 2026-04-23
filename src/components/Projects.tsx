import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import type { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section
      id="work"
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
          Portfolio
        </span>
        <h2
          className="font-serif font-bold text-ink"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.02em' }}
        >
          Selected work
        </h2>
      </motion.div>

      {/* 2-col grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            className="group bg-surface border border-border rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-md"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
          >
            {/* Top row */}
            <div className="flex items-center justify-between mb-5">
              <span className="text-muted text-xs font-medium">{project.year}</span>
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="text-muted hover:text-ink transition-colors duration-200"
                  >
                    <SiGithub className="text-base" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live`}
                    className="text-muted hover:text-accent transition-colors duration-200"
                  >
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                      <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4M11.5 1.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Title */}
            <h3
              className="font-serif font-bold text-ink mb-3 transition-colors duration-200 group-hover:text-accent"
              style={{ fontSize: 'clamp(1.15rem, 2vw, 1.4rem)', letterSpacing: '-0.01em' }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
              {project.description}
            </p>

            {/* Tags + link row */}
            <div className="flex items-end justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-chip text-muted text-[0.65rem] font-medium px-2.5 py-1 rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex-shrink-0 inline-flex items-center gap-1.5 text-muted text-xs font-medium hover:text-accent transition-all duration-200"
                >
                  View Project
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    aria-hidden="true"
                  >
                    <path d="M1 10L10 1M10 1H3.5M10 1V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      {/* GitHub CTA */}
      <motion.div
        className="mt-10 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a
          href="https://github.com/jtomambid"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-border text-muted text-sm font-medium px-5 py-2.5 rounded-full hover:border-accent hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
        >
          <SiGithub className="text-base" />
          More on GitHub
        </a>
      </motion.div>
    </section>
  );
}
