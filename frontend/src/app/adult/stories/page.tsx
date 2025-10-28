'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';
import { mockStories } from '@/data/mockData';

export default function AdultStories() {
  const router = useRouter();
  const [stories] = useState(mockStories);

  return (
    <div className="min-h-screen bg-amber-50 pb-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold font-nunito tracking-readable text-center mb-12">
          MIS CUENTOS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {stories.map((story) => (
            <div
              key={story.id}
              onClick={() => router.push(`/adult/stories/editar/${story.id}`)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow border-2 border-gray-200"
            >
              <div className="relative h-64">
                <Image
                  src="/categories/oliver-twist.jpg"
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-xl font-nunito tracking-readable font-bold">
                  {story.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Botón crear cuento */}
        <div className="flex justify-center">
          <button
            onClick={() => router.push('/adult/stories/crear')}
            className="bg-black text-white px-12 py-4 rounded-lg font-nunito tracking-readable text-xl hover:bg-gray-800 transition-colors"
          >
            CREAR CUENTO
          </button>
        </div>
      </div>

      <Navigation showBack showHome showFavorites showSearch />
    </div>
  );
}