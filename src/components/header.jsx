import React from 'react';
import { FaTelegram, FaGithub, FaWhatsapp, FaFacebook } from "react-icons/fa";
import Image from 'next/image';
export default function Header() {
  return (
    <header className="w-full bg-[#f8ead3] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col sm:flex-row justify-between items-center">
        {/* الشعار أو النص */}
        <Image 
        src={require('@/assets/mLogo.png')}
        width={80}
        height={80}
        />

        {/* الأيقونات */}
        <nav className="flex gap-4 sm:gap-6">
          <a href="https://t.me/Maededev" className="p-2 rounded-full hover:bg-blue-500 transition-colors duration-300">
            <FaTelegram className="text-white text-2xl hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://wa.me/+218943284929" className="p-2 rounded-full hover:bg-green-500 transition-colors duration-300">
            <FaWhatsapp className="text-white text-2xl hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://github.com/isitmaede" className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
            <FaGithub className="text-white text-2xl hover:scale-110 transition-transform duration-300" />
          </a>
        </nav>
      </div>
    </header>
  );
}
