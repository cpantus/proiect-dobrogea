
import React from 'react';
import { SectionId } from '../types';
import { PRODUCTS, TRAILER_URL } from '../constants';
import { ShoppingBag, Download, ArrowRight, Play } from 'lucide-react';

export const Shop: React.FC = () => {
  const SHOP_URL = 'https://www.rbsservice.ro/proiectdobrogea';

  return (
    <section id={SectionId.SHOP} className="py-32 bg-[#0c0a09] text-stone-100 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-rust-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-stone-800 pb-12">
          <div>
             <span className="text-orange-500 font-bold text-sm uppercase tracking-[0.4em] mb-6 block">The Store</span>
             <h3 className="text-4xl sm:text-6xl md:text-8xl font-serif font-black text-white tracking-tight leading-none">
               MERCH<span className="text-rust-600">ANDISE</span>
             </h3>
          </div>
          <div className="mt-8 md:mt-0">
             <a
               href={SHOP_URL}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-3 text-white hover:text-orange-500 transition-colors text-sm uppercase tracking-widest font-bold group border px-6 py-3 border-stone-700 hover:border-orange-500"
             >
               View Full Catalog <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
             </a>
          </div>
        </div>

        {/* Physical Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-48">
          {PRODUCTS.map((product) => (
            <a
              key={product.id}
              href={product.link || SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer relative flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-8 bg-stone-900 border border-stone-800 shadow-2xl">

                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out brightness-90 group-hover:brightness-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Quick Add Button */}
                <div className="absolute bottom-6 right-6 w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center text-white translate-y-24 group-hover:translate-y-0 transition-transform duration-500 ease-out shadow-[0_0_20px_rgba(234,88,12,0.5)] hover:bg-orange-500 z-20">
                   <ShoppingBag size={20} />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-auto">
                <h4 className="text-2xl font-serif font-bold text-white group-hover:text-orange-500 transition-colors leading-none">{product.name}</h4>
                <div className="flex justify-between items-center border-t border-stone-800 pt-4 mt-2">
                  <p className="text-stone-400 text-sm max-w-[70%] line-clamp-1">{product.description}</p>
                  <span className="font-mono text-white font-bold text-xl">€{product.price}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Digital Download Feature - Masked Layout Solution */}
        <div id={SectionId.DOWNLOAD} className="relative w-full bg-stone-950 border-y border-stone-800 group overflow-hidden shadow-2xl">

           {/* 1. Desktop: Masked Video Background (Right Aligned) */}
           {/* This creates a fade-out effect from Right to Left, leaving the left side purely black for text */}
           <div className="hidden lg:block absolute top-0 right-0 w-[75%] h-full z-0">
              <div className="relative w-full h-full">
                  <img
                    src="https://imgur.com/lUvcdIY.png"
                    alt="Preview"
                    className="w-full h-full object-cover opacity-70"
                  />
                  {/* The Gradient Mask: Safe Area Generator */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to right, #0c0a09 15%, transparent 50%, transparent 100%)',
                    }}
                  />
                  {/* Vignette for cinematic feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-[#0c0a09] opacity-60" />
              </div>
           </div>

           {/* 2. Mobile: Vertical Stack - Image Top */}
           <div className="lg:hidden relative w-full aspect-video group/mobile-video">
                <img
                    src="https://imgur.com/lUvcdIY.png"
                    alt="Preview"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <a
                       href={TRAILER_URL}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="w-16 h-16 bg-orange-600/90 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                    >
                        <Play size={24} className="fill-white text-white ml-1" />
                    </a>
                </div>
                <div className="absolute bottom-3 left-3 bg-black/80 px-2 py-0.5 text-[10px] font-mono text-rust-400 border border-rust-900">
                  RAW FORMAT
                </div>
           </div>

           {/* 3. Content Container */}
           <div className="relative z-10 w-full h-full flex flex-col lg:flex-row">

             {/* Left Text Content - Padded and Safe */}
             <div className="w-full lg:w-[55%] px-6 py-12 lg:p-24 flex flex-col justify-center items-start">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-rust-600/10 border border-rust-500/30 text-rust-400 mb-6 md:mb-10 backdrop-blur-sm rounded-sm">
                  <Download size={16} />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Available Now</span>
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-black mb-8 text-white leading-[0.9] drop-shadow-xl">
                  DIGITAL <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rust-600">
                    MASTERPIECE
                  </span>
                </h2>

                <p className="text-stone-400 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-lg drop-shadow-md">
                  Experience the storm in 4K HDR. Feel every thunderclap with Dolby Atmos. The definitive director's cut.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a
                    href={SHOP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-4 bg-orange-600 text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors shadow-[0_0_30px_rgba(234,88,12,0.2)] text-center"
                  >
                    Buy 4K • €25
                  </a>
                  <a
                    href={SHOP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-4 border-2 border-stone-700 text-stone-300 font-bold uppercase tracking-widest hover:border-orange-500 hover:text-orange-500 transition-colors text-center"
                  >
                    Rent HD • €5
                  </a>
                </div>
             </div>

             {/* Right Play Button Area (Desktop Only) */}
             <div className="hidden lg:flex flex-1 items-center justify-center h-full min-h-[600px]">
                <a
                   href={TRAILER_URL}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group/play relative w-28 h-28 flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full animate-pulse" />
                    <div className="absolute inset-0 border border-white/30 rounded-full group-hover/play:scale-125 transition-transform duration-500 opacity-50" />
                    <div className="w-20 h-20 bg-stone-950/80 border border-orange-500/50 rounded-full flex items-center justify-center shadow-2xl group-hover/play:bg-orange-600 group-hover/play:border-orange-600 transition-colors duration-300">
                      <Play size={32} className="fill-white text-white ml-2" />
                    </div>
                </a>
             </div>

           </div>
        </div>

      </div>
    </section>
  );
};

