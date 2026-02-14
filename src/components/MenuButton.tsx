import { Menu } from 'lucide-react';

export default function MenuButton() {
  return (
    <button 
      id="menu-button"
      className="w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
      aria-label="Open menu"
    >
      <Menu className="w-6 h-6 text-sage" strokeWidth={1.5} />
    </button>
  );
}
