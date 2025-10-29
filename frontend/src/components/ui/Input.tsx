interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  className?: string;
}

export default function Input({ 
  label = '', 
  value, 
  onChange, 
  type = 'text',
  placeholder = 'Value',
  className = 'w-full px-4 py-3 border border-gray-300 rounded-lg font-nunito text-lg tracking-readable focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white'
}: InputProps) {
  return (
    <div className="flex justify-center">
      <label className="text-white font-bold block mb-2 font-nunito text-xl tracking-readable">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
}