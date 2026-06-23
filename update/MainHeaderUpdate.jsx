'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image' // استيراد مكون الصور من Next.js

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

const ctaClass = 'font-[Inter] font-medium text-xs uppercase tracking-widest text-[#0d0d0b] bg-[#e6e1de] px-4 py-2 hover:bg-[#8c0007] hover:text-[#e6e1de] transition-all duration-200 backdrop-blur-sm'

const navLinkClass = 'font-[Inter] text-sm text-[#888880] hover:text-[#e6e1de] transition-colors relative group tracking-wide'

export default function MainHeaderUpdate() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* استدعاء الخطوط بشكل آمن */}
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Inter:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0b]/90 backdrop-blur-md border-b border-white/5 px-6 md:px-12 h-16 flex items-center justify-between">
        
        {/* تغيير النص إلى الأيقونة المطلوبة */}
        <Link href="/" className="flex items-center transition-transform hover:scale-105 duration-200">
          <Image 
            src="/finky.png" 
            alt="Logo" 
            width={32}      // يمكنك تعديل العرض والارتفاع حسب رغبتك
            height={32} 
            priority        // لتحميل اللوجو فوراً كونه في أعلى الصفحة
            className="object-contain"
          />
        </Link>

        {/* القائمة لمتصفحات الحواسب */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href} className={navLinkClass}>
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#8c0007] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* زر الـ CTA وحالة العمل */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8c0007] animate-pulse" />
            <span className="font-[Inter] text-[11px] text-[#555550] uppercase tracking-widest selection:bg-transparent">
              Open to work
            </span>
          </div>

          <a href="wa.me/+218943284929" className={ctaClass}>
            Hire me
          </a>

          {/* زر القائمة للموبايل بتأثير الـ Hamburger المتناسق */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 cursor-pointer w-8 h-8 z-50 relative"
          >
            <span className={`block w-5 h-0.5 bg-[#e6e1de] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[#e6e1de] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* القائمة المنسدلة للموبايل بتأثير سلس */}
      <div className={`fixed top-0 left-0 right-0 z-40 bg-[#0d0d0b] border-b border-white/5 flex flex-col px-6 pt-20 pb-6 gap-4 md:hidden transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        {navLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="font-[Inter] text-base text-[#888880] hover:text-[#e6e1de] transition-colors py-1"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* الفراغ التعويضي أسفل الهيدر الثابت */}
      <div className="h-16" />
    </>
  )
}