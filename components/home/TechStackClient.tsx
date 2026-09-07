// TechStackClient.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Instructor = {
  instructor?: string
  full_name?: string
}

type Batch = {
  name: string
  start_date: string
  end_date?: string | null
  description?: string | null
}

type Course = {
  name: string
  description?: string | null
  image?: string | null
  instructors?: Instructor[]
  upcomingBatches?: Batch[]
}

function formatBatchDate(date: string): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))
}

function getInstructorLabel(instructor: Instructor): string {
  return (
    instructor.full_name ||
    instructor.instructor ||
    'Unknown instructor'
  )
}

export function TechStackClient({
  courses,
}: {
  courses: Course[]
}) {
  const ref = useRef<HTMLElement>(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <section
      ref={ref}
      className="relative overflow-visible bg-[#f4fbf7] px-5 py-20 text-[#111916] sm:px-8 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#00d38d]">
            <span className="h-px w-9 bg-[#9aa99f]" />

            Our Courses

            <span className="h-px w-9 bg-[#9aa99f]" />
          </div>

          <h2 className="tv-course-title text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Learn the Skills{' '}
            <span className="text-[#00d38d]">
              Companies Need
            </span>
          </h2>
        </motion.div>

        {/* Course cards */}
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-5">
          {courses.length === 0 && (
            <p className="w-full text-center text-sm text-[#4a5a52]">
              No published courses found.
            </p>
          )}

          {courses.map((course, index) => (
            <motion.div
              key={course.name}
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                delay: 0.1 + index * 0.05,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group relative z-10 h-[410px] w-full
                hover:z-50
                sm:w-[calc(50%-0.625rem)]
                lg:w-[calc(33.333%-0.875rem)]
              "
            >
              <article
                className="
                  absolute left-1/2 top-0
                  flex h-full w-full -translate-x-1/2 flex-col
                  overflow-hidden rounded-2xl
                  border-b-4 border-[#00d38d]
                  bg-[#071a11] text-left
                  shadow-[3px_4px_0_#a6b2ab]
                  transition-[width,height,top,box-shadow]
                  duration-300 ease-out

                  group-hover:-top-2
                  group-hover:z-50
                  group-hover:h-auto
                  group-hover:max-h-[75vh]
                  group-hover:min-h-full
                  group-hover:overflow-y-auto
                  group-hover:shadow-[0_24px_70px_rgba(0,0,0,0.55)]

                  lg:group-hover:w-[140%]
                "
              >
                {/* Course image */}
                {course.image ? (
                  <div className="relative h-40 w-full shrink-0 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="
                        h-full w-full object-cover
                        transition-transform duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>
                ) : (
                  <div className="flex h-40 w-full shrink-0 items-center justify-center bg-[#0b2b1d]">
                    <span className="text-sm font-bold text-[#00d38d]">
                      TechVision
                    </span>
                  </div>
                )}

                {/* Course information */}
                <div className="relative flex flex-1 flex-col p-5">
                  {/* Hover glow */}
                  <div
                    className="
                      pointer-events-none absolute inset-0
                      opacity-0 transition-opacity duration-500
                      group-hover:opacity-100
                    "
                    style={{
                      background:
                        'radial-gradient(circle at center, #00d38d20 0%, transparent 70%)',
                    }}
                  />

                  {/* Course name */}
                  <h3 className="relative z-10 text-base font-bold leading-snug text-white">
                    {course.name}
                  </h3>

                  {/* Instructor names */}
                  {course.instructors &&
                    course.instructors.length > 0 && (
                      <p className="relative z-10 mt-1 text-xs font-semibold uppercase tracking-wide text-[#00d38d]">
                        {course.instructors
                          .map(getInstructorLabel)
                          .join(', ')}
                      </p>
                    )}

                  {/* Course description */}
                  {course.description && (
                    <div
                      className="
                        relative z-10 mt-3
                        line-clamp-3
                        text-sm leading-relaxed text-[#a7b5ad]
                        transition-colors
                        group-hover:line-clamp-none
                        group-hover:text-[#d5ded9]
                        [&_h1]:mb-2
                        [&_h1]:mt-4
                        [&_h1]:text-base
                        [&_h1]:font-bold
                        [&_h1]:text-white
                        [&_li]:mb-2
                        [&_ol]:ml-5
                        [&_ol]:list-decimal
                        [&_p]:m-0
                        [&_strong]:text-white
                        [&_ul]:ml-5
                        [&_ul]:list-disc
                      "
                      dangerouslySetInnerHTML={{
                        __html: course.description,
                      }}
                    />
                  )}

                  {/* Upcoming batches */}
                  {course.upcomingBatches &&
                    course.upcomingBatches.length > 0 && (
                      <div className="relative z-10 mt-4 border-t border-white/10 pt-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#00d38d]">
                          Upcoming batch
                        </p>

                        <div className="mt-2 space-y-2">
                          {course.upcomingBatches.map(
                            (batch) => (
                              <div
                                key={`${batch.name}-${batch.start_date}`}
                                className="text-xs text-[#d5ded9]"
                              >
                                <span className="font-semibold">
                                  {batch.name}
                                </span>

                                <span className="block text-[#a7b5ad]">
                                  {formatBatchDate(
                                    batch.start_date
                                  )}

                                  {batch.end_date
                                    ? ` – ${formatBatchDate(
                                        batch.end_date
                                      )}`
                                    : ''}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}