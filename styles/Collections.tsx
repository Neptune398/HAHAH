import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Collections() {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Scanlines Effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, lime 2px, lime 4px)',
        }}
      />

      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-7xl md:text-8xl font-black uppercase tracking-tighter mb-4">
            COLLECTIONS
          </h2>
          <p className="text-zinc-500 uppercase tracking-widest text-sm">Curated by the Streets</p>
        </motion.div>

        {/* Large Featured Collection */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-6 group cursor-pointer"
        >
          <div className="relative h-[600px] border-4 border-white overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1510832198440-a52376950479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwY2xvdGhpbmclMjBncmFmZml0aXxlbnwxfHx8fDE3NjA1NTY0NDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Main Collection"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-start justify-end p-12">
              <motion.div
                className="mb-4 px-4 py-2 bg-lime-400 text-black border-2 border-black"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xs font-black tracking-widest uppercase">Featured</span>
              </motion.div>
              <h3 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-4" 
                style={{ WebkitTextStroke: '2px white', WebkitTextFillColor: 'transparent' }}>
                ARCHIVE
              </h3>
              <p className="text-xl mb-6 max-w-lg">Classic pieces that defined the culture. Timeless streetwear essentials.</p>
              <button className="px-8 py-4 border-2 border-white font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all">
                EXPLORE ARCHIVE →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Two Column Collections */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            <div className="relative h-[400px] border-4 border-lime-400 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1535231540604-72e8fbaf8cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldCUyMGtpZHN8ZW58MXx8fHwxNzYwNTU2NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Summer Collection"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              
              <div className="absolute inset-0 flex flex-col items-start justify-end p-8">
                <div className="mb-3 px-3 py-1 bg-black border-2 border-lime-400">
                  <span className="text-xs font-black tracking-widest text-lime-400 uppercase">New Season</span>
                </div>
                <h3 className="text-5xl font-black uppercase tracking-tighter mb-2">SUMMER '25</h3>
                <button className="mt-4 px-6 py-3 bg-lime-400 text-black font-black uppercase text-sm hover:bg-white transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            <div className="relative h-[400px] border-4 border-white overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGZhc2hpb24lMjBraWRzfGVufDF8fHx8MTc2MDU1NjQ1NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Premium Collection"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              
              <div className="absolute inset-0 flex flex-col items-start justify-end p-8">
                <div className="mb-3 px-3 py-1 bg-white text-black border-2 border-black">
                  <span className="text-xs font-black tracking-widest uppercase">Limited</span>
                </div>
                <h3 className="text-5xl font-black uppercase tracking-tighter mb-2">PREMIUM</h3>
                <button className="mt-4 px-6 py-3 border-2 border-white font-black uppercase text-sm hover:bg-white hover:text-black transition-all">
                  VIEW MORE
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
