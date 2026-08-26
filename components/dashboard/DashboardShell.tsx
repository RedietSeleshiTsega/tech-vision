'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, FileText, LayoutDashboard, LogOut, User } from 'lucide-react'

const items = [
  ['/dashboard','Dashboard',LayoutDashboard],
  ['/dashboard/courses','My Courses',BookOpen],
  ['/dashboard/applications','My Applications',FileText],
  ['/dashboard/profile','Profile',User],
]

export function DashboardShell({children}:{children:React.ReactNode}){
 const path=usePathname()
 return <div className="min-h-screen bg-[#f7faf8] text-[#111713]">
   <header className="flex h-[76px] items-center justify-between border-b border-[#dce5df] bg-white px-6 lg:px-10"><Link href="/" className="text-xl font-black text-[#2db66d]">TECHVISION</Link><div className="flex items-center gap-5"><Link href="/courses" className="hidden text-sm sm:block">Courses</Link><Link href="/pricing" className="hidden text-sm sm:block">Pricing</Link><div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e7f8ee] text-sm font-bold text-[#168452]">RS</div></div></header>
   <div className="flex min-h-[calc(100vh-76px)]">
    <aside className="hidden w-60 shrink-0 border-r border-[#dce5df] bg-white p-5 md:block"><div className="tv-mono mb-6 text-[10px] font-bold text-[#7e8c84]">STUDENT PORTAL</div><nav className="space-y-2">{items.map(([href,label,Icon])=>{const A=Icon as typeof User; const active=href==='/dashboard'?path===href:path.startsWith(String(href)); return <Link key={String(href)} href={String(href)} className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm ${active?'bg-[#eaf8ef] font-bold text-[#168452]':'text-[#4c5952] hover:bg-[#f5f8f6]'}`}><A size={17}/>{String(label)}</Link>})}</nav><div className="mt-72 border-t border-[#e4ebe6] pt-4"><Link href="/login" className="flex items-center gap-3 px-3 py-3 text-sm text-[#4c5952]"><LogOut size={17}/>Log Out</Link></div></aside>
    <main className="min-w-0 flex-1 p-5 sm:p-8 lg:p-10">{children}</main>
   </div>
 </div>
}
