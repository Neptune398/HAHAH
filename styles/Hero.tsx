import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNpdHklMjBuaWdodHxlbnwxfHx8fDE3NjA1NTY0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Urban Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `linear-gradient(rgba(163, 230, 53, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(163, 230, 53, 0.3) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 border-2 border-lime-400 px-4 py-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-lime-400 animate-pulse" />
              <span className="text-lime-400 text-xs tracking-widest font-black uppercase">LIMITED DROP</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tighter">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  NEXT
                </motion.div>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-lime-400"
                  style={{ WebkitTextStroke: '2px currentColor', WebkitTextFillColor: 'transparent' }}
                >
                  GEN
                </motion.div>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  DRIP
                </motion.div>
              </h1>
            </div>

            <p className="text-lg text-zinc-400 max-w-lg uppercase tracking-wide">
              Premium streetwear for the yutes. Limited drops. No restock. First come, first served.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-5 bg-lime-400 text-black font-black uppercase tracking-wider flex items-center gap-3 relative overflow-hidden"
              >
                <span className="relative z-10">SHOP NOW</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-5 border-2 border-white font-black uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                VIEW DROP
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-800">
              {[
                { num: '10K+', label: 'YOUNG Gs' },
                { num: '500+', label: 'PIECES' },
                { num: '24/7', label: 'SUPPORT' }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-black text-lime-400">{stat.num}</div>
                  <div className="text-xs text-zinc-500 tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative grid grid-cols-2 gap-4"
          >
            <motion.div 
              className="relative h-[400px] border-4 border-lime-400"
              whileHover={{ scale: 1.05 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1535231540604-72e8fbaf8cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldCUyMGtpZHN8ZW58MXx8fHwxNzYwNTU2NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Collection 1"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute top-4 left-4 bg-black px-3 py-1 border border-lime-400">
                <span className="text-xs font-black tracking-wider text-lime-400">DROP 01</span>
              </div>
            </motion.div>

            <motion.div 
              className="relative h-[400px] border-4 border-white mt-12"
              whileHover={{ scale: 1.05 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1441122207102-38eb0430f7bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwaG9vZGllJTIwc3RyZWV0fGVufDF8fHx8MTc2MDU1NjQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Collection 2"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-4 right-4 bg-black px-3 py-1 border border-white">
                <span className="text-xs font-black tracking-wider">NEW IN</span>
              </div>
            </motion.div>

            {/* Floating Price Tag */}
            <motion.div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-lime-400 text-black px-8 py-4 border-4 border-black"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-xs font-black tracking-widest">FROM</div>
              <div className="text-3xl font-black">£29.99</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Ticker */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-lime-400 text-black py-3 border-t-4 border-black overflow-hidden"
        animate={{ x: ['-100%', '0%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div className="flex gap-12 whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-sm font-black tracking-widest uppercase">
              LIMITED DROP • FREE SHIPPING UK • LIMITED DROP • FREE SHIPPING UK
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
