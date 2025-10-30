interface NeoBrutalInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
}

export function NeoBrutalInput({ 
  placeholder, 
  value, 
  onChange,
  type = "text",
  className = ''
}: NeoBrutalInputProps) {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border-4 border-black px-4 py-3 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all bg-white ${className}`}
    />
  );
}
