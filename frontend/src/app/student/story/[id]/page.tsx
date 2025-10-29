'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';
import { mockStories } from '@/data/mockData';
import { useEffect, useState, useRef } from 'react';

export default function StoryPage() {
  const router = useRouter();
  const { id } = useParams();
  const storyId = id as string;

  const story = mockStories.find(s => s.id === storyId);
  const [ciclo, setCiclo] = useState<'primerCiclo' | 'segundoCiclo' | 'tercerCiclo'>('primerCiclo');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const age = Number(localStorage.getItem('studentAge'));
    if (age >= 4 && age <= 6) setCiclo('primerCiclo');
    else if (age >= 7 && age <= 8) setCiclo('segundoCiclo');
    else if (age >= 9 && age <= 12) setCiclo('tercerCiclo');
  }, []);

  useEffect(() => {
    // Mock audio por ciclo (puedes reemplazar con archivos reales)
    const audioMap: Record<string, string> = {
      primerCiclo: '/audio/tortuga-primer.mp3.mp3',
      segundoCiclo: '/audio/tortuga-segundo.mp3',
      tercerCiclo: '/audio/tortuga-tercer.mp3',
    };
    if (audioRef.current) {
      audioRef.current.src = audioMap[ciclo];
    }
  }, [ciclo]);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (!story) {
    return (
      <div className="min-h-screen bg-[#5CB8E4] flex items-center justify-center">
        <p className="text-3xl font-black text-white">Cuento no encontrado</p>
      </div>
    );
  }

  const pictograms = story.contenidos[ciclo];

  return (
    <div className="min-h-screen bg-[#5CB8E4] flex flex-col">

      {/* Búho + Título */}
      <div className="flex flex-col items-center pt-8 pb-6 px-6">
        <div className="mb-6">
          <div className="w-28 h-28 bg-white rounded-full shadow-2xl p-5 flex items-center justify-center">
            <img src="/home/logoSinFondo2.png" alt="Búho" className="w-full h-full object-contain drop-shadow-md" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white text-center tracking-widest drop-shadow-lg">
          {story.title.toUpperCase()}
        </h1>
      </div>

      {/* Cuento */}
      <div className="flex-1 px-6 pb-32">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
          
          {/* Portada */}
          {story.image && (
            <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden mb-8 shadow-xl">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 from-black/50 to-transparent" />
            </div>
          )}

          {/* Pictogramas */}
          <div className="space-y-6">
            {pictograms.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-[#E8F5E9] rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow"
              >
                {item.image && (
                  <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.text}
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <p className="text-2xl md:text-3xl font-black text-[#1A3C5E] tracking-widest flex-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="fixed bottom-20 left-0 right-0 px-6">
        <div className="flex justify-center gap-6">
          {/* Favorito */}
          <button className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center text-4xl hover:scale-110 transition-transform">
            Heart
          </button>

          {/* Preguntas */}
          <button
            onClick={() => router.push(`/student/quiz/${storyId}`)}
            className="bg-[#FFB74D] text-white px-8 py-4 rounded-full font-black text-xl tracking-widest shadow-xl hover:bg-[#FFA726] hover:scale-105 transition-all"
          >
            PREGUNTAS
          </button>

          {/* Audio */}
          <button
            onClick={toggleAudio}
            className={`w-16 h-16 rounded-full shadow-xl flex items-center justify-center text-4xl transition-all ${
              isPlaying 
                ? 'bg-[#4CAF50] text-white animate-pulse' 
                : 'bg-white text-[#4CAF50] hover:scale-110'
            }`}
          >
            {isPlaying ? 'Stop' : 'Headphones'}
          </button>
        </div>
      </div>

      {/* Audio oculto */}
      <audio
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Navegación */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t-4 border-[#4CAF50] p-4">
        <Navigation showBack showHome showFavorites showSearch />
      </div>
    </div>
  );
}