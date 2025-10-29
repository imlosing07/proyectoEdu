'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function RoleSelection() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#5CB8E4] flex flex-col items-center justify-center p-8">

      {/* Imagen */}
      <div className="mb-16">
        <div className="
            w-50 h-50    
            sm:w-60 sm:h-60         
            md:w-80 md:h-80      
            bg-white rounded-full shadow-2xl p-6
            flex items-center justify-center
          ">
          <img
            src="/lexio.png"
            alt="Lexio"
            className="w-full h-full object-contain drop-shadow-md"
          />
      </div>

      {/* Título cálido */}
      <h1 className="text-4xl md:text-5xl font-black text-[#0D3B66] text-center mb-12 tracking-widest drop-shadow-lg">
        ¡BIENVENIDO A LEXIA!
      </h1>

      <div className="space-y-8 w-full max-w-md">

        {/* BOTÓN ESTUDIANTE */}
        <button
          onClick={() => router.push('/student/age-input')}
          className={`
        group w-full bg-gradient-to-r from-[#A8E6CF] to-[#56C596] 
        rounded-full py-7 px-10 
        flex items-center justify-between 
        shadow-xl hover:shadow-2xl 
        border-4 border-[#FFFFFF]
        transition-all duration-300 transform hover:scale-105
      `}
        >
          <span className="text-2xl md:text-4xl font-black text-[#084C61] tracking-widest flex items-center gap-2">
            Soy estudiante
            <span className="text-3xl">🎓</span>
          </span>
        </button>

        {/* BOTÓN PROFESOR */}
        <button
          onClick={() => router.push('/adult/')}
          className={`
        group w-full bg-gradient-to-r from-[#FFD166] to-[#FF9E80]
        rounded-full py-7 px-10 
        flex items-center justify-between 
        shadow-xl hover:shadow-2xl 
        border-4 border-white
        transition-all duration-300 transform hover:scale-105
      `}
        >
          <span className="text-2xl md:text-4xl font-black text-[#3D405B] tracking-widest flex items-center gap-2">
            Soy profesor
            <span className="text-3xl">👨‍🏫</span>
          </span>
        </button>

      </div>

      {/* Texto sutil */}
      <p className="mt-10 text-lg text-[#0D3B66] font-medium opacity-90">
        Elige tu rol y comienza la aventura
      </p>

    </div>
  );
}