"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, MessageCircle } from "lucide-react";

// --- Assets ---
import Vecura from "@/assets/vecura_mockup.png";
import Travel from "@/assets/travel_mockup.png";
import Sabeel from "@/assets/sabeel_mockup.png";
import Nota from "@/assets/mynota_mockup.png";
import Gym from "@/assets/gym_mockup.png";
import Velura from "@/assets/velura_mockup.png";
import WePet from "@/assets/wepet.jpg";
import Dinar from "@/assets/dinar_mockup.png";
import Qatra from "@/assets/qatra_mockup.png";
import Libo from "@/assets/libostats.png"

// --- Data ---
const featured = [
  {
    id: "01",
    name: "LiboStats Analytics",
    des: "A data-intensive market analysis platform that processed 1,780+ live job listings in Libya. It features real-time salary benchmarking, geographic demand heatmaps, and automated data ingestion from unstructured sources into a structured PostgreSQL database.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Neon DB", "Recharts", "Data Mining"],
    img: Libo,
    link: "https://libostatistics.vercel.app/", // استبدله برابط المشروع الحقيقي
  },
  {
    id: "02",
    name: "TravelHub SaaS",
    des: "A multi-tenant travel agency system that standardizes workflows, publishes structured trip catalogs, and tracks performance with clean, real-time analytics.",
    tech: ["Next.js", "TypeScript" ,  "MongoDB", "SaaS" , ],
    img: Travel,
    link: "https://travelhubly.vercel.app/",
  },
  {
    id: "03",
    name: "Drop of Hope",
    des: "A location-first blood donation coordinator for Libya — built for speed, clarity, and secure sessions. Turns urgent requests into fast matching and action.",
    tech: ["React Native", "Expo" , "Supabase", "RLS"],
    img: Qatra,
    link: "https://github.com/isitmaede/qatra",
  },
  {
    id: "04",
    name: "Vecura OSINT",
    des: "An OSINT toolkit for structured data collection and footprint analysis — focused on automation, performance, and practical outputs.",
    tech: ["Next.Js","TypeScript", "Node.js"],
    img: Vecura,
    link: "https://vecura.vercel.app/",
  },
  {
    id: "05",
    name: "WePet Mobile",
    des: "A practical pet welfare platform for Libya — adoption tracking, lost/found reports, and lightweight social profiles with safe handling of user data.",
    tech: ["React Native", "Expo" , "Fastify", "PostgreSQL" ,"Prisma"],
    img: WePet,
    link: "https://wepet.vercel.app/",
  },
];

const projectsJson = [
  {
    id: 1,
    pimage: Dinar,
    name: "Dinarista FX API",
    pds: "A clean FX surface with official/market separation, caching, and developer-first endpoints.",
    plink: "https://dinarista.vercel.app/",
  },
  {
    id: 2,
    pimage: Gym,
    name: "ProGym Manager",
    pds: "Subscription management for gyms with admin controls and predictable billing logic.",
    plink: "https://github.com/isitmaede/ProGym-Manager---SaaS-Subscription-Platform.git",
  },
  {
    id: 3,
    pimage: Velura,
    name: "Velura",
    pds: "Scheduling built around intent: clients book fast, centers manage operations clearly.",
    plink: "#",
  },
  {
    id: 4,
    pimage: Nota,
    name: "MyNota",
    pds: "A lightweight notes system with AI summarization for fast knowledge capture.",
    plink: "https://mynota.vercel.app/",
  },
  {
    id: 5,
    pimage: Sabeel,
    name: "AlSabeel",
    pds: "A timeless, high-performance marketing layout for travel agencies.",
    plink: "https://alsabeeltravel.vercel.app/",
  },
];

const experiences = [
  {
    period: "2023 — Present",
    role: "Full-Stack Developer (Freelance)",
    company: "Remote / Benghazi",
    description:
      "Building product-ready web apps and APIs — focused on reliability, speed, and clean UX.",
  },
  {
    period: "2021 — 2023",
    role: "Back-End Developer",
    company: "Various Startups",
    description:
      "Designing server-side systems, databases, and deployment flows with scalable patterns.",
  },
];

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-800 px-3 py-1 text-[11px] font-semibold tracking-wide text-zinc-400">
      {children}
    </span>
  );
}

export default function PortfolioBody() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="bg-black text-zinc-100 font-sans antialiased">
      {/* TOP FRAME */}
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* HEADER */}
        <header className="pt-14 pb-10">
          <div className="flex items-center justify-between gap-6">
            <div className="text-[11px] font-semibold tracking-[0.3em] text-zinc-500 uppercase">
              Benghazi, Libya · 2026
            </div>

            <nav className="flex items-center gap-8 text-[11px] font-semibold tracking-[0.22em] text-zinc-500 uppercase">
              {["work", "archive", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="hover:text-zinc-100 transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* HERO */}
        <section className="pt-10 pb-20 border-b border-zinc-900">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h1 className="text-[12.5vw] md:text-[72px] leading-[0.95] tracking-[-0.04em] font-black uppercase">
                Mohammed Younes
              </h1>

              <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-zinc-400">
                Product-focused developer. I build systems that feel simple on the surface,
                but are engineered to scale underneath — web, mobile, APIs, and product design.
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                <Pill>Full-Stack</Pill>
                <Pill>Next.js</Pill>
                <Pill>Node.js</Pill>
                <Pill>React Native</Pill>
                <Pill>Systems & UX</Pill>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
                <div className="text-[11px] font-semibold tracking-[0.28em] text-zinc-500 uppercase">
                  Current Focus
                </div>
                <div className="mt-4 space-y-3 text-sm text-zinc-400 leading-relaxed">
                  <p>• Building SaaS-style dashboards and analytics that read like a story.</p>
                  <p>• Shipping MVPs fast without turning code into a landfill.</p>
                  <p>• Practical security: sessions, RLS, validation, rate limits.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED */}
        <section id="work" className="py-20">
          <div className="flex items-end justify-between gap-6 mb-12">
            <h2 className="text-[11px] font-semibold tracking-[0.3em] text-zinc-500 uppercase">
              Selected Work
            </h2>
            <div className="text-[11px] font-semibold tracking-[0.22em] text-zinc-600 uppercase">
              Systems · MVPs · Production APIs
            </div>
          </div>

          <div className="space-y-16">
            {featured.map((p, index) => {
              const flip = index % 2 === 1;
              return (
                <article
                  key={p.id}
                  className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start"
                >
                  {/* IMAGE */}
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`md:col-span-7 block rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950 ${
                      flip ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="relative aspect-[16/10] md:aspect-[4/3]">
                      <Image
                        src={p.img}
                        alt={p.name}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="object-cover opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    </div>
                  </a>

                  {/* TEXT */}
                  <div className={`md:col-span-5 ${flip ? "md:order-1" : "md:order-2"}`}>
                    <div className="text-[11px] font-semibold tracking-[0.3em] text-zinc-500 uppercase">
                      // {p.id}
                    </div>

                    <h3 className="mt-4 text-3xl md:text-4xl font-black tracking-tight uppercase">
                      {p.name}
                    </h3>

                    <p className="mt-5 text-zinc-400 leading-relaxed">
                      {p.des}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <Pill key={t}>{t}</Pill>
                      ))}
                    </div>

                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-8 inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.22em] uppercase text-zinc-200 hover:text-white transition-colors"
                    >
                      View Project
                      <ArrowUpRight size={18} className="opacity-80" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      {/* ARCHIVE STRIP */}
      <section id="archive" className="border-y border-zinc-900 bg-[#050505]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20">
          <h2 className="text-[11px] font-semibold tracking-[0.3em] text-zinc-500 uppercase mb-12">
            Project Archive
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsJson.map((p) => (
              <a
                key={p.id}
                href={p.plink}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-zinc-900 bg-zinc-950 overflow-hidden"
              >
                <div className="relative aspect-[16/11]">
                  <Image
                    src={p.pimage}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <div className="text-xl font-black tracking-tight uppercase">
                    {p.name}
                  </div>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {p.pds}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-zinc-300">
                    Inspect <ArrowUpRight size={16} className="opacity-75" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-white text-black">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-7">
              <h2 className="text-[11px] font-semibold tracking-[0.3em] text-zinc-500 uppercase mb-10">
                Experience
              </h2>

              <div className="space-y-10">
                {experiences.map((ex, i) => (
                  <div key={i} className="border-l-4 border-zinc-200 pl-6">
                    <div className="text-[11px] font-semibold tracking-[0.24em] text-zinc-500 uppercase">
                      {ex.period}
                    </div>
                    <div className="mt-2 text-2xl font-black tracking-tight uppercase">
                      {ex.role}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-zinc-500">
                      {ex.company}
                    </div>
                    <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                      {ex.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight uppercase leading-[0.95]">
                Let’s
                <br />
                Build.
              </h2>

              <p className="mt-6 text-sm text-zinc-600 leading-relaxed max-w-md">
                I prefer clean systems, clear decisions, and shipping. If your project needs
                structure before features — we’ll get along.
              </p>

              <div className="mt-10 flex items-center gap-10">
                <a
                  href="https://github.com/isitmaede"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammedyounusdev"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="https://wa.me/218943284929"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  <MessageCircle size={28} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-zinc-200 flex items-center justify-between text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
            <span>© 2026 M. Younes</span>
            <span className="text-black/70">32.11° N, 20.06° E</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
