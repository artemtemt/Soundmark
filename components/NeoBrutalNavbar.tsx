import { NeoBrutalButton } from './NeoBrutalButton';

export function NeoBrutalNavbar() {
  return (
    <nav className="border-b-4 border-black bg-green-400 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-amber-600 border-4 border-black"></div>
          <span className="uppercase tracking-wider">My School Project</span>
        </div>
        
        <div className="flex gap-4">
          <NeoBrutalButton variant="primary" size="sm">
            Home
          </NeoBrutalButton>
          <NeoBrutalButton variant="secondary" size="sm">
            About
          </NeoBrutalButton>
          <NeoBrutalButton variant="success" size="sm">
            Contact
          </NeoBrutalButton>
        </div>
      </div>
    </nav>
  );
}
