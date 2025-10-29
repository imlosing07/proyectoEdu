'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function AgeInput() {
  const [age, setAge] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ageNumber = parseInt(age);
    if (age && !isNaN(ageNumber) && ageNumber > 0) {
      // Guardar edad en localStorage o estado global
      localStorage.setItem('studentAge', age);
      router.push('/student/name-input');
    }
  };

  return (
    <div className="min-h-screen bg-[#5CB8E4] flex flex-col items-center justify-center px-4">
      <div className="mb-12">
        <div className="relative w-48 h-48 mb-8 mx-auto">
          <Image
            src="/owl-reading.png"
            alt="Búho leyendo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <Input
          label="EDAD"
          type="number"
          value={age}
          onChange={(value) => {
            setAge(value);
          }}
          placeholder="Ingresa tu edad"
        />

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