interface FeatureBoxProps {
  title: string;
  description: string;
  icon: string;
  color?: 'purple' | 'cyan' | 'pink';
}

export function FeatureBox({ title, description, icon, color = 'purple' }: FeatureBoxProps) {
  const colorClasses = {
    purple: 'bg-purple-600 border-purple-900',
    cyan: 'bg-cyan-600 border-cyan-900',
    pink: 'bg-pink-600 border-pink-900'
  };
  
  return (
    <div className="bg-slate-900 border-4 border-slate-700 p-6 hover:border-white transition-colors">
      <div className={`${colorClasses[color]} border-4 w-16 h-16 flex items-center justify-center mb-4`}>
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="text-white uppercase mb-3" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.9rem', lineHeight: '1.5' }}>
        {title}
      </h3>
      <p className="text-gray-300" style={{ fontFamily: 'var(--font-retro)', fontSize: '1.2rem' }}>
        {description}
      </p>
    </div>
  );
}
