"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060A08]/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        {/*Logo*/}

        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="TechVision Logo" width={32} height={32} />
          <span className="text-xl font-black tracking-tight text-[#2DB266]">
            TECHVISION
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-white hover:text-[#2db66d]"
          >
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-white hover:text-[#2db66d]">
              Courses <ChevronDown size={14} />
            </button>
            {open && (
              <div className="absolute left-1/2 top-7 w-56 -translate-x-1/2 border border-[#d9e2dc] bg-white p-2 shadow-lg">
                <Link
                  href="/courses"
                  className="block px-3 py-2 text-sm hover:bg-[#f0faf4]"
                >
                  Front-End Bootcamp
                </Link>
                <Link
                  href="/courses#course-offerings"
                  className="block px-3 py-2 text-sm hover:bg-[#f0faf4]"
                >
                  Learning Paths
                </Link>
                <Link
                  href="/stories"
                  className="block px-3 py-2 text-sm hover:bg-[#f0faf4]"
                >
                  Stories
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/stories"
            className="text-sm font-medium text-white hover:text-[#2db66d]"
          >
            Stories
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-white hover:text-[#2db66d]"
          >
            Pricing
          </Link>
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <Link
            href="/login"
            className="text-sm font-medium text-white hover:text-[#2db66d]"
          >
            Login
          </Link>
          <Link
            href="/apply"
            className="bg-[#2db66d] px-6 py-3 text-xs font-bold uppercase tracking-[.12em] text-white hover:bg-[#26a963]"
          >
            Apply Now
          </Link>
        </div>
        <button
          onClick={() => setMobile((v) => !v)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {mobile ? <X /> : <Menu />}
        </button>
      </div>
      {mobile && (
        <div className="border-t border-white/10 bg-[#060A08]/95 text-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4 text-sm">
            <Link href="/" onClick={() => setMobile(false)}>
              Home
            </Link>
            <Link href="/courses" onClick={() => setMobile(false)}>
              Courses
            </Link>
            <Link href="/stories" onClick={() => setMobile(false)}>
              Stories
            </Link>
            <Link href="/pricing" onClick={() => setMobile(false)}>
              Pricing
            </Link>
            <Link href="/login" onClick={() => setMobile(false)}>
              Login
            </Link>
            <Link
              href="/apply"
              onClick={() => setMobile(false)}
              className="w-fit bg-[#2db66d] px-5 py-2.5 font-bold"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
