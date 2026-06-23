'use client'
import { useEffect, useRef, useState } from 'react'
import { Syne, Inter } from 'next/font/google'

const syne = Syne({ subsets: ['latin'], weight: ['400', '700', '800'] })
const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500'] })

const stack = ['Next.js', 'React Native', 'Node.js', 'PostgreSQL', 'TypeScript', 'Supabase', 'Prisma', 'Figma']

export default function MainHeroUpdate() {
  const cursorRef = useRef(null)
  const posRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const frameRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(hover: none)').matches
    ) {
      cursor.style.display = 'none'
      return
    }
    const lerp = (a, b, t) => a + (b - a) * t
    const onMove = (e) => { posRef.current = { x: e.clientX, y: e.clientY } }
    const tick = () => {
      currentRef.current.x = lerp(currentRef.current.x, posRef.current.x, 0.12)
      currentRef.current.y = lerp(currentRef.current.y, posRef.current.y, 0.12)
      cursor.style.transform = `translate(${currentRef.current.x - 10}px, ${currentRef.current.y - 10}px)`
      frameRef.current = requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', onMove)
    frameRef.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[999] hidden md:block"
        style={{ willChange: 'transform' }}
      >
        <div className="relative w-5 h-5">
          <div className="absolute top-1/2 left-0 w-full h-px bg-[#8c0007] -translate-y-px" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-[#8c0007] -translate-x-px" />
          <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 border border-[#8c0007] -translate-x-1/2 -translate-y-1/2 rotate-45" />
        </div>
      </div>

      <section className="min-h-screen bg-[#0d0d0b] flex flex-col justify-between px-4 sm:px-8 md:px-12 pt-16 sm:pt-20 pb-8 sm:pb-10 relative overflow-hidden">

        <div className="absolute right-0 top-0 h-full w-px bg-[#1a1a17] hidden lg:block" aria-hidden="true" />
        <div className="absolute right-12 top-0 h-full w-px bg-[#141412] hidden lg:block" aria-hidden="true" />

        <div
          className={`flex items-center justify-between transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
          style={{ transitionDelay: '100ms' }}
        >
          <span className={`${inter.className} text-[10px] sm:text-[11px] text-[#3a3a36] uppercase tracking-[0.2em] sm:tracking-[0.25em]`}>
            Product Developer — Benghazi, Libya
          </span>
          
        </div>

        <div className="flex flex-col gap-5 sm:gap-6 flex-1 justify-center py-8 sm:py-12">

          <div
            className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <p className={`${inter.className} text-[10px] sm:text-[11px] text-[#8c0007] uppercase tracking-[0.3em] sm:tracking-[0.35em] mb-4 sm:mb-5`}>
              Mohammed Younes
            </p>
            <h1
              className={`${syne.className} font-extrabold text-[#e6e1de] leading-[0.9] tracking-tight`}
              style={{ fontSize: 'clamp(44px, 11vw, 118px)' }}
            >
              I BUILD
              <br />
              <span className="relative inline-block">
                PRODUCTS
                <span className="absolute left-0 bottom-[0.06em] h-[2px] sm:h-[3px] w-full bg-[#8c0007]" aria-hidden="true" />
              </span>
              <br />
              THAT SHIP.
            </h1>
          </div>

          <div
            className={`w-full h-px bg-[#1e1e1a] relative transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '360ms' }}
          >
            <div
              className="absolute left-0 top-0 h-px bg-[#8c0007] transition-all duration-1000"
              style={{ width: mounted ? '33%' : '0%', transitionDelay: '480ms' }}
            />
          </div>

          <div
            className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <p className={`${inter.className} font-light text-[#555550] text-sm sm:text-[15px] leading-relaxed max-w-xs`}>
              Full-stack & mobile developer — from architecture to launch.
              I think in systems, design for users, and build for scale.
            </p>

            <div className="flex flex-col gap-3 items-start sm:items-end shrink-0">
              <div className="flex items-center gap-3 sm:gap-4">
                <a href="#work" className={`${inter.className} font-medium text-[10px] sm:text-xs uppercase tracking-widest text-[#0d0d0b] bg-[#e6e1de] px-4 sm:px-6 py-2.5 sm:py-3 hover:bg-[#8c0007] hover:text-[#e6e1de] transition-all duration-200`}>View work</a>
                <a href="#contact" className={`${inter.className} font-medium text-[10px] sm:text-xs uppercase tracking-widest text-[#888880] border border-[#2a2a26] px-4 sm:px-6 py-2.5 sm:py-3 hover:border-[#8c0007] hover:text-[#e6e1de] transition-all duration-200`}>Contact</a>
              </div>
              <span className={`${inter.className} text-[10px] sm:text-[11px] text-[#2e2e2a] uppercase tracking-widest`}>
                6+ products launched
              </span>
            </div>
          </div>
        </div>

        <div
          className={`overflow-hidden border-t border-[#1e1e1a] pt-4 sm:pt-5 transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '580ms' }}
        >
          <div
            className="flex gap-8 sm:gap-12 whitespace-nowrap w-max"
            style={{ animation: 'ticker 20s linear infinite' }}
          >
            {[...stack, ...stack].map((item, i) => (
              <span key={i} className={`${inter.className} text-[10px] sm:text-[11px] text-[#2e2e2a] uppercase tracking-[0.2em]`}>
                {item}
                <span className="ml-8 sm:ml-12 text-[#8c0007]" aria-hidden="true">×</span>
              </span>
            ))}
          </div>
        </div>

      </section>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="animation"] { animation: none !important; }
        }
      `}</style>
    </>
  )
}