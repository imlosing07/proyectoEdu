'use client';

import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';
import PictogramText from '@/components/ui/PictogramText';
import { mockStories } from '@/data/mockData';
import { useEffect, useState } from 'react';

export default function StoryPage() {
  const router = useRouter();
  const params = useParams();
  const storyId = params.id as string;

  const story = mockStories.find(s => s.id === storyId);

  const [ciclo, setCiclo] = useState<'primerCiclo' | 'segundoCiclo' | 'tercerCiclo'>('primerCiclo');

  useEffect(() => {
    const age = Number(localStorage.getItem('studentAge'));
    if (age >= 4 && age <= 6) setCiclo('primerCiclo');
    else if (age >= 7 && age <= 8) setCiclo('segundoCiclo');
    else if (age >= 9 && age <= 10) setCiclo('tercerCiclo');
  }, []);

  if (!story) {
    return <div>Cuento no encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-amber-50 pb-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h1 className="text-3xl font-bold font-nunito tracking-readable text-center">
              {story.title}
            </h1>
          </div>

          {/* Story Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="border-2 border-gray-300 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm font-nunito tracking-readable">
                  Cuentos con Instagram
                </div>
                <div className="relative w-12 h-12">
                  <Image
                    src="/icons/instagram.png"
                    alt="Instagram"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="leading-loose text-left">
                {story.contenidos[ciclo].map((item, index) => (
                  <PictogramText
                    key={index}
                    text={item.text}
                    image={item.image}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center items-center">
            <button className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-3xl hover:bg-red-600 transition-colors">
              ❤️
            </button>

            <button
              onClick={() => router.push(`/student/quiz/${storyId}`)}
              className="bg-black text-white px-8 py-4 rounded-lg font-nunito tracking-readable text-xl hover:bg-gray-800 transition-colors"
            >
              PREGUNTAS
            </button>

            <button className="w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center text-3xl hover:bg-gray-100 transition-colors">
              🎧
            </button>
          </div>
        </div>
      </div>

      <Navigation showBack showHome showFavorites showSearch />
    </div>
  );
}