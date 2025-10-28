'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Input from '@/components/ui/Input';
import Navigation from '@/components/layout/Navigation';

export default function CrearCuento() {
  const router = useRouter();
  const [temaCuento, setTemaCuento] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleGenerar = async () => {
    if (!temaCuento || !categoria) {
      alert('Por favor completa todos los campos');
      return;
    }

    // Aquí iría la lógica para generar el cuento con IA
    // Por ahora simulamos la creación y redirigimos a editar
    const newStoryId = Date.now().toString();
    router.push(`/adult/stories/editar/${newStoryId}`);
  };

  return (
    <div className="min-h-screen bg-amber-50 pb-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* Card principal */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold font-nunito tracking-readable text-center mb-8">
              CREAR CUENTO
            </h1>

            <div className="space-y-6">
              {/* Input tema */}
              <div>
                <label className="block mb-2 font-nunito text-xl tracking-readable">
                  TEMA CUENTO
                </label>
                <input
                  type="text"
                  value={temaCuento}
                  onChange={(e) => setTemaCuento(e.target.value)}
                  placeholder="Value"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-nunito text-lg tracking-readable focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Select categoría */}
              <div>
                <label className="block mb-2 font-nunito text-xl tracking-readable">
                  CATEGORIA
                </label>
                <select
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-nunito text-lg tracking-readable focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="">Value</option>
                  <option value="realista">Realista</option>
                  <option value="fantasia">Fantasía</option>
                  <option value="aventura">Aventura</option>
                  <option value="educativo">Educativo</option>
                </select>
              </div>

              {/* Botón generar */}
              <button
                onClick={handleGenerar}
                className="w-full bg-black text-white px-8 py-4 rounded-lg font-nunito tracking-readable text-xl hover:bg-gray-800 transition-colors"
              >
                GENERAR
              </button>
            </div>
          </div>
        </div>
      </div>

      <Navigation showBack showHome showFavorites showSearch />
    </div>
  );
}