'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code2,
  Brain,
  Database,
  Cpu,
  Sparkles,
  Server,
  Bot,
  Radio,
  Network,
  Activity,
  Layers,
  Terminal,
} from 'lucide-react'

type SkillNode = {
  name: string
  category: string
  iconUrl?: string
  lucideIcon?: any
  ring: number // 1 to 5
  angle: number // in degrees
}

const skillsList: SkillNode[] = [
  // Ring 1 (Inner AI Core)
  {
    name: 'Python',
    category: 'Language',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    ring: 1,
    angle: 0,
  },
  {
    name: 'TensorFlow',
    category: 'Deep Learning',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    ring: 1,
    angle: 90,
  },
  {
    name: 'PyTorch',
    category: 'Deep Learning',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    ring: 1,
    angle: 180,
  },
  {
    name: 'FastAPI',
    category: 'Backend Framework',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    ring: 1,
    angle: 270,
  },

  // Ring 2 (AI/LLM & Vector Databases)
  {
    name: 'RAG Architecture',
    category: 'AI Technique',
    lucideIcon: Brain,
    ring: 2,
    angle: 35,
  },
  {
    name: 'ChromaDB',
    category: 'Vector Database',
    lucideIcon: Database,
    ring: 2,
    angle: 105,
  },
  {
    name: 'FAISS Indexing',
    category: 'Vector Search',
    lucideIcon: Layers,
    ring: 2,
    angle: 175,
  },
  {
    name: 'Computer Vision',
    category: 'AI Technique',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    ring: 2,
    angle: 245,
  },
  {
    name: 'Conversational AI',
    category: 'Voice AI',
    lucideIcon: Bot,
    ring: 2,
    angle: 315,
  },

  // Ring 3 (Data Science & ML Libraries)
  {
    name: 'NumPy',
    category: 'Data Science',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    ring: 3,
    angle: 15,
  },
  {
    name: 'Pandas',
    category: 'Data Analysis',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    ring: 3,
    angle: 75,
  },
  {
    name: 'Scikit-learn',
    category: 'Machine Learning',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
    ring: 3,
    angle: 135,
  },
  {
    name: 'Matplotlib',
    category: 'Data Visualization',
    lucideIcon: Activity,
    ring: 3,
    angle: 195,
  },
  {
    name: 'Streamlit',
    category: 'AI Web Apps',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg',
    ring: 3,
    angle: 255,
  },
  {
    name: 'React JS',
    category: 'Frontend Framework',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    ring: 3,
    angle: 315,
  },

  // Ring 4 (Tools & Databases)
  {
    name: 'Docker',
    category: 'Containerization',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    ring: 4,
    angle: 0,
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    ring: 4,
    angle: 60,
  },
  {
    name: 'SQL',
    category: 'Query Language',
    lucideIcon: Terminal,
    ring: 4,
    angle: 120,
  },
  {
    name: 'Git & GitHub',
    category: 'Version Control',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    ring: 4,
    angle: 180,
  },
  {
    name: 'Power BI',
    category: 'Business Intelligence',
    lucideIcon: Network,
    ring: 4,
    angle: 240,
  },
  {
    name: 'n8n Workflows',
    category: 'Automation',
    lucideIcon: Sparkles,
    ring: 4,
    angle: 300,
  },

  // Ring 5 (Cloud Platforms & Voice AI Services)
  {
    name: 'ElevenLabs',
    category: 'Multilingual Voice AI',
    lucideIcon: Radio,
    ring: 5,
    angle: 40,
  },
  {
    name: 'Google Vertex AI',
    category: 'Cloud AI Platform',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    ring: 5,
    angle: 130,
  },
  {
    name: 'AWS Rekognition',
    category: 'Cloud Services',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    ring: 5,
    angle: 220,
  },
  {
    name: 'LLM Prompt Engineering',
    category: 'AI Technique',
    lucideIcon: Cpu,
    ring: 5,
    angle: 310,
  },
]

export default function SkillsRadar() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  // Radii for 5 concentric rings (px)
  const radii = [75, 130, 185, 240, 295]

  return (
    <div className="w-full max-w-4xl mx-auto my-4 px-2 md:px-4">
      {/* TRANSPARENT CONTAINER WITH HIGHLIGHTED ORBITAL LINES */}
      <div className="relative w-full h-[620px] md:h-[660px] flex items-center justify-center select-none overflow-hidden bg-transparent">
        
        {/* AMBIENT GLOW BACKLIGHTS */}
        <div className="absolute w-[450px] h-[450px] rounded-full bg-purple-500/10 dark:bg-purple-600/15 blur-3xl pointer-events-none" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-500/10 dark:bg-blue-600/15 blur-2xl pointer-events-none" />

        {/* CONTINUOUS ROTATING ORBITAL CONTAINER */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 55, ease: 'linear' }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* BRIGHTLY HIGHLIGHTED CONCENTRIC RINGS */}
          {radii.map((radius, idx) => (
            <div
              key={idx}
              style={{
                width: radius * 2,
                height: radius * 2,
              }}
              className={`absolute rounded-full pointer-events-none ${
                idx === 0
                  ? 'border-2 border-purple-500/70 dark:border-purple-400/80 shadow-[0_0_15px_rgba(168,85,247,0.35)]'
                  : idx === 1
                  ? 'border-2 border-indigo-500/65 dark:border-indigo-400/75 shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                  : idx === 2
                  ? 'border-2 border-blue-500/60 dark:border-blue-400/70 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                  : idx === 3
                  ? 'border-2 border-cyan-500/55 dark:border-cyan-400/65 shadow-[0_0_20px_rgba(34,211,238,0.25)]'
                  : 'border-2 border-purple-400/45 dark:border-purple-400/55 shadow-[0_0_20px_rgba(192,132,252,0.25)]'
              }`}
            />
          ))}

          {/* SKILL NODES */}
          {skillsList.map((skill, index) => {
            const r = radii[skill.ring - 1]
            const rad = (skill.angle * Math.PI) / 180
            const x = r * Math.cos(rad)
            const y = r * Math.sin(rad)
            const isHovered = hoveredSkill === skill.name
            const LucideComp = skill.lucideIcon

            return (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
                className="z-30 group"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* COUNTER ROTATE SKILL NODE SO LOGOS & TOOLTIPS REMAIN UPRIGHT */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 55, ease: 'linear' }}
                  className="relative flex flex-col items-center"
                >
                  {/* NODE LOGO BADGE */}
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/90 hover:border-purple-500 dark:hover:border-purple-400 shadow-md dark:shadow-[0_0_15px_rgba(168,85,247,0.35)] flex items-center justify-center p-2 group-hover:scale-130 transition-all duration-300 cursor-pointer">
                    {skill.iconUrl ? (
                      <img
                        src={skill.iconUrl}
                        alt={skill.name}
                        className="w-5 h-5 md:w-6 md:h-6 object-contain filter drop-shadow-[0_0_2px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
                      />
                    ) : LucideComp ? (
                      <LucideComp className="w-5 h-5 text-blue-600 dark:text-purple-300" />
                    ) : (
                      <span className="text-[9px] md:text-[10px] font-mono font-bold text-blue-600 dark:text-purple-300 text-center leading-none">
                        {skill.name.slice(0, 4)}
                      </span>
                    )}
                  </div>

                  {/* TOOLTIP ON HOVER ONLY (HIDDEN BY DEFAULT) */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full mb-3 bg-slate-900 dark:bg-slate-900 border border-purple-500/60 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-2xl pointer-events-none z-50 whitespace-nowrap flex items-center gap-2"
                      >
                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                        <span>{skill.name}</span>
                        <span className="text-[10px] text-purple-300 font-mono">({skill.category})</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            )
          })}
        </motion.div>

        {/* CENTER CORE HUB (STATIONARY) */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute z-40 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white dark:bg-[#0F172A] border-2 border-purple-500 dark:border-purple-400 shadow-xl dark:shadow-[0_0_40px_rgba(168,85,247,0.6)] flex items-center justify-center cursor-pointer group pointer-events-auto"
        >
          <Code2 className="text-purple-600 dark:text-purple-300 group-hover:scale-110 transition-transform duration-300" size={28} />
        </motion.div>
      </div>
    </div>
  )
}
