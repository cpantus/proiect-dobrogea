
import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 py-20 border-t border-stone-900 text-stone-500 text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-rust-900 to-transparent" />

      <div className="max-w-screen-lg mx-auto px-6">
        <div className="flex justify-center mb-12">
           <span className="text-2xl font-serif font-black text-stone-400 tracking-tighter hover:text-orange-500 transition-colors">
              mircea bezergheanu
           </span>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          <a href="#" className="hover:text-rust-500 transition-colors transform hover:scale-110 duration-300"><Facebook strokeWidth={1.5} /></a>
          <a href="#" className="hover:text-rust-500 transition-colors transform hover:scale-110 duration-300"><Instagram strokeWidth={1.5} /></a>
          <a href="#" className="hover:text-rust-500 transition-colors transform hover:scale-110 duration-300"><Mail strokeWidth={1.5} /></a>
        </div>

        <div className="text-xs uppercase tracking-widest space-y-2 font-mono text-stone-600">
           <p>© 2024 Mircea Bezergheanu. All rights reserved.</p>
           <p>Preserving the Wild Heart of Nature</p>
        </div>
      </div>
    </footer>
  );
};

