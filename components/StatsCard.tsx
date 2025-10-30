interface StatsCardProps {
  label: string;
  value: string | number;
  icon: string;
  color?: 'purple' | 'cyan' | 'pink' | 'green';
}

export function StatsCard({ label, value, icon, color = 'purple' }: StatsCardProps) {
  const colorClasses = {
    purple: 'bg-purple-600 border-purple-800',
    cyan: 'bg-cyan-600 border-cyan-800',
    pink: 'bg-pink-600 border-pink-800',
    green: 'bg-green-600 border-green-800'
  };
  
  return (
    <div className={`${colorClasses[color]} border-4 p-6 text-center space-y-2`}>
      <div className="text-4xl">{icon}</div>
      <div className="text-white uppercase tracking-widest" style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.5rem' }}>
        {value}
      </div>
      <div className="text-white/80 uppercase" style={{ fontFamily: 'var(--font-retro)', fontSize: '1.2rem' }}>
        {label}
      </div>
    </div>
  );
}
