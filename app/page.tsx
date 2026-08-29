<<<<<<< HEAD
import { Navbar } from '@/components/home/Navbar'
import { Footer } from '@/components/home/Footer'
import { LandingHero } from '@/components/home/LandingHero'
import { LightTrustBar } from '@/components/home/LightTrustBar'
import { SuccessFeatures } from '@/components/home/SuccessFeatures'

const faqs = [
  {
    q: 'Do I need prior coding experience?',
    a: 'No. You can start from the fundamentals, including HTML, CSS, and how the web works. Learners with prior experience can move ahead more quickly.',
  },
  {
    q: 'How are the live sessions structured?',
    a: 'Live sessions combine instructor explanation, hands-on coding, project work, and time for questions so you can practice concepts as you learn them.',
  },
  {
    q: 'What is the class size?',
    a: 'Cohorts are intentionally kept small so students can receive more direct support, feedback, code reviews, and interaction with instructors.',
  },
  {
    q: 'When does the next batch start?',
    a: 'New batches are opened on a rolling schedule. Apply for the program and the TechVision team will share the next available start date and schedule.',
  },
  {
    q: 'Is the certificate recognised by employers?',
    a: 'The certificate confirms that you completed the TechVision program. Your portfolio, practical projects, GitHub work, and demonstrated skills are also important when applying to employers.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Available payment methods and payment-plan options depend on the program. Contact the TechVision team for the current supported methods and tuition details.',
  },
=======
import Link from 'next/link'
import { ArrowRight, Briefcase, BadgeCheck, Layers3, MessageSquare, Play, Users, Video } from 'lucide-react'
import { Navbar } from '@/components/home/Navbar'
import { Footer } from '@/components/home/Footer'

const features = [
  [Layers3, 'Real Projects', 'Build production-ready applications that solve real-world problems. Leave with a portfolio that stands out.'],
  [Video, 'Live Mentorship', 'Get direct guidance from experienced engineers, regular code reviews, and career advice.'],
  [Users, 'Small Cohorts', 'Learn in a tight-knit community of ambitious peers and collaborate on projects.'],
  [Briefcase, 'Career Focused', 'Portfolio building, interview prep, GitHub optimization, and job-search guidance.'],
  [MessageSquare, 'Community', 'Join an active community of alumni and current students. Get support when you need it.'],
  [BadgeCheck, 'Certification', 'Earn a TechVision completion certificate that validates your skills to employers and clients.'],
]

const faqs = [
  'Do I need prior coding experience?', 'How are the live sessions structured?', 'What is the class size?',
  'When does the next batch start?', 'Is the certificate recognised by employers?', 'What payment methods do you accept?'
>>>>>>> 7d0ca9fe500d9c557ea435396fcc1a35f33cf849
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-[#0c120f]">
<<<<<<< HEAD
        <LandingHero />
        <LightTrustBar />
        <SuccessFeatures />

        <section id="faq" className="mx-auto max-w-4xl px-6 py-24">
          <div className="text-center">
            <div className="tv-mono text-xs">FAQ</div>
            <h2 className="mt-3 text-4xl font-black">Frequently Asked Questions</h2>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-[#76827a] px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  {faq.q}
                  <span className="text-xl text-[#839087] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#66716a]">{faq.a}</p>
              </details>
            ))}
=======
        <section className="mx-auto max-w-7xl px-6 pb-12 pt-28 text-center sm:pt-36">
          <h1 className="text-5xl font-black tracking-[-.045em] sm:text-6xl lg:text-7xl">
            Launch Your <span className="text-[#2db66d]">Tech Career</span>
          </h1>
          <p className="tv-mono mx-auto mt-12 max-w-2xl text-xs uppercase text-[#68736d] sm:text-sm">
            Build real projects and learn from mentors
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/signup" className="flex min-w-48 items-center justify-center gap-2 bg-[#2db66d] px-7 py-4 text-sm font-semibold text-[#0b1510]">Start Learning Free <ArrowRight size={16}/></Link>
            <Link href="/apply" className="flex min-w-48 items-center justify-center gap-2 border border-[#69736d] px-7 py-4 text-sm font-semibold"><Play size={15} className="text-[#2db66d]"/> Apply For Next Batch</Link>
          </div>
          <div className="mt-24 grid grid-cols-2 border-t border-[#edf1ee] pt-10 md:grid-cols-4">
            {[['350+','GRADUATES'],['50+','HIRING PARTNERS'],['20+','MENTORS'],['90%','PLACEMENT RATE']].map(([v,l]) => <div key={l} className="py-6"><div className="text-4xl font-black sm:text-5xl">{v}</div><div className="tv-mono mt-2 text-[10px] font-bold">{l}</div></div>)}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-black tracking-tight">Built for Your <span className="text-[#2db66d]">Success</span></h2>
            <p className="tv-mono mx-auto mt-5 max-w-3xl text-xs uppercase leading-relaxed text-[#59645e]">Our curriculum is designed to take you from fundamentals to advanced concepts preparing you for elite technology roles.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(([Icon,title,desc]) => {
              const I = Icon as typeof Layers3
              return <article key={String(title)} className="min-h-48 border border-[#839087] bg-[#f3f5f4] p-7 shadow-[3px_3px_0_#dfe6e1]">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#a9b8ad]"><I size={17}/></div>
                <h3 className="mt-5 text-lg font-semibold">{String(title)}</h3>
                <p className="mt-3 text-sm leading-6 text-[#333c37]">{String(desc)}</p>
              </article>
            })}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-4xl px-6 py-24">
          <div className="text-center"><div className="tv-mono text-xs">FAQ</div><h2 className="mt-3 text-4xl font-black">Frequently Asked Questions</h2></div>
          <div className="mt-12 space-y-4">
            {faqs.map(q => <details key={q} className="group border border-[#76827a] px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">{q}<span className="text-xl text-[#839087] group-open:rotate-45">+</span></summary>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#66716a]">TechVision is designed to make the learning path clear and practical. Contact the team if you need details specific to your schedule, background, or payment option.</p>
            </details>)}
>>>>>>> 7d0ca9fe500d9c557ea435396fcc1a35f33cf849
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
