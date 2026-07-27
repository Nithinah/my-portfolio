'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

type Props = {
  title: string
  description: string
  index: number
  id?: string
  image?: string
  live_url?: string
  github_url?: string
  technologies?: string[]
}

export default function PortfolioCard({
  title,
  description,
  index,
  id,
  live_url,
  github_url = 'https://github.com/Nithinah',
  technologies,
}: Props) {
  const router = useRouter()

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -30 : 30,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.05,
      }}
      whileHover={{ y: -5 }}
      style={{
        backgroundColor: '#FFFFFF',
        borderColor: '#E2E8F0',
      }}
      className="group relative rounded-[28px] border p-6 md:p-7 shadow-md hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between h-full min-h-[300px]"
    >
      <div>
        <h3
          style={{ color: '#0F172A' }}
          className="text-xl font-extrabold mb-3 group-hover:text-blue-600 transition-colors tracking-tight"
        >
          {title}
        </h3>

        <p
          style={{ color: '#334155' }}
          className="text-xs md:text-sm leading-relaxed mb-5 font-normal"
        >
          {description}
        </p>

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {technologies.map((tech, i) => (
              <span
                key={i}
                style={{
                  backgroundColor: '#EFF6FF',
                  borderColor: '#BFDBFE',
                  color: '#1D4ED8',
                }}
                className="text-[11px] font-mono font-medium border px-2.5 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div
        style={{ borderColor: '#F1F5F9' }}
        className="flex items-center gap-3 pt-4 border-t"
      >
        {github_url && (
          <a
            href={github_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#64748B' }}
            className="p-2 rounded-xl hover:text-blue-600 hover:bg-slate-100 transition-all"
            title="View Code on GitHub"
          >
            <FaGithub size={18} />
          </a>
        )}

        {live_url && (
          <a
            href={live_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#64748B' }}
            className="p-2 rounded-xl hover:text-blue-600 hover:bg-slate-100 transition-all"
            title="Live Demo"
          >
            <ArrowUpRight size={18} />
          </a>
        )}
      </div>
    </motion.div>
  )
}