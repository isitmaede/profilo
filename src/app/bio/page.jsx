'use client';
import React from "react";
import Link from "next/link";
import { Poppins, Old_Standard_TT } from "next/font/google";
import Image from "next/image";
import { FaArrowAltCircleUp } from "react-icons/fa";
const pop = Poppins({
  subsets:['latin'],
  weight:['400','600','800']
});

const pt = Old_Standard_TT({
  subsets:['latin'],
  weight:['700'],
});

export default function Page() {

  const experiences = [
    {
      period: "2023 - Present",
      role: "Full-Stack Developer (Freelance)",
      company: "Remote Clients",
      location: "Libya / Remote",
      description: "Working on full-stack web and mobile projects using React, Next.js, Node.js, Python, and PostgreSQL. Developed APIs, payment gateways, and deployed applications."
    },
    {
      period: "2021 - 2023",
      role: "Back-End Developer (Freelance)",
      company: "Various Startups",
      location: "Remote",
      description: "Built backend systems with Node.js, Python. Worked with MySQL, MongoDB, and implemented REST & GraphQL APIs."
    },
    {
      period: "2021",
      role: "Full-Stack Developer (Open Source Projects)",
      company: "Freelance",
      location: "Remote",
      description: "Contributed to open-source projects. Developed web apps and mobile apps using React Native, Flutter, and Node.js backend services."
    }
  ];

  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "React Native", "Next.js", "Python",
    "Ruby", "C++", "Bash Script", "Redux", "React Query", "Tailwind CSS", "Responsive Design",
    "UI/UX", "Node.js", "MySQL", "PostgreSQL", "MongoDB", "Redis", "ORM (Prisma)", "Express",
    "REST API", "GraphQL", "Authentication (JWT, OAuth)", "Docker", "Supabase", "Firebase",
    "Git", "Full-stack Development", "Mobile & Web Deployment", "Project Management",
    "Cloud Services (AWS/GCP)", "GitHub CI/CD", "GitHub Actions", "GitLab CI", "Linux", "Agile/Scrum"
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">

      {/* الهيدر */}
      <header className={`${pop.className} p-10 flex justify-between items-center text-xl`}>
        <div className="flex gap-6">
          <Link href={'/bio'}>
            <h1 className="hover:border-b border-b hover:duration-300 cursor-pointer">Bio</h1>
          </Link>
          <Link href={'/'}>
            <h1 className="hover:border-b duration-200 cursor-pointer">Work</h1>
          </Link>
        </div>
        <h1 className="hover:border-b hover:duration-300 cursor-pointer">Contact</h1>
      </header>

      {/* الصورة والنص في الوسط */}
      <main className="flex-1 flex flex-col justify-center items-center relative">
        <div className="relative mb-10">
          <Image src={'/bloody.png'} width={300} height={300} alt="statues" className="rounded-lg" />
          <h1 className={`${pt.className} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-extrabold text-center`}>
            Mohammed Younus
          </h1>
        </div>

        {/* الروابط قبل About Me */}
        <div className="flex gap-10 text-lg mb-12">
          <Link href={'/'} className="hover:border-b border-b cursor-pointer">Mail</Link>
          <Link href={'/'} className="hover:border-b border-b cursor-pointer">Github</Link>
          <Link href={'/'} className="hover:border-b border-b cursor-pointer">LinkedIn</Link>
        </div>

        {/* About Me */}
        <section className="max-w-4xl text-center mb-12 px-4">
          <h2 className={`${pt.className} text-4xl mb-4 border-b inline-block`}>About Me</h2>
          <p className="mt-4 text-lg leading-relaxed">
            I am a Libyan full-stack developer, working remotely on freelance projects worldwide.
            My focus is building scalable web and mobile applications using modern technologies.
          </p>
        </section>

        {/* الخبرات */}
        <section className="max-w-4xl mb-12 px-4">
          <h2 className={`${pt.className} text-3xl mb-6 border-b inline-block`}>Experience</h2>
          <div className="flex flex-col gap-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="border-l-4 border-amber-500 pl-4">
                <span className="text-amber-400 font-semibold">{exp.period}</span>
                <h3 className="text-2xl font-bold mt-1">{exp.role} - {exp.company}</h3>
                <span className="text-gray-400 italic">{exp.location}</span>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* المهارات */}
        <section className="max-w-4xl mb-12 px-4">
          <h2 className={`${pt.className} text-3xl mb-4 border-b inline-block`}>Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <span key={idx} className="bg-gray-800 px-3 py-1 rounded text-sm">{skill}</span>
            ))}
          </div>
        </section>
      </main>

      <div className="p-4">
            <p className={`${pt.className} text-3xl border-b w-fit`}>Languages</p>
            <div className="p-2 mt-4 ml-3 ">
              <p className="mb-5">* Arabic : Native</p>
              <p className="mb-5">* English : B2</p>
              <p className="mb-5">* Spanish : A2</p>
            </div>
            <div className="w-full h-px bg-amber-50 mt-2">
            </div>
            <div className=" flex  justify-between items-center mt-2 flex-row">
               <div className="flex flex-row gap-2 items-center">
                <Link className="mt-5" href={'/bio'}>Get Back to Top</Link><FaArrowAltCircleUp className="mt-5" />
               </div>
               
               <Link href={'/conatct'} className="mt-5">Get In Touch</Link>
               
            </div>
      </div>

    </div>
  )
}
