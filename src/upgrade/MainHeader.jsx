"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MainHeader() {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-6 py-10 md:px-16 bg-black text-white selection:bg-white selection:text-black"
    >
      {/* Top Metadata */}
      <div className="grid grid-cols-2 md:grid-cols-3 items-start mb-20 uppercase tracking-[0.2em] text-[9px] md:text-[10px] text-zinc-500 border-b border-zinc-900 pb-4">
        <div className="flex flex-col gap-1">
          <span className="text-zinc-200">Independent Practice</span>
          <span>{date}</span>
        </div>
        <div className="hidden md:flex justify-center text-zinc-500 uppercase tracking-widest">
          Build / Scale / Manage
        </div>
        <div className="text-right flex flex-col gap-1">
          <span className="text-zinc-200">Benghazi, Libya</span>
          <span>Full-Stack Engineering</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative group">
        <div className="flex flex-col gap-0">
          <h2 className="text-[3vw] md:text-[1.5vw] font-medium text-zinc-600 uppercase tracking-[0.3em] leading-none">
            Product Designer
          </h2>
          <h1 className="text-[16vw] md:text-[13vw] font-bold leading-[0.8] tracking-tighter uppercase mt-4">
            Product <br />
            <span className="text-outline text-transparent transition-all duration-700 group-hover:text-white" style={{ WebkitTextStroke: '1px white' }}>
              Developer.
            </span>
          </h1>
          <h2 className="text-[3vw] md:text-[1.5vw] font-medium text-zinc-600 uppercase tracking-[0.3em] leading-none self-end mt-4">
            Product Manager
          </h2>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 1.5, ease: "circOut" }}
          className="h-[0.5px] bg-zinc-800 w-full mt-12"
        />
      </div>

      {/* Professional Summary & Nav */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-6">
          <p className="text-lg md:text-xl font-normal text-zinc-300 leading-tight tracking-tight max-w-xl">
            Specializing in the development of <span className="text-white font-bold">multi-tenant SaaS platforms</span>, 
            high-load APIs, and mobile ecosystems. My focus is on <span className="text-white font-bold">architectural reliability</span> and systematic product delivery.
          </p>
        </div>
        
        <div className="md:col-span-3 md:col-start-10 flex flex-col gap-4 text-[11px] tracking-[0.2em] uppercase items-end font-bold">
          <nav className="flex flex-col gap-3 text-right">
            <a href="#work" className="hover:text-zinc-400 transition-colors">
              Selected Projects
            </a>
            <a href="#archive" className="hover:text-zinc-400 transition-colors">
              Systems Archive
            </a>
            <a href="#contact" className="hover:text-zinc-400 transition-colors">
              Contact / Inquiry
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}