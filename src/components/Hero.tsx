
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionId } from '../types';
import { Play } from 'lucide-react';
import { TRAILER_URL } from '../constants';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const textY = useTransform(scrollY, [0, 600], [0, 150]);

  // Sun movement - moves down slower than text to create depth
  const sunY = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section id={SectionId.HERO} className="relative h-screen w-full overflow-hidden bg-[#050404]">

      {/* The Setting Sun Background */}
      <motion.div
        style={{ y: sunY }}
        className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
      >
        {/* Massive Sun Orb */}
        <div className="w-[120vh] h-[120vh] rounded-full bg-gradient-to-b from-orange-500 via-rust-600 to-transparent blur-[80px] opacity-90 animate-sun-glow mix-blend-screen translate-y-12 md:translate-y-24" />

        {/* Inner Core of Sun */}
        <div className="absolute w-[60vh] h-[60vh] rounded-full bg-orange-400 blur-[40px] opacity-60 animate-pulse" />

        {/* Fog/Horizon at bottom to cut the sun */}
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#050404] via-[#050404]/90 to-transparent z-10" />

        {/* Atmospheric Mist */}
        <div className="absolute bottom-0 w-[200%] h-[60%] bg-gradient-to-t from-rust-900/30 to-transparent blur-3xl animate-fog-flow z-10 opacity-40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: "circOut" }}
          className="flex flex-col items-center w-full max-w-[95vw]"
        >

          {/* Title - Massive & Bold */}
          {/* Using inline style for font-size guarantees browser application, bypassing Tailwind CDN parsing issues */}
          <h1
            className="relative font-serif font-black tracking-tighter leading-[0.9] md:leading-[0.8] select-none z-20 py-4"
            style={{ fontSize: 'clamp(2.5rem, 12vw, 14rem)' }}
          >
            {/* Silhouette/Cutout Effect */}
            <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-black via-rust-950 to-black drop-shadow-[0_2px_10px_rgba(255,100,0,0.3)]">
              DOBROGEA
            </span>

            {/* Overlay Texture for 'Ancient' feel */}
            <span className="absolute inset-0 text-transparent bg-clip-text bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay pointer-events-none">
               DOBROGEA
            </span>
          </h1>

          <div className="h-[2px] w-24 md:w-40 bg-orange-500 my-8 md:my-12 shadow-[0_0_25px_#f97316] animate-pulse" />

          <p className="max-w-3xl text-stone-100 text-sm md:text-2xl leading-relaxed font-semibold tracking-wide drop-shadow-lg px-2">
            The <span className="text-orange-500">raw</span> nature. The <span className="text-orange-500">ancient</span> silence.
            <br className="hidden md:block"/>
            <span className="block md:inline mt-2 md:mt-0">A visual masterpiece of the Dobrogea wilderness.</span>
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-10 md:mt-16">
             <button
              onClick={() => document.getElementById(SectionId.SCREENINGS)?.scrollIntoView({behavior: 'smooth'})}
              className="group relative px-10 py-5 md:px-14 md:py-6 overflow-hidden bg-rust-600 text-white shadow-[0_0_30px_rgba(154,52,18,0.3)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(234,88,12,0.6)] hover:scale-105"
             >
               <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-rust-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out" />
               <span className="relative z-10 text-xs md:text-sm font-black uppercase tracking-[0.2em]">
                 Get Tickets
               </span>
             </button>

             <a
               href={TRAILER_URL}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-white transition-colors duration-300 group"
             >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-stone-600 flex items-center justify-center group-hover:border-orange-500 group-hover:bg-orange-500/20 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                   <Play size={14} className="fill-current ml-1 group-hover:text-orange-500 transition-colors" />
                </div>
                <span className="text-shadow-sm">Watch Trailer</span>
             </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-orange-500/60 font-bold">Scroll</span>
        <div className="h-12 w-[2px] bg-gradient-to-b from-orange-500 to-transparent" />
      </motion.div>
    </section>
  );
};

