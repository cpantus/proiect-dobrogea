
import React from 'react';
import { SectionId } from '../types';
import { PRODUCTS } from '../constants';
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
             <h3 className="text-6xl md:text-8xl font-serif font-black text-white tracking-tight leading-none">
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

        {/* Digital Download Feature */}
        <div id={SectionId.DOWNLOAD} className="relative overflow-hidden rounded-none bg-stone-900 border-y border-stone-800 group h-[80vh] flex items-center">
           {/* Hero Image Background */}
           <div className="absolute inset-0 bg-[url('https://imgur.com/rLembA0.png')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-[3s] grayscale-[20%] group-hover:grayscale-0" />
           <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09] via-[#0c0a09]/90 to-transparent" />

           <div className="relative z-10 w-full px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div>
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-rust-600/20 border border-rust-500/50 text-rust-400 mb-10 backdrop-blur-md">
                  <Download size={16} />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Available Now</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-serif font-black mb-8 text-white leading-[0.9]">
                  DIGITAL <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rust-600">MASTERPIECE</span>
                </h2>
                <p className="text-stone-300 text-xl font-light leading-relaxed mb-12 drop-shadow-lg max-w-lg">
                  Experience the storm in 4K HDR. Feel every thunderclap with Dolby Atmos. The definitive director's cut.
                </p>
                <div className="flex flex-wrap gap-6">
                  <a
                    href={SHOP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-12 py-5 bg-orange-600 text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors shadow-[0_0_30px_rgba(234,88,12,0.4)] inline-block text-center"
                  >
                    Buy 4K Copy • €25
                  </a>
                  <a
                    href={SHOP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-12 py-5 border-2 border-stone-600 text-stone-300 font-bold uppercase tracking-widest hover:border-orange-500 hover:text-orange-500 transition-colors backdrop-blur-sm inline-block text-center"
                  >
                    Rent HD • €5
                  </a>
                </div>
             </div>

             {/* Video Preview Mockup */}
             <div className="relative aspect-video bg-black shadow-2xl border border-stone-800 group-hover:shadow-[0_0_50px_rgba(154,52,18,0.3)] transition-all duration-700 transform group-hover:-rotate-1">
                 <img src="https://imgur.com/lUvcdIY.png" alt="Preview" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer group/play">
                       <Play size={32} className="fill-white text-white ml-2" />
                    </div>
                 </div>
                 <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 text-xs font-mono text-rust-400 border border-rust-900">
                    RAW FORMAT
                 </div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

