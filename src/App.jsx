import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductsGrid from './components/ProductsGrid'
import Footer from './components/Footer'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [seeded, setSeeded] = useState(false)

  // Seed demo products on first load if empty
  useEffect(() => {
    const seed = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/products`)
        const data = await res.json()
        if (!Array.isArray(data) || data.length === 0) {
          await fetch(`${baseUrl}/api/seed`, { method: 'POST' })
        }
        setSeeded(true)
      } catch (e) {
        console.error(e)
        setSeeded(true)
      }
    }
    seed()
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onCartClick={() => setCartOpen(true)} />
      <main>
        <Hero />
        {seeded && <ProductsGrid />}
      </main>
      <Footer />

      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40"
            onClick={() => setCartOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              className="absolute right-0 top-0 bottom-0 w-full sm:w-[420px] bg-white shadow-xl p-6"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Your cart</h3>
                <button onClick={() => setCartOpen(false)} className="text-sm text-gray-500">Close</button>
              </div>
              <div className="mt-6 text-sm text-gray-600">
                Your cart is empty.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
