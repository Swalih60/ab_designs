'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { projects } from '../../data/projects'

export default function ProjectPage() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          {project.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 mb-12"
        >
          {project.description}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="prose max-w-none"
        >
          <h2 className="text-2xl font-bold mb-4">Project Details</h2>
          <p>{project.details}</p>
        </motion.div>
      </div>
    </div>
  )
}

