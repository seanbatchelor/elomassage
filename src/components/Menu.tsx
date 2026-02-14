import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const menuItems = [
  {
    title: 'Home',
    subtitle: 'Overview therapeutic approach & treatments',
    href: '/',
  },
  {
    title: 'Book',
    subtitle: 'Pricing, appointment information & how to book',
    href: '/book',
  },
  {
    title: 'About',
    subtitle: 'Therapist profile, location and Contact details',
    href: '/about',
  },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Listen for menu open event from header button
    const handleMenuOpen = () => setIsOpen(true);
    const menuButton = document.getElementById('menu-button');
    
    if (menuButton) {
      menuButton.addEventListener('click', handleMenuOpen);
      return () => menuButton.removeEventListener('click', handleMenuOpen);
    }
  }, []);

  useEffect(() => {
    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      id="fullscreen-menu"
      className={`fixed inset-0 z-50 bg-cream flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      {/* Close button */}
      <button
        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
        onClick={handleClose}
        aria-label="Close menu"
      >
        <X className="w-6 h-6 text-sage" strokeWidth={1.5} />
      </button>

      {/* Menu items */}
      <nav
        className="flex flex-col items-center justify-center gap-12 md:gap-16"
        onClick={(e) => e.stopPropagation()}
      >
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex flex-col items-center text-center group"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-sage mb-2 group-hover:opacity-70 transition-opacity">
              {item.title}
            </h2>
            <p className="font-sans text-sm md:text-base text-sage/70 max-w-xs">
              {item.subtitle}
            </p>
          </a>
        ))}
      </nav>
    </div>
  );
}
