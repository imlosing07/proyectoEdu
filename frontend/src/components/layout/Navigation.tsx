'use client';

import { useRouter } from 'next/navigation';

interface NavigationProps {
  showBack?: boolean;
  showHome?: boolean;
  showFavorites?: boolean;
  showSearch?: boolean;
}

export default function Navigation({ 
  showBack = false,
  showHome = true,
  showFavorites = false,
  showSearch = false 
}: NavigationProps) {
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {showBack && (
          <button 
            onClick={() => router.back()}
            className="w-12 h-12 flex items-center justify-center text-3xl"
          >
            ⏮
          </button>
        )}
        
        {showHome && (
          <button 
            onClick={() => router.push('/student/categories')}
            className="w-12 h-12 flex items-center justify-center text-3xl"
          >
            🏠
          </button>
        )}
        
        {showFavorites && (
          <button className="w-12 h-12 flex items-center justify-center text-3xl">
            ❤️
          </button>
        )}
        
        {showSearch && (
          <button className="w-12 h-12 flex items-center justify-center text-3xl">
            🔍
          </button>
        )}
      </div>
    </nav>
  );
}