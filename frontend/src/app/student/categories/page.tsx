'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';
import { categories } from '@/data/mockData';

export default function Stories() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#5CB8E4] flex flex-col">

      {/* Búho + Título */}
      <div className="flex flex-col items-center pt-12 pb-8 px-6">
        <div className="mb-8">
          <div className="w-32 h-32 bg-white rounded-full shadow-2xl p-6 flex items-center justify-center">
            <img
              src="/owl-reading.png"
              alt="Búho lector"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-white text-center tracking-widest drop-shadow-lg">
          Categorias
        </h1>
      </div>

      {/* Grid de 2 columnas */}
      <div className="flex-1 px-6 pb-24">
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                if (category.stories.length > 0) {
                  router.push(`/student/stories/${category.id}`);
                }
              }}
              disabled={category.stories.length === 0}
              className={`
                group relative bg-white rounded-3xl shadow-xl overflow-hidden
                transition-all duration-300
                ${category.stories.length > 0 
                  ? 'hover:shadow-2xl hover:scale-[1.02] cursor-pointer' 
                  : 'opacity-70 cursor-not-allowed'
                }
              `}
            >
              {/* Imagen */}
              <div className="relative h-48 md:h-56">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 from-black/50 to-transparent" />
              </div>

              {/* Texto */}
              <div className="p-5 text-center">
                <h2 className="text-xl md:text-2xl font-black text-[#1A3C5E] tracking-widest">
                  {category.name.toUpperCase()}
                </h2>
              </div>

              {/* Indicador de disponibilidad */}
              {category.stories.length === 0 && (
                <div className="absolute top-2 right-2 bg-white/90 rounded-full p-1">
                  <span className="text-xs font-bold text-gray-600">PRÓXIMAMENTE</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Navegación inferior */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t-4 border-[#4CAF50] p-4">
        <Navigation showBack showHome showFavorites showSearch />
      </div>
    </div>
  );
}