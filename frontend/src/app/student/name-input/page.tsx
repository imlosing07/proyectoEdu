'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function NameInput() {
  const [name, setName] = useState(localStorage.getItem('studentName') || '');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
      localStorage.setItem('studentName', name);
      router.push('/student/categories');
    }
    else {
      alert('Por favor, ingresa tu nombre.');
    }
  };

  return (
    <div className="min-h-screen bg-[#5CB8E4] flex flex-col items-center justify-center p-8">
    
          {/* Búho */}
          <div className="mb-16">
            <div className="w-32 h-32 bg-white rounded-full shadow-2xl p-6 flex items-center justify-center">
              <img src="/owl-reading.png" alt="Búho" className="w-full h-full object-contain drop-shadow-md" />
            </div>
          </div>
    
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
    
            <div className="bg-white rounded-3xl p-6 shadow-xl w-full max-w-sm mx-auto">
              <h2 className="text-3xl font-black text-[#1A3C5E] text-center mb-6 tracking-widest">
                ¿CUÁL ES TU NOMBRE?
              </h2>
              <Input
                label=""
                type="text"
                value={name}
                onChange={setName}
                placeholder=""
                className="w-56
          h-20
          text-center text-4xl font-blac
          text-[#4CAF50]
          bg-[#E8F5E9]
          placeholder-[#81C784]
          rounded-2xl
          border-none
          focus:outline-none focus:ring-4 focus:ring-[#81C784]/40
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