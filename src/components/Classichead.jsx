"use client";
import React from "react";
import Link from "next/link";
import { Poppins , PT_Serif } from "next/font/google";


const pop = Poppins({
    subsets:['latin'],
    weight:['400' , '600' , '800']
})


const pt = PT_Serif({
    subsets:['latin'],
    weight:['400' , '700'],
    style:['italic']
})



export default function Classichead() {
  return (
    <div className={`${pop.className} p-10 flex flex-row items-center justify-between text-gray-950 text-xl`}>

      {/* اليسار */}
      <div className="flex flex-row items-center gap-6">
        <Link href={'/bio'}><h1 className="hover:border-b hover:duration-300 cursor-pointer">Bio</h1></Link>
        <h1 className="border-b cursor-pointer">Work</h1>
      </div>

      {/* اليمين */}
      <Link href={'/contact'} className="hover:border-b hover:duration-300 cursor-pointer">
        Contact
      </Link>

    </div>
  );
}
