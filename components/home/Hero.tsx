"use client";

import { useRef } from "react";
import type { Variants } from "framer-motion";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const stats = [
  { value: "350+", label: "GRADUATES" },
  { value: "50+", label: "HIRING PARTNERS" },
  { value: "20+", label: "MENTORS" },
  { value: "90%", label: "PLACEMENT RATE" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-[#060A08] overflow-hidden pt-32 pb-24 xl:pt-40 flex items-center justify-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center"
      >
        {/* HEADLINE */}
        <motion.h1
          variants={itemVariants}
          className="mt-6 mb-10 max-w-6xl text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Launch Your{" "}
          <span className="bg-gradient-to-r from-[#00C853] via-[#69FF99] to-[#B2FF59] bg-clip-text text-transparent">
            Tech Career
          </span>
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          variants={itemVariants}
          className="mt-8 mb-10 max-w-2xl text-lg leading-relaxed text-[#9FB3A8] md:text-xl uppercase"
        >
          Build real projects and learn from mentors.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="https://learn.techvision.edu.et/login?redirect-to=/lms/courses/#login"
            className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#00C853] to-[#00A844]  px-8 py-4 font-bold text-black shadow-[0_0_32px_rgba(0,200,83,0.35)] transition-all duration-300 hover:scale-[1.03]"
          >
            <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full " />
            <span className="relative">Start Learning Free</span>
            <ArrowRight
              size={18}
              className="relative transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="https://learn.techvision.edu.et/batch-application/new"
            className="group flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-[#00C853]/40 hover:bg-white/[0.08]"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#00C853]/30 bg-[#00C853]/20">
              <Play
                size={12}
                fill="currentColor"
                className="ml-0.5 text-[#00C853]"
              />
            </span>
            Apply For Next Batch
          </Link>
        </motion.div>

        {/* STATS */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid w-full max-w-4xl grid-cols-2 gap-10 md:grid-cols-4 border-t border-white/10 p-10"
        >
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-4xl font-black text-white md:text-5xl">
                {item.value}
              </div>
              <div className="mt-2 text-[#8FA99A]">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
