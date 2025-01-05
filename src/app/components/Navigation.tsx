'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-black/80 backdrop-blur-lg' : 'py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-light tracking-wider">
            AB DESIGNS
          </Link>
          <button
            onClick={() => setIsOpen(true)}
            className="hover:opacity-75 transition-opacity"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-2xl hover:opacity-75 transition-opacity"
            >
              ×
            </button>
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="text-center"
            >
              <ul className="space-y-6">
                <li>
                  <Link
                    href="/"
                    className="text-3xl font-light hover:opacity-75 transition-opacity"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-3xl font-light hover:opacity-75 transition-opacity"
                    onClick={() => setIsOpen(false)}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-3xl font-light hover:opacity-75 transition-opacity"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-3xl font-light hover:opacity-75 transition-opacity"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

