import { motion } from 'framer-motion'

export default function ProductCard({ product }) {
  return (
    <motion.a
      href={`/product/${product.id || product._id}`}
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group block rounded-2xl overflow-hidden bg-white ring-1 ring-black/5 hover:shadow-xl"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image || 'https://images.unsplash.com/photo-1520975922215-c994c6a8dffd?q=80&w=1200&auto=format&fit=crop'}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">{product.title}</h3>
          <p className="font-semibold">${product.price.toFixed(2)}</p>
        </div>
        {product.description && (
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">{product.description}</p>
        )}
      </div>
    </motion.a>
  )
}
