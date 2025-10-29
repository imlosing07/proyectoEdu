'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';
import { mockStories } from '@/data/mockData';
import { useEffect, useState, useRef } from 'react';
import { Volume2, Heart, MessageCircle, ChevronDown } from 'lucide-react';

export default function StoryPage() {
  const router = useRouter();
  const { id } = useParams();
  const storyId = id as string;

  const story = mockStories.find(s => s.id === storyId);
  const [ciclo, setCiclo] = useState<'primerCiclo' | 'segundoCiclo' | 'tercerCiclo'>('primerCiclo');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const age = Number(localStorage.getItem('studentAge'));
    if (age >= 4 && age <= 6) setCiclo('primerCiclo');
    else if (age >= 7 && age <= 8) setCiclo('segundoCiclo');
    else if (age >= 9 && age <= 12) setCiclo('tercerCiclo');
  }, []);

  useEffect(() => {
    const audioMap: Record<string, string> = {
      primerCiclo: '/audio/tortuga-primer.mp3',
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
      <div className="min-h-screen bg-[#5CB8E4] flex items-center justify-center p-8">
        <p className="text-4xl font-black text-white drop-shadow-lg">Cuento no encontrado</p>
      </div>
    );
  }

  const allLines = story.contenidos[ciclo];
  const linesPerPage = ciclo === 'primerCiclo' ? 5 : ciclo === 'segundoCiclo' ? 7 : 10;
  const totalPages = Math.ceil(allLines.filter(l => l.text.trim() !== '').length / linesPerPage);
  const currentLines = allLines.slice(currentPage * linesPerPage, (currentPage + 1) * linesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
      containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#5CB8E4] flex flex-col">

      {/* Cuento */}
      <div ref={containerRef} className="flex-1 px-6 pb-32 pt-8 overflow-y-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
          
          {/* Portada */}
          {story.image && currentPage === 0 && (
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-8 shadow-xl">
              <Image src={story.image} alt={story.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Título y corazón */}
              <div className="absolute top-8 left-0 right-0 flex items-center justify-center gap-4 px-6">
                <h1 className="text-4xl md:text-5xl font-black text-white text-center tracking-widest drop-shadow-2xl">
                  {story.title}
                </h1>
                <button className="w-12 h-12 bg-white/90 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform flex-shrink-0">
                  <Heart className="w-6 h-6 text-red-500" fill="currentColor" />
                </button>
              </div>

              {/* Botón de preguntas */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <button
                  onClick={() => router.push(`/student/quiz/${storyId}`)}
                  className="bg-[#FFB74D] text-white px-8 py-4 rounded-full font-black text-xl tracking-widest shadow-2xl hover:bg-[#FFA726] hover:scale-105 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-6 h-6" />
                  PREGUNTAS
                </button>
              </div>
            </div>
          )}

          {/* Líneas actuales */}
          <div className="space-y-6">
            {currentLines.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-2 ${item.text.trim() === '' ? 'h-0' : ''}`}
              >
                {item.image && (
                  <>
                    {/* Nombre de la imagen */}
                    <p className="text-sm font-black text-[#1A3C5E] tracking-wider uppercase">
                      {item.text || 'Pictograma'}
                    </p>
                    {/* Imagen */}
                    <div className="w-24 h-24 md:w-28 md:h-28 bg-[#E8F5E9] rounded-2xl p-3 shadow-md">
                      <Image
                        src={item.image}
                        alt={item.text}
                        width={112}
                        height={112}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </>
                )}
                {/* Texto */}
                {item.text && !item.image && (
                  <p className="text-2xl md:text-3xl font-black text-[#1A3C5E] tracking-widest text-center">
                    {item.text}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Indicador de página */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === currentPage ? 'bg-[#4CAF50] w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Botón de audio */}
      <div className="fixed bottom-20 right-6">
        <button
          onClick={toggleAudio}
          className={`w-16 h-16 rounded-full shadow-xl flex items-center justify-center transition-all ${
            isPlaying ? 'bg-[#4CAF50] text-white animate-pulse' : 'bg-white text-[#4CAF50]'
          } hover:scale-110`}
        >
          <Volume2 className="w-8 h-8" />
        </button>
      </div>

      {/* Siguiente página */}
      {currentPage < totalPages - 1 && (
        <button
          onClick={nextPage}
          className="fixed bottom-32 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-[#4CAF50]" />
        </button>
      )}

      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />

      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t-4 border-[#4CAF50] p-4">
        <Navigation showBack showHome showFavorites showSearch />
      </div>
    </div>
  );
}