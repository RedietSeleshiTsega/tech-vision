<<<<<<< HEAD
import type { Metadata } from 'next'
import { Navbar } from '@/components/home/Navbar'
import { Footer } from '@/components/home/Footer'
import { SuccessStoriesPage } from '@/components/stories/SuccessStoriesPage'

export const metadata: Metadata = {
  title: 'Success Stories | TechVision',
  description: 'Explore TechVision student journeys, portfolio outcomes and graduate stories.',
}

export default function Stories() {
  return (
    <>
      <Navbar />
      <SuccessStoriesPage />
      <Footer />
    </>
  )
}
=======
import { Navbar } from '@/components/home/Navbar'
import { Footer } from '@/components/home/Footer'
import Link from 'next/link'

const stories = [
  ['SELF-TAUGHT TO EMPLOYED','Before TechVision I was watching YouTube tutorials for a year and building nothing. The 12-week bootcamp forced me to build real things, get real feedback, and land a real job.','Naol Bekele','Frontend Dev @ Fintech Startup','ASTU GRADUATE'],
  ['ACADEMIC TO DEVELOPER','The small cohort size makes the difference. My mentor knew my code, my weak points, and pushed me exactly where I needed it. I went from zero to building a full Next.js app.','Hiwot Tesfaye','Junior React Developer','AAU STUDENT'],
  ['DOUBLED FREELANCE INCOME','I doubled my freelance income after completing TechVision. The portfolio projects got me clients immediately. Best investment I made as a developer in Ethiopia.','Samuel Girma','Freelance Developer','BAHIR DAR UNIVERSITY'],
  ['DESIGNER TO DEVELOPER','The curriculum bridges the gap between design and development perfectly. I learned how to build what I design, using React and Tailwind. The live mentorship was invaluable.','Betelhem Alemu','UI/UX & Frontend Engineer','JIMMA UNIVERSITY'],
]
export default function Stories(){return <><Navbar/><main className="bg-[#fbfffc] px-6 pb-24 pt-16 text-[#0b100d]"><section className="mx-auto max-w-7xl text-center"><div className="tv-mono text-xs uppercase text-[#2db66d]">— &nbsp; Student Success &nbsp; —</div><h1 className="mt-6 text-5xl font-black tracking-tight sm:text-6xl">Real Stories, Real <span className="text-[#2db66d]">Outcomes</span></h1><div className="mx-auto mt-12 grid max-w-4xl grid-cols-3 gap-8"><div><b className="text-4xl">350+</b><p className="mt-2 text-sm">Successful Graduates</p></div><div><b className="text-4xl">90%</b><p className="mt-2 text-sm">Placement Rate</p></div><div><b className="text-4xl">2.5×</b><p className="mt-2 text-sm">Average Salary Bump</p></div></div></section>
<section className="mx-auto mt-24 grid max-w-7xl gap-x-20 gap-y-20 md:grid-cols-2">{stories.map(s => <article key={s[2]} className="border-b border-[#e1e8e3] pb-12"><div className="flex items-center justify-between"><span className="tv-mono border border-[#9be6b9] bg-[#effbf4] px-2 py-1 text-[9px] text-[#2db66d]">{s[0]}</span><span className="text-[#2db66d]">★★★★★</span></div><blockquote className="mt-6 text-lg italic leading-8">“{s[1]}”</blockquote><div className="mt-10"><h3 className="font-bold">{s[2]}</h3><p className="mt-1 text-sm">{s[3]}</p><p className="tv-mono mt-1 text-[10px] text-[#2db66d]">{s[4]}</p></div></article>)}</section>
<section className="mx-auto mt-24 flex max-w-4xl flex-col gap-5 border-y border-[#182019] py-10 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-xl font-black">Join Our Developer Community</h2><p className="mt-2 text-sm text-[#68736d]">Connect with active students, alumni, and tech mentors.</p></div><Link href="/signup" className="tv-mono bg-[#2db66d] px-7 py-4 text-xs font-bold">JOIN TECHVISION ↗</Link></section>
<section className="mx-auto mt-20 max-w-6xl text-center"><div className="tv-mono text-xs">— &nbsp; TRUSTED BY STUDENTS FROM &nbsp; —</div><div className="mt-10 grid grid-cols-2 gap-6 text-sm font-bold sm:grid-cols-5"><span>Jimma</span><span>Hawassa</span><span>UoG</span><span>AAU</span><span>AASTU</span></div></section>
</main><Footer/></>}
>>>>>>> 7d0ca9fe500d9c557ea435396fcc1a35f33cf849
