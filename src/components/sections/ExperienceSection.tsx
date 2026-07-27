'use client'

import { motion } from 'framer-motion'
import { Calendar, Briefcase, ChevronRight } from 'lucide-react'

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

const experiences = [
  {
    company: 'TealOrca Software Solutions Pvt. Ltd.',
    logoText: 'TO',
    logoUrl: '/assets/tealorca_logo.png',
    role: 'AI/ML Intern',
    period: 'June 2025 — November 2025',
    duration: '6 mos',
    bullets: [
      '70–80% of 100 daily calls resolved autonomously by multilingual voice AI agents (Tamil & English) built for appointment booking, batch scheduling, and customer enquiries — remainder routed via live transfer.',
      '5–7 domain-specific voice agents (healthcare, finance, restaurant) deployed live over phone using ElevenLabs + Twilio — human-like conversations engineered through structured multilingual prompt design.',
      'All 9 Voice API modules (Agents, Batches, Phone Calls, Knowledgebases, Inbound Agent, Executions, Phone Numbers, User, Voice) developed in Python + FastAPI and fully shipped to production within internship timeline.',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full max-w-[1450px] mx-auto px-8 md:px-12 lg:px-20 pt-20 pb-20 text-slate-900 dark:text-slate-100"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: smoothEase }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center mb-12"
      >
        <h1
          style={{ color: 'var(--text-primary)' }}
          className="text-3xl md:text-5xl font-extrabold mb-3 tracking-tight"
        >
          Work Experience
        </h1>

        <p
          style={{ color: 'var(--text-secondary)' }}
          className="max-w-xl mx-auto text-sm md:text-base font-normal"
        >
          Hands-on professional experience building and deploying production-ready AI models & platforms.
        </p>
      </motion.div>

      {/* EXPERIENCE CARDS CONTAINER */}
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: index * 0.1, ease: smoothEase }}
            viewport={{ once: false }}
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#E2E8F0',
              color: '#0F172A',
            }}
            className="group relative rounded-[28px] border p-6 md:p-8 shadow-md hover:shadow-xl hover:border-blue-500/50 transition-all duration-300"
          >
            {/* TOP BAR */}
            <div
              style={{ borderColor: '#F1F5F9' }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b"
            >
              <div className="flex items-center gap-4">
                <div
                  style={{ backgroundColor: '#F8FAFC', borderColor: '#E2E8F0' }}
                  className="w-12 h-12 rounded-2xl border p-1.5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-xs"
                >
                  {exp.logoUrl ? (
                    <img src={exp.logoUrl} alt={exp.company} className="w-full h-full object-contain" />
                  ) : (
                    <span style={{ color: '#2563EB' }} className="font-extrabold text-lg">{exp.logoText}</span>
                  )}
                </div>

                <div>
                  <h3
                    style={{ color: '#0F172A' }}
                    className="text-lg md:text-xl font-bold group-hover:text-blue-600 transition-colors"
                  >
                    {exp.company}
                  </h3>
                  <div style={{ color: '#2563EB' }} className="flex items-center gap-2 text-sm font-semibold mt-0.5">
                    <Briefcase size={14} />
                    <span>{exp.role}</span>
                  </div>
                </div>
              </div>

              <div
                style={{ backgroundColor: '#F8FAFC', borderColor: '#E2E8F0', color: '#475569' }}
                className="flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full border w-fit"
              >
                <Calendar size={13} style={{ color: '#2563EB' }} />
                <span>{exp.period}</span>
                <span
                  style={{ backgroundColor: '#EFF6FF', color: '#1D4ED8' }}
                  className="text-[11px] px-2 py-0.5 rounded-full font-bold"
                >
                  {exp.duration}
                </span>
              </div>
            </div>

            {/* BULLET POINTS */}
            <ul className="space-y-3.5">
              {exp.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  style={{ color: '#334155' }}
                  className="flex items-start gap-3 text-xs md:text-sm leading-relaxed"
                >
                  <div style={{ backgroundColor: '#2563EB' }} className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
