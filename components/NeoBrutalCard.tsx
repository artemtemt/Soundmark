interface NeoBrutalCardProps {
  children: React.ReactNode;
  color?: 'yellow' | 'cyan' | 'green' | 'purple' | 'pink' | 'white';
  className?: string;
}

export function NeoBrutalCard({ 
  children, 
  color = 'white',
  className = ''
}: NeoBrutalCardProps) {
  const colorClasses = {
    yellow: "bg-yellow-200",
    cyan: "bg-cyan-200",
    green: "bg-green-200",
    purple: "bg-purple-200",
    pink: "bg-pink-200",
    white: "bg-white"
  };
  
  return (
    <div className={`border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 ${colorClasses[color]} ${className}`}>
      {children}
    </div>
  );
}
