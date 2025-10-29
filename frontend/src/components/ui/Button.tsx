interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'back' | 'forward' | 'nada';
  type?: 'button' | 'submit';
  className?: string;
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'nada',
  type = 'button',
  className = ''
}: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-full font-nunito text-2xl tracking-readable transition-all';
  
  const variants = {
    primary: 'bg-green-500 hover:bg-green-600 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-black',
    back: 'bg-yellow-400 hover:bg-yellow-500 w-16 h-16 flex items-center justify-center',
    forward: 'bg-green-500 hover:bg-green-600 w-16 h-16 flex items-center justify-center',
    nada: '',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}