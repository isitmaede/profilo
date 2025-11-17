'use client'; 
import React from 'react'
import { FaCode , FaPaw } from "react-icons/fa";
import {PT_Serif , Old_Standard_TT} from 'next/font/google';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import Workprojects  from './Workprojects';
import Link from 'next/link';
const pt = Old_Standard_TT({
    subsets:['latin'],
    weight:['700'],

})


export default function WorkBody() {
  return (
    <div className='p-10'>
        <h4 className='text-3xl font-extrabold'>Software</h4>
        <div className='items-center flex flex-row ml-14 mt-1 gap-2 '>
            <FaCode size={34}  />
            <p className=' text-3xl font-medium'>Enginner</p>
        </div>
        <div className='mt-12'>
            <h1 className={`${pt.className} text-5xl text-center font-extrabold`}>Mohammed Younus</h1>
            <p className='mt-10 mb-4'>*(isitmaede)</p>
        </div>
        <p className=''> A <span className='text-2xl font-extrabold'>full stack developer</span> <br></br> <span className='ml-13 mt-4'>from benghazi - Libya</span></p>
        <div className='flex flex-row gap-1 items-center  mt-5'>
            <p className='mt-2'>* Founder of <span  className='font-extrabold hover:text-green-600 duration-200'><Link href={'https://aleeflibya.vercel.app/'}>Aleef</Link></span></p> <FaPaw className='mt-2' />
        </div>
        <div className='flex flex-col '>
            <p className='mt-18 text-4xl text-left'>some <span className=''>of my work</span></p>
            <div className='h-px bg-gray-950 w-[100px] mt-1'></div>
        </div>
            <div>
                <Workprojects />
            </div>
            <div className='bg-black w-full h-px mt-10 mb-8'></div>
         <div className=" flex  justify-between items-center mt-2 flex-row">
               <div className="flex flex-row gap-2 items-center">
                <Link className="mt-5" href={'/'}>Get Back to Top</Link>
                <FaArrowAltCircleUp className="mt-5" />
               </div>
               
               <Link href={'/conatct'} className="mt-5">Get In Touch</Link>
               
            </div>
    </div>
  )
}
