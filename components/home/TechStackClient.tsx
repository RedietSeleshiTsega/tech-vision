// TechStackClient.tsx
'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Course = {
  name: string
}

export function TechStackClient({ courses }: { courses: Course[] }) {
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
          <div className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#00d38d]">
            <span className="h-px w-9 bg-[#9aa99f]" />
            Our Courses
            <span className="h-px w-9 bg-[#9aa99f]" />
          </div>
          <h2 className="text-4xl font-black leading-tight text-[#080d0b] sm:text-5xl lg:text-6xl">
            Learn the Skills{' '}
            <span className="text-[#00d38d]">Companies Need</span>
          </h2>
        </motion.div>

        {/* Course Grid */}
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4 sm:gap-6">
          {courses.length === 0 && (
            <p className="text-sm text-[#4a5a52]">No published courses found.</p>
          )}

          {courses.map((course, i) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative flex h-[100px] w-[140px] cursor-default flex-col items-center justify-center rounded-2xl border-b-4 border-[#00d38d] bg-[#071a11] px-3 text-center shadow-[3px_4px_0_#a6b2ab] transition-all duration-300 sm:h-[96px] sm:w-[150px]"
            >
              {/* Glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'radial-gradient(circle at center, #00d38d20 0%, transparent 70%)' }}
              />

              <span className="relative z-10 text-xs font-semibold leading-snug text-[#a7b5ad] transition-colors group-hover:text-white sm:text-sm">
                {course.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}