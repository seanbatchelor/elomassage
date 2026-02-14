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
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Listen for menu open event from header button
    const handleMenuOpen = () => {
      setShouldRender(true);
      setTimeout(() => setIsOpen(true), 10);
    };
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
    setTimeout(() => setShouldRender(false), 300); // Match transition duration
  };

  if (!shouldRender) return null;

  return (
    <div
      id="fullscreen-menu"
      className={`fixed inset-0 z-[100] bg-cream flex items-center justify-center transition-opacity duration-300 ${
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
            className="flex flex-col items-center text-center group hover:opacity-70 transition-opacity cursor-pointer"
          >
            <h2 className="font-serif text-xl text-sage mb-2">
              {item.title}
            </h2>
            <p className="font-sans text-base text-sage/80 max-w-[20ch] leading-relaxed">
              {item.subtitle}
            </p>
          </a>
        ))}
      </nav>
    </div>
  );
}
