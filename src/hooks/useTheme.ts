'use client'

import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('portfolio_theme') as Theme | null
    const initialTheme: Theme = savedTheme ? savedTheme : 'dark'
    setTheme(initialTheme)
    applyTheme(initialTheme)
  }, [])

  const applyTheme = (t: Theme) => {
    document.documentElement.setAttribute('data-theme', t)
    if (t === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    localStorage.setItem('portfolio_theme', nextTheme)
    applyTheme(nextTheme)
  }

  return { theme, toggleTheme, mounted }
}
