import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone } from "lucide-react";
import Image from "next/image";
import Vecura from "@/assets/vecura.png";
import Aleef from "@/assets/uptodown.png";
import Travel from '@/assets/travelhub.png'
const Tops = [
  {
    id: 1,
    name: "TravelHub-Travel-Agency-Management-SaaS",
    des: "TravelHub is a streamlined MVP (Minimum Viable Product) designed to digitize local travel agencies. It transforms traditional, paper-based operations into a modern, data-driven digital experience. Built with a focus on high performance, SEO, and seamless user experience for both agency owners and travelers.",
    tech: ["React", "NextJs" , "TailwindCss" , "typescript" , "Node.js", "express", "MongoDB"],
    icon: Globe,
    accentColor: "border-amber-100",
    iconColor: "text-blue-400",
    proimg: Travel,
    Linko: "https://travelhubly.vercel.app/",
  },
  {
    id: 2,
    name: "Vecura — Advanced OSINT Intelligence Suite",
    des: "A comprehensive suite for Open-Source Intelligence (OSINT), engineered to streamline data gathering, analysis, and investigative workflows.",
    tech: ["nextjs", "Node.js", "MongoDB"],
    icon: Globe,
    accentColor: "border-amber-100",
    iconColor: "text-blue-400",
    proimg: Vecura,
    Linko: "https://vecura.vercel.app/",
  },
  {
    id: 3,
    name: "Aleef — Community Pet Adoption App",
    des: "A mobile platform designed to connect local adopters with stray animals, offering a structured, humane, and community‑driven adoption experience.",
    tech: ["React Native", "Expo", "PostgreSQL"],
    icon: Smartphone,
    accentColor: "border-amber-100",
    iconColor: "text-green-400",
    proimg: Aleef,
    Linko: "https://com-xeyappsss-aleef.ar.uptodown.com/android",
  },
];

const ProjectCard = ({ top, index }) => {
  const IconComponent = top.icon;

  const cardVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 90, delay: index * 0.1 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 260, damping: 25 }}
      className={`flex flex-col w-full rounded-xl shadow-md overflow-hidden cursor-pointer h-full transition border-l-4 ${top.accentColor}`}
      style={{ direction: "rtl" }}
    >
      <div className="h-44 overflow-hidden relative bg-gray-100">
        <Image
          src={top.proimg}
          alt={top.name}
          className="object-cover w-full h-full rounded-t-xl transition duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col justify-between flex-grow">
        <div className="flex items-start justify-between mb-3">
          <h2 className="text-2xl font-semibold text-gray-800 leading-snug">
            {top.name}
          </h2>
          <IconComponent className={`w-7 h-7 ${top.iconColor}`} />
        </div>

        <p className="text-base text-gray-600 mb-4 leading-relaxed">
          {top.des}
        </p>

        <div>
          <span className="text-sm font-medium text-gray-500 mb-2 block">
            Technology Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {top.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full font-medium shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 flex mr-2 mb-4 p-2">
        <a
          href={top.Linko}
          target="_blank"
          className="px-4 py-2 text-sm font-semibold bg-gray-900 text-white rounded-lg shadow hover:bg-gray-700 transition"
        >
          Visit Live
        </a>
      </div>
    </motion.div>
  );
};

export default function TopProjectsShowcase() {
  return (
    <div className="flex flex-col items-center min-h-screen text-gray-900 p-6 md:p-12 ">
      <div
        className="w-full max-w-2xl text-center mb-14"
        style={{ direction: "rtl" }}
      >
        <h1 className="text-5xl text-gray-900 mb-2 tracking-tight">
          Featured <span className="font-extrabold">Projects</span>
        </h1>
        <div className="w-16 mt-4 mx-auto h-1 bg-gray-800 rounded-full"></div>
      </div>

      <div className="w-full max-w-2xl">
        <motion.div
          className="flex flex-col gap-8"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {Tops.map((top, index) => (
            <ProjectCard key={top.id} top={top} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
