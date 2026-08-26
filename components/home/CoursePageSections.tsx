'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Code2, Database, Globe, MapPin, Monitor, Play, Sparkles, Zap } from 'lucide-react'

const projects = [
  { label: 'Industry Standard', focus: 'DB & Auth Logic', title: 'Full-Stack SaaS', description: 'Build enterprise-grade platforms featuring robust secure authentication, relational database architecture, real-time messaging pipelines, and fully integrated payment checkouts.', icon: Database, color: '#31bd72', tags: ['Next.js', 'PostgreSQL', 'Stripe'] },
  { label: 'High Performance', focus: 'State & Speed', title: 'Real-time Systems', description: 'Develop highly responsive applications utilizing WebSockets, state machine synchronization, interactive canvas elements, and smooth client-side visual animations.', icon: Zap, color: '#9df6be', tags: ['React', 'Socket.io', 'Framer Motion'] },
  { label: 'Scalability Focus', focus: 'Edge Delivery', title: 'API-Driven Platforms', description: 'Construct fast content-heavy systems using advanced caching policies, server-side pre-rendering, headless CMS APIs, and distributed asset delivery systems.', icon: Code2, color: '#31bd72', tags: ['TypeScript', 'GraphQL', 'Redis'] },
]

const paths = [
  { title: 'Intensive Training', mode: 'IN-PERSON', subtitle: 'Hands-on learning in a focused classroom environment', icon: MapPin, accent: '#32b875', details: [['DURATION', '45 Days (July 12 – Sept 5)'], ['SCHEDULE', 'Mon, Wed, Fri - Morning 3:00-5:00'], ['LOCATION', 'TechVision Campus, Addis Ababa'], ['TUITION', 'Depends on Course Module']] },
  { title: 'Flexible Learning', mode: 'ONLINE', subtitle: 'Live instructor-led sessions you can join from anywhere', icon: Monitor, accent: '#d4f000', details: [['DURATION', '4 Months (Starts July 12)'], ['SCHEDULE', 'Tue, Thu, Sat - Evening 9:00-11:00'], ['FORMAT', 'Live via Zoom + recorded replays'], ['TUITION', 'Depends on Course Module (20% off upfront)']] },
]

export function CoursePageSections() {
  const [selectedPath, setSelectedPath] = useState('Intensive Training')

  return (
    <>
      <section className="bg-[#f7fcf9] px-5 py-20 text-[#101613] sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Portfolio Strategy" title={<>Build Projects That <em>Get You Hired</em></>} description="We don't limit you to cookie-cutter tutorial clones. You will master standard patterns to design, engineer, and deploy complete architectures that stand out to recruiters." />
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon
              return <article key={project.title} className="flex min-h-[270px] flex-col rounded-2xl border border-[#58665f] bg-[#fbfefc] p-6 shadow-[4px_5px_0_#aab5ae]">
                <div className="mb-6 flex items-center justify-between gap-3 font-mono text-[10px] font-bold uppercase tracking-wide"><span>{project.label}</span><span className="rounded bg-[#e7faee] px-2 py-1 text-[#32b875]">{project.focus}</span></div>
                <h3 className="mb-4 flex items-center gap-3 text-base font-black"><span className="flex h-8 w-8 items-center justify-center rounded bg-[#092218]" style={{ color: project.color }}><Icon size={17} /></span>{project.title}</h3>
                <p className="flex-1 text-xs leading-relaxed text-[#344139]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-[#8c9890] pt-4">{project.tags.map((tag) => <span key={tag} className="rounded bg-[#202923] px-2 py-1 font-mono text-[10px] text-white">{tag}</span>)}</div>
                <div className="mt-4 flex items-center justify-between font-mono text-[11px] font-bold"><span>&lt;&gt; Dynamic Curriculum</span><span className="text-[#31bd72]">Explore <ArrowRight size={13} className="inline" /></span></div>
              </article>
            })}
          </div>
          <div className="mt-4 flex flex-col items-center justify-center gap-4 border-b-4 border-[#173025] border-t-2 border-[#31bd72] bg-white px-6 py-4 sm:flex-row"><div className="flex -space-x-2"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#082319] text-[#31bd72]"><Code2 size={15} /></span><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#082319] text-[#31bd72]"><Globe size={15} /></span><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#082319] text-[#31bd72]"><Sparkles size={15} /></span></div><p className="text-sm font-bold">Want to see actual student-built apps live? <span className="text-[#31bd72]">Batch 20 demos are live now.</span></p><Link href="#course-offerings" className="border border-[#31bd72] px-5 py-2 font-mono text-xs font-bold">BROWSE GALLERY</Link></div>
        </div>
      </section>

      <section id="course-offerings" className="bg-[#f7fcf9] px-5 py-20 text-[#101613] sm:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl"><SectionHeading eyebrow="Course Offerings" title={<>Choose Your <em>Learning Path</em></>} description="Two formats, one goal — launching your frontend development career. Pick the pace that fits your life." />
          <div className="grid gap-5 md:grid-cols-2">{paths.map((path, index) => { const Icon = path.icon; return <article key={path.title} className="relative rounded-xl border-2 border-[#173025] bg-[#3a6353] p-6 text-white shadow-[4px_5px_0_#08150f]"><span className="absolute -top-3 right-7 bg-[#31bd72] px-3 py-1 font-mono text-[10px] font-bold uppercase text-[#092218]">{index === 0 ? '★ Most Popular' : '20% Off Upfront'}</span><span className="mb-5 inline-flex items-center gap-2 bg-[#32b875]/20 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-[#9bf2ba]"><Icon size={13} />{path.mode}</span><h3 className="text-2xl font-medium">{path.title}</h3><p className="mt-2 min-h-10 font-mono text-sm text-[#d8e5dd]">{path.subtitle}</p><div className="my-7 space-y-5">{path.details.map(([label, value]) => <div key={label} className="flex gap-3 text-sm"><CalendarDays size={17} className="mt-0.5 shrink-0" style={{ color: path.accent }} /><span><small className="block font-mono text-[10px] text-[#b7c9bf]">{label}</small><strong>{value}</strong></span></div>)}</div><Link href="#secure-your-spot" className="flex items-center justify-center gap-2 bg-[#31bd72] py-3 font-bold text-[#092218]">{index === 0 ? 'Enroll in In-Person Class' : 'Claim 20% Discount & Enroll'} <ArrowRight size={16} /></Link></article> })}</div>
        </div>
      </section>

      <section id="secure-your-spot" className="bg-[#f7fcf9] px-5 py-16 sm:px-8"><form className="mx-auto max-w-[560px] rounded-2xl border border-[#78867d] bg-white p-8 shadow-[4px_5px_0_#c4cec8] sm:p-9" onSubmit={(event) => event.preventDefault()}><h2 className="text-center text-4xl font-medium">Secure Your Spot</h2><p className="mt-3 text-center text-sm">Fill out the form below to begin your application process for the next cohort.</p><div className="mt-8 grid gap-5 sm:grid-cols-2"><label className="font-mono text-xs">Full Name<input required className="mt-2 w-full border border-[#69766e] bg-[#fbfefc] p-3 font-sans text-sm" placeholder="Enter your full name" /></label><label className="font-mono text-xs">Email Address<input required type="email" className="mt-2 w-full border border-[#69766e] bg-[#fbfefc] p-3 font-sans text-sm" placeholder="you@example.com" /></label><label className="font-mono text-xs sm:col-span-2">Phone Number<input required className="mt-2 w-full rounded-md border border-[#69766e] bg-[#fbfefc] p-3 font-sans text-sm" placeholder="+251 900 000 000" /></label></div><fieldset className="mt-5"><legend className="font-mono text-xs">Preferred Path</legend><div className="mt-2 grid gap-3 sm:grid-cols-2">{paths.map((path) => <label key={path.title} className={`flex cursor-pointer items-center gap-3 rounded-md border p-3 text-sm ${selectedPath === path.title ? 'border-[#31bd72]' : 'border-[#c0c9c3]'}`}><input type="radio" name="path" value={path.title} checked={selectedPath === path.title} onChange={() => setSelectedPath(path.title)} className="accent-[#31bd72]" /><span>{path.title}<small className="block text-xs text-[#59665e]">{path.mode}</small></span></label>)}</div></fieldset><button className="mt-5 w-full bg-[#31bd72] py-3 font-mono text-sm font-bold text-[#092218]">SUBMIT APPLICATION</button></form></section>

      <section className="bg-[#f7fcf9] px-5 py-12 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 border border-[#526158] p-8 sm:p-12 lg:flex-row lg:items-center"><div><span className="inline-flex items-center gap-2 rounded-full bg-[#e2faeb] px-3 py-1 font-mono text-[10px] font-bold uppercase text-[#31bd72]"><Sparkles size={12} /> Join the next batch</span><h2 className="mt-6 max-w-xl text-5xl font-medium leading-[1.05]">Your Future<br />Tech Career<br /><em>Starts Today</em></h2><p className="mt-6 max-w-xl font-mono text-sm leading-relaxed">Join 350+ successful graduates who transitioned into tech careers. Don&apos;t wait for the right opportunity—build it with direct guidance and project-based experience.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="#secure-your-spot" className="flex items-center gap-2 bg-[#31bd72] px-6 py-3 font-mono text-xs font-bold">START FREE LEARNING <ArrowRight size={15} /></Link><Link href="#secure-your-spot" className="flex items-center gap-2 bg-[#07100b] px-6 py-3 font-mono text-xs font-bold text-white"><Play size={14} fill="currentColor" /> APPLY FOR NEXT BATCH</Link></div></div><div className="flex h-52 w-full items-center justify-center rounded-xl border border-[#c8d0eb] bg-[#e8e9ff] text-[#7468f4] lg:w-[315px]"><Globe size={48} /></div></div></section>
    </>
  )
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description: string }) {
  return <div className="mb-12 text-center"><div className="mb-4 inline-flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#31bd72]"><span className="h-px w-9 bg-[#9aa99f]" />{eyebrow}<span className="h-px w-9 bg-[#9aa99f]" /></div><h2 className="text-4xl font-black leading-tight sm:text-5xl">{title}</h2><p className="mx-auto mt-5 max-w-2xl font-mono text-sm leading-relaxed text-[#9aa49f] sm:text-base">{description}</p></div>
}
