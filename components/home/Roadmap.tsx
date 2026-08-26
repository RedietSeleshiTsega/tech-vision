'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  { weeks: 'Week 1–2', title: 'HTML & CSS', description: 'Semantic HTML, Flexbox, Grid and Responsive web Design.', active: true },
  { weeks: 'Week 3–4', title: 'JavaScript', description: 'Core JS, DOM manipulation, async/await, and ES6+.', active: true },
  { weeks: 'Week 5–7', title: 'React', description: 'Component architecture, hooks, state, and interactive UIs.', active: true },
  { weeks: 'Week 8–10', title: 'Next.js', description: 'Full-stack React, App Router, server actions, and deployment.', active: false },
  { weeks: 'Week 11', title: 'Team Project', description: 'Collaborate on a real group project with Git workflows.', active: false },
  { weeks: 'Week 12', title: 'Portfolio', description: 'Polish your GitHub, build a portfolio, and interview prep.', active: false },
]

export function Roadmap() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#f4fbf7] px-5 pb-20 pt-28 text-[#111916] sm:px-8 lg:pb-24 lg:pt-32">
      <motion.div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#36ba7a]">
            <span className="h-px w-9 bg-[#9aa99f]" />
            Curriculum
            <span className="h-px w-9 bg-[#9aa99f]" />
          </div>
          <h2 className="text-4xl font-black leading-tight text-[#080d0b] sm:text-5xl lg:text-6xl">
            Your 12-Week{' '}
            <span className="text-[#32b878]">Roadmap</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-mono text-sm leading-relaxed text-[#a1aaa5] sm:text-base">
            A structured, step-by-step path from zero to a job-ready frontend developer.
          </p>
        </motion.div>

        {/* Desktop horizontal */}
        <div className="relative mt-20 hidden lg:block">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-[4.7rem] h-[3px] bg-[#345448]">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-[#36ba7a] via-[#20e979] to-[#345448]"
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-6 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.weeks}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col items-center text-center"
              >
                <div className="relative mb-5">
                  <div
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-[3px] text-lg font-medium transition-transform duration-300 group-hover:scale-110 ${step.active ? 'border-[#00b866] bg-[#071a11] text-white' : 'border-[#b8bdbb] bg-[#a9adaa] text-white'}`}
                    style={{
                      boxShadow: step.active ? '0 0 0 1px rgba(0, 184, 102, .2)' : 'none',
                    }}
                  >
                    {i + 1}
                  </div>
                </div>

                {/* Card content */}
                <div className="rounded-2xl border border-transparent p-4 transition-all duration-300 group-hover:border-[#c8ded2] group-hover:bg-white/60">
                  <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.1em] text-[#37b875]">{step.weeks}</span>
                  <h3 className={`mb-2 text-base font-black ${step.active ? 'text-[#161c19]' : 'text-[#7a807d]'}`}>{step.title}</h3>
                  <p className={`text-[13px] leading-relaxed ${step.active ? 'text-[#4e5953]' : 'text-[#a0a6a2]'}`}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="relative mx-auto flex max-w-md flex-col gap-0 pl-4 lg:hidden">
          {/* Vertical Connector Line */}
          <div className="absolute bottom-0 left-[2.2rem] top-0 w-1 rounded-full bg-[#dce6e0]">
            <motion.div
              className="w-full origin-top rounded-full bg-[#36ba7a]"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.weeks}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative z-10 flex gap-6 pb-10 last:pb-0"
            >
              <div className="relative mt-1 flex-shrink-0">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-[3px] text-base font-medium transition-transform duration-300 group-hover:scale-110 ${step.active ? 'border-[#00b866] bg-[#071a11] text-white' : 'border-[#b8bdbb] bg-[#a9adaa] text-white'}`}
                >
                  {i + 1}
                </div>
              </div>

              {/* Card content */}
              <div className="-mt-3 flex-1 rounded-2xl border border-transparent p-5 transition-all duration-300 group-hover:border-[#c8ded2] group-hover:bg-white/60">
                <span className="mb-1 block text-[11px] font-bold uppercase tracking-[0.1em] text-[#37b875]">{step.weeks}</span>
                <h3 className={`mb-2 text-lg font-black ${step.active ? 'text-[#161c19]' : 'text-[#7a807d]'}`}>{step.title}</h3>
                <p className={`text-sm leading-relaxed ${step.active ? 'text-[#4e5953]' : 'text-[#a0a6a2]'}`}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

