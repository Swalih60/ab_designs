'use client'

import { motion } from 'framer-motion'

export default function GeometricPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <div className="absolute inset-0 grid grid-cols-12 gap-4">
        {Array.from({ length: 144 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.01 }}
            className="aspect-square border border-white/20"
          />
        ))}
      </div>
    </div>
  )
}

