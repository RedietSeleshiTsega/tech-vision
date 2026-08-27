"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { GraduationCap } from "lucide-react";

const universities = [
  { name: "Addis Ababa University", short: "AAU" },
  { name: "Addis Ababa Science & Technology University", short: "AASTU" },
  { name: "Adama Science & Technology University", short: "ASTU" },
  { name: "Bahir Dar University", short: "BDU" },
  { name: "Haramaya University", short: "Haramaya" },
  { name: "Jimma University", short: "Jimma" },
  { name: "Hawassa University", short: "Hawassa" },
  { name: "University of Gondar", short: "UoG" },
];

// Two identical halves for a seamless 50% marquee loop
const marqueeItems = [
  ...universities,
  ...universities,
  ...universities,
  ...universities,
];

export function TrustBar() {
  const ref = useRef<HTMLElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-40px",
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y = useSpring(rawY, {
    stiffness: 50,
    damping: 18,
  });

  return (
    <section ref={ref} className="relative overflow-hidden  bg-[#050B08] py-24">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,83,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,200,83,0.04),transparent)]" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <motion.div
        style={{ y }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 flex flex-col items-center px-6 text-center"
        >
          <div className="mb-3 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#00C853]">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#00C853]/50" />
            Trusted by Students From
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#00C853]/50" />
          </div>
        </motion.div>

        <div className="relative w-full overflow-hidden">
          <div className="absolute bottom-0 left-0 top-0 z-10 w-24 pointer-events-none bg-gradient-to-r from-[#050B08] to-transparent md:w-48" />
          <div className="absolute bottom-0 right-0 top-0 z-10 w-24 pointer-events-none bg-gradient-to-l from-[#050B08] to-transparent md:w-48" />

          <motion.div
            className="flex w-max gap-4 px-4 md:gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {marqueeItems.map((uni, i) => (
              <div
                key={`${uni.short}-${i}`}
                className="group flex shrink-0 cursor-default items-center gap-4 rounded-2xl border border-white/[0.06] bg-[#0B1110] px-6 py-4 shadow-lg transition-all duration-300 hover:border-[#00C853]/40 hover:bg-[#0C1511] hover:shadow-[0_10px_30px_rgba(0,200,83,0.15)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#00C853]/20 bg-gradient-to-br from-[#00C853]/20 to-transparent transition-transform duration-300 group-hover:scale-110">
                  <GraduationCap size={20} className="text-[#00C853]" />
                </div>

                <div className="flex flex-col pr-4">
                  <span className="text-base font-bold leading-tight text-white transition-colors group-hover:text-[#00C853]">
                    {uni.short}
                  </span>
                  <span className="mt-0.5 text-xs font-medium text-[#8FA99A] opacity-80 transition-opacity group-hover:opacity-100">
                    {uni.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
