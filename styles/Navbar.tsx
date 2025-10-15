import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800"
    >
      <div className="max-w-[1600px] mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-lime-400 blur-xl opacity-50" />
              <div className="relative w-12 h-12 bg-lime-400 flex items-center justify-center">
                <span className="font-black text-black text-xl tracking-tighter">MM</span>
              </div>
            </div>
            <div>
              <div className="text-2xl tracking-tighter font-black uppercase">MiniMen</div>
              <div className="text-[10px] tracking-widest text-zinc-500 uppercase">Est. 2025</div>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {['DROPS', 'ARCHIVE', 'LOOKBOOK', 'INFO'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="px-6 py-2 text-sm tracking-wider font-black hover:bg-lime-400 hover:text-black transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-lime-400 text-black flex items-center justify-center text-xs font-black">
                  {cartCount}
                </span>
              )}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-zinc-800 bg-black"
          >
            <div className="px-6 py-6 space-y-1">
              {['DROPS', 'ARCHIVE', 'LOOKBOOK', 'INFO'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="block px-4 py-3 text-sm tracking-wider font-black hover:bg-lime-400 hover:text-black transition-all"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
