import { NeoBrutalButton } from './NeoBrutalButton';
import { NeoBrutalCard } from './NeoBrutalCard';

export function NeoBrutalHero() {
  return (
    <div className="bg-cyan-300 border-b-4 border-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <NeoBrutalCard color="white">
          <div className="space-y-6">
            <h1 className="uppercase tracking-wider">
              Welcome to My Business Project
            </h1>
            <p>
              This is a neobrutalism-style website with a Minecraft-inspired aesthetic. 
              Perfect for standing out with bold, blocky designs!
            </p>
            <div className="flex gap-4 flex-wrap">
              <NeoBrutalButton variant="primary" size="lg">
                Get Started
              </NeoBrutalButton>
              <NeoBrutalButton variant="secondary" size="lg">
                Learn More
              </NeoBrutalButton>
            </div>
          </div>
        </NeoBrutalCard>
      </div>
    </div>
  );
}
