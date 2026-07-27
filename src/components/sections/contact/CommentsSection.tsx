'use client'

import { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { Heart, Pin, MessageSquare } from 'lucide-react'
import useComments from '@/hooks/useComments'

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
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

export default function CommentsSection() {
  const { comments, loading, addComment, likeComment } = useComments()

  const [name, setName] = useState('')
  const [comment, setComment] = useState('')

  const handleSubmit = async () => {
    if (!name.trim() || !comment.trim()) return

    await addComment({
      name,
      comment,
      image: null,
    })

    setName('')
    setComment('')
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: smoothEase,
      }}
      viewport={{ once: false, amount: 0.2 }}
      className="rounded-[28px] border border-slate-200 dark:border-[#30363D] bg-white dark:bg-[#161B22] shadow-sm p-5 md:p-6 text-slate-900 dark:text-[#C9D1D9]"
    >
      {/* HEADER */}
      <div className="mb-4">
        <h3 className="text-xl md:text-2xl font-bold mb-1 text-slate-900 dark:text-[#C9D1D9]">
          Comments
        </h3>

        <p className="text-xs md:text-sm text-slate-500 dark:text-[#8B949E] font-normal">
          Leave your thoughts here
        </p>
      </div>

      {/* FORM */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="space-y-3 mb-4"
      >
        <motion.input
          variants={itemVariants}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full rounded-xl border border-slate-200 dark:border-[#30363D] bg-slate-50/70 dark:bg-[#0D1117] text-slate-900 dark:text-[#C9D1D9] placeholder:text-slate-400 dark:placeholder:text-[#8B949E] px-4 py-2.5 outline-none focus:border-blue-600 dark:focus:border-[#58A6FF] focus:bg-white dark:focus:bg-[#0D1117] focus:ring-2 focus:ring-blue-500/20 transition-all text-xs md:text-sm"
        />

        <motion.textarea
          variants={itemVariants}
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your Comment"
          className="w-full rounded-xl border border-slate-200 dark:border-[#30363D] bg-slate-50/70 dark:bg-[#0D1117] text-slate-900 dark:text-[#C9D1D9] placeholder:text-slate-400 dark:placeholder:text-[#8B949E] px-4 py-2.5 outline-none resize-none focus:border-blue-600 dark:focus:border-[#58A6FF] focus:bg-white dark:focus:bg-[#0D1117] focus:ring-2 focus:ring-blue-500/20 transition-all text-xs md:text-sm"
        />

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
          disabled={loading}
          className="w-full rounded-xl py-3 bg-[#2563EB] dark:bg-[#58A6FF] hover:bg-[#1D4ED8] dark:hover:bg-[#79C0FF] text-white dark:text-[#0D1117] font-semibold shadow-md transition-all text-sm"
        >
          {loading ? 'Posting...' : 'Post Comment'}
        </motion.button>
      </motion.div>

      {/* COMMENTS LIST (RENDER ONLY IF COMMENTS EXIST) */}
      {comments && comments.length > 0 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="rounded-2xl border border-slate-200 dark:border-[#30363D] bg-slate-50/60 dark:bg-[#0D1117] p-3 max-h-[300px] overflow-y-auto custom-scroll"
        >
          <div className="space-y-3">
            <AnimatePresence initial={false}>
              {comments.map((item, i) => (
                <motion.div
                  key={item.id || i}
                  layout
                  initial={{
                    opacity: 0,
                    y: 18,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: smoothEase,
                  }}
                  className={`rounded-xl border p-3 shadow-xs ${
                    item.is_pinned
                      ? 'border-indigo-300 dark:border-indigo-700 bg-indigo-50/60 dark:bg-indigo-950/40'
                      : 'border-slate-200 dark:border-[#30363D] bg-white dark:bg-[#161B22]'
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-[#58A6FF] font-bold flex items-center justify-center text-xs shrink-0">
                      {item.name?.charAt(0)}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p className="text-xs font-bold text-slate-900 dark:text-[#C9D1D9]">
                          {item.name}
                        </p>

                        {item.is_pinned && (
                          <div className="flex items-center gap-1 px-2 py-[2px] rounded-full bg-indigo-100 dark:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-700 text-[10px] font-semibold text-indigo-700 dark:text-indigo-300">
                            <Pin size={10} />
                            PINNED
                          </div>
                        )}
                      </div>

                      <p className="text-xs text-slate-600 dark:text-[#8B949E] leading-relaxed">
                        {item.comment}
                      </p>
                    </div>

                    <button
                      onClick={() => likeComment(item.id, item.likes)}
                      className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-[#8B949E] hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                    >
                      <Heart size={12} className="hover:fill-rose-500" />
                      {item.likes || 0}
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}