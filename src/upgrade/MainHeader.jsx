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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full px-6 py-8 md:px-12 border-b border-zinc-800 bg-black text-white"
    >
      {/* Top Bar: Newspaper Style */}
      <div className="flex justify-between items-end mb-12 uppercase tracking-tighter text-[10px] md:text-xs text-zinc-500">
        <div className="flex flex-col">
          <span>Available for Freelance</span>
          <span>{date}</span>
        </div>
        <div className="text-right flex flex-col">
          <span>Based in Libya</span>
          <span>Full-stack Developer / Creative Eng.</span>
        </div>
      </div>

      {/* Main Branding: Bold Typography */}
      <div className="relative">
        <h1 className="text-[15vw] md:text-[12vw] font-light leading-[0.8] tracking-tighter italic font-serif">
          Product <br />
          <span className="ml-[10vw] md:ml-[20vw] not-italic font-bold">
            Developer.
          </span>
        </h1>

        {/* Decorative Element */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-[1px] bg-zinc-700 mt-8"
        />
      </div>

      {/* Sub-navigation or Tagline */}
      <div className="mt-4 flex flex-wrap justify-between items-center gap-4">
        <p className="max-w-xs text-sm text-zinc-400 leading-relaxed font-light">
          I approach software as a product, not just code. From concept and UX
          to frontend and backend, I build systems that are practical,
          intentional, and quietly different.
        </p>

        <nav className="flex gap-6 text-sm font-medium tracking-widest uppercase">
          <a href="#work" className="hover:text-zinc-400 transition-colors">
            Work
          </a>
          <a href="#about" className="hover:text-zinc-400 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-zinc-400 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
