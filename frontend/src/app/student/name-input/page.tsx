'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function NameInput() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
      localStorage.setItem('studentName', name);
      router.push('/student/stories');
    }
  };

  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center px-4">
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
        <div className="bg-blue rounded-lg shadow-lg p-8 mb-6">
          <Input
            label="Nombre"
            type="text"
            value={name}
            onChange={setName}
            placeholder="Value"
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