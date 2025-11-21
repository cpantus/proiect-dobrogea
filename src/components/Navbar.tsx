import { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const links = [
    { label: 'The Film', id: SectionId.ABOUT },
    { label: 'Screenings', id: SectionId.SCREENINGS },
    { label: 'Gallery', id: SectionId.GALLERY },
    { label: 'Shop', id: SectionId.SHOP },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 border-b border-white/0 ${
          isScrolled ? 'bg-stone-950/90 backdrop-blur-md border-stone-800/50 py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <button
            onClick={() => scrollTo(SectionId.HERO)}
            className="transition-opacity duration-300 hover:opacity-80"
          >
            <span className="text-xl md:text-2xl font-serif font-black text-stone-100 tracking-tighter hover:text-orange-500 transition-colors">
              mircea bezergheanu
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-rust-500 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-rust-600 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => scrollTo(SectionId.DOWNLOAD)}
              className="px-6 py-2 bg-stone-100 text-stone-950 text-xs font-bold uppercase tracking-widest hover:bg-rust-600 hover:text-white transition-all duration-300"
            >
              Watch Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-stone-100 hover:text-rust-500 transition-colors"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-stone-950 flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-8 right-6 text-stone-400 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center space-y-8">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-3xl font-serif text-stone-300 hover:text-rust-600 transition-colors"
                >
                  {link.label}
                </button>
              ))}
               <button
                  onClick={() => scrollTo(SectionId.DOWNLOAD)}
                  className="mt-8 px-8 py-4 bg-rust-600 text-stone-100 text-sm font-bold uppercase tracking-widest"
                >
                  Watch Online
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
