import { ShoppingBag, Menu, Search } from 'lucide-react'

export default function Navbar({ onCartClick }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-black/5">
            <Menu className="h-5 w-5 text-gray-700" />
          </button>
          <a href="/" className="text-xl font-bold tracking-tight">
            Threadly
          </a>
        </div>
        <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 w-96">
          <Search className="h-4 w-4 text-gray-500" />
          <input className="bg-transparent outline-none text-sm w-full" placeholder="Search essentials, hoodies, denim..." />
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onCartClick} className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 hover:bg-black/90">
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
          </button>
        </div>
      </div>
    </header>
  )
}
