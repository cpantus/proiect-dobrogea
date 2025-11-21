import React from 'react';
import { SectionId } from '../types';
import { SCREENINGS } from '../constants';
import { Ticket, ExternalLink } from 'lucide-react';

export const Screenings: React.FC = () => {
  return (
    <section id={SectionId.SCREENINGS} className="py-32 bg-stone-900 relative overflow-hidden">
       {/* Background texture */}
       <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#b95c50_1px,transparent_1px)] [background-size:20px_20px]" />
       <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-transparent to-stone-950" />

       <div className="max-w-screen-lg mx-auto px-6 relative z-10">
         <div className="text-center mb-20">
            <span className="text-rust-500 font-bold text-xs uppercase tracking-[0.3em] block mb-4">The Tour</span>
            <h3 className="text-4xl md:text-6xl font-serif text-stone-100">Upcoming Screenings</h3>
         </div>

         <div className="divide-y divide-stone-800 border-t border-b border-stone-800">
           {SCREENINGS.map((screening) => (
             <div
                key={screening.id}
                className="group flex flex-col md:flex-row items-start md:items-center justify-between py-8 px-4 hover:bg-stone-800/50 transition-colors duration-300"
             >
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="flex items-baseline gap-4">
                    <h4 className="text-2xl font-serif text-stone-200 group-hover:text-rust-400 transition-colors">
                      {screening.city}
                    </h4>
                    <span className="text-stone-500 text-sm font-mono">{screening.date} • {screening.time}</span>
                  </div>
                  <p className="text-stone-400 mt-2 text-sm uppercase tracking-wide font-bold">{screening.venue}</p>
                </div>

                <a
                  href={screening.ticketLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-3 bg-stone-800 text-stone-300 hover:bg-rust-600 hover:text-stone-100 transition-all duration-300 text-xs font-bold uppercase tracking-widest"
                >
                  <Ticket size={16} />
                  <span>Buy Ticket</span>
                  <ExternalLink size={14} className="ml-1 opacity-50" />
                </a>
             </div>
           ))}
         </div>

         <div className="mt-16 text-center">
           <p className="text-stone-500 text-sm">
             Tickets processed securely via <span className="text-stone-300 border-b border-stone-600 hover:text-rust-500 transition-colors">iabilet.ro</span>
           </p>
         </div>
       </div>
    </section>
  );
};
