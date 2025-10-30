import { GameHeader } from './components/GameHeader';
import { GameButton } from './components/GameButton';
import { ProductCard } from './components/ProductCard';
import { StatsCard } from './components/StatsCard';
import { FeatureBox } from './components/FeatureBox';
import { products } from './data/products';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <GameHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-900 via-slate-900 to-slate-950 border-b-8 border-black py-20 px-4 overflow-hidden">
        {/* Pixel Grid Background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 2px, transparent 2px, transparent 20px), repeating-linear-gradient(90deg, #fff 0px, #fff 2px, transparent 2px, transparent 20px)',
          backgroundSize: '20px 20px'
        }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-black/60 border-8 border-purple-700 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-pink-600 border-4 border-pink-800 px-4 py-2">
                  <span className="text-white uppercase tracking-widest" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.7rem' }}>
                    ⚡ Новинка
                  </span>
                </div>
                <h1 className="text-white uppercase" style={{ fontFamily: 'var(--font-pixel)', fontSize: '2rem', lineHeight: '1.6' }}>
                  Твоя Музыка.<br/>Физическая Форма.
                </h1>
                <p className="text-purple-200" style={{ fontFamily: 'var(--font-retro)', fontSize: '1.3rem' }}>
                  Собирай аксессуары с NFC по мотивам любимых альбомов. Прикоснись, чтобы включить музыку. Выражай свой звук.
                </p>
                <div className="flex flex-wrap gap-4">
                  <GameButton variant="neon">Начать Коллекцию</GameButton>
                  <GameButton variant="secondary">Как Это Работает</GameButton>
                </div>
              </div>
              
              <div className="relative">
                <div className="border-8 border-cyan-500 bg-black/80 p-4">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1585914641050-fa9883c4e21c?w=600"
                    alt="Soundmark Product"
                    className="w-full h-auto"
                  />
                  <div className="mt-4 bg-purple-900 border-4 border-purple-700 p-3 text-center">
                    <p className="text-white uppercase" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.7rem' }}>
                      📱 NFC Технология
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 px-4 bg-slate-900 border-b-8 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-center uppercase mb-10" style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.5rem' }}>
            Статистика
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatsCard label="Коллекционеров" value="10K+" icon="👥" color="purple" />
            <StatsCard label="Товаров" value="500+" icon="🎵" color="cyan" />
            <StatsCard label="Артистов" value="200+" icon="🎨" color="pink" />
            <StatsCard label="Прослушиваний" value="1M+" icon="▶️" color="green" />
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-950 to-purple-950 border-b-8 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-white uppercase" style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.5rem' }}>
              Магазин
            </h2>
            <GameButton variant="primary">Смотреть Все</GameButton>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 px-4 bg-slate-900 border-b-8 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-center uppercase mb-4" style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.5rem' }}>
            Как Это Работает
          </h2>
          <p className="text-center text-purple-300 mb-12" style={{ fontFamily: 'var(--font-retro)', fontSize: '1.3rem' }}>
            3 Простых Шага к Коллекции Звуков
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureBox 
              icon="🛒"
              title="1. Выбери Свой Звук"
              description="Просматривай нашу коллекцию брелоков и постеров с NFC и культовыми обложками альбомов."
              color="purple"
            />
            <FeatureBox 
              icon="📱"
              title="2. Прикоснись для Воспроизведения"
              description="Коснись телефоном аксессуара. Мгновенно запусти трек или плейлист в любом стриминговом сервисе."
              color="cyan"
            />
            <FeatureBox 
              icon="⭐"
              title="3. Собирай и Хвастайся"
              description="Создавай свою коллекцию, получай значки и демонстрируй свою уникальную музыкальную идентичность."
              color="pink"
            />
          </div>
        </div>
      </section>
      
      {/* Why Soundmark */}
      <section className="py-16 px-4 bg-gradient-to-b from-purple-950 to-slate-950 border-b-8 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-center uppercase mb-12" style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.5rem' }}>
            Почему Soundmark?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900 to-purple-700 border-8 border-purple-950 p-8">
              <h3 className="text-white uppercase mb-4" style={{ fontFamily: 'var(--font-pixel)', fontSize: '1rem' }}>
                🎮 Игровой Опыт
              </h3>
              <p className="text-purple-100 mb-4" style={{ fontFamily: 'var(--font-retro)', fontSize: '1.2rem' }}>
                Прокачивай свою коллекцию! Получай опыт, разблокируй редкие предметы и соревнуйся с друзьями. Собирать музыку еще никогда не было так весело.
              </p>
              <div className="bg-black/40 border-4 border-purple-950 p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-400 uppercase" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.6rem' }}>Прогресс</span>
                  <span className="text-white" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.6rem' }}>Уровень 12</span>
                </div>
                <div className="w-full bg-purple-950 border-2 border-purple-800 h-6">
                  <div className="bg-gradient-to-r from-yellow-400 to-pink-500 h-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-900 to-cyan-700 border-8 border-cyan-950 p-8">
              <h3 className="text-white uppercase mb-4" style={{ fontFamily: 'var(--font-pixel)', fontSize: '1rem' }}>
                💎 Система Редкости
              </h3>
              <p className="text-cyan-100 mb-4" style={{ fontFamily: 'var(--font-retro)', fontSize: '1.2rem' }}>
                От Обычных до Легендарных. Лимитированные издания, специальные варианты и эксклюзивные дропы. Охоться за своими сокровищами!
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 bg-black/40 border-2 border-gray-600 p-2">
                  <div className="w-3 h-3 bg-gray-400"></div>
                  <span className="text-white" style={{ fontFamily: 'var(--font-retro)', fontSize: '1.1rem' }}>Обычный - 60%</span>
                </div>
                <div className="flex items-center gap-3 bg-black/40 border-2 border-blue-600 p-2">
                  <div className="w-3 h-3 bg-blue-500"></div>
                  <span className="text-white" style={{ fontFamily: 'var(--font-retro)', fontSize: '1.1rem' }}>Редкий - 25%</span>
                </div>
                <div className="flex items-center gap-3 bg-black/40 border-2 border-purple-600 p-2">
                  <div className="w-3 h-3 bg-purple-600"></div>
                  <span className="text-white" style={{ fontFamily: 'var(--font-retro)', fontSize: '1.1rem' }}>Эпический - 12%</span>
                </div>
                <div className="flex items-center gap-3 bg-black/40 border-2 border-yellow-600 p-2">
                  <div className="w-3 h-3 bg-yellow-500"></div>
                  <span className="text-white" style={{ fontFamily: 'var(--font-retro)', fontSize: '1.1rem' }}>Легендарный - 3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-900 via-purple-900 to-cyan-900 border-b-8 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black/60 border-8 border-white p-8 md:p-12">
            <h2 className="text-white uppercase mb-6" style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.8rem', lineHeight: '1.6' }}>
              Готов Начать?
            </h2>
            <p className="text-purple-200 mb-8" style={{ fontFamily: 'var(--font-retro)', fontSize: '1.4rem' }}>
              Присоединяйся к 10,000+ коллекционеров, возвращающих музыку к жизни
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <GameButton variant="neon">Создать Аккаунт</GameButton>
              <GameButton variant="secondary">Открыть Магазин</GameButton>
            </div>
            
            <div className="mt-8 pt-8 border-t-4 border-purple-700">
              <p className="text-purple-300 uppercase" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.7rem' }}>
                🎁 Бонус для Новых: 100 Кредитов
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black border-t-8 border-purple-700 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white uppercase mb-4" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.9rem' }}>
                Soundmark
              </h3>
              <p className="text-gray-400" style={{ fontFamily: 'var(--font-retro)', fontSize: '1.1rem' }}>
                Физические музыкальные аксессуары для цифровой эры. Работает на NFC технологии.
              </p>
            </div>
            <div>
              <h4 className="text-white uppercase mb-4" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.7rem' }}>
                Быстрые Ссылки
              </h4>
              <ul className="space-y-2 text-gray-400" style={{ fontFamily: 'var(--font-retro)', fontSize: '1.1rem' }}>
                <li>Магазин</li>
                <li>О Нас</li>
                <li>Как Это Работает</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white uppercase mb-4" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.7rem' }}>
                Связаться
              </h4>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-600 border-4 border-purple-800 flex items-center justify-center hover:bg-purple-500 cursor-pointer">
                  <span>📸</span>
                </div>
                <div className="w-12 h-12 bg-cyan-600 border-4 border-cyan-800 flex items-center justify-center hover:bg-cyan-500 cursor-pointer">
                  <span>🐦</span>
                </div>
                <div className="w-12 h-12 bg-pink-600 border-4 border-pink-800 flex items-center justify-center hover:bg-pink-500 cursor-pointer">
                  <span>📱</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t-4 border-purple-900 pt-6 text-center">
            <p className="text-gray-500 uppercase" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.6rem' }}>
              © 2025 Soundmark - Все Права Защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
