import Link from 'next/link'
<<<<<<< HEAD
import { BrandLogo } from '@/components/BrandLogo'
=======
>>>>>>> 7d0ca9fe500d9c557ea435396fcc1a35f33cf849

export function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <footer className="border-t border-[#e2e8e4] bg-white px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
<<<<<<< HEAD
        <BrandLogo className="h-8" />
        <div className="flex flex-wrap gap-6 text-xs font-medium text-[#232b27]">
          <Link href="/courses">Curriculum</Link><Link href="/stories">Stories</Link><Link href="/#faq">FAQ</Link><Link href="/pricing">Pricing</Link><Link href="/login">Login</Link>
        </div>
        <p className="text-xs text-[#68736d]">© 2026 Tech Vision. ILLUMINATED PRECISION.</p>
=======
        <Link href="/" className="text-2xl font-black tracking-tight text-[#2db66d]">TECHVISION</Link>
        <div className="flex flex-wrap gap-6 text-xs font-medium text-[#232b27]">
          <Link href="/courses">Curriculum</Link><Link href="/stories">Stories</Link><Link href="/#faq">FAQ</Link><Link href="/pricing">Pricing</Link><Link href="/login">Login</Link>
        </div>
        <p className="text-xs text-[#68736d]">© 2026 TECHVISION. ILLUMINATED PRECISION.</p>
>>>>>>> 7d0ca9fe500d9c557ea435396fcc1a35f33cf849
      </div>
      {!compact && <p className="mx-auto mt-6 max-w-7xl text-xs text-[#87928c]">Built for practical learning, real projects, and career outcomes.</p>}
    </footer>
  )
}
