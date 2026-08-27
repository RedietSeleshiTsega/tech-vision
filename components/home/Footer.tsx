import Link from "next/link";

export function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <footer className="border-t border-[#C7D9CB]/10 bg-[#060A08] px-6 py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-[#2db66d]"
        >
          TECHVISION
        </Link>
        <div className="flex flex-wrap gap-6 text-xs font-medium text-white">
          <Link href="/courses">Curriculum</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/login">Login</Link>
        </div>
        <p className="text-xs text-[#8FA99A]">
          © 2024 TECHVISION. ILLUMINATED PRECISION.
        </p>
      </div>
      {!compact && (
        <p className="mx-auto mt-6 max-w-7xl text-xs text-[#8FA99A]">
          Built for practical learning, real projects, and career outcomes.
        </p>
      )}
    </footer>
  );
}
