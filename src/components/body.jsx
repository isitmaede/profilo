"use client";
import React from "react";
import { Lateef, Katibeh , Lalezar } from "next/font/google";
import Projects from "./projects";


// 💡 استخدم رقم هاتفك الدولي هنا (بدون + أو مسافات)
const WHATSAPP_NUMBER = '218943284929'; 

const lalezar = Lalezar({
    subsets:['arabic'],
    weight:"400"
})


const lateefFont = Lateef({
    subsets: ["arabic"],
    weight: ["400"],
});

const katibeh = Katibeh({
    subsets: ["arabic"],
    weight: "400",
});

export default function AboutSection() {
    return (
        <div className="max-w-4xl mx-auto px-6 pb-32 md:pt-32 md:pb-40">
            <h1
                className={`text-4xl md:text-5xl font-extrabold text-[#d29c44] mb-10 mt-5 text-right ${katibeh.className}`}
            >
                محمد يونس
            </h1>

            <p
                className={`text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl ${lateefFont.className}`}
            >
                مطور ويب وموبايل ديفيلوبر فول ستاك مستقل من بنغازي، ليبيا. أركز على
                تصميم وبناء تطبيقات ومواقع رقمية تقدم تجارب سلسة وفعّالة للمستخدمين.
            </p>

            <p
                className={`text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mt-6 ${lateefFont.className}`}
            >
                أتعاون مع مصممين وشركات لتطوير حلول رقمية مبتكرة تلبي احتياجات الأعمال
                والمستخدمين على حد سواء. أؤمن بأن البساطة في التصميم والتقنية هي مفتاح
                نجاح أي تجربة رقمية، وأسعى دائمًا لخلق مشاريع تضيف قيمة حقيقية وتترك
                أثرًا ملموسًا.
            </p>
            
            <Projects />
            
            {/* 🌟 تم تعديل هذا القسم لإضافة رابط الواتساب والخط السفلي 🌟 */}
            <div className='flex justify-center items-center mt-20 md:mt-32'>
                <p className="text-gray-600 text-center text-lg">
                    إن كنت مهتمًا بالتعاون في مشروع أو فكرة مهنية، فسيسعدني
                    <br />
                    
                    {/* وسم <a> للرابط إلى واتساب مع الخط السفلي */}
                    <a 
                        href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`
                            ${lalezar.className} 
                            text-4xl md:text-5xl font-bold 
                            text-[#d29c44] 
                            hover:text-[#a07433] 
                            transition-colors duration-300
                            underline 
                            underline-offset-8 
                            decoration-2 
                            mt-4 inline-block
                        `}
                    >
                        التواصل معك
                    </a>
                </p>
            </div>
        </div>
    );
}