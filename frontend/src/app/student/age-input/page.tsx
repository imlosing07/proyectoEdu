'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function AgeInput() {
  const [age, setAge] = useState(localStorage.getItem('studentAge') || '');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ageNumber = parseInt(age);
    if (age && !isNaN(ageNumber) && ageNumber > 0) {
      // Guardar edad en localStorage o estado global
      localStorage.setItem('studentAge', age);
      router.push('/student/name-input');
    }
    else {
      alert('Por favor, ingresa tu edad.');
    }
  };

  return (
    <div className="min-h-screen bg-[#5CB8E4] flex flex-col items-center justify-center p-8">

      {/* Búho */}
      <div className="mb-16">
        <div className="w-64 h-64 bg-white rounded-full shadow-2xl p-6 flex items-center justify-center">
          <img src="/home/logoSinFondo2.png" alt="Búho" className="w-full h-full object-contain drop-shadow-md" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">

        <div className="bg-white rounded-3xl p-6 shadow-xl w-full max-w-sm mx-auto">
          <h2 className="text-3xl font-black text-[#1A3C5E] text-center mb-6 tracking-widest">
            ¿CUÁNTOS AÑOS TIENES?
          </h2>
          <Input
            label=""
            type="number"
            value={age}
            onChange={(value) => {
              if (/^\d{0,2}$/.test(value)) {
                setAge(value);
              }
            }}
            placeholder=""
            className="w-32 sm:w-40 md:w-48
  h-20
  text-center text-6xl font-black
  text-[#5CB8E4]
  bg-[#E3F2FD]                 /* Azul muy claro de fondo */
  placeholder-[#90CAF9]       /* Azul más suave para placeholder */
  rounded-2xl
  border-none
  focus:outline-none focus:ring-4 focus:ring-[#5CB8E4]/40
  shadow-inner"
          />
        </div>

        <div className="flex gap-4">
          <Button variant="back" onClick={() => router.back()}>
            ←
          </Button>
          <Button variant="forward" type="submit" className="flex-1">
            →
          </Button>
        </div>
      </form>
    </div>
  );
}