import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionId } from '../types';

const images = [
  {
    src: 'https://imgur.com/lUvcdIY.png',
    title: 'The Tempest',
    desc: 'Summer Storms',
    color: 'from-indigo-950'
  },
  {
    src: 'https://imgur.com/QzM3fLb.png',
    title: 'The Spirit',
    desc: 'Rural Life',
    color: 'from-orange-950'
  },
  {
    src: 'https://imgur.com/uvy17Fk.png',
    title: 'The Detail',
    desc: 'Micro Life',
    color: 'from-emerald-950'
  },
  {
    src: 'https://imgur.com/CR94Sax.png',
    title: 'The Giants',
    desc: 'Macin Mountains',
    color: 'from-slate-950'
  },
];

export const Gallery = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section id={SectionId.GALLERY} className="bg-[#050404]">
      {/* Desktop View - Horizontal Scroll */}
      <div ref={targetRef} className="hidden md:block relative h-[400vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-0 px-0 h-full">

            {/* Intro Card */}
            <div className="flex-shrink-0 w-[50vw] h-screen flex flex-col justify-center px-24 relative z-10 bg-[#050404] border-r border-stone-900">
                <div className="relative z-10">
                  <span className="text-orange-500 font-black text-sm uppercase tracking-[0.6em] mb-8 block">Visual Anthology</span>
                  <h3 className="text-9xl font-serif text-white leading-[0.8] mb-12 tracking-tighter font-black">
                    RAW <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-600 to-stone-800">NATURE</span>
                  </h3>
                  <p className="text-stone-400 text-xl leading-relaxed font-light max-w-md">
                    Moments frozen in time. The violent storms, the silent snows, and the golden light of Dobrogea.
                  </p>
                </div>
            </div>

            {images.map((item, i) => (
              <div key={i} className="relative flex-shrink-0 w-[80vw] h-screen overflow-hidden group border-r border-stone-900/50">
                  <div className="absolute inset-0 w-full h-full overflow-hidden bg-stone-900">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110 brightness-[0.9] group-hover:brightness-110 contrast-125"
                      />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} via-transparent to-transparent opacity-60 mix-blend-hard-light transition-opacity duration-700 group-hover:opacity-40`} />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

                  <div className="absolute inset-0 flex flex-col justify-center items-center z-20 p-12 pointer-events-none">
                    <h4 className="text-9xl font-serif font-black text-white text-center leading-none drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                      {item.title}
                    </h4>
                    <div className="h-2 w-40 bg-orange-500 my-8" />
                    <p className="text-stone-200 font-sans text-2xl uppercase tracking-[0.2em] font-bold text-shadow-lg text-center">
                      {item.desc}
                    </p>
                  </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile View - Vertical Stack */}
      <div className="md:hidden flex flex-col w-full">
         {/* Mobile Intro */}
         <div className="px-6 py-24 border-b border-stone-900 bg-[#050404]">
            <span className="text-orange-500 font-black text-xs uppercase tracking-[0.4em] mb-6 block">Visual Anthology</span>
            <h3 className="text-6xl font-serif text-white leading-[0.85] mb-8 tracking-tighter font-black">
              RAW <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-600 to-stone-800">NATURE</span>
            </h3>
            <p className="text-stone-400 text-lg leading-relaxed font-light">
              Moments frozen in time. The violent storms, the silent snows, and the golden light of Dobrogea.
            </p>
         </div>

         {/* Mobile Cards */}
         {images.map((item, i) => (
            <div key={i} className="relative w-full h-[70vh] overflow-hidden border-b border-stone-900/50">
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover brightness-90"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} via-transparent to-transparent opacity-70 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-black/20" />

                {/* Mobile Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 pb-16 z-20">
                   <h4 className="text-5xl font-serif font-black text-white leading-none mb-4 drop-shadow-lg">
                     {item.title}
                   </h4>
                   <div className="flex items-center gap-4">
                      <div className="h-[1px] w-12 bg-orange-500" />
                      <p className="text-stone-200 font-sans text-sm uppercase tracking-[0.2em] font-bold text-shadow">
                        {item.desc}
                      </p>
                   </div>
                </div>
            </div>
         ))}
      </div>
    </section>
  );
};
