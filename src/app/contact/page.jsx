'use client';
import React from "react";
import Link from "next/link";
import Classichead from "@/components/Classichead";
import { Poppins, Old_Standard_TT } from "next/font/google";
import Image from "next/image";
import { FaArrowAltCircleUp  , FaGithub , FaLinkedin ,} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
const pop = Poppins({
  subsets:['latin'],
  weight:['400','600','800']
});

const pt = Old_Standard_TT({
  subsets:['latin'],
  weight:['700'],
});
export default function page() {
  return (
    <div className="p-4">
        <header className={`${pop.className} p-10 flex justify-between items-center text-xl`}>
        <div className="flex gap-6">
          <Link href={'/bio'}>
            <h1 className="hover:border-b  hover:duration-300 cursor-pointer">Bio</h1>
          </Link>
          <Link href={'/'}>
            <h1 className="hover:border-b duration-200 cursor-pointer">Work</h1>
          </Link>
        </div>
        <h1 className="hover:border-b border-b hover:duration-300 cursor-pointer">Contact</h1>
      </header>
        <div className="mt-16">
            <h1 className="text-center text-5xl">Get in <span className="font-bold">Touch</span></h1>
            <div className="flex flex-row justify-center items-center mt-16 gap-8">
                <a href={'mailto:mohammedahmadyounes@gmail.com'}><CiMail size={34} className="hover:border-b hover:duration-200" /></a>
                <Link href={'https://github.com/isitmaede'}><FaGithub size={42} className="hover:border-b hover:duration-200" /></Link>
                <Link href={'https://www.linkedin.com/in/mohammedyounusdev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}><FaLinkedin size={34} className="hover:border-b hover:duration-200 " /></Link>
            </div>
            <div className="flex justify-center items-center mt-14">
                <Image src={'/cat.webp'} width={420} height={420} alt="cat"/>
            </div>

        </div>
        <div className='bg-black w-full h-px mt-10 mb-8'></div>
         <div className=" flex  justify-between items-center mt-2 flex-row">
               <div className="flex flex-row gap-2 items-center">
                <Link className="mt-5" href={'/'}>Home</Link>
                
               </div>
               
               
               
            </div>
    </div>
  )
}
