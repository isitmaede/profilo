"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  MessageCircle,
  Globe,
  Smartphone,
} from "lucide-react";

// --- Assets ---
import Vecura from "@/assets/vecura.png";
import AleefPro from "@/assets/aleefmockup.jpg";
import Travel from "@/assets/travelhub.png";
import Sabeel from "@/assets/sabeel.png";
import Java from "@/assets/java.png";
import Havana from "@/assets/havana.png";
import Quiz from "@/assets/quiz.png";
import AleefWeb from "@/assets/aleef.png";
import Nota from "@/assets/mynota.png";
import Gym from '@/assets/gym.png'
// 1. Featured Projects (الكبرى)
const featured = [
  {
    id: 1,
    name: "TravelHub SaaS",
    des: "Next-gen travel agency management.",
    tech: ["Next.js", "MongoDB"],
    img: Travel,
    link: "https://travelhubly.vercel.app/",
  },
  
  {
    id: 2,
    name: "Vecura OSINT",
    des: "Intelligence gathering suite.",
    tech: ["TypeScript", "Node.js"],
    img: Vecura,
    link: "https://vecura.vercel.app/",
  },
  {
    id: 3,
    name: "Aleef Mobile",
    des: "Community pet adoption app.",
    tech: ["React Native", "PostgreSQL"],
    img: AleefPro,
    link: "https://com-xeyappsss-aleef.ar.uptodown.com/android",
  },
];

// 2. Side Projects (التي أرسلتها الآن)
const projectsJson = [
  {
    id: 1,
    pimage: Quiz,
    name: "BestieQuizz",
    pds: "Playful quiz for friends to test their bonds.",
    plink: "https://bestiequizcheck.vercel.app/",
  },
  {
    id: 2,
    pimage: Gym,
    name: "ProGym Manager - SaaS Subscription Platform",
    pds: "manage your gym Subscription easily",
    plink: "https://github.com/isitmaede/ProGym-Manager---SaaS-Subscription-Platform.git",
  },
  {
    id: 3,
    pimage: Havana,
    name: "Havana Food",
    pds: "Traditional restaurant site with modern clarity.",
    plink: "https://havanafood.vercel.app/",
  },
  {
    id: 4,
    pimage: AleefWeb,
    name: "Aleef Web",
    pds: "Libyan platform for animal welfare.",
    plink: "https://aleeflibya.vercel.app/",
  },
  {
    id: 5,
    pimage: Nota,
    name: "MyNota",
    pds: "Local notes tool with AI summarization.",
    plink: "https://mynota.vercel.app/",
  },
  {
    id: 6,
    pimage: Sabeel,
    name: "AlSabeel",
    pds: "Timeless layout for travel agencies.",
    plink: "https://alsabeeltravel.vercel.app/",
  },
];

const experiences = [
  {
    period: "2023 - Present",
    role: "Full-Stack Developer (Freelance)",
    company: "Remote / Benghazi",
    description:
      "Crafting bespoke digital solutions and high-performance APIs.",
  },
  {
    period: "2021 - 2023",
    role: "Back-End Developer",
    company: "Various Startups",
    description:
      "Architecting scalable server-side systems and database management.",
  },
];

export default function PortfolioBody() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black font-sans">
      {/* --- HERO SECTION --- */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 border-b border-zinc-900">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 mb-8 block">
            Based in Benghazi, Libya
          </span>
          <h1 className="text-[15vw] md:text-[12vw] font-black leading-[0.8] tracking-tighter uppercase mb-12">
            Mohammed <br /> <span className="text-zinc-800">Younes.</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <p className="text-lg md:text-xl font-light text-zinc-400 max-w-md leading-tight">
              A Creative Developer focusing on{" "}
              <span className="text-white italic">Editorial Design</span> and
              robust Full-stack architecture.
            </p>
            <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold">
              <button
                onClick={() => scrollTo("work")}
                className="hover:line-through"
              >
                Selected Work
              </button>
              <button
                onClick={() => scrollTo("archive")}
                className="hover:line-through"
              >
                Project Archive
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="hover:line-through"
              >
                Contact
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- FEATURED WORK (Large) --- */}
      <section id="work" className="py-32 px-6 md:px-16">
        <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-600 mb-20">
          // Featured Engineering
        </h2>
        <div className="space-y-40">
          {featured.map((p) => (
            <div
              key={p.id}
              className="group grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
            >
              <div className="md:col-span-7 overflow-hidden bg-zinc-900 aspect-video relative grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="md:col-span-5">
                <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase italic group-hover:not-italic transition-all">
                  {p.name}
                </h3>
                <p className="text-zinc-400 font-light mb-8 text-lg">{p.des}</p>
                <a
                  href={p.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 border-b border-zinc-700 pb-1 hover:border-white transition-colors uppercase text-xs tracking-widest"
                >
                  View Project <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SIDE PROJECTS (Grid Archive) --- */}
      <section
        id="archive"
        className="py-32 bg-[#080808] px-6 md:px-16 border-y border-zinc-900"
      >
        <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-600 mb-16">
          // Project Archive
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-24">
          {projectsJson.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[4/5] mb-6 bg-zinc-900 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src={p.pimage}
                  alt={p.name}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h4 className="text-2xl font-bold uppercase tracking-tighter mb-2">
                {p.name}
              </h4>
              <p className="text-zinc-500 text-sm font-light mb-4 leading-relaxed line-clamp-2">
                {p.pds}
              </p>
              <a
                href={p.plink}
                target="_blank"
                className="text-[10px] uppercase tracking-widest font-bold hover:text-white text-zinc-600 transition-colors"
              >
                Launch Project
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- EXPERIENCE & CONTACT --- */}
      <footer
        id="contact"
        className="pt-32 pb-16 px-6 md:px-16 bg-white text-black"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-40">
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] font-bold mb-10 text-zinc-400">
              Experience
            </h2>
            <div className="space-y-12">
              {experiences.map((ex, i) => (
                <div key={i} className="border-l border-zinc-200 pl-6">
                  <span className="text-[10px] font-mono text-zinc-400">
                    {ex.period}
                  </span>
                  <h3 className="text-xl font-black uppercase tracking-tight">
                    {ex.role}
                  </h3>
                  <p className="text-sm text-zinc-600 mt-2">{ex.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <h2 className="text-[8vw] font-black leading-none uppercase tracking-tighter italic">
              Get In <br /> Touch.
            </h2>
            <div className="flex gap-8 mt-12">
              <a
                href="https://github.com/isitmaede"
                className="hover:scale-110 transition-transform"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammedyounusdev"
                className="hover:scale-110 transition-transform"
              >
                <Linkedin />
              </a>
              <a
                href="https://wa.me/218943284929"
                className="hover:scale-110 transition-transform"
              >
                <MessageCircle />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-zinc-100 pt-8 text-[10px] uppercase tracking-widest font-medium text-zinc-400">
          <span>© 2025 M.YOUNES</span>
          <span>Benghazi, Libya</span>
        </div>
      </footer>
    </div>
  );
}
