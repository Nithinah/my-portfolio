'use client'

import { motion } from 'framer-motion'
import ContactForm from './ContactForm'
const smoothEase: [number, number, number, number] = [
  0.22,
  1,
  0.36,
  1,
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full max-w-[1500px] mx-auto 
      px-5 sm:px-6 md:px-10 lg:px-20
      pt-10 sm:pt-14 
      pb-12 sm:pb-16 
      text-slate-900 dark:text-slate-100"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.35,
          ease: 'easeOut',
        }}
        viewport={{ once: false, amount: 0.05 }}
        className="text-center mb-8 sm:mb-10"
      >
        <h1
          style={{ color: 'var(--text-primary)' }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 tracking-tight"
        >
          Contact Me
        </h1>

        <p
          style={{ color: 'var(--text-secondary)' }}
          className="text-sm sm:text-base max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Have something in mind? Send a message and let's connect.
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="w-full max-w-3xl mx-auto">
        {/* FORM */}
        <ContactForm />
      </div>
      {/* COPYRIGHT */}
      <div className="mt-10 text-center text-xs text-slate-400 dark:text-slate-500">
        © 2026 Nithin V — All rights reserved.
      </div>
    </section>
  )
}