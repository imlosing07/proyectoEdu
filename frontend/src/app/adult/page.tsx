'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    router.push('/adult/stories');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold font-nunito tracking-readable mb-2">LOGO</h1>
          <h2 className="text-4xl font-bold font-nunito tracking-readable">APP</h2>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="Value"
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="Value"
          />

          <button 
            type="button"
            className="text-sm underline mb-6 font-nunito tracking-readable"
          >
            Forgot password?
          </button>

          {isLogin ? (
            <div className="flex gap-4">
              <Button variant="back" onClick={() => router.back()}>
                ←
              </Button>
              <Button variant="forward" type="submit" className="flex-1">
                →
              </Button>
            </div>
          ) : (
            <Button type="submit" className="w-full">
              registrarse
            </Button>
          )}
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 underline font-nunito tracking-readable"
          >
            {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
          </button>
        </div>
      </div>
    </div>
  );
}