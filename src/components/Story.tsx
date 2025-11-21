import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';

export const Story: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="relative py-32 md:py-48 bg-[#050404] overflow-hidden">

      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Big Image - Bolder & Eye Candy */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-rust-600 to-orange-600 rounded-lg opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="relative z-10 overflow-hidden"
            >
               <img
                  src="https://imgur.com/RPHn40X.png"
                  alt="Dobrogea Landscape"
                  className="w-full aspect-[4/3] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 shadow-2xl brightness-110 contrast-125"
               />

               {/* Bold Overlay Text */}
               <div className="absolute top-6 right-6 text-white/10 font-black text-9xl leading-none select-none pointer-events-none">
                 01
               </div>
            </motion.div>
          </div>

          {/* Text Content - Higher Contrast */}
          <div className="relative z-20">
             <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.2 }}
             >
                <span className="text-orange-500 font-black text-sm uppercase tracking-[0.4em] mb-8 block">The Synopsis</span>

                <h3 className="text-6xl md:text-8xl font-serif text-white mb-10 leading-[0.85] font-black tracking-tight">
                  LAND OF <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rust-600">ANCIENTS</span>
                </h3>

                <div className="space-y-8 text-stone-300 font-medium leading-relaxed text-xl md:text-2xl border-l-4 border-rust-800 pl-8">
                  <p>
                    <span className="text-white font-bold">Dobrogea</span> is a living memory of the earth.
                    For five years, Mircea Bezergheanu hunted the light in this prehistoric landscape.
                  </p>
                  <p className="text-stone-400 text-lg">
                    From the Macin Mountains to the mist-covered wetlands, this film captures a world that breathes in silence. No narration. Just the wind, the storm, and the wild.
                  </p>
                </div>

                <div className="mt-16 grid grid-cols-3 gap-8">
                   <div>
                      <p className="text-4xl md:text-5xl font-serif text-white font-bold">5</p>
                      <p className="text-xs uppercase tracking-widest text-rust-500 font-bold mt-2">Years Filming</p>
                   </div>
                   <div>
                      <p className="text-4xl md:text-5xl font-serif text-white font-bold">8K</p>
                      <p className="text-xs uppercase tracking-widest text-rust-500 font-bold mt-2">Raw Footage</p>
                   </div>
                   <div>
                      <p className="text-4xl md:text-5xl font-serif text-white font-bold">100%</p>
                      <p className="text-xs uppercase tracking-widest text-rust-500 font-bold mt-2">Wild Nature</p>
                   </div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
