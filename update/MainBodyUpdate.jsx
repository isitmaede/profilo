'use client'
import { Syne, Inter } from 'next/font/google'
import Image from 'next/image'
import { ArrowUpRight, Github, Linkedin, MessageCircle } from 'lucide-react'

import Vecura from '@/assets/vecura_mockup.png'
import Travel from '@/assets/travel_mockup.png'
import Sabeel from '@/assets/sabeel_mockup.png'
import Nota from '@/assets/mynota_mockup.png'
import Gym from '@/assets/gym_mockup.png'
import Velura from '@/assets/velura_mockup.png'
import WePet from '@/assets/wepet.jpg'
import Dinar from '@/assets/dinar_mockup.png'
import Qatra from '@/assets/qatra_mockup.png'
import Libo from '@/assets/libostats.png'
import Ordly from '@/assets/Ordly.png'
import plutu from '@/assets/pluto.png'
const syne = Syne({ subsets: ['latin'], weight: ['400', '700', '800'] })
const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500'] })

const featured = [
  { id: '01', name: 'Ordly SaaS Ecosystem', des: 'Digital menu and ordering engine for the Libyan hospitality market. QR-based browsing meets WhatsApp order fulfillment — multi-tenant, real-time, mobile-first.', tech: ['Next.js 15', 'Tailwind v4', 'Prisma', 'PostgreSQL', 'SaaS'], img: Ordly, link: 'https://ordly.ly' },
  { id: "02", name: 'Plutu JSDK', des: 'Type-safe Node.js SDK for Plutu.ly — multi-gateway support for Sadad, Adfali, MPGS, and Local Bank Cards with built-in signature verification.', img: plutu, link: 'https://github.com/isitmaede/Plutu-Jsdk' , tech: ['Node.js', 'TypeScript', 'SDK'] } ,
  { id: '03', name: 'LiboStats Analytics', des: '1,780+ live job listings processed. Real-time salary benchmarking, geographic demand heatmaps, automated data ingestion from unstructured sources.', tech: ['Next.js', 'PostgreSQL', 'Neon DB', 'Recharts', 'Data Mining'], img: Libo, link: 'https://libostatistics.vercel.app/' },
  { id: '04', name: 'TravelHub SaaS', des: 'Multi-tenant travel agency system — standardized workflows, structured trip catalogs, real-time performance analytics.', tech: ['Next.js', 'TypeScript', 'MongoDB', 'SaaS'], img: Travel, link: 'https://travelhubly.vercel.app/' },
  { id: '05', name: 'Drop of Hope', des: 'Location-first blood donation coordinator for Libya. Urgent requests turned into fast matching — built for speed, clarity, and secure sessions.', tech: ['React Native', 'Expo', 'Supabase', 'RLS'], img: Qatra, link: 'https://github.com/isitmaede/qatra' },
  { id: '06', name: 'Vecura OSINT', des: 'OSINT toolkit for structured data collection and footprint analysis — automation, performance, practical outputs.', tech: ['Next.js', 'TypeScript', 'Node.js'], img: Vecura, link: 'https://vecura.vercel.app/' },
  { id: '07', name: 'WePet Mobile', des: 'Pet welfare platform for Libya — adoption tracking, lost/found reports, lightweight social profiles.', tech: ['React Native', 'Expo', 'Fastify', 'PostgreSQL', 'Prisma'], img: WePet, link: 'https://wepet.vercel.app/' },
]

const more = [
  { id: 1, name: 'Dinarista FX API', des: 'Clean FX surface with official/market separation and developer-first endpoints.', img: Dinar, link: 'https://dinarista.vercel.app/' },
  { id: 2, name: 'ProGym Manager', des: 'Subscription management for gyms with admin controls and predictable billing logic.', img: Gym, link: 'https://github.com/isitmaede/ProGym-Manager---SaaS-Subscription-Platform.git' },
  { id: 3, name: 'Velura', des: 'Scheduling built around intent — clients book fast, centers manage operations clearly.', img: Velura, link: '#' },
  { id: 4, name: 'MyNota', des: 'Lightweight notes system with AI summarization for fast knowledge capture.', img: Nota, link: 'https://mynota.vercel.app/' },
  { id: 5, name: 'AlSabeel', des: 'High-performance marketing layout for travel agencies.', img: Sabeel, link: 'https://alsabeeltravel.vercel.app/' },
]

const skills = [
  { cat: 'Frontend', items: ['Next.js 15', 'React', 'TypeScript', 'Tailwind', 'Framer Motion'] },
  { cat: 'Mobile', items: ['React Native', 'Expo'] },
  { cat: 'Backend', items: ['Node.js', 'Fastify', 'REST APIs'] },
  { cat: 'Database', items: ['PostgreSQL', 'MongoDB', 'Prisma', 'Supabase', 'Firebase'] },
  { cat: 'Tooling', items: ['Git', 'GitHub', 'Linux', 'Vercel'] },
  { cat: 'Design', items: ['UI/UX', 'Figma', 'Product thinking'] },
]

const experience = [
  { period: '2023 — Present', role: 'Full-Stack Developer', company: 'Freelance · Remote / Benghazi', des: 'Building product-ready web apps and APIs — focused on reliability, speed, and clean UX.' },
  { period: '2021 — 2023', role: 'Back-End Developer', company: 'Various Startups', des: 'Designing server-side systems, databases, and deployment flows with scalable patterns.' },
]

function FeaturedCard({ p, index }) {
  const flip = index % 2 === 1
  const imgCls = 'md:col-span-7 block overflow-hidden border border-[#1e1e1a] bg-[#111109] ' + (flip ? 'md:order-2' : 'md:order-1')
  const txtCls = 'md:col-span-5 flex flex-col gap-6 ' + (flip ? 'md:order-1' : 'md:order-2')

  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
      <a href={p.link} target="_blank" rel="noopener noreferrer" className={imgCls}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={p.img}
            alt={p.name}
            fill
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover opacity-90 hover:opacity-100 hover:scale-[1.02] transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </a>

      <div className={txtCls}>
        <span className={inter.className + ' text-[11px] text-[#8c0007] tracking-[0.3em] uppercase'}>
          {'// ' + p.id}
        </span>
        <h3 className={syne.className + ' font-extrabold text-[#e6e1de] tracking-tight'} style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
          {p.name}
        </h3>
        <p className={inter.className + ' font-light text-[#555550] text-sm leading-relaxed'}>
          {p.des}
        </p>
        <div className="flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className={inter.className + ' text-[10px] text-[#444440] border border-[#1e1e1a] px-2 py-1 uppercase tracking-widest'}>
              {t}
            </span>
          ))}
        </div>
        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className={inter.className + ' inline-flex items-center gap-2 text-[11px] font-medium text-[#888880] hover:text-[#e6e1de] uppercase tracking-widest transition-colors'}
        >
          View Project
          <ArrowUpRight size={14} />
        </a>
      </div>
    </article>
  )
}

export default function MainBodyUpdate() {
  return (
    <main className="bg-[#0d0d0b]">

      <section id="work" className="border-t border-[#1e1e1a] py-24 px-6 md:px-12">
        <div className="flex items-end justify-between mb-20">
          <h2 className={syne.className + ' font-extrabold text-[#e6e1de] tracking-tight'} style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Selected<br />Work
          </h2>
          <span className={inter.className + ' text-[11px] text-[#444440] uppercase tracking-[0.2em]'}>
            06 projects
          </span>
        </div>
        <div className="flex flex-col gap-32">
          {featured.map((p, index) => (
            <FeaturedCard key={p.id} p={p} index={index} />
          ))}
        </div>
      </section>

      <section id="archive" className="border-t border-[#1e1e1a] py-24 px-6 md:px-12 bg-[#080807]">
        <div className="flex items-end justify-between mb-16">
          <h2 className={syne.className + ' font-extrabold text-[#e6e1de] tracking-tight'} style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
            More
          </h2>
          <span className={inter.className + ' text-[11px] text-[#444440] uppercase tracking-[0.2em]'}>
            05 projects
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1e1e1a]">
          {more.map((p) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#080807] flex flex-col overflow-hidden hover:bg-[#0d0d0b] transition-colors duration-200"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <h3 className={syne.className + ' font-bold text-[#e6e1de] text-base group-hover:text-white transition-colors'}>
                    {p.name}
                  </h3>
                  <ArrowUpRight size={14} className="text-[#333330] group-hover:text-[#8c0007] transition-colors mt-0.5 shrink-0" />
                </div>
                <p className={inter.className + ' font-light text-[#555550] text-sm leading-relaxed'}>
                  {p.des}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="border-t border-[#1e1e1a] py-24 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className={syne.className + ' font-extrabold text-[#e6e1de] tracking-tight mb-8'} style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
              About
            </h2>
            <div className="w-full h-px bg-[#1e1e1a] relative">
              <div className="absolute left-0 top-0 h-px bg-[#8c0007] w-1/4" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className={inter.className + ' font-light text-[#888880] text-base leading-relaxed'}>
              I'm Mohammed Younes — a 19-year-old product developer from Benghazi, Libya. I build full-stack web apps and mobile products that solve real problems for real markets.
            </p>
            <p className={inter.className + ' font-light text-[#555550] text-base leading-relaxed'}>
              I don't just write code — I think about the business, the user, and the system as one thing. That's what makes a product ship and stick. Currently targeting product manager and project lead roles.
            </p>
            <div className="flex flex-col pt-4">
              {experience.map((e, i) => (
                <div key={i} className="flex flex-col gap-1 py-5 border-t border-[#1e1e1a]">
                  <div className="flex items-center justify-between">
                    <span className={syne.className + ' font-bold text-[#e6e1de] text-sm'}>{e.role}</span>
                    <span className={inter.className + ' text-[11px] text-[#444440] tracking-widest'}>{e.period}</span>
                  </div>
                  <span className={inter.className + ' text-[11px] text-[#8c0007] uppercase tracking-widest'}>{e.company}</span>
                  <p className={inter.className + ' font-light text-[#555550] text-sm leading-relaxed mt-1'}>{e.des}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="border-t border-[#1e1e1a] py-24 px-6 md:px-12 bg-[#080807]">
        <div className="flex items-end justify-between mb-16">
          <h2 className={syne.className + ' font-extrabold text-[#e6e1de] tracking-tight'} style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Stack
          </h2>
          <span className={inter.className + ' text-[11px] text-[#444440] uppercase tracking-[0.2em]'}>
            Tools I ship with
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#1e1e1a]">
          {skills.map((s) => (
            <div key={s.cat} className="bg-[#080807] p-6 flex flex-col gap-4">
              <span className={inter.className + ' text-[11px] text-[#8c0007] uppercase tracking-[0.2em]'}>{s.cat}</span>
              <div className="flex flex-col gap-2">
                {s.items.map((item) => (
                  <span key={item} className={inter.className + ' text-sm text-[#888880] font-light'}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="border-t border-[#1e1e1a] bg-[#e6e1de]">
        <div className="px-6 md:px-12 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <span className={inter.className + ' text-[11px] text-[#888880] uppercase tracking-[0.2em] mb-4 block'}>
                Get in touch
              </span>
              <h2 className={syne.className + ' font-extrabold text-[#0d0d0b] tracking-tight'} style={{ fontSize: 'clamp(40px, 7vw, 88px)' }}>
                Let's build<br />
                <span className="text-[#8c0007]">something.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-5 items-start md:items-end">
              <a
                href="mailto:mohammedahmadyounes@gmail.com"
                className={inter.className + ' font-medium text-xs uppercase tracking-widest text-[#e6e1de] bg-[#0d0d0b] px-8 py-4 hover:bg-[#8c0007] transition-all duration-200'}
              >
                Send an email
              </a>
              <div className="flex items-center gap-6">
                <a href="https://github.com/isitmaede" target="_blank" rel="noopener noreferrer" className="text-[#555550] hover:text-[#0d0d0b] transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/mohammedyounusdev" target="_blank" rel="noopener noreferrer" className="text-[#555550] hover:text-[#0d0d0b] transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://wa.me/218943284929" target="_blank" rel="noopener noreferrer" className="text-[#555550] hover:text-[#0d0d0b] transition-colors">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-[#c8c3c0] flex items-center justify-between">
            <span className={inter.className + ' text-[11px] text-[#888880]'}>2026 Mohammed Younes</span>
            <span className={inter.className + ' text-[11px] text-[#888880] uppercase tracking-widest'}>32.11 N, 20.06 E</span>
          </div>
        </div>
      </footer>

    </main>
  )
}