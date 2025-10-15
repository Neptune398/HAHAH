import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-black border-t-4 border-lime-400">
      <div className="max-w-[1600px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-lime-400 flex items-center justify-center">
                <span className="font-black text-black text-xl tracking-tighter">MM</span>
              </div>
              <div>
                <div className="text-xl font-black uppercase tracking-tighter">MiniMen</div>
                <div className="text-[10px] tracking-widest text-zinc-500 uppercase">Est. 2025</div>
              </div>
            </div>
            <p className="text-zinc-500 uppercase text-xs tracking-wide mb-6">
              Premium streetwear for the next generation. Made in the UK.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Youtube, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 hover:border-lime-400 hover:text-lime-400 flex items-center justify-center transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-4 text-lime-400">SHOP</h3>
            <ul className="space-y-2">
              {['New Drops', 'Archive', 'Lookbook', 'Sale'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-zinc-500 hover:text-white uppercase tracking-wide transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-4 text-lime-400">SUPPORT</h3>
            <ul className="space-y-2">
              {['Contact', 'Shipping', 'Returns', 'Size Guide'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-zinc-500 hover:text-white uppercase tracking-wide transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-4 text-lime-400">INFO</h3>
            <ul className="space-y-2">
              {['About', 'Stockists', 'Careers', 'Press'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-zinc-500 hover:text-white uppercase tracking-wide transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs uppercase tracking-widest">
            © 2025 MiniMen. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-zinc-600 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

        {/* Bottom Ticker */}
        <div className="mt-8 border-2 border-zinc-900 p-3 overflow-hidden">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[...Array(20)].map((_, i) => (
              <span key={i} className="text-xs font-black tracking-widest text-zinc-800 uppercase">
                AUTHENTIC • UK MADE • LIMITED STOCK
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
