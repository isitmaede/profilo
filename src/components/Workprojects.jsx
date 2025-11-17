'use client';
import React from 'react';
import Image from 'next/image';

import sabeel from '@/assets/sabeel.png';
import java from '@/assets/java.png';
import havana from '@/assets/havana.png';
import quiz from '@/assets/quiz.png';
import aleef from '@/assets/aleef.png';
import nota from '@/assets/mynota.png';

const projectsJson = [
  {
    id: 1,
    pimage: quiz,
    name: "BestieQuizz",
    designer: "Mohammed Younes",
    plink: "https://bestiequizcheck.vercel.app/",
    pds: "A playful quiz created for friends to test how well they truly know each other."
  },
  {
    id: 2,
    pimage: java,
    name: "Java",
    designer: "Mohammed Younes",
    plink: "https://javauly.vercel.app/",
    pds: "A calm, minimal website crafted for a local coffee shop with a warm classic atmosphere."
  },
  {
    id: 3,
    pimage: havana,
    name: "Havana",
    designer: "Mohammed Younes",
    plink: "https://havanafood.vercel.app/",
    pds: "A clean, traditional website for a local restaurant, focusing on clarity and elegance."
  },
  {
    id: 4,
    pimage: aleef,
    name: "Aleef",
    designer: "Mohammed Younes",
    plink: "https://aleeflibya.vercel.app/",
    pds: "The first Libyan platform dedicated to helping lost and injured animals with a simple humane interface."
  },
  {
    id: 5,
    pimage: nota,
    name: "MyNota",
    designer: "Mohammed Younes",
    plink: "https://mynota.vercel.app/",
    pds: "A classic notes tool that saves lessons locally and summarizes them through AI assistance."
  },
  {
    id: 6,
    pimage: sabeel,
    name: "AlSabeel",
    designer: "Mohammed Younes",
    plink: "https://alsabeeltravel.vercel.app/",
    pds: "A travel agency website built with a timeless layout and clear information structure."
  }
];

export default function Workprojects() {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex flex-col gap-8 w-full max-w-2xl">

        {projectsJson.map((pro) => (
          <a 
            key={pro.id}
            href={pro.plink}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border border-gray-200 p-6 rounded-md hover:border-gray-400 duration-300"
          >
            <div className="flex flex-col gap-4">
              
              <Image 
                src={pro.pimage} 
                alt={pro.name}
                className="w-full h-auto rounded-sm"
              />

              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  {pro.name}
                </h1>
                <p className="text-gray-500 mt-1">
                  {pro.pds}
                </p>
              </div>

            </div>
          </a>
        ))}

      </div>
    </div>
  );
}
