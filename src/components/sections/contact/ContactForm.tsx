'use client'

import { motion, Variants } from 'framer-motion'
import {
  Send,
  User,
  Mail,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react'

import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa'

const smoothEase: [number, number, number, number] = [
  0.22,
  1,
  0.36,
  1,
]

const fieldVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
}

const socialLinks = [
  {
    title: 'Email',
    user: 'nithin9804@gmail.com',
    icon: Mail,
    link: 'mailto:nithin9804@gmail.com',
  },
  {
    title: 'Phone',
    user: '+91 7010895344',
    icon: User,
    link: 'tel:+917010895344',
  },
  {
    title: 'Github',
    user: '',
    icon: FaGithub,
    link: 'https://github.com/Nithinah',
  },
  {
    title: 'LinkedIn',
    user: '',
    icon: FaLinkedinIn,
    link: 'https://www.linkedin.com/in/nithin-v-693a6a270/',
  },
]

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: smoothEase }}
      viewport={{ once: false, amount: 0.2 }}
      style={{
        backgroundColor: '#FFFFFF',
        borderColor: '#E2E8F0',
      }}
      className="rounded-[28px] border p-5 md:p-8 flex flex-col h-full shadow-md"
    >
      {/* HEADER */}
      <motion.div
        variants={fieldVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        transition={{ delay: 0.05 }}
      >
        <h2 style={{ color: '#0F172A' }} className="text-2xl md:text-3xl font-bold mb-3">
          Get In Touch
        </h2>

        <p style={{ color: '#334155' }} className="text-sm mb-7 font-normal">
          Feel free to reach out if you want to collaborate,
          discuss AI ideas, or simply say hello.
        </p>
      </motion.div>

      {/* FORM */}
      <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
        <input type="hidden" name="access_key" value="78e58bcc-5d97-42e6-81ec-3b58503d108d" />
        {/* NAME */}
        <motion.div
          variants={fieldVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
        >
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              style={{
                backgroundColor: '#F8FAFC',
                borderColor: '#E2E8F0',
                color: '#0F172A',
              }}
              className="w-full rounded-2xl border placeholder:text-slate-400 pl-12 pr-4 py-4 outline-none transition duration-200 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </motion.div>

        {/* EMAIL */}
        <motion.div
          variants={fieldVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ delay: 0.16 }}
        >
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              style={{
                backgroundColor: '#F8FAFC',
                borderColor: '#E2E8F0',
                color: '#0F172A',
              }}
              className="w-full rounded-2xl border placeholder:text-slate-400 pl-12 pr-4 py-4 outline-none transition duration-200 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </motion.div>

        {/* MESSAGE */}
        <motion.div
          variants={fieldVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ delay: 0.22 }}
        >
          <div className="relative">
            <MessageSquare className="absolute left-4 top-5 text-slate-400" />

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message"
              style={{
                backgroundColor: '#F8FAFC',
                borderColor: '#E2E8F0',
                color: '#0F172A',
              }}
              className="w-full rounded-2xl border placeholder:text-slate-400 pl-12 pr-4 py-4 outline-none resize-none transition duration-200 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </motion.div>

        {/* BUTTON */}
        <motion.button
          type="submit"
          variants={fieldVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ delay: 0.28 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.12 },
          }}
          whileTap={{ scale: 0.97 }}
          className="w-full rounded-2xl py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2 shadow-md transition-all"
        >
          <Send size={16} />
          Send Message
        </motion.button>
      </form>

      {/* SOCIAL */}
      <div style={{ borderColor: '#F1F5F9' }} className="border-t pt-5 mt-6">
        <motion.p
          variants={fieldVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ delay: 0.34 }}
          style={{ color: '#475569' }}
          className="text-sm font-medium mb-4"
        >
          Connect With Me
        </motion.p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {socialLinks.map((item, i) => {
            const Icon = item.icon

            return (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fieldVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                transition={{
                  delay: 0.42 + i * 0.05,
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.12 },
                }}
                style={{
                  backgroundColor: '#F8FAFC',
                  borderColor: '#E2E8F0',
                }}
                className="group relative overflow-hidden rounded-2xl border p-3 flex items-center justify-between hover:border-blue-400 hover:bg-white transition-all shadow-xs"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <Icon className="text-slate-700 group-hover:text-blue-600 transition-colors" />

                  <div>
                    <p style={{ color: '#0F172A' }} className="text-sm font-semibold">{item.title}</p>
                    {item.user && (
                      <p style={{ color: '#64748B' }} className="text-[11px]">
                        {item.user}
                      </p>
                    )}
                  </div>
                </div>

                <div className="relative z-10 opacity-0 group-hover:opacity-100 transition">
                  <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center">
                    <ArrowUpRight size={12} />
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}