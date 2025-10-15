import { motion } from 'motion/react';
import { Clock, Flame } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const drops = [
  {
    id: 1,
    name: 'URBAN ESSENTIALS',
    price: '£45',
    image: 'https://images.unsplash.com/flagged/photo-1555895312-bbc472c964f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc3RyZWV0d2VhciUyMGZhc2hpb258ZW58MXx8fHwxNzYwNTU2MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: '23 LEFT',
    tag: 'HOT'
  },
  {
    id: 2,
    name: 'CLASSIC HOODIE',
    price: '£55',
    image: 'https://images.unsplash.com/photo-1441122207102-38eb0430f7bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwaG9vZGllJTIwc3RyZWV0fGVufDF8fHx8MTc2MDU1NjQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    stock: '12 LEFT',
    tag: 'SELLING FAST'
  },
  {
    id: 3,
    name: 'CARGO JOGGERS',
    price: '£40',
    image: 'https://images.unsplash.com/photo-1760328249115-b66560f89840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3lzJTIwY2xvdGhpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzYwNTU2MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: '45 LEFT',
    tag: 'NEW'
  },
  {
    id: 4,
    name: 'OVERSIZED TEE',
    price: '£30',
    image: 'https://images.unsplash.com/photo-1759313560190-d160c3567170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY2FzdWFsJTIwd2VhcnxlbnwxfHx8fDE3NjA1NTYzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: '67 LEFT',
    tag: 'TRENDING'
  }
];

export function DropsSection() {
  return (
    <section className="py-24 px-6 relative bg-zinc-950">
      {/* Section Header */}
      <div className="max-w-[1600px] mx-auto mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b-2 border-zinc-800 pb-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-2"
            >
              <Flame className="w-6 h-6 text-lime-400" />
              <span className="text-xs tracking-widest text-zinc-500 font-black uppercase">This Week</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-7xl font-black uppercase tracking-tighter"
            >
              LATEST <span className="text-lime-400">DROPS</span>
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
            className="px-6 py-3 border-2 border-zinc-800 font-black uppercase text-sm tracking-wider hover:border-lime-400 hover:text-lime-400 transition-all"
          >
            VIEW ALL DROPS →
          </motion.button>
        </div>
      </div>

      {/* Drops Grid */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {drops.map((drop, index) => (
          <motion.div
            key={drop.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className="relative bg-zinc-900 border-2 border-zinc-800 overflow-hidden">
              {/* Tag */}
              <div className="absolute top-4 left-4 z-20 bg-lime-400 text-black px-3 py-1 border-2 border-black">
                <span className="text-xs font-black tracking-wider">{drop.tag}</span>
              </div>

              {/* Stock Counter */}
              <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur-sm px-3 py-1 border border-zinc-700 flex items-center gap-2">
                <Clock className="w-3 h-3 text-lime-400" />
                <span className="text-xs font-black tracking-wider text-lime-400">{drop.stock}</span>
              </div>

              {/* Image */}
              <div className="relative h-[450px] overflow-hidden">
                <ImageWithFallback
                  src={drop.image}
                  alt={drop.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                {/* Quick Add Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <button className="w-full py-4 bg-lime-400 text-black font-black uppercase tracking-wider border-2 border-black hover:bg-white transition-colors">
                    ADD TO CART
                  </button>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="p-6 bg-black border-t-2 border-zinc-800">
                <h3 className="text-lg font-black uppercase tracking-tight mb-2">{drop.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-lime-400">{drop.price}</span>
                  <span className="text-xs text-zinc-500 line-through">£69.99</span>
                </div>
              </div>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-2 border-lime-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Bottom Alert Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[1600px] mx-auto mt-12 bg-zinc-900 border-2 border-lime-400 p-6 flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-lime-400 animate-pulse" />
          <span className="font-black uppercase tracking-wider">Next Drop in 3 Days • Limited Quantities</span>
        </div>
        <button className="px-6 py-2 bg-lime-400 text-black font-black uppercase text-sm hover:bg-white transition-colors">
          NOTIFY ME
        </button>
      </motion.div>
    </section>
  );
}
