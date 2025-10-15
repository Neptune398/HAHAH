import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play } from 'lucide-react';

export function Lookbook() {
  return (
    <section className="py-24 px-6 bg-zinc-950 relative">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-block px-4 py-2 border-2 border-lime-400">
              <span className="text-xs font-black tracking-widest text-lime-400 uppercase">SS25 LOOKBOOK</span>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              STREET
              <br />
              <span className="text-lime-400" style={{ WebkitTextStroke: '2px currentColor', WebkitTextFillColor: 'transparent' }}>
                CULTURE
              </span>
            </h2>

            <p className="text-xl text-zinc-400 mb-8 uppercase tracking-wide max-w-lg">
              Documented in the ends. Real kids. Real style. No cap.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {[
                'Shot in London, Manchester & Birmingham',
                'Styled by the community',
                'Authentic street moments',
                'Limited pieces featured'
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-lime-400" />
                  <span className="text-zinc-300 uppercase tracking-wide text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-lime-400 text-black font-black uppercase tracking-wider hover:bg-white transition-colors"
              >
                VIEW LOOKBOOK
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zinc-800 font-black uppercase tracking-wider hover:border-lime-400 transition-colors flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                WATCH FILM
              </motion.button>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-[300px] border-2 border-zinc-800 overflow-hidden group">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1535231540604-72e8fbaf8cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldCUyMGtpZHN8ZW58MXx8fHwxNzYwNTU2NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Lookbook 1"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="relative h-[200px] border-2 border-lime-400 overflow-hidden group">
                  <ImageWithFallback
                    src="https://images.unsplash.com/flagged/photo-1555895312-bbc472c964f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc3RyZWV0d2VhciUyMGZhc2hpb258ZW58MXx8fHwxNzYwNTU2MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Lookbook 2"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-12">
                <div className="relative h-[200px] border-2 border-white overflow-hidden group">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGZhc2hpb24lMjBraWRzfGVufDF8fHx8MTc2MDU1NjQ1NXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Lookbook 3"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="relative h-[300px] border-2 border-zinc-800 overflow-hidden group">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1441122207102-38eb0430f7bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwaG9vZGllJTIwc3RyZWV0fGVufDF8fHx8MTc2MDU1NjQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Lookbook 4"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Quote Overlay */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-black border-4 border-lime-400 p-6 max-w-xs"
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <p className="text-sm font-black uppercase tracking-wide mb-2">"For the culture, by the culture"</p>
              <div className="text-xs text-zinc-500 uppercase tracking-widest">— MiniMen Founders</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Email Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-lime-400 text-black p-12 border-4 border-black relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              JOIN THE MOVEMENT
            </h3>
            <p className="mb-6 uppercase tracking-wide">
              Get early access to drops, exclusive content & more. No spam ever.
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="flex-1 px-6 py-4 bg-black text-white border-2 border-black placeholder:text-zinc-500 uppercase tracking-wider font-black text-sm"
              />
              <button className="px-8 py-4 bg-black text-lime-400 font-black uppercase tracking-wider hover:bg-white hover:text-black transition-colors border-2 border-black">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
