import { GameButton } from './GameButton';

export function GameHeader() {
  return (
    <header className="bg-gradient-to-r from-purple-900 via-purple-700 to-pink-700 border-b-8 border-black p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-black border-4 border-white flex items-center justify-center">
              <span className="text-3xl">🎵</span>
            </div>
            <div>
              <h1 className="text-white uppercase tracking-widest" style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.5rem' }}>
                Soundmark
              </h1>
              <p className="text-purple-200" style={{ fontFamily: 'var(--font-retro)', fontSize: '1.1rem' }}>
                Собирай Свой Звук
              </p>
            </div>
          </div>
          
          {/* Nav Buttons */}
          <div className="flex flex-wrap gap-3">
            <GameButton variant="primary">Магазин</GameButton>
            <GameButton variant="secondary">Коллекция</GameButton>
            <GameButton variant="neon">Профиль</GameButton>
          </div>
        </div>
        
        {/* Player Stats Bar */}
        <div className="mt-4 bg-black/40 border-4 border-purple-900 p-3 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-yellow-400 uppercase" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.7rem' }}>
              Уровень
            </div>
            <div className="text-white" style={{ fontFamily: 'var(--font-pixel)', fontSize: '1rem' }}>
              12
            </div>
          </div>
          <div className="text-center">
            <div className="text-cyan-400 uppercase" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.7rem' }}>
              Коллекция
            </div>
            <div className="text-white" style={{ fontFamily: 'var(--font-pixel)', fontSize: '1rem' }}>
              47
            </div>
          </div>
          <div className="text-center">
            <div className="text-pink-400 uppercase" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.7rem' }}>
              Кредиты
            </div>
            <div className="text-white" style={{ fontFamily: 'var(--font-pixel)', fontSize: '1rem' }}>
              $250
            </div>
          </div>
          <div className="text-center">
            <div className="text-green-400 uppercase" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.7rem' }}>
              Стрик
            </div>
            <div className="text-white" style={{ fontFamily: 'var(--font-pixel)', fontSize: '1rem' }}>
              7 Дней
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
