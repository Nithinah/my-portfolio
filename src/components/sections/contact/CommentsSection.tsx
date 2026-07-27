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
      style={{
        backgroundColor: '#FFFFFF',
        borderColor: '#E2E8F0',
      }}
      className="rounded-[28px] border shadow-md p-5 md:p-6 text-slate-900"
    >
      {/* HEADER */}
      <div className="mb-4">
        <h3 style={{ color: '#0F172A' }} className="text-xl md:text-2xl font-bold mb-1">
          Comments
        </h3>

        <p style={{ color: '#334155' }} className="text-xs md:text-sm font-normal">
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
          style={{
            backgroundColor: '#F8FAFC',
            borderColor: '#E2E8F0',
            color: '#0F172A',
          }}
          className="w-full rounded-xl border placeholder:text-slate-400 px-4 py-2.5 outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all text-xs md:text-sm"
        />

        <motion.textarea
          variants={itemVariants}
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your Comment"
          style={{
            backgroundColor: '#F8FAFC',
            borderColor: '#E2E8F0',
            color: '#0F172A',
          }}
          className="w-full rounded-xl border placeholder:text-slate-400 px-4 py-2.5 outline-none resize-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all text-xs md:text-sm"
        />

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
          disabled={loading}
          className="w-full rounded-xl py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-all text-sm"
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
          style={{
            backgroundColor: '#F8FAFC',
            borderColor: '#E2E8F0',
          }}
          className="rounded-2xl border p-3 max-h-[300px] overflow-y-auto custom-scroll"
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
                  style={{
                    backgroundColor: item.is_pinned ? '#EEF2FF' : '#FFFFFF',
                    borderColor: item.is_pinned ? '#C7D2FE' : '#E2E8F0',
                  }}
                  className="rounded-xl border p-3 shadow-xs"
                >
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs shrink-0">
                      {item.name?.charAt(0)}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p style={{ color: '#0F172A' }} className="text-xs font-bold">
                          {item.name}
                        </p>

                        {item.is_pinned && (
                          <div className="flex items-center gap-1 px-2 py-[2px] rounded-full bg-indigo-100 border border-indigo-200 text-[10px] font-semibold text-indigo-700">
                            <Pin size={10} />
                            PINNED
                          </div>
                        )}
                      </div>

                      <p style={{ color: '#334155' }} className="text-xs leading-relaxed">
                        {item.comment}
                      </p>
                    </div>

                    <button
                      onClick={() => likeComment(item.id, item.likes)}
                      className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-rose-600 transition-colors"
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