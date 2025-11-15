import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function ProductsGrid() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/products`)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-14">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-bold tracking-tight">New Arrivals</h2>
        <a href="#" className="text-sm text-gray-600 hover:text-gray-900">View all</a>
      </div>
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="animate-pulse rounded-2xl bg-gray-100 aspect-[4/5]" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  )
}
