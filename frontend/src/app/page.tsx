'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function RoleSelection() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#FFF8E1] flex flex-col items-center justify-center p-8">

      {/* Búho con libro (tu imagen) */}
      <div className="mb-16">
        <div className="w-32 h-32 bg-white rounded-full shadow-2xl p-6 flex items-center justify-center">
          <img
            src="/owl-reading.png"
            alt="Búho lector"
            className="w-full h-full object-contain drop-shadow-md"
          />
        </div>
      </div>

      {/* Título cálido */}
      <h1 className="text-4xl md:text-5xl font-black text-[#1A3C5E] text-center mb-12 tracking-widest">
        ¡BIENVENIDO!
      </h1>

      <div className="space-y-8 w-full max-w-md">

        {/* BOTÓN ESTUDIANTE – Chill y tranquilo */}
        <button
          onClick={() => router.push('/student/age-input')}
          className={`
            group w-full bg-white rounded-full py-7 px-10 
            flex items-center justify-between 
            shadow-xl hover:shadow-2xl 
            border-4 border-[#4CAF50]
            transition-all duration-300
          `}
        >
          <span className="text-3xl md:text-4xl font-black text-[#4CAF50] tracking-widest">
            SOY ESTUDIANTE
          </span>
          <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#43A047] transition-colors">
            <span className="text-3xl text-white font-bold">→</span>
          </div>
        </button>

        {/* BOTÓN PROFESOR – Suave y claro */}
        <button
          onClick={() => router.push('/adult/')}
          className={`
            group w-full bg-[#FFB74D] rounded-full py-7 px-10 
            flex items-center justify-between 
            shadow-xl hover:shadow-2xl 
            border-4 border-white
            transition-all duration-300
          `}
        >
          <span className="text-3xl md:text-4xl font-black text-white tracking-widest drop-shadow-md">
            SOY PROFESOR
          </span>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#FFF] transition-colors">
            <span className="text-3xl text-[#FFB74D] font-bold">→</span>
          </div>
        </button>

      </div>

      {/* Texto sutil */}
      <p className="mt-10 text-lg text-[#1A3C5E] font-medium opacity-80">
        Elige tu rol y comienza la aventura
      </p>
    </div>
  );
}