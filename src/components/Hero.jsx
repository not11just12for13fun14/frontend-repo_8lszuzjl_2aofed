import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.12),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl font-black tracking-tight"
            >
              Elevate your everyday style
            </motion.h1>
            <motion.p
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="mt-4 text-lg text-gray-600"
            >
              Modern essentials crafted for comfort. Built to mix, match and move with you.
            </motion.p>
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="mt-8 flex gap-3"
            >
              <a href="#products" className="inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-3 hover:bg-black/90">
                Shop New Arrivals
              </a>
              <a href="#categories" className="inline-flex items-center justify-center rounded-full border border-black/10 px-5 py-3 hover:bg-black/5">
                Explore Categories
              </a>
            </motion.div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5"
            >
              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop"
                alt="Model wearing essential clothing"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
