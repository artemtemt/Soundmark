interface GameButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'neon' | 'danger';
  onClick?: () => void;
  className?: string;
}

export function GameButton({ 
  children, 
  variant = 'primary',
  onClick,
  className = ''
}: GameButtonProps) {
  const baseClasses = "px-6 py-3 border-4 transition-all duration-100 active:translate-x-1 active:translate-y-1 active:shadow-none cursor-pointer uppercase tracking-widest";
  
  const variantClasses = {
    primary: "bg-purple-600 border-purple-800 text-white shadow-[4px_4px_0px_0px_rgba(88,28,135,1)] hover:bg-purple-500",
    secondary: "bg-cyan-500 border-cyan-700 text-white shadow-[4px_4px_0px_0px_rgba(14,116,144,1)] hover:bg-cyan-400",
    neon: "bg-pink-500 border-pink-700 text-white shadow-[4px_4px_0px_0px_rgba(190,24,93,1)] hover:bg-pink-400",
    danger: "bg-red-600 border-red-800 text-white shadow-[4px_4px_0px_0px_rgba(153,27,27,1)] hover:bg-red-500"
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ fontFamily: 'var(--font-pixel)' }}
    >
      {children}
    </button>
  );
}
