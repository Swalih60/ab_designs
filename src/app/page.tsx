'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import GeometricPattern from './components/GeometricPattern'
import { projects } from './data/projects'

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative overflow-hidden aspect-[4/5]">
        <Image
          src={project.thumbnailUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="text-center">
            <h3 className="text-2xl font-light mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300">{project.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Home() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <GeometricPattern />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl font-light mb-6"
          >
            Creating Timeless Spaces
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Where design meets emotion, and spaces tell stories
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-24 bg-white/20" />
        </motion.div>
      </section>

      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-light text-center mb-16"
          >
            Selected Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 relative">
        <GeometricPattern />
        <div className="relative z-10 container mx-auto max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-light text-center mb-16"
          >
            Let's Create Together
          </motion.h2>
          <form className="space-y-8">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full border border-white py-3 hover:bg-white hover:text-black transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

