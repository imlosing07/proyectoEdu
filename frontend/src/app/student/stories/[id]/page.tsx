'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';
import { categories } from '@/data/mockData';

export default function CategoryStories() {
  const router = useRouter();
  const { id } = useParams();
  const categoryId = id as string;

  console.log(categoryId);

  // Buscar la categoría por ID
  const category = categories.find(cat => cat.id === categoryId);

  // Si no existe la categoría, redirigir
  if (!category) {
    router.replace('/student/categories');
    return null;
  }

  const stories = category.stories;

  return (
    <div className="min-h-screen bg-[#5CB8E4] flex flex-col">

      {/* Búho + Título de la categoría */}
      <div className="flex flex-col items-center pt-12 pb-8 px-6">

        <h1 className="text-5xl md:text-6xl font-black text-white text-center tracking-widest drop-shadow-lg">
          {category.name}
        </h1>
      </div>

      {/* Grid de 2 columnas con cuentos */}
      <div className="flex-1 px-6 pb-24">
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {stories.length > 0 ? (
            stories.map((story) => (
              <button
                key={story.id}
                onClick={() => router.push(`/student/story/${story.id}`)}
                className={`
                  group relative bg-white rounded-3xl shadow-xl overflow-hidden
                  transition-all duration-300
                  hover:shadow-2xl hover:scale-[1.02] cursor-pointer
                `}
              >
                {/* Imagen del cuento */}
                <div className="relative h-48 md:h-56">
                  <Image
                    src={story.image || category.image || '/categories/1.jpg'}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 from-black/60 to-transparent" />
                </div>

                {/* Título del cuento */}
                <div className="p-5 text-center">
                  <h2 className="text-lg md:text-xl font-black text-[#1A3C5E] tracking-widest line-clamp-2">
                    {story.title}
                  </h2>
                </div>

                {/* Icono de lectura */}
                <div className="absolute top-2 left-2 bg-[#4CAF50]/90 rounded-full p-2">
                  <span className="text-white text-xs font-bold">Libro</span>
                </div>
              </button>
            ))
          ) : (
            <div className="col-span-2 text-center py-12">
              <p className="text-2xl font-black text-white drop-shadow-md">
                PRÓXIMAMENTE
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navegación inferior */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t-4 border-[#4CAF50] p-4">
        <Navigation showBack showHome showFavorites showSearch />
      </div>
    </div>
  );
}