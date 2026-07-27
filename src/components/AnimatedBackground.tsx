'use client'

import React, { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const blobRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let requestId: number

    const handleScroll = () => {
      const scroll = window.pageYOffset

      blobRefs.current.forEach((blob, index) => {
        if (!blob) return

        const xOffset =
          Math.sin(scroll / 120 + index * 0.6) * 100

        const yOffset =
          Math.cos(scroll / 120 + index * 0.6) * 35

        blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`
        blob.style.transition = 'transform 1.2s ease-out'
      })

      requestId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(requestId)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="absolute inset-0">
        {/* top left - blue accent */}
        <div
          ref={(ref) => {
            blobRefs.current[0] = ref
          }}
          className="absolute top-10 left-10 w-48 h-48 md:w-72 md:h-72 rounded-full bg-[#2563EB] dark:bg-[#3B82F6] blur-[120px] transition-all duration-300"
          style={{ opacity: 'var(--blob-opacity)' }}
        />

        {/* top right - indigo primary */}
        <div
          ref={(ref) => {
            blobRefs.current[1] = ref
          }}
          className="absolute top-10 right-10 w-48 h-48 md:w-72 md:h-72 rounded-full bg-[#4F46E5] dark:bg-[#6366F1] blur-[130px] transition-all duration-300"
          style={{ opacity: 'var(--blob-opacity)' }}
        />

        {/* bottom left - emerald success state */}
        <div
          ref={(ref) => {
            blobRefs.current[2] = ref
          }}
          className="absolute bottom-10 left-10 w-52 h-52 md:w-80 md:h-80 rounded-full bg-[#10B981] blur-[130px] transition-all duration-300"
          style={{ opacity: 'var(--blob-opacity)' }}
        />

        {/* bottom right - blue accent */}
        <div
          ref={(ref) => {
            blobRefs.current[3] = ref
          }}
          className="absolute bottom-10 right-10 w-48 h-48 md:w-72 md:h-72 rounded-full bg-[#2563EB] dark:bg-[#3B82F6] blur-[120px] transition-all duration-300"
          style={{ opacity: 'var(--blob-opacity)' }}
        />
      </div>

      {/* GRID */}
      <div 
        className="absolute inset-0 bg-[size:32px_32px] transition-all duration-300" 
        style={{
          backgroundImage: `linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)`
        }}
      />
    </div>
  )
}

export default AnimatedBackground