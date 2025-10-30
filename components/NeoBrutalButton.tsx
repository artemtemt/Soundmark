interface NeoBrutalButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export function NeoBrutalButton({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  className = ''
}: NeoBrutalButtonProps) {
  const baseClasses = "border-4 border-black transition-all duration-100 active:translate-x-1 active:translate-y-1 active:shadow-none cursor-pointer uppercase tracking-wide";
  
  const variantClasses = {
    primary: "bg-yellow-400 hover:bg-yellow-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
    secondary: "bg-cyan-400 hover:bg-cyan-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
    success: "bg-green-400 hover:bg-green-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
    danger: "bg-red-400 hover:bg-red-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-8 py-4"
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}
