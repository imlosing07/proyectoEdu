'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import Input from '@/components/ui/Input';
import Navigation from '@/components/layout/Navigation';
import PictogramEditor from '@/components/ui/PictogramEditor';
import { mockStories } from '@/data/mockData';

export default function EditarCuento() {
  const router = useRouter();
  const params = useParams();
  const storyId = params.id as string;

  // Buscar el cuento o crear uno nuevo
  const existingStory = mockStories.find(s => s.id === storyId);
  
  const [titulo, setTitulo] = useState(existingStory?.title || 'TITULO DEL CUENTO');
  const [tonoAudio, setTonoAudio] = useState('Niño');
  const [categoria, setCategoria] = useState(existingStory?.category || '');
  const [content, setContent] = useState(existingStory?.content || [
    { text: 'Escribe', image: undefined },
    { text: 'tu', image: undefined },
    { text: 'cuento', image: undefined },
  ]);

  const [showPlayPause, setShowPlayPause] = useState(false);

  const handleEditar = () => {
    console.log('Editando cuento:', { titulo, tonoAudio, categoria, content });
    // Aquí iría la lógica para guardar el cuento
    alert('Cuento guardado correctamente');
  };

  const handleEliminar = () => {
    if (confirm('¿Estás seguro de que quieres eliminar este cuento?')) {
      // Aquí iría la lógica para eliminar
      router.push('/adult/stories');
    }
  };

  const handleCrear = () => {
    setShowPlayPause(true);
    // Aquí iría la lógica para generar el audio
    setTimeout(() => {
      alert('Audio generado correctamente');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-amber-50 pb-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header con título */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold font-nunito tracking-readable text-center">
              {titulo}
            </h1>
          </div>

          {/* Área del cuento con pictogramas */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="border-2 border-gray-300 rounded-lg p-6 mb-4">
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

              <PictogramEditor content={content} onChange={setContent} />
            </div>

            {/* Botones de audio flotantes */}
            {showPlayPause && (
              <div className="flex justify-end gap-2 mb-4">
                <button className="w-14 h-14 bg-white border-2 border-black rounded-full flex items-center justify-center text-2xl hover:bg-gray-100 transition-colors">
                  ▶
                </button>
                <button className="w-14 h-14 bg-white border-2 border-black rounded-full flex items-center justify-center text-2xl hover:bg-gray-100 transition-colors">
                  ⏹
                </button>
              </div>
            )}
          </div>

          {/* Controles inferiores */}
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            {/* Selector de tono */}
            <div className="flex items-center gap-4">
              <label className="font-nunito tracking-readable text-lg whitespace-nowrap">
                SELECCIONAR TONO DE AUDIO
              </label>
              <select
                value={tonoAudio}
                onChange={(e) => setTonoAudio(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-nunito tracking-readable focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="Niño">Niño</option>
                <option value="Niña">Niña</option>
                <option value="Adulto">Adulto</option>
                <option value="Robot">Robot</option>
              </select>
              <button className="w-14 h-14 bg-white border-2 border-black rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-3xl">🎧</span>
              </button>
            </div>

            {/* Categoría */}
            <div className="flex items-center gap-4">
              <label className="font-nunito tracking-readable text-lg whitespace-nowrap">
                CATEGORIA
              </label>
              <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-nunito tracking-readable focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Value</option>
                <option value="realista">Realista</option>
                <option value="fantasia">Fantasía</option>
                <option value="aventura">Aventura</option>
                <option value="educativo">Educativo</option>
              </select>
              <button
                onClick={handleEditar}
                className="px-8 py-3 bg-blue-500 text-white rounded-lg font-nunito tracking-readable hover:bg-blue-600 transition-colors"
              >
                EDITAR
              </button>
            </div>

            {/* Botones de acción */}
            <div className="flex justify-between items-center pt-4">
              <button
                onClick={handleEliminar}
                className="px-8 py-3 bg-red-500 text-white rounded-lg font-nunito tracking-readable hover:bg-red-600 transition-colors"
              >
                ELIMINAR
              </button>

              <button
                onClick={handleCrear}
                className="px-8 py-3 bg-black text-white rounded-lg font-nunito tracking-readable hover:bg-gray-800 transition-colors"
              >
                CREAR
              </button>
            </div>
          </div>
        </div>
      </div>

      <Navigation showBack showHome showFavorites showSearch />
    </div>
  );
}