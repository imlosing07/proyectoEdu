'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';
import { mockStories } from '@/data/mockData';

export default function Stories() {
  const router = useRouter();

  const categories = [
    { id: '1', name: 'realista', stories: mockStories.filter(s => s.category === '1') },
    { id: '2', name: 'categoria 2', stories: mockStories.filter(s => s.category === '2') },
    { id: '3', name: 'categoria 3', stories: [] },
    { id: '4', name: 'categoria 4', stories: [] },
  ];

  return (
    <div className="min-h-screen bg-yellow-400 pb-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold font-nunito tracking-readable text-center mb-12">
          CUENTOS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => {
                if (category.stories.length > 0) {
                  router.push(`/student/story/${category.stories[0].id}`);
                }
              }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src="/categories/oliver-twist.jpg"
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-2xl font-nunito tracking-readable">
                  {category.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Navigation showBack showHome showFavorites showSearch />
    </div>
  );
}