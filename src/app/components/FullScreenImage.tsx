import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'

interface FullScreenImageProps {
  src: string
  alt: string
  onClose: () => void
}

export function FullScreenImage({ src, alt, onClose }: FullScreenImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
    >
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="contain"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="Close full-screen image"
        >
          <X size={32} />
        </button>
      </div>
    </motion.div>
  )
}

