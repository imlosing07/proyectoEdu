'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function RoleSelection() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col items-center justify-center px-4">
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

      <div className="space-y-6 w-full max-w-md">
        <button
          onClick={() => router.push('/student/age-input')}
          className="w-full bg-[#5CB8E4] rounded-full py-6 px-8 flex items-center justify-between shadow-lg hover:shadow-xl transition-shadow"
        >
          <span className="text-2xl font-nunito tracking-readable">Soy estudiante</span>
          <span className="text-3xl">→</span>
        </button>

        <button
          onClick={() => router.push('/adult/')}
          className="w-full bg-[#5CB8E4] rounded-full py-6 px-8 flex items-center justify-between shadow-lg hover:shadow-xl transition-shadow"
        >
          <span className="text-2xl font-nunito tracking-readable">Soy profesor</span>
          <span className="text-3xl">→</span>
        </button>
      </div>
    </div>
  );
}