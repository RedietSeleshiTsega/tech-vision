import Link from 'next/link'

export function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <footer className="border-t border-[#e2e8e4] bg-white px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-2xl font-black tracking-tight text-[#2db66d]">TECHVISION</Link>
        <div className="flex flex-wrap gap-6 text-xs font-medium text-[#232b27]">
          <Link href="/courses">Curriculum</Link><Link href="/stories">Stories</Link><Link href="/#faq">FAQ</Link><Link href="/pricing">Pricing</Link><Link href="/login">Login</Link>
        </div>
        <p className="text-xs text-[#68736d]">© 2026 TECHVISION. ILLUMINATED PRECISION.</p>
      </div>
      {!compact && <p className="mx-auto mt-6 max-w-7xl text-xs text-[#87928c]">Built for practical learning, real projects, and career outcomes.</p>}
    </footer>
  )
}
