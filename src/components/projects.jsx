import React from 'react';
import Image from 'next/image';
// قد تحتاج إلى التأكد من مسارات الاستيراد (@/assets/...)
import sabeel from '@/assets/sabeel.png';
import java from '@/assets/java.png';
import havana from '@/assets/havana.png';
import quiz from '@/assets/quiz.png';
import aleef from '@/assets/aleef.png';
import nota from '@/assets/mynota.png';

const projectsJson = [
    {
        "id": 1,
        "pimage": quiz, 
        "name": "BestieQuizz",
        "designer": "Mohammed Younes",
        "plink": "https://bestiequizcheck.vercel.app/" 
    },
    {
        "id": 2,
        "pimage": java,
        "name": "Java",
        "designer": "Mohammed Younes",
        "plink": "https://javauly.vercel.app/"
    },
    {
        "id": 3,
        "pimage": havana,
        "name": "Havana",
        "designer": "Mohammed Younes",
        "plink": "https://havanafood.vercel.app/"
    },
    {
        "id": 4,
        "pimage": aleef,
        "name": "Aleef",
        "designer": "Mohammed Younes",
        "plink": "https://aleefsite.vercel.app/"
    },
    {
        "id": 5,
        "pimage": nota,
        "name": "MyNota",
        "designer": "Mohammed Younes",
        "plink": "https://mynota.vercel.app/"
    },
    {
        "id": 6,
        "pimage": sabeel,
        "name": "AlSabeel",
        "designer": "Mohammed Younes",
        "plink": "https://alsabeeltravel.vercel.app/"
    }
];

export default function Projects() {
    const validProjects = projectsJson.filter(project => project.pimage);

    return (
        <section className='max-w-7xl mx-auto px-4 py-20'>
            <h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center'>أعمالي الأخيرة</h2>
            
            <div className='grid grid-cols-1 gap-8 items-stretch'>
                {validProjects.map((project) => (
                    // 🌟 استخدام وسم <a> وتطبيق تأثيرات الحركة
                    <a
                        key={project.id}
                        href={project.plink || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        // تأثير التحويم: انتقال سلس، ظل، وتكبير طفيف
                        className='group flex flex-col overflow-hidden rounded-xl transition-all duration-300 bg-[#d3d1d1] 
                                   hover:shadow-lg hover:scale-[1.005] focus:outline-none focus:ring-4 focus:ring-gray-400' 
                    >
                        {/* حاوية الصورة - اللون موحد والصورة في المنتصف */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden flex items-center justify-center p-4">
                            <Image
                                src={project.pimage}
                                alt={`صورة مشروع ${project.name}`}
                                width={420} 
                                height={150} 
                                // تأثير بسيط على الصورة عند تحويم البطاقة الأب
                                className="object-contain rounded-sm shadow-md transition-all duration-300 group-hover:opacity-90" 
                                sizes="100vw"
                                priority={project.id <= 3}
                            />
                        </div>

                        {/* تفاصيل المشروع - تقسيم النص يمين ويسار */}
                        <div className="p-5 flex justify-between items-center w-full">
                            {/* اسم المصمم (يمين) */}
                            <p className='text-base text-gray-800 order-2 text-right'>
                                {project.designer}
                            </p>
                            
                            {/* اسم المشروع (يسار) */}
                            <h3 className='text-2xl font-bold text-gray-900 order-1 text-left truncate'>
                                {project.name}
                            </h3>
                        </div>
                    </a>
                ))}
            </div>
            
            {validProjects.length === 0 && (
                <p className='text-center text-gray-500 mt-8'>لا توجد مشاريع لعرضها حالياً.</p>
            )}
        </section>
    );
}