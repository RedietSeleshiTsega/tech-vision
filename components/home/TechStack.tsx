'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const technologies = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#FFFFFF', darkIcon: true },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4' },
]

export function TechStack() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#f4fbf7] px-5 py-20 text-[#111916] sm:px-8 lg:py-24">
      <motion.div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
<<<<<<< HEAD
          <div className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#00d38d]">
=======
          <div className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#36ba7a]">
>>>>>>> 7d0ca9fe500d9c557ea435396fcc1a35f33cf849
            <span className="h-px w-9 bg-[#9aa99f]" />
            Modern Stack
            <span className="h-px w-9 bg-[#9aa99f]" />
          </div>
          <h2 className="text-4xl font-black leading-tight text-[#080d0b] sm:text-5xl lg:text-6xl">
            Learn the Tools{' '}
<<<<<<< HEAD
            <span className="text-[#00d38d]">Companies Use</span>
=======
            <span className="text-[#32b878]">Companies Use</span>
>>>>>>> 7d0ca9fe500d9c557ea435396fcc1a35f33cf849
          </h2>
        </motion.div>

        {/* Tech Grid */}
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4 sm:gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.05 }}
<<<<<<< HEAD
              className="group relative flex h-[100px] w-[100px] cursor-default flex-col items-center justify-center rounded-2xl border-b-4 border-[#00d38d] bg-[#071a11] shadow-[3px_4px_0_#a6b2ab] transition-all duration-300 sm:h-[96px] sm:w-[96px]"
=======
              className="group relative flex h-[100px] w-[100px] cursor-default flex-col items-center justify-center rounded-2xl border-b-4 border-[#00b866] bg-[#071a11] shadow-[3px_4px_0_#a6b2ab] transition-all duration-300 sm:h-[96px] sm:w-[96px]"
>>>>>>> 7d0ca9fe500d9c557ea435396fcc1a35f33cf849
            >
              {/* Dynamic Glow based on tech color */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(circle at center, ${tech.color}20 0%, transparent 70%)` }}
              />
              
              {/* Icon */}
              <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 mb-3 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_currentColor] transition-all duration-300" style={{ color: tech.color }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className={`w-full h-full object-contain ${tech.darkIcon ? 'invert' : ''}`}
                />
              </div>
              
              <span className="relative z-10 text-xs font-semibold text-[#a7b5ad] transition-colors group-hover:text-white sm:text-sm">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
