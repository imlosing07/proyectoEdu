'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';
import { mockStories } from '@/data/mockData';
import { useEffect, useState, useRef } from 'react';
import { Volume2, Heart, MessageCircle, ChevronLeft, ChevronRight, VolumeX } from 'lucide-react';

export default function StoryPage() {
  const router = useRouter();
  const { id } = useParams();
  const storyId = id as string;

  const story = mockStories.find(s => s.id === storyId);
  const [ciclo, setCiclo] = useState<'primerCiclo' | 'segundoCiclo' | 'tercerCiclo'>('tercerCiclo');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [speechSupported, setSpeechSupported] = useState(false);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const age = Number(localStorage.getItem('studentAge'));
    if (age >= 0 && age <= 6) setCiclo('primerCiclo');
    else if (age >= 7 && age <= 8) setCiclo('segundoCiclo');
    else if (age >= 9 && age <= 12) setCiclo('tercerCiclo');
  }, []);

  useEffect(() => {
    // Verificar si el navegador soporta Speech Synthesis
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
      setSpeechSupported(true);
    }

    return () => {
      // Limpiar al desmontar
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const getTextFromCurrentPage = () => {
    const allLines = story?.contenidos[ciclo] || [];
    const linesPerPage = ciclo === 'primerCiclo' ? 5 : ciclo === 'segundoCiclo' ? 7 : 10;
    const currentLines = allLines.slice(currentPage * linesPerPage, (currentPage + 1) * linesPerPage);
    
    // Extraer solo el texto, omitiendo líneas vacías
    return currentLines
      .map(item => item.text)
      .filter(text => text.trim() !== '')
      .join(' ');
  };

  const toggleAudio = () => {
    if (!synthRef.current || !story) return;

    if (isPlaying) {
      // Pausar/Detener
      synthRef.current.cancel();
      setIsPlaying(false);
    } else {
      // Reproducir
      const textToSpeak = getTextFromCurrentPage();
      
      if (textToSpeak) {
        utteranceRef.current = new SpeechSynthesisUtterance(textToSpeak);
        
        // Configurar voz en español
        const voices = synthRef.current.getVoices();
        const spanishVoice = voices.find(voice => 
          voice.lang.startsWith('es-') || voice.lang === 'es'
        );
        
        if (spanishVoice) {
          utteranceRef.current.voice = spanishVoice;
        }
        
        // Configurar velocidad y tono según el ciclo
        utteranceRef.current.rate = ciclo === 'primerCiclo' ? 0.8 : ciclo === 'segundoCiclo' ? 0.9 : 1.0;
        utteranceRef.current.pitch = 1.1;
        utteranceRef.current.volume = 1.0;
        utteranceRef.current.lang = 'es-ES';
        
        // Eventos
        utteranceRef.current.onend = () => {
          setIsPlaying(false);
        };
        
        utteranceRef.current.onerror = (event) => {
          console.error('Error en síntesis de voz:', event);
          setIsPlaying(false);
        };
        
        synthRef.current.speak(utteranceRef.current);
        setIsPlaying(true);
      }
    }
  };

  // Detener audio al cambiar de página
  useEffect(() => {
    if (synthRef.current && isPlaying) {
      synthRef.current.cancel();
      setIsPlaying(false);
    }
  }, [currentPage]);

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

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#5CB8E4] flex flex-col">

      {/* Cuento */}
      <div ref={containerRef} className="flex-1 px-6 pb-32 pt-8 overflow-y-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
          
          {/* Portada - Siempre visible */}
          {story.image && (
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

          {/* Líneas actuales con pictogramas */}
          <div className="min-h-[200px] flex flex-wrap items-center justify-center gap-3 transition-all duration-300">
            {currentLines.map((item, index) => (
              <div key={index} className="inline-flex items-center">
                {item.image ? (
                  <div className="inline-flex flex-col items-center gap-1">
                    {/* Nombre del pictograma */}
                    <span className="text-xs font-bold text-[#1A3C5E] px-2 py-0.5 bg-[#E3F2FD] rounded-full">
                      {item.text}
                    </span>
                    {/* Imagen del pictograma */}
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-[#4CAF50] rounded-xl p-2 shadow-md">
                      <Image
                        src={item.image}
                        alt={item.text}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  item.text.trim() !== '' && (
                    <span className="text-2xl md:text-3xl font-black text-[#1A3C5E] mx-1">
                      {item.text}
                    </span>
                  )
                )}
              </div>
            ))}
          </div>

          {/* Controles de navegación y página */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Botón anterior */}
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all ${
                currentPage === 0
                  ? 'bg-gray-300 cursor-not-allowed opacity-50'
                  : 'bg-[#4CAF50] hover:bg-[#45a049] hover:scale-110'
              }`}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Indicador de página */}
            {totalPages > 1 && (
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`h-3 rounded-full transition-all ${
                      i === currentPage ? 'bg-[#4CAF50] w-8' : 'bg-gray-300 w-3 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Botón siguiente */}
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all ${
                currentPage === totalPages - 1
                  ? 'bg-gray-300 cursor-not-allowed opacity-50'
                  : 'bg-[#4CAF50] hover:bg-[#45a049] hover:scale-110'
              }`}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Contador de páginas */}
          <div className="text-center mt-4">
            <span className="text-sm font-bold text-gray-500">
              Página {currentPage + 1} de {totalPages}
            </span>
          </div>
        </div>
      </div>

      {/* Botón de audio */}
      {speechSupported && (
        <div className="fixed bottom-20 right-6">
          <button
            onClick={toggleAudio}
            className={`w-16 h-16 rounded-full shadow-xl flex items-center justify-center transition-all ${
              isPlaying ? 'bg-[#4CAF50] text-white animate-pulse' : 'bg-white text-[#4CAF50]'
            } hover:scale-110`}
          >
            {isPlaying ? (
              <VolumeX className="w-8 h-8" />
            ) : (
              <Volume2 className="w-8 h-8" />
            )}
          </button>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t-4 border-[#4CAF50] p-4">
        <Navigation showBack showHome showFavorites showSearch />
      </div>
    </div>
  );
}