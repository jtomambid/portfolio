import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import type { PersonalInfo } from '../types';

interface HeroProps {
  personal: PersonalInfo;
}

function useTypewriter(
  words: string[],
  typingSpeed = 75,
  deletingSpeed = 38,
  pauseMs = 2400
) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex] ?? '';
    if (!isDeleting && charIndex < currentWord.length) {
      const id = setTimeout(() => setCharIndex((c) => c + 1), typingSpeed);
      return () => clearTimeout(id);
    }
    if (!isDeleting && charIndex === currentWord.length) {
      const id = setTimeout(() => setIsDeleting(true), pauseMs);
      return () => clearTimeout(id);
    }
    if (isDeleting && charIndex > 0) {
      const id = setTimeout(() => setCharIndex((c) => c - 1), deletingSpeed);
      return () => clearTimeout(id);
    }
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  useEffect(() => {
    setText((words[wordIndex] ?? '').slice(0, charIndex));
  }, [charIndex, wordIndex, words]);

  return text;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: EASE },
});

export default function Hero({ personal }: HeroProps) {
  const role = useTypewriter(personal.roles, 75, 38, 2400);

  return (
    <section className="min-h-svh flex flex-col justify-center pt-24 pb-20 px-6 md:px-10 max-w-6xl mx-auto w-full">

      {/* Availability badge */}
      <motion.div className="flex items-center gap-2 mb-8" {...fade(0.2)}>
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="text-muted text-sm font-medium">Open to work</span>
      </motion.div>

      {/* Name */}
      <motion.h1
        className="font-serif font-bold mb-5 text-ink"
        style={{
          fontSize: 'clamp(2.6rem, 6vw, 5rem)',
          lineHeight: 1.08,
          letterSpacing: '-0.025em',
        }}
        {...fade(0.35)}
      >
        Hi, I'm {personal.firstName}
        <br />
        <span
          style={{
            background: 'linear-gradient(135deg, #9966ff 0%, #c4a0ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {personal.lastName}.
        </span>
      </motion.h1>

      {/* Typewriter role */}
      <motion.p
        className="text-accent font-sans font-medium mb-5 min-h-[1.8em]"
        style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
        {...fade(0.45)}
      >
        {role}
        <span className="animate-blink ml-0.5 font-light text-accent/60">|</span>
      </motion.p>

      {/* Bio */}
      <motion.p
        className="text-muted leading-relaxed mb-10 max-w-[560px]"
        style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}
        {...fade(0.5)}
      >
        {personal.bio}
      </motion.p>

      {/* CTAs */}
      <motion.div className="flex flex-wrap gap-3 mb-16" {...fade(0.65)}>
        <a
          href="#work"
          className="inline-flex items-center gap-2 bg-ink text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink/80"
        >
          View Work
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4M11.5 1.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-border text-ink text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
        >
          Get in Touch
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="flex flex-wrap gap-10 pt-8 border-t border-border"
        {...fade(0.8)}
      >
        {personal.stats.map((stat) => (
          <div key={stat.label}>
            <p
              className="font-serif font-bold text-ink"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', lineHeight: 1.1 }}
            >
              {stat.value}
            </p>
            <p className="text-muted text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
