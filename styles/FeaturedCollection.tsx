import { motion } from 'motion/react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    id: 1,
    name: 'Urban Hoodie',
    price: '$49.99',
    image: 'https://images.unsplash.com/flagged/photo-1555895312-bbc472c964f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc3RyZWV0d2VhciUyMGZhc2hpb258ZW58MXx8fHwxNzYwNTU2MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    tag: 'Bestseller',
    tagColor: 'from-yellow-500 to-orange-500'
  },
  {
    id: 2,
    name: 'Classic Denim',
    price: '$39.99',
    image: 'https://images.unsplash.com/photo-1740493430383-a0bfff9550a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGZhc2hpb24lMjBzdHVkaW98ZW58MXx8fHwxNzYwNTU2MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    tag: 'New',
    tagColor: 'from-blue-500 to-purple-500'
  },
  {
    id: 3,
    name: 'Sport Collection',
    price: '$59.99',
    image: 'https://images.unsplash.com/photo-1760328249115-b66560f89840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3lzJTIwY2xvdGhpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzYwNTU2MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5.0,
    tag: 'Premium',
    tagColor: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    name: 'Casual Comfort',
    price: '$44.99',
    image: 'https://images.unsplash.com/photo-1759313560190-d160c3567170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY2FzdWFsJTIwd2VhcnxlbnwxfHx8fDE3NjA1NTYzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    tag: 'Sale',
    tagColor: 'from-red-500 to-pink-500'
  }
];

export function FeaturedCollection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full"
          >
            <span className="text-blue-300">Featured Collection</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Trending Styles
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Discover our most loved pieces, handpicked for your little fashionista
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                {/* Tag */}
                <div className={`absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r ${product.tagColor} rounded-full text-sm`}>
                  {product.tag}
                </div>

                {/* Wishlist */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-4 right-4 z-20 p-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="w-5 h-5" />
                </motion.button>

                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  {/* Quick Add */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <button className="w-full py-3 bg-white text-black rounded-full flex items-center justify-center gap-2 backdrop-blur-xl">
                      <ShoppingCart className="w-5 h-5" />
                      Quick Add
                    </button>
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-white/20'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-white/60">({product.rating})</span>
                  </div>
                  <h3 className="text-xl mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <span className="text-white/40 line-through">$69.99</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl shadow-purple-500/30"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
