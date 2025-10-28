'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PictogramItem {
  text: string;
  image?: string;
}

interface PictogramEditorProps {
  content: PictogramItem[];
  onChange: (content: PictogramItem[]) => void;
}

export default function PictogramEditor({ content, onChange }: PictogramEditorProps) {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState('');
  const [editImage, setEditImage] = useState('');

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditText(content[index].text);
    setEditImage(content[index].image || '');
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      const newContent = [...content];
      newContent[editingIndex] = {
        text: editText,
        image: editImage || undefined,
      };
      onChange(newContent);
      setEditingIndex(null);
      setEditText('');
      setEditImage('');
    }
  };

  const handleAdd = () => {
    onChange([...content, { text: 'nuevo', image: undefined }]);
  };

  const handleDelete = (index: number) => {
    const newContent = content.filter((_, i) => i !== index);
    onChange(newContent);
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-300">
        <div className="flex flex-wrap gap-2">
          {content.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-300 hover:border-blue-500 cursor-pointer group"
              onClick={() => handleEdit(index)}
            >
              <span className="font-poppins text-lg tracking-readable">
                {item.text}
              </span>
              {item.image && (
                <div className="relative w-8 h-8">
                  <Image
                    src={item.image}
                    alt={item.text}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(index);
                }}
                className="opacity-0 group-hover:opacity-100 text-red-500 font-bold ml-1"
              >
                ×
              </button>
            </div>
          ))}
          
          <button
            onClick={handleAdd}
            className="inline-flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-lg hover:bg-green-600 font-bold text-2xl"
          >
            +
          </button>
        </div>
      </div>

      {/* Editor modal */}
      {editingIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
            <h3 className="text-2xl font-bold font-nunito tracking-readable mb-4">
              Editar elemento
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-nunito tracking-readable">
                  Texto
                </label>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-nunito tracking-readable">
                  URL de imagen (opcional)
                </label>
                <input
                  type="text"
                  value={editImage}
                  onChange={(e) => setEditImage(e.target.value)}
                  placeholder="/pictograms/example.png"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setEditingIndex(null)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}