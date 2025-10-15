import { motion } from 'motion/react';
import { Shirt, Watch, ShoppingBag, Footprints, Sun, Zap } from 'lucide-react';

const categories = [
  {
    icon: Shirt,
    name: 'T-Shirts & Tops',
    count: '150+ Items',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: ShoppingBag,
    name: 'Hoodies & Jackets',
    count: '80+ Items',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Footprints,
    name: 'Pants & Shorts',
    count: '120+ Items',
    gradient: 'from-pink-500 to-red-500'
  },
  {
    icon: Watch,
    name: 'Accessories',
    count: '200+ Items',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Sun,
    name: 'Summer Collection',
    count: '90+ Items',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: Zap,
    name: 'Limited Edition',
    count: '50+ Items',
    gradient: 'from-indigo-500 to-purple-500'
  }
];

export function Categories() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full"
          >
            <span className="text-purple-300">Shop by Category</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Explore Collections
            </span>
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 text-center overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="mb-2">{category.name}</h3>
                  <p className="text-white/40">{category.count}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
