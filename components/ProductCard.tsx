import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  title: string;
  artist: string;
  type: 'keychain' | 'poster';
  price: number;
  image: string;
  rarity?: 'common' | 'rare' | 'epic' | 'legendary';
}

export function ProductCard({ title, artist, type, price, image, rarity = 'common' }: ProductCardProps) {
  const rarityLabels = {
    common: 'Обычный',
    rare: 'Редкий',
    epic: 'Эпический',
    legendary: 'Легендарный'
  };
  
  const rarityColors = {
    common: 'bg-gray-400',
    rare: 'bg-blue-500',
    epic: 'bg-purple-600',
    legendary: 'bg-yellow-500'
  };
  
  const rarityBorders = {
    common: 'border-gray-600',
    rare: 'border-blue-700',
    epic: 'border-purple-800',
    legendary: 'border-yellow-600'
  };
  
  return (
    <div className={`border-4 ${rarityBorders[rarity]} bg-slate-900 overflow-hidden transition-transform hover:scale-105 hover:-translate-y-1`}>
      {/* Rarity Badge */}
      <div className={`${rarityColors[rarity]} px-3 py-1 border-b-4 ${rarityBorders[rarity]} flex justify-between items-center`}>
        <span className="text-white uppercase tracking-wider" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.6rem' }}>
          {rarityLabels[rarity]}
        </span>
        <span className="text-white" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.6rem' }}>
          {type === 'keychain' ? '🔑' : '🖼️'}
        </span>
      </div>
      
      {/* Product Image */}
      <div className="aspect-square bg-black p-4 border-b-4 border-slate-700">
        <ImageWithFallback 
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="text-white uppercase" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.75rem', lineHeight: '1.4' }}>
          {title}
        </h3>
        <p className="text-gray-400" style={{ fontFamily: 'var(--font-retro)', fontSize: '1.2rem' }}>
          {artist}
        </p>
        <div className="flex justify-between items-center pt-2">
          <span className="text-green-400" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.8rem' }}>
            ${price}
          </span>
          <button className="bg-purple-600 border-2 border-purple-800 text-white px-3 py-1 uppercase hover:bg-purple-500 transition-colors" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.5rem' }}>
            + Корзина
          </button>
        </div>
      </div>
    </div>
  );
}
